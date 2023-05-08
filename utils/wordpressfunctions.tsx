export async function getPageDataBySlug(slug: string) {
    console.log('Getting page by slug: ' + slug);
    const resPage = await fetch(`https://finalexamproject-wp.lajoskis.dk/wp-json/wp/v2/pages?slug=${slug}`)
    const pageDataArray = await resPage.json();
    const page = pageDataArray[0];

    return page;
}

export async function getAllPages() {
    console.log('Getting pages...')
    const resPage = await fetch(`https://finalexamproject-wp.lajoskis.dk/wp-json/wp/v2/pages`)
    const pages = await resPage.json();

    return pages;
}