

# Specify region

provider "aws" {
  region = "us-east-1"
}



# Dev-site bucket module
module "dev_s3_bucket_module" {
  source      = "./modules/s3_bucket"
  bucket_name = "${var.PREFIX}${var.DEV_BUCKET_NAME}"
}

# Prod-site bucket with cloudfront modules
module "prod_s3_bucket_module" {
  source      = "./modules/s3_bucket"
  bucket_name = "${var.PREFIX}${var.PROD_BUCKET_NAME}"
}

module "prod_cloudfront_module" {
  source      = "./modules/cloudfront"
  domain_name = module.prod_s3_bucket_module.bucket_website_endpoint
  bucket_name = module.prod_s3_bucket_module.bucket_name
}

# Lambda-emailer-function module with api-gateway-integration module
module "lambda_emailer_function_module" {
  source                    = "./modules/lambda_emailer_function"
  prefix                    = var.PREFIX
  zipped_file_and_path_name = abspath("./dist-lambda/exports.js.zip")
  STATIC_SENDER_EMAIL       = var.STATIC_SENDER_EMAIL
  STATIC_RECEIVER_EMAIL     = var.STATIC_RECEIVER_EMAIL
}

module "lambda_api_gateway_module" {
  source                     = "./modules/lambda_api_gateway"
  prefix                     = var.PREFIX
  lambda_function_name       = module.lambda_emailer_function_module.lambda_function_name
  lambda_function_invoke_arn = module.lambda_emailer_function_module.lambda_function_invoke_arn
}
