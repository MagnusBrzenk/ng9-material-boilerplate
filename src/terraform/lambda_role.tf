
# Start with role with basic policy
resource "aws_iam_role" "iam_for_lambda" {
  name = "${var.prefix}${var.role_name}"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": [ "lambda.amazonaws.com" ]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}


# Define list of policy arn's given in the AWS console
variable "iam_policy_arn_list" {
  type        = list(string)
  description = "IAM Policies to be attached to role"
  default     = ["arn:aws:iam::aws:policy/CloudWatchFullAccess", "arn:aws:iam::aws:policy/AmazonSESFullAccess"]
}

# Create attachment of the policies for the above arn's to our named role
resource "aws_iam_role_policy_attachment" "role-policy-attachment" {
  role       = "${var.prefix}${var.role_name}"
  count      = length(var.iam_policy_arn_list)
  policy_arn = var.iam_policy_arn_list[count.index]
  depends_on = [aws_iam_role.iam_for_lambda]
}

