//* Packages
import { useEffect } from "react";
import Head from "next/head";
import { Text, Divider } from "@chakra-ui/react";
import { DateTime } from "luxon";

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
import Education from "@components/home/about/Education";
import EducationInfo from "@components/home/about/EducationInfo";
import EducationDescription from "@components/home/about/EducationDescription";

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
import ProjectCardTools from "@components/home/projects/ProjectCardTools";

//* components: utilities
import SubSectionHeading from "@components/home/utilities/SubSectionHeading";
import SectionHeading from "@components/home/utilities/SectionHeading";
import { ContactForm } from "@components/form/contact-form";

//* pictures
import Test from "@lib/assets/projects/test.png";
import KookiKomerce from "@lib/assets/projects/quick-glance-kooki-komerce.gif";

//* icon sets
import {
  designToolIcons,
  webLanguagesIcons,
  frameworkIcons,
  softSkillIcons,
} from "@static/icons";

//* links
import links, { discordBotTools } from "@static/links";

export default function HomePage({ name, setLinks }) {
  useEffect(() => {
    setLinks(links);
  }, []);

  const programmingFor = DateTime.now().diff(DateTime.local(2019, 1), "years")
    .years;
  const yearsFormatted = `${Math.floor(programmingFor)} years`;

  return (
    <>
      <Head>
        <title>{name} | Front-end Developer</title>
        <meta
          name="description"
          content={`Hello! My name is ${name}. I'm a Front-end Web Developer based in Southern
              California and I have over ${yearsFormatted} of design and
              programming experience.`}
        />
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
            <Text fontSize="xl" w="100%">
              Hello! My name is {name}. Currently, I'm based in Southern
              California and I have over {yearsFormatted} of design and
              programming experience. I pride myself on being self-taught in
              both front and back-end web development. I am also a very fast
              learner when it comes to learning new languages and tooling
              systems. With the skills I have cultivated, I am able to design,
              develop and deliver beautiful web applications.
            </Text>
          </Bio>
          <Divider bg="light.50" my={2} h=".05rem" borderRadius="50rem" />
        </About>
        <Education>
          <SubSectionHeading
            size="lg"
            bg="Primary.default.solid"
            color="Primary.dark.solid"
          >
            Education
          </SubSectionHeading>
          <EducationInfo
            year="2020 - 2020"
            educator="Eloquent Javascript"
            educatorLink="https://eloquentjavascript.net/"
            source="Marijn Haverbeke"
          />
          <EducationDescription>
            {[
              `Learned important design patterns, data structures, and in-depth concepts about Javascript's key features.`,
              `Provided an environment and problems to further solidify my understanding of Javascript.`,
            ]}
          </EducationDescription>
          <Divider
            bg="light.50"
            my={2}
            h=".05rem"
            borderRadius="50rem"
            mb="2rem"
            mt="2rem"
          />
          <EducationInfo
            year="2019 - 2020"
            educator="Harvard CS50"
            educatorLink="https://cs50.harvard.edu/college/2019/fall/"
            source="Online Course"
          />
          <EducationDescription>
            {[
              "Taught me important concepts about programming and problem solving.",
              "Learned key skills used in algorithmic problem solving and how to apply those skills accross several different languages.",
              "Solved all provided algorithms and problems provided by the course.",
            ]}
          </EducationDescription>
          <Divider
            bg="light.50"
            my={2}
            h=".05rem"
            borderRadius="50rem"
            mb="2rem"
            mt="2rem"
          />
          <EducationInfo
            year="2019 - 2020"
            educator="Udemy"
            educatorLink="https://www.udemy.com"
            source="Online Courses"
          />
          <EducationDescription>
            {[
              "Took many courses on web development, responsive web design and front-end web design.",
              "Learned how to read and understand tooling systems through their provided documentation.",
            ]}
          </EducationDescription>
        </Education>
        {/* </Grid> */}
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
              for scaffolding, implementing and building web apps.
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
              <ProjectCardTools tools={discordBotTools} separator=", " />
            </ProjectCardDescription>
            <ProjectCardTitle size={["lg", "xl"]} color="Accent.solid">
              Summary
            </ProjectCardTitle>
            <ProjectCardDescription>
              I created this project to solve the many issues of communication
              between several different languages with the goal of making this
              communication easier and less cluttered. The project is still a
              work in progress, please feel free to check out the github to see
              where I'm at in the process or come join the discord server and
              see how the bot works. If you are interested in using the discord
              bot for your server, please contact me below.
            </ProjectCardDescription>
            <ProjectCardBtnContainer>
              <ProjectCardBtn
                color="Primary.default.solid"
                href="https://discord.gg/rSbD2SDtPZ"
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
          <ProjectCard id="discordBot">
            <ProjectCardImage
              src={KookiKomerce.src}
              alt="image of discord bot"
              width={KookiKomerce.width}
              height={200}
            />
            <ProjectCardTitle size="3xl" color="Accent.solid">
              Kooki Komerce
            </ProjectCardTitle>
            <ProjectCardDescription>
              <ProjectCardTools tools={discordBotTools} separator=", " />
            </ProjectCardDescription>
            <ProjectCardTitle size={["lg", "xl"]} color="Accent.solid">
              Summary
            </ProjectCardTitle>
            <ProjectCardDescription>
              An ecommerce website built using "React", "Chakra-Ui", "Express
              JS", "MongoDb", "Firebase", and "Cloudinary." The website was
              built to simulate a ecommerce website, from both the user and
              provider side. The website uses a very basic role system to
              determine the difference between admins, user's and guest. Due to
              this, users can only navigate to pages depending on their role.
              Please feel free to check out both the api and client side
              codebase on my github. Also feel free to navigate as a normal user
              would on the website. Links are down below.
            </ProjectCardDescription>
            <ProjectCardBtnContainer>
              <ProjectCardBtn
                color="Primary.default.solid"
                href="http://kooki-komerce.ml/"
              >
                View demo
              </ProjectCardBtn>
              <ProjectCardBtn
                color="Accent.solid"
                href="https://github.com/KookiKodes?tab=repositories&q=kooki-komerce&type=&language=&sort="
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
