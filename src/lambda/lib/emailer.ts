// import SES from 'aws-sdk/clients/ses';
const SES = require('aws-sdk/clients/ses');
const ses = new SES();

/**
 * Email function
 * @param  {any} event
 * @param  {AWSLambda.Callback} callback
 */
export const emailer = async function(event: any, callback: AWSLambda.Callback) {
  //
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
    sendEmail(body, function(err, data) {
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
//
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
