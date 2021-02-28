//* Packages
import React from "react";
import Head from "next/head";
import root from "react-shadow";
import { NextPage } from "next";
import { useRouter } from "next/router";
import parse from "html-react-parser";

//* Utility
import { htmlFileOptions } from "../../lib/utils/htmlFileOptions";

interface Props {
  htmlFile: string;
}

const Project: NextPage<Props> = ({ htmlFile }: Props) => {
  const router = useRouter();
  const { projectTitle } = router.query;
  let title: string, path: string;

  if (projectTitle instanceof Array) {
    title = projectTitle[0];
    path = projectTitle.join("/");
  } else {
    title = projectTitle as string;
    path = projectTitle as string;
  }

  return <root.main>{parse(htmlFile, htmlFileOptions(title, path))}</root.main>;
};

Project.getInitialProps = async function ({ req, res }) {
  console.log(req?.url);
  // const data = await fetch("http://localhost:3000/api/file", {
  //   method: "GET",
  //   headers: {
  //     domain: "localhost",
  //     path: "/",
  //   },
  // });
  // const text = await data.text();

  let htmlFile = `<!DOCTYPE html>
          <html>
            <head>
              <title>You're Mine</title>
              <style>
                h1 {
                  margin: 0;
                  color: green;
                }
                main {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100vw;
                  height: 100vh;
                  background: black;
                }
                button {
                  background: none;
                  border: none;
                }
              </style
            </head>
            <body>
              <main>
                <h1 onmouseover="() => console.log('hello')">Hello World</h1>
                <a href="/about">click me</a>
                <button onclick="function (e) {
                  const hello = (e) => console.log(e);
                  hello(e);
                }" onmouseenter="test()">click me</button>
              </main>
              <script type="text/javascript">
                const test = (e) => {
                  console.log('secret')
                }
              </script>
            </body>
          </html>
        `;

  return { htmlFile };
};

export default Project;
