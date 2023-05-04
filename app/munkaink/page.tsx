import { GetServerSideProps } from 'next';

const Munkaink = () => {
    return (
        <div>
            Munkaink
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default Munkaink