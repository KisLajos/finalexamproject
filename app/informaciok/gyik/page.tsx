import { GetStaticProps } from 'next';

const GYIK = () => {
    return (
        <div>
            GYIK
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default GYIK;