# Specify region
provider "aws" {
  region = "us-east-1"
}


# Create sendmail lambda function resource
resource "aws_lambda_function" "sendmail" {
  filename      = "dist-lambda/exports.js.zip"
  function_name = "${var.prefix}${var.function_name}"
  role          = "${aws_iam_role.iam_for_lambda.arn}"
  handler       = "exports.handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = "${filebase64sha256("dist-lambda/exports.js.zip")}"

  runtime = "nodejs10.x"

  environment {
    variables = {
      billing               = "${var.prefix}${var.billing_tag}"
      STATIC_SENDER_EMAIL   = "${var.STATIC_SENDER_EMAIL}"
      STATIC_RECEIVER_EMAIL = "${var.STATIC_RECEIVER_EMAIL}"
    }
  }
}
