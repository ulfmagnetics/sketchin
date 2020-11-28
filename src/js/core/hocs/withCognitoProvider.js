import React from 'react';

const withCognitoProvider = Component => props => {
  // Initialize the Amazon Cognito credentials provider
  // AWS.config.region = 'us-east-1'; // Region
  // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  //     IdentityPoolId: 'us-east-1:0f25a34a-2823-4ae8-b31f-6ebb42efea71',
  // });

  const cognitoProvider = 'TODO';
  return <Component {...props} cognitoProvider={cognitoProvider} />;
};

export default withCognitoProvider;
