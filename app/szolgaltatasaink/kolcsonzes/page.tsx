import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Kolcsonzes() {
    const page = await getPageDataBySlug("kolcsonzes")
    //console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}
            {parse(page.excerpt.rendered)}
        </div>
    );
}

//export default Kolcsonzes;