import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import ContainerNav from '/src/components/ContainerNav.js'
import Users from '../components/Users'

const Users1 = (props) => {
    return (
        <div>
            <Head>
            <title>Nextjs - Users</title>
            </Head>
            <ContainerNav>
                <h1>Users</h1>
                <Users users={props.users}/>
            </ContainerNav> 
        </div>
    ) 
}

Users1.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
    return {users: resJSON.data}
}

export default Users1;