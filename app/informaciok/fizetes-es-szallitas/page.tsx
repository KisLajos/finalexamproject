import { GetStaticProps } from 'next';

const Fizetes = () => {
    return (
        <div>
            Fizetes
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default Fizetes;