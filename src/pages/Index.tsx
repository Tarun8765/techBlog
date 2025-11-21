import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";

const articles = [
  {
    title: "Building Scalable Web Apps with Modern Architecture",
    excerpt: "Learn how to design and implement robust, scalable web applications using microservices, containerization, and cloud-native patterns.",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    tags: ["Architecture", "Scalability", "Cloud"],
    slug: "building-scalable-web-apps"
  },
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
  },
  {
    title: "Mastering TypeScript Advanced Types",
    excerpt: "Deep dive into TypeScript's advanced type system features including generics, conditional types, and utility types.",
    date: "Dec 3, 2024",
    readTime: "20 min read",
    tags: ["TypeScript", "Advanced"],
    slug: "mastering-typescript-types"
  },
  {
    title: "Building Real-time Applications with WebSockets",
    excerpt: "Learn how to implement real-time features in your applications using WebSockets and modern protocols.",
    date: "Nov 28, 2024",
    readTime: "14 min read",
    tags: ["WebSockets", "Real-time"],
    slug: "building-realtime-apps"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
          <p className="text-muted-foreground">
            Explore our collection of tutorials, guides, and insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
