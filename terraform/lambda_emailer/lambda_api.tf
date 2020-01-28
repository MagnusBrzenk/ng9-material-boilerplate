# Create rest api
resource "aws_api_gateway_rest_api" "default" {
  name        = "${var.prefix}${var.api_gateway_name}"
  description = "${var.api_gateway_description}"
}

# Add a main api resource to rest api created above
resource "aws_api_gateway_resource" "main" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  parent_id   = aws_api_gateway_rest_api.default.root_resource_id
  path_part   = "contact"
}

# Add an unrestricted HTTP-POST-request method to api resource created above
resource "aws_api_gateway_method" "sendmail" {
  rest_api_id   = aws_api_gateway_rest_api.default.id
  resource_id   = aws_api_gateway_resource.main.id
  http_method   = "POST"
  authorization = "NONE"
}

# Integrate the POST method created above with the lambda function being created in lambda.tf
resource "aws_api_gateway_integration" "integration" {
  rest_api_id             = aws_api_gateway_rest_api.default.id
  resource_id             = aws_api_gateway_resource.main.id
  http_method             = aws_api_gateway_method.sendmail.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.sendmail.invoke_arn
}

# Create a response for the post method created above
resource "aws_api_gateway_method_response" "response_200" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  resource_id = aws_api_gateway_resource.main.id
  http_method = aws_api_gateway_method.sendmail.http_method
  status_code = tonumber(200)
}

# Create an 'integration response' (presumably the message returned from lambda function?!)
resource "aws_api_gateway_integration_response" "integration_response" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  resource_id = aws_api_gateway_resource.main.id
  http_method = aws_api_gateway_method.sendmail.http_method
  # status_code = aws_api_gateway_method_response.response_200.status_code
  status_code = tonumber(200)
  depends_on  = [aws_api_gateway_integration.integration]
}

# Add an unrestricted HTTP-OPTIONS-request method to api resource created above
resource "aws_api_gateway_method" "options_method" {
  rest_api_id   = aws_api_gateway_rest_api.default.id
  resource_id   = aws_api_gateway_resource.main.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

# Create a response for the options method
resource "aws_api_gateway_method_response" "options_200" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  resource_id = aws_api_gateway_resource.main.id
  http_method = aws_api_gateway_method.options_method.http_method
  status_code = tonumber(200)
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true,
    "method.response.header.Access-Control-Allow-Methods" = true,
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
  depends_on = [aws_api_gateway_method.options_method]
}

# Integrate options with a mock function
resource "aws_api_gateway_integration" "options_integration" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  resource_id = aws_api_gateway_resource.main.id
  http_method = aws_api_gateway_method.options_method.http_method
  type        = "MOCK"
  depends_on  = [aws_api_gateway_method.options_method]
}

# Create response for options integration
resource "aws_api_gateway_integration_response" "options_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.default.id
  resource_id = aws_api_gateway_resource.main.id
  http_method = aws_api_gateway_method.options_method.http_method
  # status_code = aws_api_gateway_method_response.options_200.status_code
  status_code = tonumber(200)
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'GET,OPTIONS,POST,PUT'",
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }
  depends_on = [aws_api_gateway_method_response.options_200]
}


# Create permission for api resource to invoke lambda function at specified route
resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "contact"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.sendmail.function_name
  principal     = "apigateway.amazonaws.com"

  # The /*/POST/contact part allows invocation from the POST stage and contact resource path within API Gateway REST API.
  source_arn = "${aws_api_gateway_rest_api.default.execution_arn}/*/POST/contact"
}

# Deploy the api
resource "aws_api_gateway_deployment" "production" {
  depends_on        = [aws_api_gateway_integration.integration]
  rest_api_id       = aws_api_gateway_rest_api.default.id
  stage_name        = "prod"
  description       = "Deployed at ${timestamp()}"
  stage_description = "Deployed at ${timestamp()}"

  lifecycle {
    create_before_destroy = true
  }
}



resource "aws_api_gateway_usage_plan" "MyUsagePlan" {
  name         = "my-usage-plan"
  description  = "my description"
  product_code = "MYCODE"

  api_stages {
    api_id = "${aws_api_gateway_rest_api.default.id}"
    stage  = "${aws_api_gateway_deployment.production.stage_name}"
  }

  quota_settings {
    limit  = 5
    offset = 2
    period = "WEEK"
  }

  throttle_settings {
    burst_limit = 5
    rate_limit  = 10
  }
}
