//* Packages
import React, { MutableRefObject } from "react";
import root from "react-shadow";
import { useRouter } from "next/router";
import parse from "html-react-parser";

//* Utility
import { htmlFileOptions } from "../../lib/utils/htmlFileOptions";

interface Props {
  htmlFile: string;
  availPaths: MutableRefObject<string[]>;
}

const Project = ({ htmlFile, availPaths }: Props) => {
  const router = useRouter();
  const availPath = availPaths.current.includes(router.asPath);

  React.useEffect(() => {
    router.prefetch("/404");
    if (!availPath) {
      router.push("/404");
    }
  }, []);

  const { projectTitle } = router.query;
  let title: string, path: string;

  if (projectTitle instanceof Array) {
    title = projectTitle[0];
    path = projectTitle.join("/");
  } else {
    title = projectTitle as string;
    path = projectTitle as string;
  }

  return (
    <>
      {availPath && (
        <root.main>
          {parse(htmlFile, htmlFileOptions({ title, path, availPaths }))}
        </root.main>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
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
              <title>Test Page</title>
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
                <a href="/">Home</a>
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

  return { props: { htmlFile } };
}

export default Project;
