import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: string;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type AgendaWeek = Node & {
  readonly __typename?: "AgendaWeek";
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<AgendaWeek>;
  /** List of AgendaWeek versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  readonly items: ReadonlyArray<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly section?: Maybe<Section>;
  /** System stage field */
  readonly stage: Stage;
  readonly title: Scalars["String"];
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type AgendaWeekCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AgendaWeekDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

export type AgendaWeekHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type AgendaWeekPublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AgendaWeekScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AgendaWeekSectionArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AgendaWeekUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AgendaWeekConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: AgendaWeekWhereUniqueInput;
};

/** A connection to a list of items. */
export type AgendaWeekConnection = {
  readonly __typename?: "AgendaWeekConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AgendaWeekEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type AgendaWeekCreateInput = {
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly items?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly section?: InputMaybe<SectionCreateOneInlineInput>;
  readonly title: Scalars["String"];
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AgendaWeekCreateManyInlineInput = {
  /** Connect multiple existing AgendaWeek documents */
  readonly connect?: InputMaybe<ReadonlyArray<AgendaWeekWhereUniqueInput>>;
  /** Create and connect multiple existing AgendaWeek documents */
  readonly create?: InputMaybe<ReadonlyArray<AgendaWeekCreateInput>>;
};

export type AgendaWeekCreateOneInlineInput = {
  /** Connect one existing AgendaWeek document */
  readonly connect?: InputMaybe<AgendaWeekWhereUniqueInput>;
  /** Create and connect one AgendaWeek document */
  readonly create?: InputMaybe<AgendaWeekCreateInput>;
};

/** An edge in a connection. */
export type AgendaWeekEdge = {
  readonly __typename?: "AgendaWeekEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: AgendaWeek;
};

/** Identifies documents */
export type AgendaWeekManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AgendaWeekWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AgendaWeekWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AgendaWeekWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly items?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly items_contains_all?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly items_contains_none?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly items_contains_some?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly items_not?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AgendaWeekOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ItemsAsc = "items_ASC",
  ItemsDesc = "items_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type AgendaWeekUpdateInput = {
  readonly items?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly section?: InputMaybe<SectionUpdateOneInlineInput>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type AgendaWeekUpdateManyInlineInput = {
  /** Connect multiple existing AgendaWeek documents */
  readonly connect?: InputMaybe<ReadonlyArray<AgendaWeekConnectInput>>;
  /** Create and connect multiple AgendaWeek documents */
  readonly create?: InputMaybe<ReadonlyArray<AgendaWeekCreateInput>>;
  /** Delete multiple AgendaWeek documents */
  readonly delete?: InputMaybe<ReadonlyArray<AgendaWeekWhereUniqueInput>>;
  /** Disconnect multiple AgendaWeek documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<AgendaWeekWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AgendaWeek documents */
  readonly set?: InputMaybe<ReadonlyArray<AgendaWeekWhereUniqueInput>>;
  /** Update multiple AgendaWeek documents */
  readonly update?: InputMaybe<
    ReadonlyArray<AgendaWeekUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple AgendaWeek documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<AgendaWeekUpsertWithNestedWhereUniqueInput>
  >;
};

export type AgendaWeekUpdateManyInput = {
  readonly items?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type AgendaWeekUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: AgendaWeekUpdateManyInput;
  /** Document search */
  readonly where: AgendaWeekWhereInput;
};

export type AgendaWeekUpdateOneInlineInput = {
  /** Connect existing AgendaWeek document */
  readonly connect?: InputMaybe<AgendaWeekWhereUniqueInput>;
  /** Create and connect one AgendaWeek document */
  readonly create?: InputMaybe<AgendaWeekCreateInput>;
  /** Delete currently connected AgendaWeek document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected AgendaWeek document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single AgendaWeek document */
  readonly update?: InputMaybe<AgendaWeekUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AgendaWeek document */
  readonly upsert?: InputMaybe<AgendaWeekUpsertWithNestedWhereUniqueInput>;
};

export type AgendaWeekUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: AgendaWeekUpdateInput;
  /** Unique document search */
  readonly where: AgendaWeekWhereUniqueInput;
};

export type AgendaWeekUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AgendaWeekCreateInput;
  /** Update document if it exists */
  readonly update: AgendaWeekUpdateInput;
};

export type AgendaWeekUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: AgendaWeekUpsertInput;
  /** Unique document search */
  readonly where: AgendaWeekWhereUniqueInput;
};

/** Identifies documents */
export type AgendaWeekWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AgendaWeekWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AgendaWeekWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AgendaWeekWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly items?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly items_contains_all?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly items_contains_none?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly items_contains_some?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly items_not?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References AgendaWeek record uniquely */
export type AgendaWeekWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export type Aggregate = {
  readonly __typename?: "Aggregate";
  readonly count: Scalars["Int"];
};

/** Asset system model */
export type Asset = Node & {
  readonly __typename?: "Asset";
  readonly avatarAuthor: ReadonlyArray<Author>;
  readonly companyLogoWebsite: ReadonlyArray<Website>;
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Asset>;
  /** The file name */
  readonly fileName: Scalars["String"];
  /** The file handle */
  readonly handle: Scalars["String"];
  /** The height of the file */
  readonly height?: Maybe<Scalars["Float"]>;
  /** List of Asset versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  readonly imageReason: ReadonlyArray<Reason>;
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Asset>;
  /** The mime type of the file */
  readonly mimeType?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** The file size */
  readonly size?: Maybe<Scalars["Float"]>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  readonly url: Scalars["String"];
  /** The file width */
  readonly width?: Maybe<Scalars["Float"]>;
};

/** Asset system model */
export type AssetAvatarAuthorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthorWhereInput>;
};

/** Asset system model */
export type AssetCompanyLogoWebsiteArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<WebsiteOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WebsiteWhereInput>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetImageReasonArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<ReasonOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReasonWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: ReadonlyArray<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  readonly __typename?: "AssetConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AssetEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type AssetCreateInput = {
  readonly avatarAuthor?: InputMaybe<AuthorCreateManyInlineInput>;
  readonly companyLogoWebsite?: InputMaybe<WebsiteCreateManyInlineInput>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly fileName: Scalars["String"];
  readonly handle: Scalars["String"];
  readonly height?: InputMaybe<Scalars["Float"]>;
  readonly imageReason?: InputMaybe<ReasonCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars["String"]>;
  readonly size?: InputMaybe<Scalars["Float"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  readonly width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationDataInput = {
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly fileName: Scalars["String"];
  readonly handle: Scalars["String"];
  readonly height?: InputMaybe<Scalars["Float"]>;
  readonly mimeType?: InputMaybe<Scalars["String"]>;
  readonly size?: InputMaybe<Scalars["Float"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  readonly width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  readonly data: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  readonly __typename?: "AssetEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly avatarAuthor_every?: InputMaybe<AuthorWhereInput>;
  readonly avatarAuthor_none?: InputMaybe<AuthorWhereInput>;
  readonly avatarAuthor_some?: InputMaybe<AuthorWhereInput>;
  readonly companyLogoWebsite_every?: InputMaybe<WebsiteWhereInput>;
  readonly companyLogoWebsite_none?: InputMaybe<WebsiteWhereInput>;
  readonly companyLogoWebsite_some?: InputMaybe<WebsiteWhereInput>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly imageReason_every?: InputMaybe<ReasonWhereInput>;
  readonly imageReason_none?: InputMaybe<ReasonWhereInput>;
  readonly imageReason_some?: InputMaybe<ReasonWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  readonly document?: InputMaybe<DocumentTransformationInput>;
  readonly image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  readonly avatarAuthor?: InputMaybe<AuthorUpdateManyInlineInput>;
  readonly companyLogoWebsite?: InputMaybe<WebsiteUpdateManyInlineInput>;
  readonly fileName?: InputMaybe<Scalars["String"]>;
  readonly handle?: InputMaybe<Scalars["String"]>;
  readonly height?: InputMaybe<Scalars["Float"]>;
  readonly imageReason?: InputMaybe<ReasonUpdateManyInlineInput>;
  /** Manage document localizations */
  readonly localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars["String"]>;
  readonly size?: InputMaybe<Scalars["Float"]>;
  readonly width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars["String"]>;
  readonly handle?: InputMaybe<Scalars["String"]>;
  readonly height?: InputMaybe<Scalars["Float"]>;
  readonly mimeType?: InputMaybe<Scalars["String"]>;
  readonly size?: InputMaybe<Scalars["Float"]>;
  readonly width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationInput = {
  readonly data: AssetUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: InputMaybe<ReadonlyArray<Locale>>;
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateLocalizationInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  readonly delete?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  readonly set?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  readonly update?: InputMaybe<
    ReadonlyArray<AssetUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple Asset documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<AssetUpsertWithNestedWhereUniqueInput>
  >;
};

export type AssetUpdateManyInput = {
  readonly fileName?: InputMaybe<Scalars["String"]>;
  readonly height?: InputMaybe<Scalars["Float"]>;
  /** Optional updates to localizations */
  readonly localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars["String"]>;
  readonly size?: InputMaybe<Scalars["Float"]>;
  readonly width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars["String"]>;
  readonly height?: InputMaybe<Scalars["Float"]>;
  readonly mimeType?: InputMaybe<Scalars["String"]>;
  readonly size?: InputMaybe<Scalars["Float"]>;
  readonly width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationInput = {
  readonly data: AssetUpdateManyLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: AssetUpdateManyInput;
  /** Document search */
  readonly where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Asset document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Asset document */
  readonly update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  readonly upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: AssetUpdateInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AssetCreateInput;
  /** Update document if it exists */
  readonly update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  readonly create: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
  readonly update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: AssetUpsertInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly avatarAuthor_every?: InputMaybe<AuthorWhereInput>;
  readonly avatarAuthor_none?: InputMaybe<AuthorWhereInput>;
  readonly avatarAuthor_some?: InputMaybe<AuthorWhereInput>;
  readonly companyLogoWebsite_every?: InputMaybe<WebsiteWhereInput>;
  readonly companyLogoWebsite_none?: InputMaybe<WebsiteWhereInput>;
  readonly companyLogoWebsite_some?: InputMaybe<WebsiteWhereInput>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly fileName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly fileName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly fileName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly fileName_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly fileName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly fileName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly fileName_starts_with?: InputMaybe<Scalars["String"]>;
  readonly handle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly handle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly handle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly handle_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly handle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly handle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly handle_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly handle_starts_with?: InputMaybe<Scalars["String"]>;
  readonly height?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  readonly height_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  readonly height_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  readonly height_in?: InputMaybe<ReadonlyArray<Scalars["Float"]>>;
  /** All values less than the given value. */
  readonly height_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  readonly height_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  readonly height_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  readonly height_not_in?: InputMaybe<ReadonlyArray<Scalars["Float"]>>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly imageReason_every?: InputMaybe<ReasonWhereInput>;
  readonly imageReason_none?: InputMaybe<ReasonWhereInput>;
  readonly imageReason_some?: InputMaybe<ReasonWhereInput>;
  readonly mimeType?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly mimeType_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly mimeType_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly mimeType_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with?: InputMaybe<Scalars["String"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly size?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  readonly size_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  readonly size_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  readonly size_in?: InputMaybe<ReadonlyArray<Scalars["Float"]>>;
  /** All values less than the given value. */
  readonly size_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  readonly size_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  readonly size_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  readonly size_not_in?: InputMaybe<ReadonlyArray<Scalars["Float"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
  readonly width?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  readonly width_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  readonly width_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  readonly width_in?: InputMaybe<ReadonlyArray<Scalars["Float"]>>;
  /** All values less than the given value. */
  readonly width_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  readonly width_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  readonly width_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  readonly width_not_in?: InputMaybe<ReadonlyArray<Scalars["Float"]>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export type Author = Node & {
  readonly __typename?: "Author";
  readonly avatar?: Maybe<Asset>;
  readonly bio?: Maybe<Scalars["String"]>;
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Author>;
  /** List of Author versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  readonly name: Scalars["String"];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly section?: Maybe<Section>;
  readonly socialMedias: ReadonlyArray<Scalars["String"]>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type AuthorAvatarArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AuthorCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

export type AuthorHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type AuthorPublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AuthorScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AuthorSectionArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AuthorUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: AuthorWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  readonly __typename?: "AuthorConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AuthorEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type AuthorCreateInput = {
  readonly avatar?: InputMaybe<AssetCreateOneInlineInput>;
  readonly bio?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly name: Scalars["String"];
  readonly section?: InputMaybe<SectionCreateOneInlineInput>;
  readonly socialMedias?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  readonly connect?: InputMaybe<ReadonlyArray<AuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  readonly create?: InputMaybe<ReadonlyArray<AuthorCreateInput>>;
};

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  readonly connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  readonly create?: InputMaybe<AuthorCreateInput>;
};

/** An edge in a connection. */
export type AuthorEdge = {
  readonly __typename?: "AuthorEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: Author;
};

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly avatar?: InputMaybe<AssetWhereInput>;
  readonly bio?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly bio_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly bio_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly bio_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly bio_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly bio_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly bio_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly bio_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly bio_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly bio_starts_with?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars["String"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly socialMedias?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly socialMedias_contains_all?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly socialMedias_contains_none?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly socialMedias_contains_some?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly socialMedias_not?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AuthorOrderByInput {
  BioAsc = "bio_ASC",
  BioDesc = "bio_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SocialMediasAsc = "socialMedias_ASC",
  SocialMediasDesc = "socialMedias_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type AuthorUpdateInput = {
  readonly avatar?: InputMaybe<AssetUpdateOneInlineInput>;
  readonly bio?: InputMaybe<Scalars["String"]>;
  readonly name?: InputMaybe<Scalars["String"]>;
  readonly section?: InputMaybe<SectionUpdateOneInlineInput>;
  readonly socialMedias?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
};

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  readonly connect?: InputMaybe<ReadonlyArray<AuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  readonly create?: InputMaybe<ReadonlyArray<AuthorCreateInput>>;
  /** Delete multiple Author documents */
  readonly delete?: InputMaybe<ReadonlyArray<AuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<AuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  readonly set?: InputMaybe<ReadonlyArray<AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  readonly update?: InputMaybe<
    ReadonlyArray<AuthorUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple Author documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<AuthorUpsertWithNestedWhereUniqueInput>
  >;
};

export type AuthorUpdateManyInput = {
  readonly bio?: InputMaybe<Scalars["String"]>;
  readonly name?: InputMaybe<Scalars["String"]>;
  readonly socialMedias?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
};

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: AuthorUpdateManyInput;
  /** Document search */
  readonly where: AuthorWhereInput;
};

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  readonly connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  readonly create?: InputMaybe<AuthorCreateInput>;
  /** Delete currently connected Author document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Author document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Author document */
  readonly update?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  readonly upsert?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>;
};

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: AuthorUpdateInput;
  /** Unique document search */
  readonly where: AuthorWhereUniqueInput;
};

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AuthorCreateInput;
  /** Update document if it exists */
  readonly update: AuthorUpdateInput;
};

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: AuthorUpsertInput;
  /** Unique document search */
  readonly where: AuthorWhereUniqueInput;
};

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly avatar?: InputMaybe<AssetWhereInput>;
  readonly bio?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly bio_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly bio_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly bio_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly bio_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly bio_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly bio_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly bio_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly bio_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly bio_starts_with?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars["String"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly socialMedias?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly socialMedias_contains_all?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly socialMedias_contains_none?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly socialMedias_contains_some?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly socialMedias_not?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export type BatchPayload = {
  readonly __typename?: "BatchPayload";
  /** The number of nodes that have been affected by the Batch operation. */
  readonly count: Scalars["Long"];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  readonly __typename?: "Color";
  readonly css: Scalars["String"];
  readonly hex: Scalars["Hex"];
  readonly rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  readonly hex?: InputMaybe<Scalars["Hex"]>;
  readonly rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  readonly after?: InputMaybe<Scalars["ID"]>;
  /** Connect document before specified document */
  readonly before?: InputMaybe<Scalars["ID"]>;
  /** Connect document at last position */
  readonly end?: InputMaybe<Scalars["Boolean"]>;
  /** Connect document at first position */
  readonly start?: InputMaybe<Scalars["Boolean"]>;
};

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  readonly format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  readonly output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  readonly __typename?: "DocumentVersion";
  readonly createdAt: Scalars["DateTime"];
  readonly data?: Maybe<Scalars["Json"]>;
  readonly id: Scalars["ID"];
  readonly revision: Scalars["Int"];
  readonly stage: Stage;
};

export type Faq = Node & {
  readonly __typename?: "Faq";
  readonly answer: Scalars["String"];
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Faq>;
  /** List of Faq versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly question: Scalars["String"];
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly section?: Maybe<Section>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type FaqCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type FaqDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

export type FaqHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type FaqPublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type FaqScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type FaqSectionArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type FaqUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type FaqConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
  readonly __typename?: "FaqConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<FaqEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type FaqCreateInput = {
  readonly answer: Scalars["String"];
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly question: Scalars["String"];
  readonly section?: InputMaybe<SectionCreateOneInlineInput>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type FaqCreateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  readonly connect?: InputMaybe<ReadonlyArray<FaqWhereUniqueInput>>;
  /** Create and connect multiple existing Faq documents */
  readonly create?: InputMaybe<ReadonlyArray<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Connect one existing Faq document */
  readonly connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  readonly create?: InputMaybe<FaqCreateInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  readonly __typename?: "FaqEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly answer?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly answer_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly answer_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly answer_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly answer_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly answer_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly answer_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly answer_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly answer_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly answer_starts_with?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly question?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly question_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly question_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly question_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly question_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly question_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly question_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly question_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly question_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly question_starts_with?: InputMaybe<Scalars["String"]>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FaqOrderByInput {
  AnswerAsc = "answer_ASC",
  AnswerDesc = "answer_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  QuestionAsc = "question_ASC",
  QuestionDesc = "question_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type FaqUpdateInput = {
  readonly answer?: InputMaybe<Scalars["String"]>;
  readonly question?: InputMaybe<Scalars["String"]>;
  readonly section?: InputMaybe<SectionUpdateOneInlineInput>;
};

export type FaqUpdateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  readonly connect?: InputMaybe<ReadonlyArray<FaqConnectInput>>;
  /** Create and connect multiple Faq documents */
  readonly create?: InputMaybe<ReadonlyArray<FaqCreateInput>>;
  /** Delete multiple Faq documents */
  readonly delete?: InputMaybe<ReadonlyArray<FaqWhereUniqueInput>>;
  /** Disconnect multiple Faq documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<FaqWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Faq documents */
  readonly set?: InputMaybe<ReadonlyArray<FaqWhereUniqueInput>>;
  /** Update multiple Faq documents */
  readonly update?: InputMaybe<
    ReadonlyArray<FaqUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple Faq documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<FaqUpsertWithNestedWhereUniqueInput>
  >;
};

export type FaqUpdateManyInput = {
  readonly answer?: InputMaybe<Scalars["String"]>;
  readonly question?: InputMaybe<Scalars["String"]>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: FaqUpdateManyInput;
  /** Document search */
  readonly where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
  /** Connect existing Faq document */
  readonly connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  readonly create?: InputMaybe<FaqCreateInput>;
  /** Delete currently connected Faq document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Faq document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Faq document */
  readonly update?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  readonly upsert?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: FaqUpdateInput;
  /** Unique document search */
  readonly where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: FaqCreateInput;
  /** Update document if it exists */
  readonly update: FaqUpdateInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: FaqUpsertInput;
  /** Unique document search */
  readonly where: FaqWhereUniqueInput;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly answer?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly answer_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly answer_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly answer_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly answer_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly answer_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly answer_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly answer_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly answer_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly answer_starts_with?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly question?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly question_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly question_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly question_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly question_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly question_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly question_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly question_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly question_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly question_starts_with?: InputMaybe<Scalars["String"]>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  readonly fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height?: InputMaybe<Scalars["Int"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width?: InputMaybe<Scalars["Int"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  readonly resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  Pl = "pl",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  readonly __typename?: "Location";
  readonly distance: Scalars["Float"];
  readonly latitude: Scalars["Float"];
  readonly longitude: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  readonly latitude: Scalars["Float"];
  readonly longitude: Scalars["Float"];
};

export type Mutation = {
  readonly __typename?: "Mutation";
  /** Create one agendaWeek */
  readonly createAgendaWeek?: Maybe<AgendaWeek>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  readonly createAsset?: Maybe<Asset>;
  /** Create one author */
  readonly createAuthor?: Maybe<Author>;
  /** Create one faq */
  readonly createFaq?: Maybe<Faq>;
  /** Create one reason */
  readonly createReason?: Maybe<Reason>;
  /** Create one scheduledRelease */
  readonly createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one section */
  readonly createSection?: Maybe<Section>;
  /** Create one website */
  readonly createWebsite?: Maybe<Website>;
  /** Delete one agendaWeek from _all_ existing stages. Returns deleted document. */
  readonly deleteAgendaWeek?: Maybe<AgendaWeek>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  readonly deleteAsset?: Maybe<Asset>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  readonly deleteAuthor?: Maybe<Author>;
  /** Delete one faq from _all_ existing stages. Returns deleted document. */
  readonly deleteFaq?: Maybe<Faq>;
  /**
   * Delete many AgendaWeek documents
   * @deprecated Please use the new paginated many mutation (deleteManyAgendaWeeksConnection)
   */
  readonly deleteManyAgendaWeeks: BatchPayload;
  /** Delete many AgendaWeek documents, return deleted documents */
  readonly deleteManyAgendaWeeksConnection: AgendaWeekConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  readonly deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  readonly deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  readonly deleteManyAuthors: BatchPayload;
  /** Delete many Author documents, return deleted documents */
  readonly deleteManyAuthorsConnection: AuthorConnection;
  /**
   * Delete many Faq documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
   */
  readonly deleteManyFaqs: BatchPayload;
  /** Delete many Faq documents, return deleted documents */
  readonly deleteManyFaqsConnection: FaqConnection;
  /**
   * Delete many Reason documents
   * @deprecated Please use the new paginated many mutation (deleteManyReasonsConnection)
   */
  readonly deleteManyReasons: BatchPayload;
  /** Delete many Reason documents, return deleted documents */
  readonly deleteManyReasonsConnection: ReasonConnection;
  /**
   * Delete many Section documents
   * @deprecated Please use the new paginated many mutation (deleteManySectionsConnection)
   */
  readonly deleteManySections: BatchPayload;
  /** Delete many Section documents, return deleted documents */
  readonly deleteManySectionsConnection: SectionConnection;
  /**
   * Delete many Website documents
   * @deprecated Please use the new paginated many mutation (deleteManyWebsitesConnection)
   */
  readonly deleteManyWebsites: BatchPayload;
  /** Delete many Website documents, return deleted documents */
  readonly deleteManyWebsitesConnection: WebsiteConnection;
  /** Delete one reason from _all_ existing stages. Returns deleted document. */
  readonly deleteReason?: Maybe<Reason>;
  /** Delete and return scheduled operation */
  readonly deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  readonly deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one section from _all_ existing stages. Returns deleted document. */
  readonly deleteSection?: Maybe<Section>;
  /** Delete one website from _all_ existing stages. Returns deleted document. */
  readonly deleteWebsite?: Maybe<Website>;
  /** Publish one agendaWeek */
  readonly publishAgendaWeek?: Maybe<AgendaWeek>;
  /** Publish one asset */
  readonly publishAsset?: Maybe<Asset>;
  /** Publish one author */
  readonly publishAuthor?: Maybe<Author>;
  /** Publish one faq */
  readonly publishFaq?: Maybe<Faq>;
  /**
   * Publish many AgendaWeek documents
   * @deprecated Please use the new paginated many mutation (publishManyAgendaWeeksConnection)
   */
  readonly publishManyAgendaWeeks: BatchPayload;
  /** Publish many AgendaWeek documents */
  readonly publishManyAgendaWeeksConnection: AgendaWeekConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  readonly publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  readonly publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  readonly publishManyAuthors: BatchPayload;
  /** Publish many Author documents */
  readonly publishManyAuthorsConnection: AuthorConnection;
  /**
   * Publish many Faq documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
   */
  readonly publishManyFaqs: BatchPayload;
  /** Publish many Faq documents */
  readonly publishManyFaqsConnection: FaqConnection;
  /**
   * Publish many Reason documents
   * @deprecated Please use the new paginated many mutation (publishManyReasonsConnection)
   */
  readonly publishManyReasons: BatchPayload;
  /** Publish many Reason documents */
  readonly publishManyReasonsConnection: ReasonConnection;
  /**
   * Publish many Section documents
   * @deprecated Please use the new paginated many mutation (publishManySectionsConnection)
   */
  readonly publishManySections: BatchPayload;
  /** Publish many Section documents */
  readonly publishManySectionsConnection: SectionConnection;
  /**
   * Publish many Website documents
   * @deprecated Please use the new paginated many mutation (publishManyWebsitesConnection)
   */
  readonly publishManyWebsites: BatchPayload;
  /** Publish many Website documents */
  readonly publishManyWebsitesConnection: WebsiteConnection;
  /** Publish one reason */
  readonly publishReason?: Maybe<Reason>;
  /** Publish one section */
  readonly publishSection?: Maybe<Section>;
  /** Publish one website */
  readonly publishWebsite?: Maybe<Website>;
  /** Schedule to publish one agendaWeek */
  readonly schedulePublishAgendaWeek?: Maybe<AgendaWeek>;
  /** Schedule to publish one asset */
  readonly schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one author */
  readonly schedulePublishAuthor?: Maybe<Author>;
  /** Schedule to publish one faq */
  readonly schedulePublishFaq?: Maybe<Faq>;
  /** Schedule to publish one reason */
  readonly schedulePublishReason?: Maybe<Reason>;
  /** Schedule to publish one section */
  readonly schedulePublishSection?: Maybe<Section>;
  /** Schedule to publish one website */
  readonly schedulePublishWebsite?: Maybe<Website>;
  /** Unpublish one agendaWeek from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishAgendaWeek?: Maybe<AgendaWeek>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishAuthor?: Maybe<Author>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishFaq?: Maybe<Faq>;
  /** Unpublish one reason from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishReason?: Maybe<Reason>;
  /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishSection?: Maybe<Section>;
  /** Unpublish one website from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishWebsite?: Maybe<Website>;
  /** Unpublish one agendaWeek from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAgendaWeek?: Maybe<AgendaWeek>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAuthor?: Maybe<Author>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishFaq?: Maybe<Faq>;
  /**
   * Unpublish many AgendaWeek documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAgendaWeeksConnection)
   */
  readonly unpublishManyAgendaWeeks: BatchPayload;
  /** Find many AgendaWeek documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyAgendaWeeksConnection: AgendaWeekConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  readonly unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  readonly unpublishManyAuthors: BatchPayload;
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyAuthorsConnection: AuthorConnection;
  /**
   * Unpublish many Faq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
   */
  readonly unpublishManyFaqs: BatchPayload;
  /** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyFaqsConnection: FaqConnection;
  /**
   * Unpublish many Reason documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReasonsConnection)
   */
  readonly unpublishManyReasons: BatchPayload;
  /** Find many Reason documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyReasonsConnection: ReasonConnection;
  /**
   * Unpublish many Section documents
   * @deprecated Please use the new paginated many mutation (unpublishManySectionsConnection)
   */
  readonly unpublishManySections: BatchPayload;
  /** Find many Section documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManySectionsConnection: SectionConnection;
  /**
   * Unpublish many Website documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWebsitesConnection)
   */
  readonly unpublishManyWebsites: BatchPayload;
  /** Find many Website documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyWebsitesConnection: WebsiteConnection;
  /** Unpublish one reason from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishReason?: Maybe<Reason>;
  /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishSection?: Maybe<Section>;
  /** Unpublish one website from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishWebsite?: Maybe<Website>;
  /** Update one agendaWeek */
  readonly updateAgendaWeek?: Maybe<AgendaWeek>;
  /** Update one asset */
  readonly updateAsset?: Maybe<Asset>;
  /** Update one author */
  readonly updateAuthor?: Maybe<Author>;
  /** Update one faq */
  readonly updateFaq?: Maybe<Faq>;
  /**
   * Update many agendaWeeks
   * @deprecated Please use the new paginated many mutation (updateManyAgendaWeeksConnection)
   */
  readonly updateManyAgendaWeeks: BatchPayload;
  /** Update many AgendaWeek documents */
  readonly updateManyAgendaWeeksConnection: AgendaWeekConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  readonly updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  readonly updateManyAssetsConnection: AssetConnection;
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  readonly updateManyAuthors: BatchPayload;
  /** Update many Author documents */
  readonly updateManyAuthorsConnection: AuthorConnection;
  /**
   * Update many faqs
   * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
   */
  readonly updateManyFaqs: BatchPayload;
  /** Update many Faq documents */
  readonly updateManyFaqsConnection: FaqConnection;
  /**
   * Update many reasons
   * @deprecated Please use the new paginated many mutation (updateManyReasonsConnection)
   */
  readonly updateManyReasons: BatchPayload;
  /** Update many Reason documents */
  readonly updateManyReasonsConnection: ReasonConnection;
  /**
   * Update many sections
   * @deprecated Please use the new paginated many mutation (updateManySectionsConnection)
   */
  readonly updateManySections: BatchPayload;
  /** Update many Section documents */
  readonly updateManySectionsConnection: SectionConnection;
  /**
   * Update many websites
   * @deprecated Please use the new paginated many mutation (updateManyWebsitesConnection)
   */
  readonly updateManyWebsites: BatchPayload;
  /** Update many Website documents */
  readonly updateManyWebsitesConnection: WebsiteConnection;
  /** Update one reason */
  readonly updateReason?: Maybe<Reason>;
  /** Update one scheduledRelease */
  readonly updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one section */
  readonly updateSection?: Maybe<Section>;
  /** Update one website */
  readonly updateWebsite?: Maybe<Website>;
  /** Upsert one agendaWeek */
  readonly upsertAgendaWeek?: Maybe<AgendaWeek>;
  /** Upsert one asset */
  readonly upsertAsset?: Maybe<Asset>;
  /** Upsert one author */
  readonly upsertAuthor?: Maybe<Author>;
  /** Upsert one faq */
  readonly upsertFaq?: Maybe<Faq>;
  /** Upsert one reason */
  readonly upsertReason?: Maybe<Reason>;
  /** Upsert one section */
  readonly upsertSection?: Maybe<Section>;
  /** Upsert one website */
  readonly upsertWebsite?: Maybe<Website>;
};

export type MutationCreateAgendaWeekArgs = {
  data: AgendaWeekCreateInput;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};

export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};

export type MutationCreateReasonArgs = {
  data: ReasonCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationCreateSectionArgs = {
  data: SectionCreateInput;
};

export type MutationCreateWebsiteArgs = {
  data: WebsiteCreateInput;
};

export type MutationDeleteAgendaWeekArgs = {
  where: AgendaWeekWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};

export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};

export type MutationDeleteManyAgendaWeeksArgs = {
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationDeleteManyAgendaWeeksConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAuthorsArgs = {
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationDeleteManyFaqsArgs = {
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationDeleteManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationDeleteManyReasonsArgs = {
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationDeleteManyReasonsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationDeleteManySectionsArgs = {
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationDeleteManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationDeleteManyWebsitesArgs = {
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationDeleteManyWebsitesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationDeleteReasonArgs = {
  where: ReasonWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteSectionArgs = {
  where: SectionWhereUniqueInput;
};

export type MutationDeleteWebsiteArgs = {
  where: WebsiteWhereUniqueInput;
};

export type MutationPublishAgendaWeekArgs = {
  to?: ReadonlyArray<Stage>;
  where: AgendaWeekWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishAuthorArgs = {
  to?: ReadonlyArray<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationPublishFaqArgs = {
  to?: ReadonlyArray<Stage>;
  where: FaqWhereUniqueInput;
};

export type MutationPublishManyAgendaWeeksArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationPublishManyAgendaWeeksConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAuthorsArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationPublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationPublishManyFaqsArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationPublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationPublishManyReasonsArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationPublishManyReasonsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationPublishManySectionsArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationPublishManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationPublishManyWebsitesArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationPublishManyWebsitesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationPublishReasonArgs = {
  to?: ReadonlyArray<Stage>;
  where: ReasonWhereUniqueInput;
};

export type MutationPublishSectionArgs = {
  to?: ReadonlyArray<Stage>;
  where: SectionWhereUniqueInput;
};

export type MutationPublishWebsiteArgs = {
  to?: ReadonlyArray<Stage>;
  where: WebsiteWhereUniqueInput;
};

export type MutationSchedulePublishAgendaWeekArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: ReadonlyArray<Stage>;
  where: AgendaWeekWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: ReadonlyArray<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationSchedulePublishFaqArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: ReadonlyArray<Stage>;
  where: FaqWhereUniqueInput;
};

export type MutationSchedulePublishReasonArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: ReadonlyArray<Stage>;
  where: ReasonWhereUniqueInput;
};

export type MutationSchedulePublishSectionArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: ReadonlyArray<Stage>;
  where: SectionWhereUniqueInput;
};

export type MutationSchedulePublishWebsiteArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: ReadonlyArray<Stage>;
  where: WebsiteWhereUniqueInput;
};

export type MutationScheduleUnpublishAgendaWeekArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: AgendaWeekWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishAuthorArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: AuthorWhereUniqueInput;
};

export type MutationScheduleUnpublishFaqArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: FaqWhereUniqueInput;
};

export type MutationScheduleUnpublishReasonArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: ReasonWhereUniqueInput;
};

export type MutationScheduleUnpublishSectionArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: SectionWhereUniqueInput;
};

export type MutationScheduleUnpublishWebsiteArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: WebsiteWhereUniqueInput;
};

export type MutationUnpublishAgendaWeekArgs = {
  from?: ReadonlyArray<Stage>;
  where: AgendaWeekWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishAuthorArgs = {
  from?: ReadonlyArray<Stage>;
  where: AuthorWhereUniqueInput;
};

export type MutationUnpublishFaqArgs = {
  from?: ReadonlyArray<Stage>;
  where: FaqWhereUniqueInput;
};

export type MutationUnpublishManyAgendaWeeksArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationUnpublishManyAgendaWeeksConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAuthorsArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUnpublishManyFaqsArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationUnpublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationUnpublishManyReasonsArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationUnpublishManyReasonsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationUnpublishManySectionsArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationUnpublishManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationUnpublishManyWebsitesArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationUnpublishManyWebsitesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationUnpublishReasonArgs = {
  from?: ReadonlyArray<Stage>;
  where: ReasonWhereUniqueInput;
};

export type MutationUnpublishSectionArgs = {
  from?: ReadonlyArray<Stage>;
  where: SectionWhereUniqueInput;
};

export type MutationUnpublishWebsiteArgs = {
  from?: ReadonlyArray<Stage>;
  where: WebsiteWhereUniqueInput;
};

export type MutationUpdateAgendaWeekArgs = {
  data: AgendaWeekUpdateInput;
  where: AgendaWeekWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};

export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};

export type MutationUpdateManyAgendaWeeksArgs = {
  data: AgendaWeekUpdateManyInput;
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationUpdateManyAgendaWeeksConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AgendaWeekUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AgendaWeekManyWhereInput>;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AuthorUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthorManyWhereInput>;
};

export type MutationUpdateManyFaqsArgs = {
  data: FaqUpdateManyInput;
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationUpdateManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: FaqUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationUpdateManyReasonsArgs = {
  data: ReasonUpdateManyInput;
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationUpdateManyReasonsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: ReasonUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReasonManyWhereInput>;
};

export type MutationUpdateManySectionsArgs = {
  data: SectionUpdateManyInput;
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationUpdateManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: SectionUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SectionManyWhereInput>;
};

export type MutationUpdateManyWebsitesArgs = {
  data: WebsiteUpdateManyInput;
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationUpdateManyWebsitesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: WebsiteUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WebsiteManyWhereInput>;
};

export type MutationUpdateReasonArgs = {
  data: ReasonUpdateInput;
  where: ReasonWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};

export type MutationUpdateWebsiteArgs = {
  data: WebsiteUpdateInput;
  where: WebsiteWhereUniqueInput;
};

export type MutationUpsertAgendaWeekArgs = {
  upsert: AgendaWeekUpsertInput;
  where: AgendaWeekWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput;
  where: AuthorWhereUniqueInput;
};

export type MutationUpsertFaqArgs = {
  upsert: FaqUpsertInput;
  where: FaqWhereUniqueInput;
};

export type MutationUpsertReasonArgs = {
  upsert: ReasonUpsertInput;
  where: ReasonWhereUniqueInput;
};

export type MutationUpsertSectionArgs = {
  upsert: SectionUpsertInput;
  where: SectionWhereUniqueInput;
};

export type MutationUpsertWebsiteArgs = {
  upsert: WebsiteUpsertInput;
  where: WebsiteWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  readonly id: Scalars["ID"];
  /** The Stage of an object */
  readonly stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars["Boolean"];
  /** Number of items in the current page. */
  readonly pageSize?: Maybe<Scalars["Int"]>;
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars["String"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  readonly locale: Locale;
  /** Stages to publish selected locales to */
  readonly stages: ReadonlyArray<Stage>;
};

export type Query = {
  readonly __typename?: "Query";
  /** Retrieve a single agendaWeek */
  readonly agendaWeek?: Maybe<AgendaWeek>;
  /** Retrieve document version */
  readonly agendaWeekVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple agendaWeeks */
  readonly agendaWeeks: ReadonlyArray<AgendaWeek>;
  /** Retrieve multiple agendaWeeks using the Relay connection interface */
  readonly agendaWeeksConnection: AgendaWeekConnection;
  /** Retrieve a single asset */
  readonly asset?: Maybe<Asset>;
  /** Retrieve document version */
  readonly assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  readonly assets: ReadonlyArray<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  readonly assetsConnection: AssetConnection;
  /** Retrieve a single author */
  readonly author?: Maybe<Author>;
  /** Retrieve document version */
  readonly authorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authors */
  readonly authors: ReadonlyArray<Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  readonly authorsConnection: AuthorConnection;
  /** Retrieve a single faq */
  readonly faq?: Maybe<Faq>;
  /** Retrieve document version */
  readonly faqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqs */
  readonly faqs: ReadonlyArray<Faq>;
  /** Retrieve multiple faqs using the Relay connection interface */
  readonly faqsConnection: FaqConnection;
  /** Fetches an object given its ID */
  readonly node?: Maybe<Node>;
  /** Retrieve a single reason */
  readonly reason?: Maybe<Reason>;
  /** Retrieve document version */
  readonly reasonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reasons */
  readonly reasons: ReadonlyArray<Reason>;
  /** Retrieve multiple reasons using the Relay connection interface */
  readonly reasonsConnection: ReasonConnection;
  /** Retrieve a single scheduledOperation */
  readonly scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  readonly scheduledOperations: ReadonlyArray<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  readonly scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  readonly scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  readonly scheduledReleases: ReadonlyArray<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  readonly scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single section */
  readonly section?: Maybe<Section>;
  /** Retrieve document version */
  readonly sectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple sections */
  readonly sections: ReadonlyArray<Section>;
  /** Retrieve multiple sections using the Relay connection interface */
  readonly sectionsConnection: SectionConnection;
  /** Retrieve a single user */
  readonly user?: Maybe<User>;
  /** Retrieve multiple users */
  readonly users: ReadonlyArray<User>;
  /** Retrieve multiple users using the Relay connection interface */
  readonly usersConnection: UserConnection;
  /** Retrieve a single website */
  readonly website?: Maybe<Website>;
  /** Retrieve document version */
  readonly websiteVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple websites */
  readonly websites: ReadonlyArray<Website>;
  /** Retrieve multiple websites using the Relay connection interface */
  readonly websitesConnection: WebsiteConnection;
};

export type QueryAgendaWeekArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: AgendaWeekWhereUniqueInput;
};

export type QueryAgendaWeekVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAgendaWeeksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AgendaWeekOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AgendaWeekWhereInput>;
};

export type QueryAgendaWeeksConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AgendaWeekOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AgendaWeekWhereInput>;
};

export type QueryAssetArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAuthorArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: AuthorWhereUniqueInput;
};

export type QueryAuthorVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};

export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};

export type QueryFaqArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: FaqWhereUniqueInput;
};

export type QueryFaqVersionArgs = {
  where: VersionWhereInput;
};

export type QueryFaqsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};

export type QueryFaqsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
};

export type QueryReasonArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ReasonWhereUniqueInput;
};

export type QueryReasonVersionArgs = {
  where: VersionWhereInput;
};

export type QueryReasonsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ReasonOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ReasonWhereInput>;
};

export type QueryReasonsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ReasonOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ReasonWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QuerySectionArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: SectionWhereUniqueInput;
};

export type QuerySectionVersionArgs = {
  where: VersionWhereInput;
};

export type QuerySectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<SectionWhereInput>;
};

export type QuerySectionsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<SectionWhereInput>;
};

export type QueryUserArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryWebsiteArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: WebsiteWhereUniqueInput;
};

export type QueryWebsiteVersionArgs = {
  where: VersionWhereInput;
};

export type QueryWebsitesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<WebsiteOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<WebsiteWhereInput>;
};

export type QueryWebsitesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<WebsiteOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<WebsiteWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  readonly __typename?: "RGBA";
  readonly a: Scalars["RGBATransparency"];
  readonly b: Scalars["RGBAHue"];
  readonly g: Scalars["RGBAHue"];
  readonly r: Scalars["RGBAHue"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  readonly a: Scalars["RGBATransparency"];
  readonly b: Scalars["RGBAHue"];
  readonly g: Scalars["RGBAHue"];
  readonly r: Scalars["RGBAHue"];
};

export type Reason = Node & {
  readonly __typename?: "Reason";
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  readonly description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Reason>;
  /** List of Reason versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  readonly image?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly section?: Maybe<Section>;
  /** System stage field */
  readonly stage: Stage;
  readonly title: Scalars["String"];
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type ReasonCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ReasonDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

export type ReasonHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type ReasonImageArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ReasonPublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ReasonScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ReasonSectionArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ReasonUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ReasonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ReasonWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReasonConnection = {
  readonly __typename?: "ReasonConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ReasonEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ReasonCreateInput = {
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly description?: InputMaybe<Scalars["String"]>;
  readonly image?: InputMaybe<AssetCreateOneInlineInput>;
  readonly section?: InputMaybe<SectionCreateOneInlineInput>;
  readonly title: Scalars["String"];
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ReasonCreateManyInlineInput = {
  /** Connect multiple existing Reason documents */
  readonly connect?: InputMaybe<ReadonlyArray<ReasonWhereUniqueInput>>;
  /** Create and connect multiple existing Reason documents */
  readonly create?: InputMaybe<ReadonlyArray<ReasonCreateInput>>;
};

export type ReasonCreateOneInlineInput = {
  /** Connect one existing Reason document */
  readonly connect?: InputMaybe<ReasonWhereUniqueInput>;
  /** Create and connect one Reason document */
  readonly create?: InputMaybe<ReasonCreateInput>;
};

/** An edge in a connection. */
export type ReasonEdge = {
  readonly __typename?: "ReasonEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: Reason;
};

/** Identifies documents */
export type ReasonManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ReasonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ReasonWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ReasonWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars["String"]>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly image?: InputMaybe<AssetWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReasonOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ReasonUpdateInput = {
  readonly description?: InputMaybe<Scalars["String"]>;
  readonly image?: InputMaybe<AssetUpdateOneInlineInput>;
  readonly section?: InputMaybe<SectionUpdateOneInlineInput>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type ReasonUpdateManyInlineInput = {
  /** Connect multiple existing Reason documents */
  readonly connect?: InputMaybe<ReadonlyArray<ReasonConnectInput>>;
  /** Create and connect multiple Reason documents */
  readonly create?: InputMaybe<ReadonlyArray<ReasonCreateInput>>;
  /** Delete multiple Reason documents */
  readonly delete?: InputMaybe<ReadonlyArray<ReasonWhereUniqueInput>>;
  /** Disconnect multiple Reason documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ReasonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Reason documents */
  readonly set?: InputMaybe<ReadonlyArray<ReasonWhereUniqueInput>>;
  /** Update multiple Reason documents */
  readonly update?: InputMaybe<
    ReadonlyArray<ReasonUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple Reason documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<ReasonUpsertWithNestedWhereUniqueInput>
  >;
};

export type ReasonUpdateManyInput = {
  readonly description?: InputMaybe<Scalars["String"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type ReasonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ReasonUpdateManyInput;
  /** Document search */
  readonly where: ReasonWhereInput;
};

export type ReasonUpdateOneInlineInput = {
  /** Connect existing Reason document */
  readonly connect?: InputMaybe<ReasonWhereUniqueInput>;
  /** Create and connect one Reason document */
  readonly create?: InputMaybe<ReasonCreateInput>;
  /** Delete currently connected Reason document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Reason document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Reason document */
  readonly update?: InputMaybe<ReasonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Reason document */
  readonly upsert?: InputMaybe<ReasonUpsertWithNestedWhereUniqueInput>;
};

export type ReasonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ReasonUpdateInput;
  /** Unique document search */
  readonly where: ReasonWhereUniqueInput;
};

export type ReasonUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ReasonCreateInput;
  /** Update document if it exists */
  readonly update: ReasonUpdateInput;
};

export type ReasonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ReasonUpsertInput;
  /** Unique document search */
  readonly where: ReasonWhereUniqueInput;
};

/** Identifies documents */
export type ReasonWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ReasonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ReasonWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ReasonWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars["String"]>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly image?: InputMaybe<AssetWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly section?: InputMaybe<SectionWhereInput>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Reason record uniquely */
export type ReasonWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  readonly __typename?: "RichText";
  /** Returns HTMl representation */
  readonly html: Scalars["String"];
  /** Returns Markdown representation */
  readonly markdown: Scalars["String"];
  /** Returns AST representation */
  readonly raw: Scalars["RichTextAST"];
  /** Returns plain-text contents of RichText */
  readonly text: Scalars["String"];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  readonly __typename?: "ScheduledOperation";
  readonly affectedDocuments: ReadonlyArray<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Operation description */
  readonly description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledOperation>;
  /** Operation error message */
  readonly errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  readonly rawPayload: Scalars["Json"];
  /** The release this operation is scheduled for */
  readonly release?: Maybe<ScheduledRelease>;
  /** System stage field */
  readonly stage: Stage;
  /** operation Status */
  readonly status: ScheduledOperationStatus;
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledOperationAffectedDocument =
  | AgendaWeek
  | Asset
  | Author
  | Faq
  | Reason
  | Section
  | Website;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  readonly __typename?: "ScheduledOperationConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<
    ReadonlyArray<ScheduledOperationWhereUniqueInput>
  >;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  readonly __typename?: "ScheduledOperationEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars["String"]>;
  readonly errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<ScheduledOperationStatus>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  readonly disconnect?: InputMaybe<
    ReadonlyArray<ScheduledOperationWhereUniqueInput>
  >;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars["String"]>;
  readonly errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<ScheduledOperationStatus>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  readonly __typename?: "ScheduledRelease";
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Release description */
  readonly description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledRelease>;
  /** Release error message */
  readonly errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  /** Whether scheduled release should be run */
  readonly isActive: Scalars["Boolean"];
  /** Whether scheduled release is implicit */
  readonly isImplicit: Scalars["Boolean"];
  /** Operations to run with this release */
  readonly operations: ReadonlyArray<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** Release date and time */
  readonly releaseAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  readonly stage: Stage;
  /** Release Status */
  readonly status: ScheduledReleaseStatus;
  /** Release Title */
  readonly title?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  readonly __typename?: "ScheduledReleaseConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly description?: InputMaybe<Scalars["String"]>;
  readonly errorMessage?: InputMaybe<Scalars["String"]>;
  readonly isActive?: InputMaybe<Scalars["Boolean"]>;
  readonly releaseAt?: InputMaybe<Scalars["DateTime"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<
    ReadonlyArray<ScheduledReleaseWhereUniqueInput>
  >;
  /** Create and connect multiple existing ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  readonly __typename?: "ScheduledReleaseEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars["String"]>;
  readonly errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars["Boolean"]>;
  readonly isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  readonly isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<ScheduledReleaseStatus>>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  readonly description?: InputMaybe<Scalars["String"]>;
  readonly errorMessage?: InputMaybe<Scalars["String"]>;
  readonly isActive?: InputMaybe<Scalars["Boolean"]>;
  readonly releaseAt?: InputMaybe<Scalars["DateTime"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  readonly delete?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  readonly disconnect?: InputMaybe<
    ReadonlyArray<ScheduledReleaseWhereUniqueInput>
  >;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  readonly update?: InputMaybe<
    ReadonlyArray<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple ScheduledRelease documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
  >;
};

export type ScheduledReleaseUpdateManyInput = {
  readonly description?: InputMaybe<Scalars["String"]>;
  readonly errorMessage?: InputMaybe<Scalars["String"]>;
  readonly isActive?: InputMaybe<Scalars["Boolean"]>;
  readonly releaseAt?: InputMaybe<Scalars["DateTime"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  readonly where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ScheduledRelease document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ScheduledRelease document */
  readonly update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  readonly upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  readonly update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars["String"]>;
  readonly errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars["Boolean"]>;
  readonly isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  readonly isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<ScheduledReleaseStatus>>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export type Section = Node & {
  readonly __typename?: "Section";
  readonly content: ReadonlyArray<SectionContent>;
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Section>;
  /** List of Section versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** System stage field */
  readonly stage: Stage;
  readonly subTitle?: Maybe<Scalars["String"]>;
  readonly title: Scalars["String"];
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type SectionContentArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SectionCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type SectionDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

export type SectionHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type SectionPublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type SectionScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type SectionUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type SectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: SectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type SectionConnection = {
  readonly __typename?: "SectionConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<SectionEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type SectionContent = AgendaWeek | Author | Faq | Reason;

export type SectionContentConnectInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekConnectInput>;
  readonly Author?: InputMaybe<AuthorConnectInput>;
  readonly Faq?: InputMaybe<FaqConnectInput>;
  readonly Reason?: InputMaybe<ReasonConnectInput>;
};

export type SectionContentCreateInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekCreateInput>;
  readonly Author?: InputMaybe<AuthorCreateInput>;
  readonly Faq?: InputMaybe<FaqCreateInput>;
  readonly Reason?: InputMaybe<ReasonCreateInput>;
};

export type SectionContentCreateManyInlineInput = {
  /** Connect multiple existing SectionContent documents */
  readonly connect?: InputMaybe<ReadonlyArray<SectionContentWhereUniqueInput>>;
  /** Create and connect multiple existing SectionContent documents */
  readonly create?: InputMaybe<ReadonlyArray<SectionContentCreateInput>>;
};

export type SectionContentCreateOneInlineInput = {
  /** Connect one existing SectionContent document */
  readonly connect?: InputMaybe<SectionContentWhereUniqueInput>;
  /** Create and connect one SectionContent document */
  readonly create?: InputMaybe<SectionContentCreateInput>;
};

export type SectionContentUpdateInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekUpdateInput>;
  readonly Author?: InputMaybe<AuthorUpdateInput>;
  readonly Faq?: InputMaybe<FaqUpdateInput>;
  readonly Reason?: InputMaybe<ReasonUpdateInput>;
};

export type SectionContentUpdateManyInlineInput = {
  /** Connect multiple existing SectionContent documents */
  readonly connect?: InputMaybe<ReadonlyArray<SectionContentConnectInput>>;
  /** Create and connect multiple SectionContent documents */
  readonly create?: InputMaybe<ReadonlyArray<SectionContentCreateInput>>;
  /** Delete multiple SectionContent documents */
  readonly delete?: InputMaybe<ReadonlyArray<SectionContentWhereUniqueInput>>;
  /** Disconnect multiple SectionContent documents */
  readonly disconnect?: InputMaybe<
    ReadonlyArray<SectionContentWhereUniqueInput>
  >;
  /** Override currently-connected documents with multiple existing SectionContent documents */
  readonly set?: InputMaybe<ReadonlyArray<SectionContentWhereUniqueInput>>;
  /** Update multiple SectionContent documents */
  readonly update?: InputMaybe<
    ReadonlyArray<SectionContentUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple SectionContent documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<SectionContentUpsertWithNestedWhereUniqueInput>
  >;
};

export type SectionContentUpdateManyWithNestedWhereInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekUpdateManyWithNestedWhereInput>;
  readonly Author?: InputMaybe<AuthorUpdateManyWithNestedWhereInput>;
  readonly Faq?: InputMaybe<FaqUpdateManyWithNestedWhereInput>;
  readonly Reason?: InputMaybe<ReasonUpdateManyWithNestedWhereInput>;
};

export type SectionContentUpdateOneInlineInput = {
  /** Connect existing SectionContent document */
  readonly connect?: InputMaybe<SectionContentWhereUniqueInput>;
  /** Create and connect one SectionContent document */
  readonly create?: InputMaybe<SectionContentCreateInput>;
  /** Delete currently connected SectionContent document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected SectionContent document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single SectionContent document */
  readonly update?: InputMaybe<SectionContentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SectionContent document */
  readonly upsert?: InputMaybe<SectionContentUpsertWithNestedWhereUniqueInput>;
};

export type SectionContentUpdateWithNestedWhereUniqueInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekUpdateWithNestedWhereUniqueInput>;
  readonly Author?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>;
  readonly Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  readonly Reason?: InputMaybe<ReasonUpdateWithNestedWhereUniqueInput>;
};

export type SectionContentUpsertWithNestedWhereUniqueInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekUpsertWithNestedWhereUniqueInput>;
  readonly Author?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>;
  readonly Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
  readonly Reason?: InputMaybe<ReasonUpsertWithNestedWhereUniqueInput>;
};

export type SectionContentWhereInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekWhereInput>;
  readonly Author?: InputMaybe<AuthorWhereInput>;
  readonly Faq?: InputMaybe<FaqWhereInput>;
  readonly Reason?: InputMaybe<ReasonWhereInput>;
};

export type SectionContentWhereUniqueInput = {
  readonly AgendaWeek?: InputMaybe<AgendaWeekWhereUniqueInput>;
  readonly Author?: InputMaybe<AuthorWhereUniqueInput>;
  readonly Faq?: InputMaybe<FaqWhereUniqueInput>;
  readonly Reason?: InputMaybe<ReasonWhereUniqueInput>;
};

export type SectionCreateInput = {
  readonly ckw3ylwmf05q701xlbyf4bijp?: InputMaybe<WebsiteCreateManyInlineInput>;
  readonly content?: InputMaybe<SectionContentCreateManyInlineInput>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly subTitle?: InputMaybe<Scalars["String"]>;
  readonly title: Scalars["String"];
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type SectionCreateManyInlineInput = {
  /** Connect multiple existing Section documents */
  readonly connect?: InputMaybe<ReadonlyArray<SectionWhereUniqueInput>>;
  /** Create and connect multiple existing Section documents */
  readonly create?: InputMaybe<ReadonlyArray<SectionCreateInput>>;
};

export type SectionCreateOneInlineInput = {
  /** Connect one existing Section document */
  readonly connect?: InputMaybe<SectionWhereUniqueInput>;
  /** Create and connect one Section document */
  readonly create?: InputMaybe<SectionCreateInput>;
};

/** An edge in a connection. */
export type SectionEdge = {
  readonly __typename?: "SectionEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: Section;
};

/** Identifies documents */
export type SectionManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<SectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly subTitle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly subTitle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly subTitle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly subTitle_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly subTitle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly subTitle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly subTitle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly subTitle_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly subTitle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly subTitle_starts_with?: InputMaybe<Scalars["String"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SectionOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SubTitleAsc = "subTitle_ASC",
  SubTitleDesc = "subTitle_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type SectionUpdateInput = {
  readonly ckw3ylwmf05q701xlbyf4bijp?: InputMaybe<WebsiteUpdateManyInlineInput>;
  readonly content?: InputMaybe<SectionContentUpdateManyInlineInput>;
  readonly subTitle?: InputMaybe<Scalars["String"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type SectionUpdateManyInlineInput = {
  /** Connect multiple existing Section documents */
  readonly connect?: InputMaybe<ReadonlyArray<SectionConnectInput>>;
  /** Create and connect multiple Section documents */
  readonly create?: InputMaybe<ReadonlyArray<SectionCreateInput>>;
  /** Delete multiple Section documents */
  readonly delete?: InputMaybe<ReadonlyArray<SectionWhereUniqueInput>>;
  /** Disconnect multiple Section documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<SectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Section documents */
  readonly set?: InputMaybe<ReadonlyArray<SectionWhereUniqueInput>>;
  /** Update multiple Section documents */
  readonly update?: InputMaybe<
    ReadonlyArray<SectionUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple Section documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<SectionUpsertWithNestedWhereUniqueInput>
  >;
};

export type SectionUpdateManyInput = {
  readonly subTitle?: InputMaybe<Scalars["String"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
};

export type SectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: SectionUpdateManyInput;
  /** Document search */
  readonly where: SectionWhereInput;
};

export type SectionUpdateOneInlineInput = {
  /** Connect existing Section document */
  readonly connect?: InputMaybe<SectionWhereUniqueInput>;
  /** Create and connect one Section document */
  readonly create?: InputMaybe<SectionCreateInput>;
  /** Delete currently connected Section document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Section document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Section document */
  readonly update?: InputMaybe<SectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Section document */
  readonly upsert?: InputMaybe<SectionUpsertWithNestedWhereUniqueInput>;
};

export type SectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: SectionUpdateInput;
  /** Unique document search */
  readonly where: SectionWhereUniqueInput;
};

export type SectionUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: SectionCreateInput;
  /** Update document if it exists */
  readonly update: SectionUpdateInput;
};

export type SectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: SectionUpsertInput;
  /** Unique document search */
  readonly where: SectionWhereUniqueInput;
};

/** Identifies documents */
export type SectionWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<SectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly subTitle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly subTitle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly subTitle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly subTitle_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly subTitle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly subTitle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly subTitle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly subTitle_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly subTitle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly subTitle_starts_with?: InputMaybe<Scalars["String"]>;
  readonly title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars["String"]>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Section record uniquely */
export type SectionWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export enum SocialMedia {
  Facebook = "facebook",
  Github = "github",
  Link = "link",
  Linkedin = "linkedin",
  Twitter = "twitter",
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  readonly locale: Locale;
  /** Stages to unpublish selected locales from */
  readonly stages: ReadonlyArray<Stage>;
};

/** User system model */
export type User = Node & {
  readonly __typename?: "User";
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<User>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  /** Flag to determine if user is active or not */
  readonly isActive: Scalars["Boolean"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  readonly kind: UserKind;
  /** The username */
  readonly name: Scalars["String"];
  /** Profile Picture url */
  readonly picture?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  readonly __typename?: "UserConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<UserEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  readonly __typename?: "UserEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: User;
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars["Boolean"]>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<UserKind>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<UserKind>>;
  readonly name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars["String"]>;
  readonly picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars["String"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserConnectInput>>;
  /** Disconnect multiple User documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  readonly set?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars["Boolean"]>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<UserKind>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<UserKind>>;
  readonly name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars["String"]>;
  readonly picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars["String"]>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export type Version = {
  readonly __typename?: "Version";
  readonly createdAt: Scalars["DateTime"];
  readonly id: Scalars["ID"];
  readonly revision: Scalars["Int"];
  readonly stage: Stage;
};

export type VersionWhereInput = {
  readonly id: Scalars["ID"];
  readonly revision: Scalars["Int"];
  readonly stage: Stage;
};

export type Website = Node & {
  readonly __typename?: "Website";
  readonly courseDetailsBox: ReadonlyArray<Scalars["String"]>;
  readonly courseDetailsParagraph?: Maybe<Scalars["String"]>;
  readonly courseDetailsTitle?: Maybe<Scalars["String"]>;
  /** The time the document was created */
  readonly createdAt: Scalars["DateTime"];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Website>;
  /** List of Website versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars["ID"];
  readonly internships: ReadonlyArray<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly sections: ReadonlyArray<Section>;
  /** System stage field */
  readonly stage: Stage;
  readonly startDate: Scalars["DateTime"];
  /** The time the document was updated */
  readonly updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};

export type WebsiteCreatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type WebsiteDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: ReadonlyArray<Stage>;
};

export type WebsiteHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type WebsiteInternshipsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetWhereInput>;
};

export type WebsitePublishedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type WebsiteScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type WebsiteSectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SectionWhereInput>;
};

export type WebsiteUpdatedByArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type WebsiteConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: WebsiteWhereUniqueInput;
};

/** A connection to a list of items. */
export type WebsiteConnection = {
  readonly __typename?: "WebsiteConnection";
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<WebsiteEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type WebsiteCreateInput = {
  readonly courseDetailsBox?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly courseDetailsParagraph?: InputMaybe<Scalars["String"]>;
  readonly courseDetailsTitle?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  readonly internships?: InputMaybe<AssetCreateManyInlineInput>;
  readonly sections?: InputMaybe<SectionCreateManyInlineInput>;
  readonly startDate: Scalars["DateTime"];
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type WebsiteCreateManyInlineInput = {
  /** Connect multiple existing Website documents */
  readonly connect?: InputMaybe<ReadonlyArray<WebsiteWhereUniqueInput>>;
  /** Create and connect multiple existing Website documents */
  readonly create?: InputMaybe<ReadonlyArray<WebsiteCreateInput>>;
};

export type WebsiteCreateOneInlineInput = {
  /** Connect one existing Website document */
  readonly connect?: InputMaybe<WebsiteWhereUniqueInput>;
  /** Create and connect one Website document */
  readonly create?: InputMaybe<WebsiteCreateInput>;
};

/** An edge in a connection. */
export type WebsiteEdge = {
  readonly __typename?: "WebsiteEdge";
  /** A cursor for use in pagination. */
  readonly cursor: Scalars["String"];
  /** The item at the end of the edge. */
  readonly node: Website;
};

/** Identifies documents */
export type WebsiteManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<WebsiteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<WebsiteWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<WebsiteWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly courseDetailsBox?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly courseDetailsBox_contains_all?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly courseDetailsBox_contains_none?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly courseDetailsBox_contains_some?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly courseDetailsBox_not?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly courseDetailsParagraph?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly courseDetailsParagraph_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly courseDetailsParagraph_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly courseDetailsParagraph_in?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** All values that are not equal to given value. */
  readonly courseDetailsParagraph_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly courseDetailsParagraph_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly courseDetailsParagraph_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly courseDetailsParagraph_not_in?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** All values not starting with the given string. */
  readonly courseDetailsParagraph_not_starts_with?: InputMaybe<
    Scalars["String"]
  >;
  /** All values starting with the given string. */
  readonly courseDetailsParagraph_starts_with?: InputMaybe<Scalars["String"]>;
  readonly courseDetailsTitle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly courseDetailsTitle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly courseDetailsTitle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly courseDetailsTitle_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly courseDetailsTitle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly courseDetailsTitle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly courseDetailsTitle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly courseDetailsTitle_not_in?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** All values not starting with the given string. */
  readonly courseDetailsTitle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly courseDetailsTitle_starts_with?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly internships_every?: InputMaybe<AssetWhereInput>;
  readonly internships_none?: InputMaybe<AssetWhereInput>;
  readonly internships_some?: InputMaybe<AssetWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly sections_every?: InputMaybe<SectionWhereInput>;
  readonly sections_none?: InputMaybe<SectionWhereInput>;
  readonly sections_some?: InputMaybe<SectionWhereInput>;
  readonly startDate?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly startDate_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly startDate_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly startDate_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly startDate_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly startDate_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly startDate_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly startDate_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum WebsiteOrderByInput {
  CourseDetailsBoxAsc = "courseDetailsBox_ASC",
  CourseDetailsBoxDesc = "courseDetailsBox_DESC",
  CourseDetailsParagraphAsc = "courseDetailsParagraph_ASC",
  CourseDetailsParagraphDesc = "courseDetailsParagraph_DESC",
  CourseDetailsTitleAsc = "courseDetailsTitle_ASC",
  CourseDetailsTitleDesc = "courseDetailsTitle_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StartDateAsc = "startDate_ASC",
  StartDateDesc = "startDate_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type WebsiteUpdateInput = {
  readonly courseDetailsBox?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly courseDetailsParagraph?: InputMaybe<Scalars["String"]>;
  readonly courseDetailsTitle?: InputMaybe<Scalars["String"]>;
  readonly internships?: InputMaybe<AssetUpdateManyInlineInput>;
  readonly sections?: InputMaybe<SectionUpdateManyInlineInput>;
  readonly startDate?: InputMaybe<Scalars["DateTime"]>;
};

export type WebsiteUpdateManyInlineInput = {
  /** Connect multiple existing Website documents */
  readonly connect?: InputMaybe<ReadonlyArray<WebsiteConnectInput>>;
  /** Create and connect multiple Website documents */
  readonly create?: InputMaybe<ReadonlyArray<WebsiteCreateInput>>;
  /** Delete multiple Website documents */
  readonly delete?: InputMaybe<ReadonlyArray<WebsiteWhereUniqueInput>>;
  /** Disconnect multiple Website documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<WebsiteWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Website documents */
  readonly set?: InputMaybe<ReadonlyArray<WebsiteWhereUniqueInput>>;
  /** Update multiple Website documents */
  readonly update?: InputMaybe<
    ReadonlyArray<WebsiteUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple Website documents */
  readonly upsert?: InputMaybe<
    ReadonlyArray<WebsiteUpsertWithNestedWhereUniqueInput>
  >;
};

export type WebsiteUpdateManyInput = {
  readonly courseDetailsBox?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly courseDetailsParagraph?: InputMaybe<Scalars["String"]>;
  readonly courseDetailsTitle?: InputMaybe<Scalars["String"]>;
  readonly startDate?: InputMaybe<Scalars["DateTime"]>;
};

export type WebsiteUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: WebsiteUpdateManyInput;
  /** Document search */
  readonly where: WebsiteWhereInput;
};

export type WebsiteUpdateOneInlineInput = {
  /** Connect existing Website document */
  readonly connect?: InputMaybe<WebsiteWhereUniqueInput>;
  /** Create and connect one Website document */
  readonly create?: InputMaybe<WebsiteCreateInput>;
  /** Delete currently connected Website document */
  readonly delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Website document */
  readonly disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Website document */
  readonly update?: InputMaybe<WebsiteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Website document */
  readonly upsert?: InputMaybe<WebsiteUpsertWithNestedWhereUniqueInput>;
};

export type WebsiteUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: WebsiteUpdateInput;
  /** Unique document search */
  readonly where: WebsiteWhereUniqueInput;
};

export type WebsiteUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: WebsiteCreateInput;
  /** Update document if it exists */
  readonly update: WebsiteUpdateInput;
};

export type WebsiteUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: WebsiteUpsertInput;
  /** Unique document search */
  readonly where: WebsiteWhereUniqueInput;
};

/** Identifies documents */
export type WebsiteWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<WebsiteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<WebsiteWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<WebsiteWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars["String"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly courseDetailsBox?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly courseDetailsBox_contains_all?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly courseDetailsBox_contains_none?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly courseDetailsBox_contains_some?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly courseDetailsBox_not?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  readonly courseDetailsParagraph?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly courseDetailsParagraph_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly courseDetailsParagraph_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly courseDetailsParagraph_in?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** All values that are not equal to given value. */
  readonly courseDetailsParagraph_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly courseDetailsParagraph_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly courseDetailsParagraph_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly courseDetailsParagraph_not_in?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** All values not starting with the given string. */
  readonly courseDetailsParagraph_not_starts_with?: InputMaybe<
    Scalars["String"]
  >;
  /** All values starting with the given string. */
  readonly courseDetailsParagraph_starts_with?: InputMaybe<Scalars["String"]>;
  readonly courseDetailsTitle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  readonly courseDetailsTitle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  readonly courseDetailsTitle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  readonly courseDetailsTitle_in?: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  readonly courseDetailsTitle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  readonly courseDetailsTitle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  readonly courseDetailsTitle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  readonly courseDetailsTitle_not_in?: InputMaybe<
    ReadonlyArray<Scalars["String"]>
  >;
  /** All values not starting with the given string. */
  readonly courseDetailsTitle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  readonly courseDetailsTitle_starts_with?: InputMaybe<Scalars["String"]>;
  readonly createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars["ID"]>;
  readonly internships_every?: InputMaybe<AssetWhereInput>;
  readonly internships_none?: InputMaybe<AssetWhereInput>;
  readonly internships_some?: InputMaybe<AssetWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly sections_every?: InputMaybe<SectionWhereInput>;
  readonly sections_none?: InputMaybe<SectionWhereInput>;
  readonly sections_some?: InputMaybe<SectionWhereInput>;
  readonly startDate?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly startDate_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly startDate_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly startDate_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly startDate_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly startDate_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly startDate_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly startDate_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<Scalars["DateTime"]>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Website record uniquely */
export type WebsiteWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars["ID"]>;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type AgendaWeekFragment = {
  readonly __typename: "AgendaWeek";
  readonly id: string;
  readonly title: string;
  readonly items: ReadonlyArray<string>;
};

export type ReasonFragment = {
  readonly __typename: "Reason";
  readonly id: string;
  readonly title: string;
  readonly description?: string | null | undefined;
  readonly image?:
    | {
        readonly __typename?: "Asset";
        readonly width?: number | null | undefined;
        readonly height?: number | null | undefined;
        readonly url: string;
      }
    | null
    | undefined;
};

export type FaqFragment = {
  readonly __typename: "Faq";
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export type AuthorFragment = {
  readonly __typename: "Author";
  readonly id: string;
  readonly name: string;
  readonly bio?: string | null | undefined;
  readonly socialMedias: ReadonlyArray<string>;
  readonly avatar?:
    | { readonly __typename?: "Asset"; readonly url: string }
    | null
    | undefined;
};

export type InternshipsFragment = {
  readonly __typename?: "Website";
  readonly internships: ReadonlyArray<{
    readonly __typename?: "Asset";
    readonly id: string;
    readonly url: string;
    readonly width?: number | null | undefined;
    readonly height?: number | null | undefined;
  }>;
};

export type CourseDetailsFragment = {
  readonly __typename?: "Website";
  readonly courseDetailsTitle?: string | null | undefined;
  readonly courseDetailsParagraph?: string | null | undefined;
  readonly courseDetailsBox: ReadonlyArray<string>;
};

export type SectionsFragment = {
  readonly __typename?: "Website";
  readonly sections: ReadonlyArray<{
    readonly __typename?: "Section";
    readonly id: string;
    readonly title: string;
    readonly subTitle?: string | null | undefined;
    readonly content: ReadonlyArray<
      | {
          readonly __typename: "AgendaWeek";
          readonly id: string;
          readonly title: string;
          readonly items: ReadonlyArray<string>;
        }
      | {
          readonly __typename: "Author";
          readonly id: string;
          readonly name: string;
          readonly bio?: string | null | undefined;
          readonly socialMedias: ReadonlyArray<string>;
          readonly avatar?:
            | { readonly __typename?: "Asset"; readonly url: string }
            | null
            | undefined;
        }
      | {
          readonly __typename: "Faq";
          readonly id: string;
          readonly question: string;
          readonly answer: string;
        }
      | {
          readonly __typename: "Reason";
          readonly id: string;
          readonly title: string;
          readonly description?: string | null | undefined;
          readonly image?:
            | {
                readonly __typename?: "Asset";
                readonly width?: number | null | undefined;
                readonly height?: number | null | undefined;
                readonly url: string;
              }
            | null
            | undefined;
        }
    >;
  }>;
};

export type WebsiteQueryVariables = Exact<{ [key: string]: never }>;

export type WebsiteQuery = {
  readonly __typename?: "Query";
  readonly websites: ReadonlyArray<{
    readonly __typename?: "Website";
    readonly id: string;
    readonly startDate: string;
    readonly courseDetailsTitle?: string | null | undefined;
    readonly courseDetailsParagraph?: string | null | undefined;
    readonly courseDetailsBox: ReadonlyArray<string>;
    readonly internships: ReadonlyArray<{
      readonly __typename?: "Asset";
      readonly id: string;
      readonly url: string;
      readonly width?: number | null | undefined;
      readonly height?: number | null | undefined;
    }>;
    readonly sections: ReadonlyArray<{
      readonly __typename?: "Section";
      readonly id: string;
      readonly title: string;
      readonly subTitle?: string | null | undefined;
      readonly content: ReadonlyArray<
        | {
            readonly __typename: "AgendaWeek";
            readonly id: string;
            readonly title: string;
            readonly items: ReadonlyArray<string>;
          }
        | {
            readonly __typename: "Author";
            readonly id: string;
            readonly name: string;
            readonly bio?: string | null | undefined;
            readonly socialMedias: ReadonlyArray<string>;
            readonly avatar?:
              | { readonly __typename?: "Asset"; readonly url: string }
              | null
              | undefined;
          }
        | {
            readonly __typename: "Faq";
            readonly id: string;
            readonly question: string;
            readonly answer: string;
          }
        | {
            readonly __typename: "Reason";
            readonly id: string;
            readonly title: string;
            readonly description?: string | null | undefined;
            readonly image?:
              | {
                  readonly __typename?: "Asset";
                  readonly width?: number | null | undefined;
                  readonly height?: number | null | undefined;
                  readonly url: string;
                }
              | null
              | undefined;
          }
      >;
    }>;
  }>;
};

export const InternshipsFragmentDoc = gql`
  fragment InternshipsFragment on Website {
    internships {
      id
      url
      width
      height
    }
  }
`;
export const CourseDetailsFragmentDoc = gql`
  fragment CourseDetailsFragment on Website {
    courseDetailsTitle
    courseDetailsParagraph
    courseDetailsBox
  }
`;
export const AgendaWeekFragmentDoc = gql`
  fragment AgendaWeekFragment on AgendaWeek {
    __typename
    id
    title
    items
  }
`;
export const ReasonFragmentDoc = gql`
  fragment ReasonFragment on Reason {
    __typename
    id
    title
    description
    image {
      width
      height
      url
    }
  }
`;
export const FaqFragmentDoc = gql`
  fragment FaqFragment on Faq {
    __typename
    id
    question
    answer
  }
`;
export const AuthorFragmentDoc = gql`
  fragment AuthorFragment on Author {
    __typename
    id
    name
    avatar {
      url
    }
    bio
    socialMedias
  }
`;
export const SectionsFragmentDoc = gql`
  fragment SectionsFragment on Website {
    sections {
      id
      title
      subTitle
      content {
        ...AgendaWeekFragment
        ...ReasonFragment
        ...FaqFragment
        ...AuthorFragment
      }
    }
  }
  ${AgendaWeekFragmentDoc}
  ${ReasonFragmentDoc}
  ${FaqFragmentDoc}
  ${AuthorFragmentDoc}
`;
export const WebsiteDocument = gql`
  query Website {
    websites(first: 1) {
      id
      startDate
      ...CourseDetailsFragment
      ...InternshipsFragment
      ...SectionsFragment
    }
  }
  ${CourseDetailsFragmentDoc}
  ${InternshipsFragmentDoc}
  ${SectionsFragmentDoc}
`;
export type WebsiteQueryResult = Apollo.QueryResult<
  WebsiteQuery,
  WebsiteQueryVariables
>;
