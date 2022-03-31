import Head from 'next/head';
import ContainerNav from '../components/ContainerNav'

const Index = () => {
    return (
        <div>
            <Head>
            <title>Nextjs - Home</title>
            </Head>
            <ContainerNav>
                <h1>HOME</h1>
            </ContainerNav> 
        </div>
    )
}

export default Index;