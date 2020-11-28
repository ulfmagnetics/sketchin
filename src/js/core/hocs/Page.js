import { compose } from 'ramda';
import { withAuthenticator } from '@aws-amplify/ui-react'

import withCognitoProvider from './withCognitoProvider';

const Page = compose(
  withAuthenticator,
  // TODO: add other page-level HOCs here...
);

export default Page;
