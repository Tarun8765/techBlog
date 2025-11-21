import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower developers and tech enthusiasts with high-quality content that simplifies complex topics and accelerates learning.",
    },
    {
      icon: Heart,
      title: "Our Passion",
      description:
        "We're passionate about technology and believe in sharing knowledge to help the community grow and innovate together.",
    },
    {
      icon: Zap,
      title: "Our Approach",
      description:
        "Practical, hands-on tutorials and articles that you can apply immediately to real-world projects and challenges.",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "Building a supportive community where developers of all levels can learn, share, and grow their skills together.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & Lead Writer",
      bio: "Full-stack developer with 10+ years of experience in web technologies and a passion for teaching.",
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Editor",
      bio: "DevOps specialist and cloud architecture expert, ensuring technical accuracy in every article.",
    },
    {
      name: "Emily Watson",
      role: "Content Strategist",
      bio: "Former software engineer turned content creator, bridging the gap between complex tech and clear communication.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About TechBlog
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted source for modern web development insights and
              tutorials
            </p>
          </div>

          <Card className="mb-12 bg-card border-border">
            <CardHeader>
              <CardTitle>Who We Are</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                TechBlog was founded in 2020 with a simple mission: make
                advanced web development concepts accessible to everyone. What
                started as a personal blog has grown into a comprehensive
                resource for developers worldwide.
              </p>
              <p>
                We cover everything from frontend frameworks like React and Vue
                to backend technologies, cloud services, and DevOps practices.
                Our tutorials are designed to be practical and actionable,
                helping you build real-world projects while learning.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-primary" />
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Meet the Team
            </h2>
            <div className="space-y-6">
              {team.map((member) => (
                <Card key={member.name} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
