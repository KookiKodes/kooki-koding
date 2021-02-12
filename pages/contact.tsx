//* Packages
import React from "react";
import Head from "next/head";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";
import cuid from "cuid";

//* Components
import FormInput from "../components/Form/FormInput";
import FormBtn from "@components/Form/FormBtn";
import MessageModal from "@components/MessageModal";

//* Variants
import formVariants from "@components/Form/formVariants";

//* Interfaces
import { PostData } from "@components/Form/FormInterface";

//* Static
import FInputs from "@components/static/formInputs";

//!Need to update this as it's causing a lot of issues when a person visits the page leaves and then comes back. The html is not updating in react to reflect the update serverside.

export async function getServerSideProps() {
  const uids = FInputs.reduce((arr: string[], item) => [...arr, cuid()], []);
  return { props: { uids } };
}

export default function Contact(props: { uids: string[] }) {
  const { colors, themeName } = useThemedContext();
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [formInfo, setFormInfo] = React.useState(defFormInfo);
  const [sentMessage, setSentMessage] = React.useState("");
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
    const fieldInfo: PostData[] = [];

    for (let field of event.target) {
      if (field.type !== "submit") {
        const { name, value } = field;
        let newName: string;

        if (props.uids.includes(name)) {
          newName = formInfo[name].name;
          field.value = "";
        } else newName = "honeypot";

        fieldInfo.push({ name: newName, value });
      }
    }

    setFormInfo(defFormInfo());

    const res = await fetch("/api/email", {
      body: JSON.stringify(fieldInfo),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const message = await res.text();
    setSentMessage(message);

    setTimeout(() => {
      setSentMessage("");
    }, 3500);
  }

  function checkAllValid(): boolean {
    const keys = Object.keys(formInfo);
    const totalFields = keys.length;
    const totalValid = keys.reduce((total, name) => {
      if (formInfo[name].isValid) total++;
      return total;
    }, 0);
    return totalFields === totalValid;
  }

  function defFormInfo() {
    return FInputs.reduce((state, { name }, index) => {
      state[`${props.uids[index]}`] = {
        name,
        error: "",
        isValid: false,
      };
      return state;
    }, {});
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
    if (checkAllValid()) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }

  async function formValidation(event: React.FormEvent) {
    const t = event.target as HTMLTextAreaElement | HTMLInputElement;
    const { value, name, type } = t;
    let isValid = false;
    let error: string;

    switch (true) {
      case type === "email":
        isValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        error = isValid ? "" : "Please provide a valid email address";
        updateFormValues(name, {
          error,
          isValid,
        });
        break;
      case type === "text" || type === "textarea":
        isValid = value.length > 0;
        error = isValid ? "" : "Please fill the above input field";
        updateFormValues(name, {
          error,
          isValid,
        });
        break;
      default:
        break;
    }

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
              validation={formValidation}
              onChange={() => formChange()}
              error={formInfo[uid].error}
              uid={uid}
              {...cProps}
            />
          );
        })}
        <FormBtn isDisabled={isDisabled} />
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
        {sentMessage && (
          <MessageModal
            key={sentMessage}
            message={sentMessage}
            removeMessage={() => setSentMessage("")}
          />
        )}
      </AnimatePresence>
    </>
  );
}
