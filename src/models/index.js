// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Checkout, Banner, Sale, Reviews, InfoPages, Products } = initSchema(schema);

export {
  Checkout,
  Banner,
  Sale,
  Reviews,
  InfoPages,
  Products
};