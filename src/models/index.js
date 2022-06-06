// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InfoPages, Products, Sample } = initSchema(schema);

export {
  InfoPages,
  Products,
  Sample
};