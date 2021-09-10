//* Packages
import React from "react";
import Head from "next/head";
import { Grid, Text } from "@chakra-ui/react";

//* components
import AboutMe from "@components/home/AboutMe";
import HomeHeading from "@components/home/HomeHeading";
import Avatar from "@components/home/Avatar";
import ProfileImage from "@components/home/ProfileImage";
import Position from "@components/home/Position";
import Name from "@components/home/Name";
import SocialLinks from "@components/home/SocialLinks";
import About from "@components/home/About";
import Bio from "@components/home/Bio";
import Interests from "@components/home/Interests";
import Education from "@components/home/Education";
import EducationInfo from "@components/home/EducationInfo";
import EducationDescription from "@components/home/EducationDescription";
import InterestsList from "@components/home/InterestsList";
import SubSectionHeading from "@components/home/SubSectionHeading";

export default function HomePage({ name }) {
  return (
    <>
      <Head>
        <title>{name} | Front-end Developer</title>
      </Head>
      <AboutMe>
        <HomeHeading>
          <Avatar>
            <ProfileImage name={name} />
            <Name>{name}</Name>
            <Position>Front-end Web Developer</Position>
            <SocialLinks />
          </Avatar>
        </HomeHeading>
        <About>
          <Bio>
            <SubSectionHeading size="lg">Biography</SubSectionHeading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              euismod imperdiet elit fermentum amet suspendisse. Donec nunc a
              tristique laoreet. Aliquet tortor justo faucibus cras rhoncus
              dolor tellus nunc nulla. Hendrerit nulla magna ligula turpis fames
              aliquam a at. Pretium, posuere aenean vel donec maecenas sodales
              tempus. A tellus ac ac hac. Ultrices sed mi in scelerisque vitae
              diam, dui. Vitae nibh posuere et justo, eget. Laoreet nullam in
              aliquet pellentesque. Sed netus netus mauris non eget varius
              penatibus amet. Fermentum leo porttitor turpis porta tellus, urna,
              enim at. Faucibus elit vestibulum, enim ultricies tempus, nullam.
              Sit auctor aenean non, porta amet ultricies enim. Ultrices vitae
              sit tortor fermentum congue diam blandit mattis.
            </Text>
          </Bio>
          <Grid
            templateColumns="repeat(3, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
          >
            <Interests>
              <SubSectionHeading size="md">Interests</SubSectionHeading>
              <InterestsList>
                {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
              </InterestsList>
            </Interests>
            <Education>
              <SubSectionHeading size="md">Education</SubSectionHeading>
              <EducationInfo
                year="2019 - 2021"
                educator="Udemy"
                source="Online"
              />
              <EducationDescription>
                {[
                  "Taught myself algorithms, responosive web design and front-end web development",
                ]}
              </EducationDescription>
            </Education>
          </Grid>
        </About>
      </AboutMe>
    </>
  );
}
