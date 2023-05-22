import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function ASZF() {
    const page = await getPageDataBySlug("aszf")
    //console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}
        </div>
    );
}

//export default ASZF;