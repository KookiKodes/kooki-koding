//* Packages
import { Octokit } from "@octokit/rest";
import { createTokenAuth } from "@octokit/auth-token";

//* Helper
import { getProjectFiles } from "@helper/projectApi";

//* Interfaces
import { NextApiRequest, NextApiResponse } from "next";
import { GithubTree } from "@interfaces/ProjectFileInterface";

const OWNER = "KookiKodes";
const REPO = "github-build-projects";
const octokit = new Octokit({
  auth: process.env.github_auth,
  userAgent: OWNER,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const masterBranch = await octokit.request(
      "GET /repos/{owner}/{repo}/branches/master",
      {
        owner: OWNER,
        repo: REPO,
      }
    );

    const TREE_SHA: string = Reflect.get(masterBranch.data.commit, "sha");

    const treeReq = await octokit.request(
      "GET /repos/{owner}/{repo}/git/trees/{tree_sha}",
      {
        owner: OWNER,
        repo: REPO,
        tree_sha: TREE_SHA,
        recursive: "true",
      }
    );

    const tree: GithubTree[] = Reflect.get(treeReq.data, "tree");

    const projects = await getProjectFiles({
      tree,
      octokit,
      options: {
        owner: OWNER,
        repo: REPO,
      },
    });

    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        "Something went wrong when trying to fetch the data, please try again later"
      );
  }
  res.end();
};
