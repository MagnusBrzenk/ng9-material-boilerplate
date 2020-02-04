
#######################################
# Variables supplied by module caller #
#######################################

variable "prefix" {
  description = "Prefix for all variables supplied from calling module"
}

variable "zipped_file_and_path_name" {
  description = "Path and name of zipped file containing the lambda function; supplied by module caller"
}

variable "STATIC_SENDER_EMAIL" {
  # TO BE DEPLOYED AS ENV VARIABLE #
  description = "Email string supplied from calling module; this is the 'from' email address viewed from the 'receiver' email account; typically originating from .env file"
}

variable "STATIC_RECEIVER_EMAIL" {
  # TO BE DEPLOYED AS ENV VARIABLE #
  description = "Email string supplied from calling module; this is the email account that receives the email; typically originating from .env file"
}





#################################
# Variables with default values #
#################################

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




