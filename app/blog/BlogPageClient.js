"use client";

import { useState } from "react";
// Dummy blog data (Replace with API later)
const allBlogs = [
  {
    id: 1,
    title: "Getting Started with Salesforce Data Cloud",
    excerpt:
      "A beginner-friendly introduction to Data Cloud and how it transforms customer 360 experiences.",
    category: "Salesforce",
    author: "Wishvesh",
    authorImg: "/authors/wishvesh.jpg",
    blogImg: "/blogs/data-cloud.jpg",
    date: "2025-12-01",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Agentforce: Building AI Agents in Salesforce",
    excerpt:
      "Learn how to configure and deploy intelligent AI agents inside Salesforce using Agentforce.",
    category: "AI & Automation",
    author: "Mahima",
    authorImg: "/authors/mahima.jpg",
    blogImg: "/blogs/agent-force.png",
    date: "2025-12-05",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "LWC Best Practices for High-Performance Apps",
    excerpt:
      "Optimize your Lightning Web Components with performance patterns and real-world examples.",
    category: "Development",
    author: "Wishvesh",
    authorImg: "/authors/wishvesh.jpg",
    blogImg: "/blogs/lwc.jpg",
    date: "2025-11-20",
    readTime: "6 min read",
  },
];

export default function BlogPageClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [author, setAuthor] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const categories = ["All", "Salesforce", "AI & Automation", "Development"];
  const authors = ["All", "Wishvesh", "Mahima"];

  // Filtering + Search + Sorting
  const filteredBlogs = allBlogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((blog) => (category === "All" ? true : blog.category === category))
    .filter((blog) => (author === "All" ? true : blog.author === author))
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <main className="max-w-7xl mx-auto px-5 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Cloud101 Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore articles, tutorials, insights, and real-world guidance on
          Salesforce, AI, development, and cloud technologies.
        </p>
      </section>

      {/* Search + Filters */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full md:w-1/3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Category */}
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>

            {/* Author */}
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              {authors.map((auth) => (
                <option key={auth}>{auth}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Sort: Newest First</option>
              <option value="oldest">Sort: Oldest First</option>
            </select>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog) => (
            <a
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="block border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition bg-white"
            >
              <img
                src={blog.blogImg}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-6">
                {/* Category */}
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-4">{blog.excerpt}</p>

                {/* Author */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={blog.authorImg}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="text-sm text-gray-700 font-medium">
                    {blog.author}
                  </p>
                </div>

                {/* Date / Read time */}
                <div className="text-sm text-gray-500 flex justify-between">
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-10">
            No blogs found. Try changing search or filters.
          </p>
        )}
      </section>
    </main>
    
  );
}
