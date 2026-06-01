import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Fetch all menu categories with items
export async function getMenuCategories() {
  return client.fetch(`
    *[_type == "category"] | order(order asc) {
      _id,
      name,
      description,
      "items": *[_type == "menuItem" && references(^._id)] | order(order asc) {
        _id,
        name,
        description,
        price,
        image,
        tags,
        available
      }
    }
  `);
}

// Fetch site settings
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}
