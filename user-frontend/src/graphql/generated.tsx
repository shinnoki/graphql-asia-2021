import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "post" */
  delete_post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "post" */
  delete_post_by_pk?: Maybe<Post>;
  /** insert data into the table: "post" */
  insert_post?: Maybe<Post_Mutation_Response>;
  /** insert a single row into the table: "post" */
  insert_post_one?: Maybe<Post>;
  /** update data of the table: "post" */
  update_post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "post" */
  update_post_by_pk?: Maybe<Post>;
};

/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: Maybe<Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: Maybe<Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _inc?: Maybe<Post_Inc_Input>;
  _set?: Maybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _inc?: Maybe<Post_Inc_Input>;
  _set?: Maybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "post" */
export type Post = {
  __typename?: "post";
  body: Scalars["String"];
  id: Scalars["Int"];
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: "post_aggregate";
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: "post_aggregate_fields";
  avg?: Maybe<Post_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
  stddev?: Maybe<Post_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Sum_Fields>;
  var_pop?: Maybe<Post_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Var_Samp_Fields>;
  variance?: Maybe<Post_Variance_Fields>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "post" */
export type Post_Aggregate_Order_By = {
  avg?: Maybe<Post_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Max_Order_By>;
  min?: Maybe<Post_Min_Order_By>;
  stddev?: Maybe<Post_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Sum_Order_By>;
  var_pop?: Maybe<Post_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Var_Samp_Order_By>;
  variance?: Maybe<Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  on_conflict?: Maybe<Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Avg_Fields = {
  __typename?: "post_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "post" */
export type Post_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Bool_Exp>>>;
  _not?: Maybe<Post_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Bool_Exp>>>;
  body?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post" */
export enum Post_Constraint {
  /** unique or primary key constraint */
  PostPkey = "post_pkey",
}

/** input type for incrementing integer column in table "post" */
export type Post_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "post" */
export type Post_Insert_Input = {
  body?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: "post_max_fields";
  body?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  body?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: "post_min_fields";
  body?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  body?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "post" */
export type Post_Mutation_Response = {
  __typename?: "post_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  on_conflict?: Maybe<Post_On_Conflict>;
};

/** on conflict condition type for table "post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns: Array<Post_Update_Column>;
  where?: Maybe<Post_Bool_Exp>;
};

/** ordering options when selecting data from "post" */
export type Post_Order_By = {
  body?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "post" */
export type Post_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "post" */
export type Post_Set_Input = {
  body?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Post_Stddev_Fields = {
  __typename?: "post_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "post" */
export type Post_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Stddev_Pop_Fields = {
  __typename?: "post_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "post" */
export type Post_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Stddev_Samp_Fields = {
  __typename?: "post_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "post" */
export type Post_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Sum_Fields = {
  __typename?: "post_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "post" */
export type Post_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "post" */
export enum Post_Update_Column {
  /** column name */
  Body = "body",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "user_id",
}

/** aggregate var_pop on columns */
export type Post_Var_Pop_Fields = {
  __typename?: "post_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "post" */
export type Post_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Var_Samp_Fields = {
  __typename?: "post_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "post" */
export type Post_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Variance_Fields = {
  __typename?: "post_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "post" */
export type Post_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
};

/** query root */
export type Query_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** query root */
export type Query_RootPost_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** query root */
export type Query_RootPost_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
};

/** subscription root */
export type Subscription_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPost_By_PkArgs = {
  id: Scalars["Int"];
};

export type CreatePostMutationVariables = Exact<{
  body: Scalars["String"];
}>;

export type CreatePostMutation = { __typename?: "mutation_root" } & {
  insert_post_one?: Maybe<{ __typename?: "post" } & Pick<Post, "id" | "body">>;
};

export type DeletePostMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeletePostMutation = { __typename?: "mutation_root" } & {
  delete_post_by_pk?: Maybe<{ __typename?: "post" } & Pick<Post, "id">>;
};

export type UpdatePostMutationVariables = Exact<{
  id: Scalars["Int"];
  body: Scalars["String"];
}>;

export type UpdatePostMutation = { __typename?: "mutation_root" } & {
  update_post_by_pk?: Maybe<
    { __typename?: "post" } & Pick<Post, "id" | "body">
  >;
};

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = { __typename?: "query_root" } & {
  posts: Array<{ __typename?: "post" } & Pick<Post, "id" | "body">>;
};

export const CreatePostDocument: DocumentNode<
  CreatePostMutation,
  CreatePostMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreatePost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "body" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_post_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "body" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "body" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const DeletePostDocument: DocumentNode<
  DeletePostMutation,
  DeletePostMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeletePost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delete_post_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const UpdatePostDocument: DocumentNode<
  UpdatePostMutation,
  UpdatePostMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdatePost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "body" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_post_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "body" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "body" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const PostsDocument: DocumentNode<PostsQuery, PostsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Posts" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "posts" },
            name: { kind: "Name", value: "post" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
