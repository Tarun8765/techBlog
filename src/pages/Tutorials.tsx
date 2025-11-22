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
import { Clock, BookOpen, Code, Play, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tutorialHero from "@/assets/tutorial-hero.jpg";
import tutorialCoding from "@/assets/tutorial-coding.jpg";

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

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={tutorialHero}
          alt="Tutorial Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Master Web Development
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Comprehensive tutorials designed to take you from beginner to
              expert
            </p>
            <Button size="lg" className="font-mono">
              <Play className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">50+</p>
              <p className="text-muted-foreground">Tutorials</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">10K+</p>
              <p className="text-muted-foreground">Students</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">95%</p>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Tutorials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides with hands-on examples and best practices
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

          {/* Featured Section */}
          <div className="mt-16">
            <Card className="overflow-hidden border-primary/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">Featured</Badge>
                  <h3 className="text-2xl font-bold mb-3">
                    Interactive Coding Environment
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    All our tutorials include an interactive coding environment
                    where you can practice as you learn. Write code, see results
                    instantly, and build muscle memory.
                  </p>
                  <Button variant="outline" className="w-fit">
                    Try Interactive Demo
                  </Button>
                </div>
                <div className="h-64 md:h-auto">
                  <img
                    src={tutorialCoding}
                    alt="Coding environment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorial;
