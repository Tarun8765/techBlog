import { Book, Video, FileText, Code, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResourceDialog } from "@/components/ResourceDialog";
import resourcesBanner from "@/assets/resources-banner.jpg";

const resources = [
  {
    category: "Documentation",
    icon: FileText,
    items: [
      {
        title: "React Documentation",
        description: "Official React docs and guides",
        url: "https://react.dev",
      },
      {
        title: "TypeScript Handbook",
        description: "Learn TypeScript from the ground up",
        url: "https://www.typescriptlang.org/docs/",
      },
      {
        title: "Tailwind CSS",
        description: "Utility-first CSS framework documentation",
        url: "https://tailwindcss.com/docs",
      },
    ],
  },
  {
    category: "Video Tutorials",
    icon: Video,
    items: [
      {
        title: "Web Development Crash Course",
        description: "Complete guide for beginners",
        url: "#",
      },
      {
        title: "Advanced React Patterns",
        description: "Master modern React techniques",
        url: "#",
      },
      {
        title: "TypeScript Fundamentals",
        description: "From basics to advanced concepts",
        url: "#",
      },
    ],
  },
  {
    category: "Books & eBooks",
    icon: Book,
    items: [
      {
        title: "You Don't Know JS",
        description: "Deep dive into JavaScript",
        url: "#",
      },
      {
        title: "Clean Code",
        description: "Writing maintainable software",
        url: "#",
      },
      {
        title: "The Pragmatic Programmer",
        description: "Your journey to mastery",
        url: "#",
      },
    ],
  },
  {
    category: "Code Examples",
    icon: Code,
    items: [
      {
        title: "React Component Library",
        description: "Reusable component examples",
        url: "#",
      },
      {
        title: "API Integration Patterns",
        description: "Common API patterns and solutions",
        url: "#",
      },
      {
        title: "Testing Examples",
        description: "Unit and integration test samples",
        url: "#",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={resourcesBanner}
          alt="Resources"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Learning Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Curated collection to enhance your development skills
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 max-w-6xl mx-auto">
          {resources.map((section) => (
            <Card
              key={section.category}
              className="border-border/50 hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{section.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle>Want to submit a resource?</CardTitle>
              <CardDescription>
                Share your favorite learning materials with the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResourceDialog />
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
