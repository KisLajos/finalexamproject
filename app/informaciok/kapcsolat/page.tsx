import ContactLinks from "@/components/ContactLinks";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Kapcsolat() {
    const page = await getPageDataBySlug("kapcsolat")
    //console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}
            {parse(page.excerpt.rendered)}
        </div>
    );
}

//export default Kapcsolat;