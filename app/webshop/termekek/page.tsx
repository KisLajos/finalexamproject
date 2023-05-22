import ProductGrid from "@/components/Webshop/ProductGrid";
import { getAllProducts } from "@/utils/woocommercefunctions";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Termekek() {
    const page = await getPageDataBySlug("termekek")
    const products = await getAllProducts().catch((error) =>
        console.error(error)
    );
    //const products = await getProducts()
    //console.log(products)

    return (
        <div>
            <ProductGrid title={page.title.rendered} products={products.data} />
        </div>
    );
}

//export default Termekek;