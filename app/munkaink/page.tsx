import FeaturedGallery from "@/components/FeaturedGallery";
import { getMediaFromWordPress, getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Munkaink() {
    const page = await getPageDataBySlug("munkaink")
    const images = await getMediaFromWordPress();
    //console.log(images)
    //console.log(page)

    return (
        <div>
            <h1>{parse(page.title.rendered)}</h1>
            {parse(page.content.rendered)}
            <FeaturedGallery images={images}/>
        </div>
    );
}

//export default Munkaink;