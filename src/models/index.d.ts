import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SampleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Sample {
  readonly id: string;
  readonly First?: string;
  readonly Second?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sample, SampleMetaData>);
  static copyOf(source: Sample, mutator: (draft: MutableModel<Sample, SampleMetaData>) => MutableModel<Sample, SampleMetaData> | void): Sample;
}