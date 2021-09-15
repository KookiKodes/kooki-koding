//* Packages
import React from "react";
import Head from "next/head";
import { Grid, Text, Divider, Center } from "@chakra-ui/react";

//* components: about
import AboutMe from "@components/home/about/AboutMe";
import HomeHeading from "@components/home/about/HomeHeading";
import Avatar from "@components/home/about/Avatar";
import ProfileImage from "@components/home/about/ProfileImage";
import Position from "@components/home/about/Position";
import Name from "@components/home/about/Name";
import SocialLinks from "@components/home/about/SocialLinks";
import About from "@components/home/about/About";
import Bio from "@components/home/about/Bio";
import Interests from "@components/home/about/Interests";
import Education from "@components/home/about/Education";
import EducationInfo from "@components/home/about/EducationInfo";
import EducationDescription from "@components/home/about/EducationDescription";
import InterestsList from "@components/home/about/InterestsList";

//* components: skills
import SkillSection from "@components/home/skills/SkillSection";
import SkillsContainer from "@components/home/skills/SkillsContainer";
import SkillCard from "@components/home/skills/SkillCard";
import SkillCardTitle from "@components/home/skills/SkillCardTitle";
import SkillCardIcons from "@components/home/skills/SkillCardIcons";
import SkillCardSubTitle from "@components/home/skills/SkillCardSubTitle";
import SkillCardDescription from "@components/home/skills/SkillCardDescription";

//* components: projects
import ProjectSection from "@components/home/projects/ProjectSection";
import ProjectsContainer from "@components/home/projects/ProjectsContainer";
import ProjectCard from "@components/home/projects/ProjectCard";
import ProjectCardImage from "@components/home/projects/ProjectCardImage";
import ProjectCardTitle from "@components/home/projects/ProjectCardTitle";
import ProjectCardDescription from "@components/home/projects/ProjectCardDescription";
import ProjectCardBtnContainer from "@components/home/projects/ProjectCardBtnContainer";
import ProjectCardBtn from "@components/home/projects/ProjectCardBtn";

//* components: utilities
import SubSectionHeading from "@components/home/utilities/SubSectionHeading";
import SectionHeading from "@components/home/utilities/SectionHeading";
import { ContactForm } from "@components/form/contact-form";

//* pictures
import Test from "@lib/assets/projects/test.png";

//* icon sets
import {
  designToolIcons,
  webLanguagesIcons,
  frameworkIcons,
  softSkillIcons,
} from "@static/icons";

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
            <SubSectionHeading
              size="xl"
              bg="Primary.default.solid"
              color="Primary.dark.solid"
            >
              Biography
            </SubSectionHeading>
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
              <SubSectionHeading
                size="md"
                bg="Primary.default.solid"
                color="Primary.dark.solid"
              >
                Interests
              </SubSectionHeading>
              <InterestsList>
                {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]}
              </InterestsList>
            </Interests>
            <Education>
              <SubSectionHeading
                size="md"
                bg="Primary.default.solid"
                color="Primary.dark.solid"
              >
                Education
              </SubSectionHeading>
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
      <SkillSection>
        <SectionHeading>Skills</SectionHeading>
        <SkillsContainer>
          <SkillCard id="designTools">
            <SkillCardTitle>Design Tools</SkillCardTitle>
            <SkillCardIcons svgs={designToolIcons} />
            <SkillCardSubTitle>Goto Tools</SkillCardSubTitle>
            <SkillCardDescription>
              Miro, Figma and Clickup are my goto design tools that I use to
              structure, design and organize any web application I create.
            </SkillCardDescription>
          </SkillCard>
          <SkillCard id="webLanguages">
            <SkillCardTitle>Web Languages</SkillCardTitle>
            <SkillCardIcons svgs={webLanguagesIcons} />
            <SkillCardSubTitle>Front-end Languages</SkillCardSubTitle>
            <SkillCardDescription>
              Javascript, SASS, HTML5, CSS3, and Typescript. My goto languages
              for scaffolding, implemnting and building web apps.
            </SkillCardDescription>
          </SkillCard>
          <SkillCard id="frameworks">
            <SkillCardTitle>Frameworks</SkillCardTitle>
            <SkillCardIcons svgs={frameworkIcons} />
            <SkillCardSubTitle>Front-end</SkillCardSubTitle>
            <SkillCardDescription>
              React, Svelte, and Vue are the main Frameworks that I have used.
              The main framework I use is React, although Svelte is my favorite
              framework to use.
            </SkillCardDescription>
          </SkillCard>
          <SkillCard id="softSkills">
            <SkillCardTitle>Soft Skills</SkillCardTitle>
            <SkillCardIcons svgs={softSkillIcons} />
            <SkillCardSubTitle>What I provide</SkillCardSubTitle>
            <SkillCardDescription>
              Along with always taking the mobile first approach to design, I
              also provide creativity and teamwork to any environment.
            </SkillCardDescription>
          </SkillCard>
        </SkillsContainer>
      </SkillSection>
      <ProjectSection id="projects">
        <SectionHeading>Projects</SectionHeading>
        <ProjectsContainer>
          <ProjectCard id="discordBot">
            <ProjectCardImage
              src={Test.src}
              alt="image of discord bot"
              width={Test.width}
              height={Test.height}
            />
            <ProjectCardTitle size="3xl" color="Accent.solid">
              Translation Bot
            </ProjectCardTitle>
            <ProjectCardDescription>
              DiscordJs, FaunaDB, Google Translate, Typescript, Nodejs
            </ProjectCardDescription>
            <ProjectCardTitle size={["lg", "xl"]} color="Accent.solid">
              Summary
            </ProjectCardTitle>
            <ProjectCardDescription>
              This project was to solve a simple problem with discord, the
              problem being that there is no good way to translate messages from
              one language to another without it clutting chat. I built the
              basic idea in 4 days, not ever having the knowledge of how
              FaunaDB, DiscordJs or the Google Translate Api work.
            </ProjectCardDescription>
            <ProjectCardBtnContainer>
              <ProjectCardBtn
                color="Primary.default.solid"
                href="https://discord.gg/Kwb3vXZTmV"
              >
                View demo
              </ProjectCardBtn>
              <ProjectCardBtn
                color="Accent.solid"
                href="https://github.com/KookiKodes/diplomatic-kooki-bot"
              >
                View code
              </ProjectCardBtn>
            </ProjectCardBtnContainer>
          </ProjectCard>
        </ProjectsContainer>
      </ProjectSection>
      <ProjectSection id="contact">
        <Divider my={5} bg="Accent.solid" borderRadius="50rem" />
        <SectionHeading>Contact</SectionHeading>
        <ContactForm />
      </ProjectSection>
    </>
  );
}
