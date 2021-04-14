//* Interfaces
import {
  ProjectFiles,
  GetProjectFiles,
  BuildProjectFiles,
  Projects,
} from "@interfaces/ProjectFileInterface";
import { Octokit } from "@octokit/rest";

const FolderTypes = ["dir", "tree", "folder"];
const ImageTypes = ["png", "jpg", "jpeg", "gif"];

const getProjectFileTemp = (title: string): ProjectFiles => {
  return {
    title,
    css: [],
    js: [],
    html: [],
    img: [],
    desc: "",
    placeholderImg: "",
  };
};

export const reqFromDownloadURL = async (url: string, octokit: Octokit) => {
  const { data } = await octokit.request(`GET ${url}`);
  return data;
};

export const buildProjectFiles = async ({
  files,
  octokit,
  options,
}: BuildProjectFiles): Promise<Projects> => {
  const { owner, repo, path } = options;
  if (octokit && owner && repo && path) {
    const { data } = await octokit.repos.getContent({ owner, repo, path });

    if (data instanceof Array) {
      for (let file of data) {
        const { type, download_url, name } = file,
          [root, _] = path.split("/"),
          [__, ext] = name.split(".");

        if (!FolderTypes.includes(type) && name && download_url) {
          const fileData = {
            root,
            name,
            downloadUrl: download_url,
          };

          switch (true) {
            case !(root in files):
              files[root] = getProjectFileTemp(root);
            case name === "desc.txt":
              const desc = await reqFromDownloadURL(download_url, octokit);
              files[root].desc = desc;
              break;
            case Object.keys(files[root]).includes(ext):
              files[root][ext].push(fileData);
              break;
            case ImageTypes.includes(ext) && name === `placeholder.${ext}`:
              files[root].placeholderImg = download_url;
              break;
            case ImageTypes.includes(ext):
              files[root].img.push(fileData);
              break;
          }
        }
      }
    }
  }
  return files;
};

//Main function for building a json like array of objects. Each object containing a title, all of the css, js, and html files name and downloadURL and then a brief description of the project

export const getProjectFiles = async (
  params: GetProjectFiles
): Promise<Projects> => {
  const { tree, octokit, options } = params;
  let files: Projects = {};

  for (let { path, type, sha, url } of tree) {
    if (path && type && sha && url) {
      // Get file content as a string for use later
      if (FolderTypes.includes(type) && options) {
        // Need file path, so we will always make sure to define the path here
        Reflect.set(options, "path", path);

        //Get FileInfo array
        files = await buildProjectFiles({
          octokit,
          options,
          files,
        });
      }
    }
  }

  return files;
};
