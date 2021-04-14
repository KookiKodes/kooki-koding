//* Interfaces
import { Octokit } from "@octokit/rest";

export type FileInfo = {
  root: string;
  name: string;
  downloadUrl: string;
};

export interface ProjectFiles {
  title: string;
  css: FileInfo[]; //CSS files stored in this arr
  js: FileInfo[]; //JS files stored in this arr
  html: FileInfo[]; //HTML files stored in this arr
  img: FileInfo[];
  desc: string;
  placeholderImg: string; //Download URL for img
}

export interface Projects {
  [key: string]: ProjectFiles;
}

export type Options = {
  owner?: string;
  repo?: string;
  tree_sha?: string;
  path?: string;
};

export interface BuildProjectFiles {
  octokit: Octokit;
  options: Options;
  files: Projects;
}

export interface GetProjectFiles {
  tree: GithubTree[];
  octokit: Octokit;
  options?: Options;
}

export interface GithubTree {
  path?: string;
  mode?: string;
  type?: string;
  sha?: string;
  url?: string;
}
