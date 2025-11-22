import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link2, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  title: string;
  url?: string;
}

export const SocialShare = ({ title, url }: SocialShareProps) => {
  const { toast } = useToast();
  const shareUrl = url || window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "Article link copied to clipboard",
    });
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(shareUrl)}`,
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Share:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
      >
        <Twitter className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
      >
        <Facebook className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
      >
        <Linkedin className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.email)}
      >
        <Mail className="w-4 h-4" />
      </Button>
      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        <Link2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
