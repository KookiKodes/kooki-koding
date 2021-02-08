//* Packages
import React, { SyntheticEvent } from "react";
import Head from "next/head";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
  useCycle,
} from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import FormInput from "../components/subcomponents/FormInput";
import FormBtn from "@components/subcomponents/FormBtn";

//* Variants
import formVariants from "@components/variants/formVariants";

//* Static
import FInputs from "@components/static/formInputs";

export default function Contact() {
  const { colors, themeName } = useThemedContext();
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [formInfo, setFormInfo] = React.useState(defFormInfo);
  const container = useAnimation();

  React.useEffect(() => {
    container.start("visible");
  }, []);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

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
    return FInputs.reduce((state, { name, type }) => {
      state[name] = {
        type,
        error: "",
        isValid: false,
      };
      return state;
    }, {});
  }

  function updateFormValue(name: string, value: any, valName: string) {
    setFormInfo((formInfo) => {
      const newFormValue = { ...formInfo[name], [valName]: value };
      return { ...formInfo, [name]: newFormValue };
    });
  }

  function updateFormValues(name: string, values: { type; isValid; error }) {
    setFormInfo((formInfo) => {
      return {
        ...formInfo,
        [name]: values,
      };
    });
  }

  function formValidation(event: React.FormEvent) {
    const t = event.target as HTMLTextAreaElement | HTMLInputElement;
    const { value, name, type } = t;

    switch (true) {
      case type === "email":
        const isValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        const error = isValid ? "" : "Please provide a valid email address";
        updateFormValues(name, { type, error, isValid });
        break;
      case type === "text" || type === "textarea":
        const valid = value.length > 0;
        const message = valid ? "" : "Please fill the above input field";
        updateFormValues(name, { type, error: message, isValid: valid });
        break;
      default:
        break;
    }

    if (checkAllValid()) {
      setIsDisabled(false);
    } else setIsDisabled(true);
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
      >
        {FInputs.map((props, index) => {
          props = { ...props };
          return (
            <FormInput
              key={index}
              validation={formValidation}
              error={formInfo[props.name].error}
              {...props}
            />
          );
        })}
        <FormBtn isDisabled={isDisabled} />
      </motion.form>
    </>
  );
}
