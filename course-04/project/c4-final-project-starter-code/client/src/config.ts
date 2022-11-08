// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '3q7ne7i607'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-0a81p3w2rl240x5z.us.auth0.com',            // Auth0 domain
  clientId: 'tM2XBURSYEKrSR0xoS8By0Y8VBrN1506',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
