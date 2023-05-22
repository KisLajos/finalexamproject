import AboutUs from "@/components/AboutUs";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Rolunk() {
    
    //console.log(page)

    return (
        <div>
            <h1>Információk – Rólunk</h1>
            {/* @ts-expect-error Server Component */}
            <AboutUs/>
        </div>
    );
}

//export default Rolunk;