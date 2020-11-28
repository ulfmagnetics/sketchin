import React from 'react';

const withCognitoProvider = Component => props => {
  const cognitoProvider = null;
  return <Components {...props} cognitoProvider={cognitoProvider} />;
};

export default withCognitoProvider;