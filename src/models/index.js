// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Banner, Sale, Reviews, InfoPages, Products } = initSchema(schema);

export {
  Banner,
  Sale,
  Reviews,
  InfoPages,
  Products
};