import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Tutorial = () => {
  const tutorials = [
    {
      id: "getting-started-react",
      title: "Getting Started with React",
      description:
        "Learn the fundamentals of React and build your first component-based application.",
      level: "Beginner",
      duration: "2 hours",
      lessons: 8,
      tags: ["React", "JavaScript", "Beginner"],
    },
    {
      id: "advanced-typescript",
      title: "Advanced TypeScript Patterns",
      description:
        "Master advanced TypeScript concepts including generics, utility types, and type guards.",
      level: "Advanced",
      duration: "3 hours",
      lessons: 12,
      tags: ["TypeScript", "Advanced"],
    },
    {
      id: "state-management",
      title: "State Management with React Query",
      description:
        "Learn how to manage server state effectively using React Query and best practices.",
      level: "Intermediate",
      duration: "1.5 hours",
      lessons: 6,
      tags: ["React", "State Management"],
    },
    {
      id: "responsive-design",
      title: "Responsive Design with Tailwind CSS",
      description:
        "Build beautiful, responsive interfaces using Tailwind CSS utility classes.",
      level: "Beginner",
      duration: "2 hours",
      lessons: 10,
      tags: ["CSS", "Tailwind", "Design"],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Tutorials
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides to help you master modern web development
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tutorials.map((tutorial) => (
              <Link key={tutorial.id} to={`/tutorial/${tutorial.id}`}>
                <Card className="bg-card border-border hover:border-primary transition-colors h-full cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={getLevelColor(tutorial.level)}
                      >
                        {tutorial.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-foreground">
                      {tutorial.title}
                    </CardTitle>
                    <CardDescription>{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {tutorial.lessons} lessons
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          <Code className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorial;
