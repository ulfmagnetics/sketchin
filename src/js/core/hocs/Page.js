import { compose } from 'ramda';

import withCognitoProvider from './withCognitoProvider';

const Page = compose(
  withCognitoProvider,
  // TODO: add other page-level HOCs here...
);

export default Page;
