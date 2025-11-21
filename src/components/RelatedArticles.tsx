import ArticleCard from "./ArticleCard";

const relatedArticlesData = [
  {
    title: "Optimizing React Performance at Scale",
    excerpt: "Discover techniques to keep your React applications fast and responsive as they grow in complexity and user base.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    tags: ["React", "Performance"],
    slug: "optimizing-react-performance"
  },
  {
    title: "Database Design Patterns for Modern Apps",
    excerpt: "Learn essential database design patterns that ensure data integrity, scalability, and optimal query performance.",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    tags: ["Database", "Architecture"],
    slug: "database-design-patterns"
  },
  {
    title: "Security Best Practices for Web Applications",
    excerpt: "Comprehensive guide to securing your web applications against common vulnerabilities and attack vectors.",
    date: "Dec 5, 2024",
    readTime: "15 min read",
    tags: ["Security", "Best Practices"],
    slug: "security-best-practices"
  }
];

interface RelatedArticlesProps {
  currentSlug?: string;
}

const RelatedArticles = ({ currentSlug }: RelatedArticlesProps) => {
  const filtered = relatedArticlesData.filter(article => article.slug !== currentSlug);
  const articles = filtered.slice(0, 3);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 font-mono">Related Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
