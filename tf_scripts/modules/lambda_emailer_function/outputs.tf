


output "lambda_function_name" {
  description = "Name given to lambda function; required by api-gateway integrations"
  value       = aws_lambda_function.sendmail.function_name
}

output "lambda_function_invoke_arn" {
  description = "Invocation ARN of lambda function created herein; required by api-gateway integrations"
  value       = aws_lambda_function.sendmail.invoke_arn
}
