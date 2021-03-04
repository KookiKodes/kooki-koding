//* Packages
import { HTMLReactParserOptions, domToReact } from "html-react-parser";
import React, { MutableRefObject } from "react";
import Head from "next/head";
import Link from "next/link";
import { Element } from "node_modules/domhandler/lib/node";

//* Utils
import { reactEventList } from "../static/reactEventList";

type ReactProp = Record<string, string | Function>;

interface HtmlFileOptions {
  title: string;
  path: string;
  availPaths: MutableRefObject<string[]>;
}

interface ToReactEvent {
  obj: object;
  propName: string;
  value: string;
}

const stringToFunction = (str: string): Function => {
  const trimmedStr = str.trim(),
    isNotFuncRef = trimmedStr.includes("function") || trimmedStr.includes("=>"),
    hasBracketOnLastLine = trimmedStr[trimmedStr.length - 1] === "}";
  let fnIndex, fnHead, fnBody, args;

  if (hasBracketOnLastLine && isNotFuncRef) {
    fnIndex = trimmedStr.indexOf("{");
    fnBody = trimmedStr.substring(fnIndex + 1, str.lastIndexOf("}"));
    fnHead = trimmedStr.substring(0, fnIndex).trim();
    args = fnHead
      .substring(fnHead.indexOf("(") + 1, fnHead.lastIndexOf(")"))
      .split(",");
    args.push(fnBody);
  } else if (!hasBracketOnLastLine && isNotFuncRef) {
    fnIndex = trimmedStr.indexOf("=>");
    fnHead = trimmedStr.substring(0, fnIndex - 1);
    fnBody = trimmedStr.substring(fnIndex + 2, str.length);
    args = fnHead
      .substring(fnHead.indexOf("(") + 1, fnHead.lastIndexOf(")"))
      .split(",");
    args.push(fnBody);
  } else {
    fnIndex = trimmedStr.indexOf("(");
    args = trimmedStr
      .substring(fnIndex + 1, trimmedStr.lastIndexOf(")"))
      .split(",");
    args.push(trimmedStr);
  }

  return new Function(...args);
};

const toReactEvent = ({ obj, propName, value }: ToReactEvent): void => {
  const newPropName = reactEventList[propName],
    fn = stringToFunction(value);
  delete obj[propName];
  Reflect.set(obj, newPropName, fn);
};

const attribsToReactProps = (attribs: object): ReactProp => {
  if (attribs) {
    const props = Object.entries(attribs).reduce(
      (obj: ReactProp, [attr, value]) => {
        if (Reflect.has(reactEventList, attr)) {
          toReactEvent({ obj, propName: attr, value });
        } else Reflect.set(obj, attr, value);
        return obj;
      },
      {}
    );
    return props;
  }
  return {};
};

export const htmlFileOptions = (
  options: HtmlFileOptions
): HTMLReactParserOptions => {
  return {
    replace: (domNode) => {
      const dom = domNode as Element;
      const props = dom.attribs ? attribsToReactProps(dom.attribs) : null;

      if (dom.name && dom.name !== "!doctype") {
        const { name } = dom,
          excludedNames = ["html", "body", "head"],
          includeInHead = [
            "script",
            "title",
            "meta",
            "link",
            "base",
            "noscript",
          ];
        let Main, link;

        if (excludedNames.includes(name)) {
          Main = React.createElement(
            React.Fragment,
            props,
            domToReact(dom.children, htmlFileOptions(options))
          );
        } else {
          Main = React.createElement(
            name,
            props,
            domToReact(dom.children, htmlFileOptions(options))
          );
        }

        switch (true) {
          case includeInHead.includes(name):
            return React.createElement(Head, null, Main);
          case dom.name === "a" && Reflect.has(props as object, "href"):
            link = `/projects/${options.title}${dom.attribs.href}`;

            if (!options.availPaths.current.includes(link)) {
              options.availPaths.current.push(link);
            }

            Reflect.set(props as object, "href", link);
            delete Main.href;
            return React.createElement(Link, { href: link }, Main);
          default:
            return Main;
        }
      }
    },
    trim: true,
  };
};
