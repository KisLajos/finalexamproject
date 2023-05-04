import { GetStaticPaths,GetStaticProps } from 'next';

const Termek = () => {
    return (
        <div>
            Termek
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = () => {


    return {
        paths:[],
        fallback:false
    }
}
export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default Termek;