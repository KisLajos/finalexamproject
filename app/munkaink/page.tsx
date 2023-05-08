import FeaturedGallery from "@/components/FeaturedGallery";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export async function Munkaink() {
    const page = await getPageDataBySlug("munkaink")
    //console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}
            {parse(page.excerpt.rendered)}
            <FeaturedGallery/>
        </div>
    );
}

export default Munkaink;