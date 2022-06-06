import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type InfoPagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SampleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class InfoPages {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly page?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<InfoPages, InfoPagesMetaData>);
  static copyOf(source: InfoPages, mutator: (draft: MutableModel<InfoPages, InfoPagesMetaData>) => MutableModel<InfoPages, InfoPagesMetaData> | void): InfoPages;
}

export declare class Products {
  readonly id: string;
  readonly title?: string | null;
  readonly price?: string | null;
  readonly image?: string | null;
  readonly tags?: string | null;
  readonly availability?: string | null;
  readonly category?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}

export declare class Sample {
  readonly id: string;
  readonly First?: string | null;
  readonly Second?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Sample, SampleMetaData>);
  static copyOf(source: Sample, mutator: (draft: MutableModel<Sample, SampleMetaData>) => MutableModel<Sample, SampleMetaData> | void): Sample;
}