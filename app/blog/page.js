// This file is a Server Component — do NOT add "use client"

import BlogPageClient from "./BlogPageClient";
import Footer from "@/components/footer";
export const metadata = {
  title: "Blog | Cloud101",
  description:
    "Explore Salesforce, AI, and Cloud articles with search, filters, and sorting options.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogPageClient />
      <Footer/>
      </main>
  );

}