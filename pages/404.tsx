//* Packages
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { Heading, Flex, LinkOverlay } from "@chakra-ui/react";
import { SVGWrapper } from "@components/utilities/svg-wrapper";
import { InputIcons } from "@static/icons";

export default function ErrorPage({ setLinks }) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== "/404") {
      router.push("/404");
    }
    router.prefetch("/");
    setLinks([
      { name: "home", to: "/" },
      // { name: "skills", to: "/#skills" },
      // { name: "projects", to: "/#projects" },
      // { name: "contact", to: "/#contact" },
    ]);
  }, [router]);

  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Head>
        <title>Error 404</title>
      </Head>
      <Flex
        flexDir="column"
        bg="dark.80"
        backdropFilter="blur(5px)"
        border=".4rem solid"
        borderColor="Neutral.dark.solid"
        borderRadius=".3rem"
        boxShadow="2xl"
        pointerEvents="all"
        transition=".3s border-color ease"
        _hover={{
          borderColor: "Primary.default.solid",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Heading p={10}>404 - Page not Found</Heading>
        <Link href="/">
          <LinkOverlay
            p={5}
            fontSize="2xl"
            w="100%"
            textAlign="center"
            position="relative"
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Return home
            <SVGWrapper
              SVG={InputIcons.LongRight}
              styles={{ ml: "1rem", w: 8, h: 8 }}
            />
          </LinkOverlay>
        </Link>
      </Flex>
    </Flex>
  );
}
