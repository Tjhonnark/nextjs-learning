import Head from 'next/head';
import Navigation from './Navigation';

const ContainerNav = (props) => (
    <div>
        <Head>
            <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css'/>
        </Head>
        <Navigation/>
        <div className='container p-4'>
            {props.children}
        </div>
        <div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </div>
    </div>
)

export default ContainerNav;