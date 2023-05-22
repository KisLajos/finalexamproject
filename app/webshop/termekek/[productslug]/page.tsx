import ProductCard, { Product } from "@/components/Webshop/ProductGrid/ProductCard";
import { getAllProducts, getProduct } from "@/utils/woocommercefunctions";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Termek({ params }: { params: { productslug: string } }) {
    console.log(params)
    //const page = await getPageDataBySlug("termekek")
    const productRes = await getProduct(params.productslug).catch((error) =>
        console.error(error)
    );
    const product = productRes.data[0];

    return (
        <div>
            <div>Név: {product.name}</div>
            <div>Ár: {product.price} HUF</div>
            <div>Leírás: {parse(product.description)}</div>
        </div>
    );
}

//export default Termek;

export async function generateStaticParams() {
    const products = await getAllProducts()
   
    return products.data.map((product:Product) => ({
      slug: product.slug,
    }));
  }