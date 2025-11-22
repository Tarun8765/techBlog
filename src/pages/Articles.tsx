import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { SearchBar } from "@/components/SearchBar";
import articlesBanner from "@/assets/articles-banner.jpg";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      slug: "react-hooks",
      title: "Understanding React Hooks",
      excerpt:
        "A comprehensive guide to React Hooks and how to use them effectively in your applications.",
      author: "Jane Smith",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Hooks"],
      image: "/placeholder.svg",
    },
    {
      slug: "typescript-guide",
      title: "TypeScript Best Practices",
      excerpt:
        "Learn the best practices for writing type-safe code with TypeScript.",
      author: "John Doe",
      date: "2024-01-10",
      readTime: "10 min read",
      tags: ["TypeScript", "JavaScript"],
      image: "/placeholder.svg",
    },
    {
      slug: "web-performance",
      title: "Web Performance Optimization",
      excerpt:
        "Techniques and strategies to optimize your web application's performance.",
      author: "Alice Johnson",
      date: "2024-01-05",
      readTime: "12 min read",
      tags: ["Performance", "Web Development"],
      image: "/placeholder.svg",
    },
  ];

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={articlesBanner}
          alt="Articles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              All Articles
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of technical articles
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <SearchBar onSearch={setSearchQuery} />
          <p className="text-sm text-muted-foreground mt-2">
            {filteredArticles.length} article
            {filteredArticles.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
