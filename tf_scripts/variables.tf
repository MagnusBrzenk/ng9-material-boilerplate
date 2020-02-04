

# All variables set in .env with TF_VAR_ prefix

variable "PREFIX" {
  description = "Prefix to be applied to all variables supplied by .env file"
}

variable "DEV_BUCKET_NAME" {
  description = "Name of dev bucket (sans prefix)"
}

variable "PROD_BUCKET_NAME" {
  description = "Name of prod bucket (sans prefix)"
}

variable "STATIC_RECEIVER_EMAIL" {
  description = "Email account to receive emails; to be provisioned as .env var in lambda function; supplied by .env file"
}

variable "STATIC_SENDER_EMAIL" {
  description = "Email account 'from' which emails are sent; to be provisioned as .env var in lambda function; supplied by .env file"
}

