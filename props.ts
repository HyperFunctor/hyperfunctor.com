import { MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  AuthorFragment,
  CourseDetailsFragment,
  FaqFragment,
  ReasonFragment,
} from "./generated/graphql";
import { Replace, SectionMetadata } from "./types";

export type CourseDetailsFragmentMDX = Replace<
  Replace<
    CourseDetailsFragment,
    "courseDetailsParagraph",
    MDXRemoteSerializeResult | null | undefined
  >,
  "courseDetailsBox",
  readonly (MDXRemoteSerializeResult | null | undefined)[]
>;

export type SectionMetadataMDX = Replace<
  SectionMetadata,
  "subTitle",
  MDXRemoteSerializeResult | null | undefined
>;

export type AuthorFragmentMDX = Replace<
  AuthorFragment,
  "bio",
  MDXRemoteSerializeResult | null | undefined
>;

export type FaqFragmentMDX = Replace<
  FaqFragment,
  "answer",
  MDXRemoteSerializeResult | null | undefined
>;

export type ReasonFragmentMDX = Replace<
  ReasonFragment,
  "description",
  MDXRemoteSerializeResult | null | undefined
>;
