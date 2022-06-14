import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BannerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SaleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InfoPagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Banner {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Banner, BannerMetaData>);
  static copyOf(source: Banner, mutator: (draft: MutableModel<Banner, BannerMetaData>) => MutableModel<Banner, BannerMetaData> | void): Banner;
}

export declare class Sale {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly buttonText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Sale, SaleMetaData>);
  static copyOf(source: Sale, mutator: (draft: MutableModel<Sale, SaleMetaData>) => MutableModel<Sale, SaleMetaData> | void): Sale;
}

export declare class Reviews {
  readonly id: string;
  readonly name?: string | null;
  readonly review?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Reviews, ReviewsMetaData>);
  static copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

export declare class InfoPages {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly page?: string | null;
  readonly header?: string | null;
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
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}