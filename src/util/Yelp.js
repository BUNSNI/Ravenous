//IMPORTANT INFO! 'https://cors-anywhere.herokuapp.com' must be placed at the beginning of the url for this to work, however prior to use must go to http://cors-anywhere.herokuapp.com/corsdemo in order to access cors-anywhere due to abuses of the site.


const apiKey = "FHkF8HJhmL4qLXwTrpSvQHBElxdhUU3hctsYYOYxbCse_lBQr59SDU-Hw7zlJbuxYulXJydcq7IQPYyJV9l3QLvF8mmD2pQaHKqSLqQtu2YGmD4OiEB96KtXew9GYHYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { 
            headers: {
                Authorization : `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }))
                }
            }
        )
    }
};


export default Yelp;
