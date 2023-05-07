import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export async function Termekek() {
    const page = await getPageDataBySlug("termekek")
    console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}
            {parse(page.excerpt.rendered)}
        </div>
    );
}

export default Termekek;