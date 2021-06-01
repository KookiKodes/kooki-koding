//* Packages
import React from "react";
import { NextPage } from "next";
import Head from "next/head";
// import cuid from "cuid";

//* Helper Fns
// import {
// 	getFieldInfo,
// 	defFormInfo,
// 	checkAllValid,
// 	formValidation,
// } from "@helper/form";

interface Props {
	uids: string[];
}

const ContactPage: NextPage<Props> = ({ uids }: Props) => {
	// const [isDisabled, setIsDisabled] = React.useState(true);
	// const [formInfo, setFormInfo] = React.useState(defFormInfo(uids));
	// const [sentMessage, setSentMessage] = React.useState(["", ""]);
	// const [isLoading, setIsLoading] = React.useState(false);

	// async function handleSubmit(event) {
	// 	event.preventDefault();
	// 	setIsDisabled(true);
	// 	setIsLoading(true);

	// 	const fieldInfo = await getFieldInfo({ event, uids: uids, formInfo });

	// 	setFormInfo(defFormInfo(uids));

	// 	let res;

	// 	if (!fieldInfo.find((field) => field.name === "honeypot" && field.value)) {
	// 		res = await fetch("/api/email", {
	// 			body: JSON.stringify(fieldInfo),
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				domain: "devinjackson.me",
	// 				path: "/",
	// 			},
	// 			method: "POST",
	// 		});
	// 	}
	// 	const { message, error } = res
	// 		? await res.json()
	// 		: {
	// 				message: "",
	// 				error:
	// 					"Message was unsuccessful due to the following reasons:\nInvalid information provided\n",
	// 		  };

	// 	setSentMessage([message, error]);
	// 	setIsLoading(false);

	// 	setTimeout(() => {
	// 		setSentMessage(["", ""]);
	// 	}, 3500);
	// }

	// function updateFormValues(
	// 	name: string,
	// 	values: { isValid: boolean; error: string }
	// ) {
	// 	setFormInfo((formInfo) => {
	// 		return {
	// 			...formInfo,
	// 			[name]: Object.assign(formInfo[name], values),
	// 		};
	// 	});
	// }

	// async function formChange() {
	// 	const valid = await checkAllValid(formInfo);

	// 	if (valid) setIsDisabled(false);
	// 	else setIsDisabled(true);
	// }

	// async function validate(event: React.FormEvent) {
	// 	const { name, error, isValid } = await formValidation(event);
	// 	updateFormValues(name, { error, isValid });
	// 	formChange();
	// }

	return (
		<>
			<Head>
				<title>Devin Jackson | Send me a message</title>
			</Head>
			<header className='flex self-center justify-center w-5/6 mt-16 h-30 xl:w-3/6'>
				<h1 className='text-4xl text-center xl:text-6xl'>
					Thanks for stopping by. How may I help you?
				</h1>
			</header>
		</>
	);
};

// ContactPage.getInitialProps = async ({ req, res }) => {
// 	const uids = FInputs.reduce((arr: string[], item) => [...arr, cuid()], []);
// 	return { uids };
// };

export default ContactPage;
