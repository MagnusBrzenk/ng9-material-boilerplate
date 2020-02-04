# ng9-boilerplate terraform modules

This dir contains terraform scripts for provisioning AWS resources. We use terraform modules.

To provision AWS resources using terraform, you need to:

1. Install terraform
2. Install AWS-CLI and run `aws config` to set your user and keys. (If you prefer to set AWS params directly in the terraform scripts then you'll need to modify them.
3. Adjust terraform variables in `.env` file and be sure to export them (`source .env`)
4. Run `_run_terraform`
5. Having provisioned your resources, you can find the URLs created for your static-site deployments using `./_show_website_endpoints`
6. To update your angular codebase so that it pings the provisioned lambda-emailer service, run `_inject_build_time_vars`. (This function wraps around `_invoke_url_export` which exports as a env variable the URI to invoke the lambda function.)
7. Run `_deploy_aws` to upload your present angular app to dev or prod bucket
