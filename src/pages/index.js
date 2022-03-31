import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import ContainerNav from '../components/ContainerNav'
import Users from '../components/Users'

const Index = (props) => {
    console.log(props);
    return (
        <div>
            <Head>
            <title>Nextjs - Home</title>
            </Head>
            <ContainerNav>
                <h1>HOME</h1>
                <Users users={props.users}/>
            </ContainerNav> 
        </div>
        
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
    return {users: resJSON.data}
}

export default Index;