import { GetStaticProps } from 'next';

const Termekek = () => {
    return (
        <div>
            Termekek
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default Termekek;