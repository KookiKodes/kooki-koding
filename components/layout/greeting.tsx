//* packages
import { Heading } from "@chakra-ui/react";

//* interfaces
import { GreetingProps as Props } from "@interfaces/layout/Greeting";

export function Greeting({ message }: Props) {
	return (
		<Heading size='lg' my={8} textAlign='center'>
			{message}
		</Heading>
	);
}
