



# Create Cloudfront distribution
resource "aws_cloudfront_distribution" "cloudfront_resource" {
  origin {
    # domain_name = "${aws_s3_bucket.prod_bucket.website_endpoint}"
    # origin_id   = "S3-${aws_s3_bucket.prod_bucket.bucket}"

    domain_name = "${var.domain_name}"
    origin_id   = "S3-${var.bucket_name}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }
  # By default, show index.html file
  default_root_object = "index.html"
  enabled             = true

  # If there is a 404, return index.html with a HTTP 200 Response
  custom_error_response {
    error_caching_min_ttl = 3000
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  default_cache_behavior {
    allowed_methods = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods  = ["GET", "HEAD"]
    # target_origin_id = "S3-${aws_s3_bucket.prod_bucket.bucket}"
    target_origin_id = "S3-${var.bucket_name}"

    # Forward all query strings, cookies and headers
    forwarded_values {
      query_string = true
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # Distributes content to US and Europe
  price_class = "PriceClass_100"

  # Restricts who is able to access this content
  restrictions {
    geo_restriction {
      # type of restriction, blacklist, whitelist or none
      restriction_type = "none"
    }
  }

  # SSL certificate for the service.
  viewer_certificate {
    cloudfront_default_certificate = true
  }

  # !Removing this because I *think* you can indicate dependencies to tf
  # !by using variables as input to this module
  # !that are outputs from the S3 bucket that had been referenced here
  # depends_on = [aws_s3_bucket.prod_bucket]
}
