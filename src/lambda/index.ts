import { emailer } from './lib/emailer';

console.log('Hello from the outside');

/**
 *
 *
 * Lambda Entry Point
 *
 * @param  {any} event:
 * Payload object
 *
 * @param  {AWSLambda.Context} context:
 * AWS Object with params and methods;
 * Use `context.done()` to immediately stop lambda process
 *
 * @param  {AWSLambda.Callback} callback
 * Function to call to return response to user
 *
 */
// const handler = async function(
exports.handler = async function(
  event: any,
  context: AWSLambda.Context,
  callback: AWSLambda.Callback
) {
  // If you want to return a response to user but continue lambda process, then uncomment this:
  // context.callbackWaitsForEmptyEventLoop = false;

  console.log('Starting Email Process');

  await emailer(event, callback);

  console.log('Finishing Email Process');

  context.done();
};

// export { handler };
