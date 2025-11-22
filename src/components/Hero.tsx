import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroTech from "@/assets/hero-tech.jpg";
import { GalaxyBackground } from "@/components/GalaxyBackground";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <GalaxyBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <span className="text-sm font-medium text-primary">
                Featured Article
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Scalable{" "}
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Web Apps
              </span>
            </h1>

            <p className="text-lg text-foreground/80 max-w-2xl">
              Learn how to design and implement robust, scalable web
              applications using microservices, containerization, and
              cloud-native patterns.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Dec 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link to="/article/building-scalable-web-apps">
                <Button size="lg" className="font-mono">
                  Read Article
                </Button>
              </Link>
              <Link to="/articles">
                <Button size="lg" variant="outline" className="font-mono">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroTech}
              alt="Modern web development"
              className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-2xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
