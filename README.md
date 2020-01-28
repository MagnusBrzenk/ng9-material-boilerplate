# Ng9Boilerplate

## Todo

- Github pages deployment
- webpack bundle analyzer
- Contact form with:
  - Captcha required
  - Terraform script to provision
    - Rate-limited aws api
    - lambda-SES emailer
      - Captcha verification
- Amplify-CDN deployment
  - Dev/prod branch
  - Basic CI/CD
- ngrx
  - Side effects
  - local storage
- Dark/light theming
- PWA
  - Cached API (works offline)
  - Push notifications
- Angular animations

## Issues

- Lambda Emailer is not working from browser because of CORS failure. When truying to post, browser first tries to invoke OPTIONS method. There is a mock response set up to return 200 status with headers permitting CORS. However, the mock response errors due to "Execution failed due to configuration error: statusCode should be an integer which defined in request template". I've checked and double checked that I have '200' without quotes in my terraform scripts, so I'm totally stumped as to why it fails. I've even tried deleting/creating the options response in the aws console, bit it still gives me the same error. I'll have to submit an issue to terraform later.
