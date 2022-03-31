import fetch from 'isomorphic-fetch';
import {useRouter} from 'next/router';
import ContainerNav from '../../components/ContainerNav';

const UserProfile = ({user}) => {

    const router = useRouter();
    const {id} = router.query;

    return (
        <ContainerNav>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <img src={user.avatar} alt='' style={{borderRadius: '50%'}}/>
                            <div className=''>
                                <h3>{user.first_name}{user.last_name}</h3>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerNav>
    )
}

UserProfile.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const resJSON = await res.json();
    return {user: resJSON.data}
}

export default UserProfile;