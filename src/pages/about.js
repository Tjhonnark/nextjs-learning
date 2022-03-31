import Head from 'next/head';
import ContainerNav from '/src/components/ContainerNav.js'

const About = () => {
    return (
        <div>
            <Head>
            <title>Nextjs - About</title>
            </Head>
            <ContainerNav>
                <h1>About</h1> 
            </ContainerNav> 
        </div>
    )
}

export default About;