//* Packages
import React from "react";
import Head from "next/head";
import { AnimatePresence, motion, useAnimation} from "framer-motion";
import { useThemedContext } from "kooki-components";
import cuid from "cuid";

//* Components
import FormInput from "../components/Form/FormInput";
import FormBtn from "@components/Form/FormBtn";
import MessageModal from "@components/MessageModal";

//* Variants
import formVariants from "@components/Form/formVariants";

//* Helper Fns
import { getFieldInfo, defFormInfo, checkAllValid, formValidation } from "@components/Form/helperFns";

//* Static
import FInputs from "@components/static/formInputs";

export async function getServerSideProps() {
  const uids = FInputs.reduce((arr: string[], item) => [...arr, cuid()], []);
  return { props: { uids } };
}

export default function Contact(props: { uids: string[] }) {
  const { colors, themeName } = useThemedContext();
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [formInfo, setFormInfo] = React.useState(defFormInfo(props.uids));
  const [sentMessage, setSentMessage] = React.useState(["", ""]);
  const [isLoading, setIsLoading] = React.useState(false);
  const container = useAnimation();

  React.useEffect(() => {
    container.start("visible");
  }, []);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);

    const fieldInfo = await getFieldInfo({ event, uids: props.uids, formInfo });

    setFormInfo(defFormInfo(props.uids));

    const res = await fetch("/api/email", {
      body: JSON.stringify(fieldInfo),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { message, error } = await res.json();
    setSentMessage([message, error]);
    setIsLoading(false);

    setTimeout(() => {
      setSentMessage(["", ""]);
    }, 3500);
  }

  function updateFormValues(
    name: string,
    values: { isValid: boolean; error: string }
  ) {
    setFormInfo((formInfo) => {
      return {
        ...formInfo,
        [name]: Object.assign(formInfo[name], values),
      };
    });
  }

  async function formChange() {
    const valid = await checkAllValid(formInfo);

    if (valid) setIsDisabled(false); 
    else setIsDisabled(true);
  }

  async function validate(event: React.FormEvent) {
    const {name, error, isValid} = await formValidation(event);
    updateFormValues(name, {error, isValid});
    formChange();
  }

  return (
    <>
      <Head>
        <title>Devin Jackson | Send me a message</title>
      </Head>
      <header className="flex self-center justify-center w-5/6 mt-16 h-30 xl:w-3/6">
        <h1 className="text-4xl xl:text-6xl">
          Thanks for stopping by. How may I help you?
        </h1>
      </header>
      <motion.form
        initial="hidden"
        variants={formVariants.form(colors)}
        animate={container}
        className="relative grid w-5/6 grid-cols-1 grid-rows-4 px-6 mt-12 mb-12 gap-y-5 xl:gap-x-10 xl:grid-rows-3 h-4/6 xl:h-auto md:w-3/6 xl:grid-cols-2 lg:grid-rows-2"
        onSubmit={handleSubmit}
      >
        {FInputs.map((cProps, index) => {
          const uid = props.uids[index];

          return (
            <FormInput
              key={index}
              validation={validate}
              onChange={() => formChange()}
              error={formInfo[uid].error}
              uid={uid}
              {...cProps}
            />
          );
        })}
        <FormBtn isDisabled={isDisabled} isLoading={isLoading} />
        <label />
        <input
          className="absolute top-0 left-0 z-0 w-0 h-0 opacity-0"
          type="text"
          name="name"
          autoComplete="off"
          id="name"
          placeholder="your name here..."
        />
      </motion.form>
      <AnimatePresence>
        {(sentMessage[0] || sentMessage[1]) && (
          <MessageModal
            key={sentMessage[0] || sentMessage[1]}
            message={sentMessage}
            removeMessage={() => setSentMessage(["", ""])}
          />
        )}
      </AnimatePresence>
    </>
  );
}