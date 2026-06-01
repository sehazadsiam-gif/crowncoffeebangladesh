export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      {
      name: 'price',
      title: 'Price (৳ BDT)',  // ← change this line
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    },
{
  name: 'image',
    title: 'Image',
      type: 'image',
        options: {
    hotspot: true, // Allows you to crop/resize the image
      },
},
{
  name: 'category',
    title: 'Category',
      type: 'reference',
        to: [{ type: 'category' }],
    },
{
  name: 'tags',
    title: 'Tags',
      type: 'array',
        of: [{ type: 'string' }],
          options: {
    list: [
      { title: 'Hot', value: 'hot' },
      { title: 'Iced', value: 'iced' },
      { title: 'Vegan', value: 'vegan' },
      { title: 'Gluten Free', value: 'gluten-free' },
      { title: 'Popular', value: 'popular' },
      { title: 'New', value: 'new' },
    ],
      },
},
{
  name: 'available',
    title: 'Available',
      type: 'boolean',
        initialValue: true,
    },
{
  name: 'order',
    title: 'Display Order',
      type: 'number',
        initialValue: 0,
    },
  ],
preview: {
  select: {
    title: 'name',
      media: 'image',
        subtitle: 'price',
    },
  prepare({ title, media, subtitle }) {
    return {
      title,
      media,
      subtitle: subtitle ? `$${subtitle.toFixed(2)}` : 'No price',
    };
  },
},
};
