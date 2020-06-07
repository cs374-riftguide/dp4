// Type definitions used throughout the project
// This file provides type checking hints for Visual Studio Code

type GuideTier =
  | "iron"
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "diamond"
  | "master"
  | "grandmaster"
  | "challenger";

interface Guide {
  id: string;
  title: string;
  tier: GuideTier;
  author: string;
  createdAt: string;
  upvotes: number;
  downvotes: number;
  views: number;
  content: GuideContent[];
}

type GuideContentType = "empty" | "text" | "video";

interface GuideContent {
  type: GuideContentType;
  summary: string;
  content?: string;
  videoUrl?: string;
}

interface SearchResultItem {
  id: string;
  title: string;
  tier: GuideTier;
  author: string;
  createdAtDate: Date;
  upvotes: number;
  downvotes: number;
  views: number;
  contentTypes: Exclude<GuideContentType, "empty">[];
}
