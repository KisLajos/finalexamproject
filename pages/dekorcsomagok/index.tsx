import { GetStaticProps } from 'next';

const Dekorcsomagok = () => {
    return (
        <div>
            Dekorcsomagok
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default Dekorcsomagok;