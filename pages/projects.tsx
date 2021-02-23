//* Packages
import React from 'react'
import Head from 'next/head'
import {useThemedContext} from 'kooki-components';
import {motion} from 'framer-motion';

//* Components
import LoadingSpinner from '@components/LoadingSpinner';

export default function Project() {
  const {colors, themeName} = useThemedContext();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Head>
        <title>Devin Jackson | Projects</title>
      </Head>
      <header className="w-full h-1/6 flex flex-col items-center justify-center">
        <h1 className="text-6xl">My Projects</h1>
      </header>
      <motion.section className="w-full h-5/6">
         {/*
          The idea is to have the server get and build the react app from an api call.
          1. Would need to make a request to the api with maybe a id and a name
          2. would then need to maybe pull it from github and build the project
          3. last return the static html, css and js files and redirect the person to the newly generated page

          pros: 
            nothing is generated at build time, meaning it's not stored within the project
            if we pull it directly from github we can choose to load all of the react projects

          cons:
            takes longer to load the page as it's fetching the data from github and then building
            the data would then not be able to be cached

          Other idea:
            1. Same idea as above, but maybe have the files already built
            maybe have a section on my github that I store all of the repos for the projects I want to be displayed on my website and then maybe have a section that is just /builds and it's all of the projects built. Make this section automatic as well.
         */}

        {isLoading && <LoadingSpinner />}
        <button onClick={() => setIsLoading(!isLoading)}>Load</button>
      </motion.section>
    </>
  )
}