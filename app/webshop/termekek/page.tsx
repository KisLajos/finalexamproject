import ProductGrid from "@/components/Webshop/ProductGrid";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export async function Termekek() {
    const page = await getPageDataBySlug("termekek")
    //const products = await getProducts()
    //console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}
            {parse(page.excerpt.rendered)}

            <ProductGrid />
        </div>
    );
}

export default Termekek;