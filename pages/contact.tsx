//* Packages
// import {useState, useEffect} from "react";
import { NextPage } from "next";
import Head from "next/head";

//* Components
import { ContactForm } from "@components/form/contact-form";
import { MotionBox } from "@components/framer";

//* helpers
import { TestGroup } from "@helper/Test";
import { firstToUpper } from "@helper/utilities";
//* hooks
import useComponentState from "@hooks/useComponentState";

interface Props {
  uids: string[];
}

const ContactPage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Devin Jackson | Send me a message</title>
      </Head>
      <MotionBox
        as="section"
        w="100%"
        minH="100vh"
        h="max-content"
        maxW="1080px"
        display="flex"
        justifyContent="center"
        alignItems={["start", "start", "start", "center"]}
      >
        <ContactForm />
      </MotionBox>
    </>
  );
};

// ContactPage.getInitialProps = async ({ req, res }) => {
// 	const uids = FInputs.reduce((arr: string[], item) => [...arr, cuid()], []);
// 	return { uids };
// };

export default ContactPage;
