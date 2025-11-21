import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Articles = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            All Articles
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our collection of technical articles, tutorials, and
            insights.
          </p>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
