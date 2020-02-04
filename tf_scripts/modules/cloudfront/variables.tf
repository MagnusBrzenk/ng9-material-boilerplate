

#######################################
# Variables supplied by module caller #
#######################################

variable "domain_name" {
  description = "URI supplied by module caller; typically will be output 'website_endpoint' of S3 bucket instance that this cloud front instance is distributing"
}

variable "bucket_name" {
  description = "Bucket name; typically will be output 'bucket' of S3 bucket instance that this cloud front instance is distributing"
}


