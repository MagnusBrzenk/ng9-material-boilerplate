

variable "prefix" {
  description = "Prefix for all variables"
  default     = "ng9-"
}

variable "role_name" {
  description = "Name for the Lambda role."
  default     = "lambda-role"

}

variable "function_name" {
  description = "Name for the Lambda function."
  default     = "lambda-sendmail"
}

variable "billing_tag" {
  description = "Name for a tag to keep track of resource for billing."
  default     = "lambda-biller"
}

variable "api_gateway_name" {
  description = "Name for your Lambda API gateway."
  default     = "lambda-api-gateway"
}

variable "api_gateway_description" {
  description = "Description of your Lambda API gateway."
  default     = "API gateway for las"
}



# Declare env variables loaded from terraform.tfvars
variable "STATIC_SENDER_EMAIL" {
  # Imported from .env
}
variable "STATIC_RECEIVER_EMAIL" {
  # Imported from .env
}
