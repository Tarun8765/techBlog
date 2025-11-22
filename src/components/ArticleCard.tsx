import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const ArticleCard = ({
  title,
  excerpt,
  date,
  readTime,
  tags,
  slug,
}: ArticleCardProps) => {
  return (
    <Link to={`/article/${slug}`} className="block h-full">
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card hover:border-primary/50 h-full">
        <div className="p-6 space-y-4 flex flex-col h-full">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-mono text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground line-clamp-2 flex-1">{excerpt}</p>

          <div className="flex items-center justify-between pt-4 mt-auto border-t border-border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ArticleCard;
