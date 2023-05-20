import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "https://finalexamproject-wp.lajoskis.dk/",
    consumerKey: process.env.WCKEY!,
    consumerSecret: process.env.WCSEC!,
    version: "wc/v3",
});

export async function getAllProducts() {
    console.log('Getting products...')
    
    try {
        const products = await api.get("products",{per_page: 50});
        
        return products;
    } catch (error) {
        throw new Error("Couldn't fetch data from endpoint in getAllProducts()!");
    }
}

export async function getProduct(productslug: string) {
    console.log(`Getting product by ${productslug} slug...`);

    try {
        const product = await api.get(`products/?slug=${productslug}`);
        
        return product;
    } catch (error) {
        throw new Error("Couldn't fetch data from endpoint in getProduct()!");
    }
}

