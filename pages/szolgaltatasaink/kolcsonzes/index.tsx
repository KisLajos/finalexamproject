import { GetStaticProps } from 'next';

const Kolcsonzes = () => {
    return (
        <div>
            Kolcsonzes
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default Kolcsonzes;