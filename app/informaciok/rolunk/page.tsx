import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export async function Rolunk() {
    const page = await getPageDataBySlug("rolunk")
    //console.log(page)

    return (
        <div>
            <h1>{parse(page.title.rendered)}</h1>
            <section>
                <div>
                    {parse(page.acf.text_block_1)}
                </div>

                <div>
                    {parse(page.acf.text_block_2)}
                </div>
            </section>
        </div>
    );
}

export default Rolunk;