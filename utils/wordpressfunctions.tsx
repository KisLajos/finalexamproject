export async function getPageDataBySlug(slug: string) {
    console.log('Getting page by slug: ' + slug);
    

    try {
        const resPage = await fetch(`https://finalexamproject-wp.lajoskis.dk/wp-json/wp/v2/pages?slug=${slug}`)
        const pageDataArray = await resPage.json();
        const page = pageDataArray[0];

        return page;
    } catch (error) {
        console.log('Error fetching page data:', error);
        throw new Error("Couldn't fetch data from endpoint in getPageDataBySlug()!");
    }
}

export async function getAllPages() {
    console.log('Getting pages...')
    

    try {
        const resPage = await fetch(`https://finalexamproject-wp.lajoskis.dk/wp-json/wp/v2/pages`)
        const pages = await resPage.json();

        return pages;
    } catch (error) {
        console.log('Error fetching pages:', error);
        throw new Error("Couldn't fetch data from endpoint in getAllPages()!");
    }
}

export async function getMediaFromWordPress() {
    try {
        const response = await fetch('https://finalexamproject-wp.lajoskis.dk/wp-json/wp/v2/media');
        const media = await response.json();
        
        return media;
      } catch (error) {
        console.log('Error fetching media files:', error);
        throw new Error("Couldn't fetch data from endpoint in getMediaFromWordPress()!");
    }
}