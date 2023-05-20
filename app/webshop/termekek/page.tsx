import ProductGrid from "@/components/Webshop/ProductGrid";
import { getAllProducts } from "@/utils/woocommercefunctions";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export async function Termekek() {
    const page = await getPageDataBySlug("termekek")
    const products = await getAllProducts();
    //const products = await getProducts()
    //console.log(page)

    return (
        <div>
            {parse(page.title.rendered)}
            {parse(page.content.rendered)}
            {parse(page.excerpt.rendered)}

            <ProductGrid products={products} />
        </div>
    );
}

export default Termekek;