//* Packages
import React, { SyntheticEvent } from "react";
import Head from "next/head";
import {
  AnimateSharedLayout,
  motion,
  useAnimation,
  useCycle,
} from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import FormInput from "../components/subcomponents/FormInput";
import FormBtn from '@components/subcomponents/FormBtn';

//* Variants
import formVariants from "@components/variants/formVariants";

//* Static
import FInputs from "@components/static/formInputs";

export default function Contact() {
  const { colors, themeName } = useThemedContext();
  const [isDisabled, toggleIsDisabled] = useCycle(true, false);
  const [formInfo, setFormInfo] = React.useState(defFormInfo);
  const container = useAnimation();

  React.useEffect(() => {
    container.start("visible");
  }, []);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  function defFormInfo() {
    return FInputs.reduce((state, {name, type}) => {
      state[name] = {
        type,
        error: '',
        isValid: true,
      };
      return state;
    }, {})
  }

  function updateFormValue(name: string, value: any, valName: string) {
    setFormInfo((formInfo) => {
      console.log('test')
      const newFormValue = {...formInfo[name], [valName]: value};
      return Object.assign(formInfo, {...formInfo, [name]:newFormValue});
    })
  }

  function formValidation(event: React.FormEvent) {
    const t = event.target as HTMLTextAreaElement | HTMLInputElement;
    const {value, name, type} = t;

    switch (type) {
      case 'email':
        const isValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        const error = isValid ? '' : 'Please provide a valid email address';
        updateFormValue(name, isValid, 'isValid');
        updateFormValue(name, error, 'error');
        break;
      default:
        break;
    }


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
        className="relative grid w-5/6 grid-cols-1 grid-rows-4 mt-12 mb-12 xl:gap-y-5 xl:gap-x-10 xl:grid-rows-3 h-4/6 xl:h-auto md:w-3/6 xl:grid-cols-2 lg:grid-rows-2"
      >  
        <AnimateSharedLayout>
          {FInputs.map((props, index) => {
            props = {...props, validation: formValidation}
            return (
              <>
                <FormInput key={index} {...props} />
              </>
            )
          })}
        </AnimateSharedLayout>
        <FormBtn isDisabled={isDisabled} />
      </motion.form>
    </>
  );
}
