export interface BlogPostItem {
  title: string;
  description: string;
  imgUrl?: string;
  date: string;
  authors: BlogPostAuthor;
  tags: BlogPostTags;
}

export interface BlogPostAuthor {
  name: string;
  avatarUrl: string;
}

export type BlogPostTags = string[];
