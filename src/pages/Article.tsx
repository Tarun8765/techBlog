import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";
import RelatedArticles from "@/components/RelatedArticles";

// Sample article data
const articles = {
  "building-scalable-web-apps": {
    title: "Building Scalable Web Apps with Modern Architecture",
    author: "Alex Chen",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    tags: ["Architecture", "Scalability", "Cloud"],
    content: [
      {
        type: "paragraph",
        content: "Building scalable web applications requires careful consideration of architecture patterns, infrastructure choices, and development practices. In this comprehensive guide, we'll explore the key principles and technologies that enable applications to grow from prototype to production."
      },
      {
        type: "heading",
        id: "microservices-architecture",
        content: "Microservices Architecture"
      },
      {
        type: "paragraph",
        content: "Microservices architecture breaks down applications into smaller, independent services that communicate through well-defined APIs. This approach offers several advantages for scalability and maintainability."
      },
      {
        type: "code",
        language: "typescript",
        content: `// Example microservice structure
interface UserService {
  getUser(id: string): Promise<User>;
  createUser(data: UserData): Promise<User>;
  updateUser(id: string, data: Partial<UserData>): Promise<User>;
}

class UserMicroservice implements UserService {
  async getUser(id: string): Promise<User> {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  }
  
  async createUser(data: UserData): Promise<User> {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}`
      },
      {
        type: "heading",
        id: "containerization",
        content: "Containerization with Docker"
      },
      {
        type: "paragraph",
        content: "Docker containers provide consistent environments across development, testing, and production. They encapsulate your application and its dependencies, ensuring it runs the same way everywhere."
      },
      {
        type: "code",
        language: "dockerfile",
        content: `# Multi-stage Docker build for optimized images
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "dist/server.js"]`
      },
      {
        type: "heading",
        id: "cloud-native-patterns",
        content: "Cloud-Native Patterns"
      },
      {
        type: "paragraph",
        content: "Cloud-native applications are designed to take full advantage of cloud computing platforms. Key patterns include auto-scaling, load balancing, and distributed caching."
      },
      {
        type: "code",
        language: "typescript",
        content: `// Example Redis caching implementation
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

async function getCachedData<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  const cached = await redis.get(key);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  const fresh = await fetchFn();
  await redis.setex(key, ttl, JSON.stringify(fresh));
  
  return fresh;
}`
      },
      {
        type: "heading",
        id: "conclusion",
        content: "Conclusion"
      },
      {
        type: "paragraph",
        content: "Building scalable web applications is an iterative process that requires continuous monitoring, optimization, and adaptation. By following these architectural patterns and best practices, you can create systems that grow with your user base while maintaining performance and reliability."
      }
    ]
  }
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const headings = article.content
    .filter(item => item.type === "heading")
    .map(item => ({ id: item.id!, text: item.content }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <article className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6 font-mono">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Articles
            </Button>
          </Link>

          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            <div className="max-w-3xl">
              <div className="space-y-6 mb-8">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="prose prose-lg max-w-none">
                {article.content.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                        {block.content}
                      </p>
                    );
                  }
                  
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        id={block.id}
                        className="text-3xl font-bold mt-12 mb-6 scroll-mt-24"
                      >
                        {block.content}
                      </h2>
                    );
                  }
                  
                  if (block.type === "code") {
                    return (
                      <CodeBlock
                        key={index}
                        code={block.content}
                        language={block.language}
                      />
                    );
                  }
                  
                  return null;
                })}
              </div>

              <Separator className="my-12" />

              <RelatedArticles currentSlug={slug} />
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article;
