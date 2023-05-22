import DecorPackagesContainer from "@/components/DecorPage/DecorPackagesContainer";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Dekorcsomagok() {
    const page = await getPageDataBySlug("dekorcsomagok")
    //console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}

            <DecorPackagesContainer/>
        </div>
    );
}

//export default Dekorcsomagok;