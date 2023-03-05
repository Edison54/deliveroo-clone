import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient  ({
    projectId: "valwxuc1",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-08-25",
  });

  
const builder = imageUrlBuilder(client);
export const urlFor = (source) => imageUrlBuilder(client).image(source);


export default client;
  