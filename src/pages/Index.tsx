import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import articleData from "../components/data/articleData.json";

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
          {articleData?.articles?.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
