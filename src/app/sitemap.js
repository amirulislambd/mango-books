import { getData } from "@/lib/dataFetch";

export default async function sitemap() {
  const baseUrl = "https://mango-books.vercel.app";

  const allBooks = await getData();

  const bookUrls = allBooks.map((book) => ({
    url: `${baseUrl}/allBooks/${book.id || book._id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...bookUrls,
  ];
}
