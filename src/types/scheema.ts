export interface IGraphQlTypeDescription {
  kind: string;
  name: string;
  ofType?: IGraphQlTypeDescription;
}

export interface IGraphQlArg {
  name: string;
  description?: string;
  defaultValue?: string;
  type?: IGraphQlTypeDescription;
}

export interface IGraphQlField {
  name: string;
  description?: string;
  args?: IGraphQlArg[];
  type?: IGraphQlTypeDescription;
}

export interface IGraphQlEnumValue {
  name: string;
  description?: string;
}

export interface IGraphQlType {
  kind: string;
  name: string;
  description?: string;
  fields: IGraphQlField[];
  enumValues?: IGraphQlEnumValue[];
  inputFields?: IGraphQlField[];
}

export interface IGraphQlSchema {
  data: {
    data: {
      __schema: {
        queryType?: {
          name: string;
        };
        types: IGraphQlType[];
      };
    };
  };
}
