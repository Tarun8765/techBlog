import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const articles = [
  {
    title: "Building Scalable Web Apps with Modern Architecture",
    excerpt:
      "Learn how to design and implement robust, scalable web applications using microservices, containerization, and cloud-native patterns.",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    tags: ["Architecture", "Scalability", "Cloud"],
    slug: "building-scalable-web-apps",
  },
  {
    title: "Optimizing React Performance at Scale",
    excerpt:
      "Discover techniques to keep your React applications fast and responsive as they grow in complexity and user base.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    tags: ["React", "Performance"],
    slug: "optimizing-react-performance",
  },
  {
    title: "Database Design Patterns for Modern Apps",
    excerpt:
      "Learn essential database design patterns that ensure data integrity, scalability, and optimal query performance.",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    tags: ["Database", "Architecture"],
    slug: "database-design-patterns",
  },
  {
    title: "Security Best Practices for Web Applications",
    excerpt:
      "Comprehensive guide to securing your web applications against common vulnerabilities and attack vectors.",
    date: "Dec 5, 2024",
    readTime: "15 min read",
    tags: ["Security", "Best Practices"],
    slug: "security-best-practices",
  },
  {
    title: "Mastering TypeScript Advanced Types",
    excerpt:
      "Deep dive into TypeScript's advanced type system features including generics, conditional types, and utility types.",
    date: "Dec 3, 2024",
    readTime: "20 min read",
    tags: ["TypeScript", "Advanced"],
    slug: "mastering-typescript-types",
  },
  {
    title: "Building Real-time Applications with WebSockets",
    excerpt:
      "Learn how to implement real-time features in your applications using WebSockets and modern protocols.",
    date: "Nov 28, 2024",
    readTime: "14 min read",
    tags: ["WebSockets", "Real-time"],
    slug: "building-realtime-apps",
  },
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

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Developers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who trust TechBlog for quality
              content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                image: testimonial1,
                name: "Sarah Chen",
                role: "Senior Frontend Engineer",
                text: "TechBlog has been instrumental in keeping me updated with the latest React patterns and best practices. The tutorials are clear and practical.",
              },
              {
                image: testimonial2,
                name: "Marcus Rodriguez",
                role: "Full Stack Developer",
                text: "The depth of technical content here is outstanding. I've learned more from these articles than from many paid courses.",
              },
              {
                image: testimonial3,
                name: "Priya Patel",
                role: "Software Architect",
                text: "Finally, a tech blog that doesn't just scratch the surface. The architectural patterns and scalability guides are gold.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
