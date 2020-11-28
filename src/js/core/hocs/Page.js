import { compose } from 'ramda';
import { withAuthenticator } from '@aws-amplify/ui-react'

const Page = compose(
  withAuthenticator,
  // TODO: add other page-level HOCs here...
);

export default Page;
