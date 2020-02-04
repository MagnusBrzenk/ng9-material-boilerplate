// import SES from 'aws-sdk/clients/ses';
const SES = require('aws-sdk/clients/ses');
const ses = new SES();

/**
 * Email function
 */
export const emailer = async (event: any, callback: AWSLambda.Callback) => {
  //
  // Define params
  const body = JSON.parse(event.body);
  const response = {
    isBase64Encoded: false,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    statusCode: 200,
    body: '{"result": "Success."}'
  };
  //
  // Call ses-email api
  return new Promise((resolve, reject) => {
    sendEmail(body, (err, data) => {
      if (!!err) {
        callback(err, { ...response, statusCode: 500, body: '{"result": "Server Error."}' });
        reject();
      }
      callback(null, response);
      resolve();
    });
  });
};
//
function sendEmail(
  data: {
    name: string;
    email: string;
    message: string;
  },
  done: (err, data) => void
) {
  const params = {
    Destination: {
      // Note: see here to send to non-verified addresses
      // https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html
      ToAddresses: [process.env.STATIC_RECEIVER_EMAIL]
    },
    Source: process.env.STATIC_SENDER_EMAIL,
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `
          ==========================================
            Dynamic Sender Name: ${data.name}
            Dynamic Sender email: ${data.email}
            Message Submitted: ${new Date().toISOString()}
          ------------------------------------------
            ${data.message}
          ==========================================
          `
        }
      },
      Subject: {
        Data: 'AutoEmail From ' + data.name,
        Charset: 'UTF-8'
      }
    }
  };
  ses.sendEmail(params, done);
}
