

#######################################
# Variables supplied by module caller #
#######################################

variable "prefix" {
  description = "Prefix for all variables provided from module caller"
}

variable "lambda_function_name" {
  description = "Name of lambda function supplied by module caller (and output by separate lambda-function module)"
}

variable "lambda_function_invoke_arn" {
  description = "Invocation ARN of lambda function supplied by module caller (and output by separate lambda-function module)"
}


#################################
# Variables with default values #
#################################

variable "api_gateway_name" {
  description = "Name for your Lambda API gateway."
  default     = "lambda-api-gateway"
}

variable "api_gateway_description" {
  description = "Description of your Lambda API gateway."
  default     = "API gateway for las"
}
