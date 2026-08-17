import React from "react";
import { Facebook, Linkedin, Twitter, Mail, Link2, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt?: string;
  onShare?: (platform: string) => void;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, excerpt = "", onShare }) => {
  const [copiedLink, setCopiedLink] = React.useState(false);
  const [copiedChatGPT, setCopiedChatGPT] = React.useState(false);
  const [copiedClaude, setCopiedClaude] = React.useState(false);
  const { toast } = useToast();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to clipboard.",
      });
      onShare?.("copy_link");
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShareToAI = async (platform: "chatgpt" | "claude") => {
    const prompt = `Please read and summarize this article, then provide 3-5 key takeaways:

Title: ${title}
${excerpt ? `\nExcerpt: ${excerpt}` : ""}

URL: ${url}

Please provide:
1. A brief summary (2-3 paragraphs)
2. Key takeaways and insights
3. Any actionable recommendations from the article`;

    try {
      await navigator.clipboard.writeText(prompt);
      if (platform === "chatgpt") {
        setCopiedChatGPT(true);
        setTimeout(() => setCopiedChatGPT(false), 2000);
      } else {
        setCopiedClaude(true);
        setTimeout(() => setCopiedClaude(false), 2000);
      }
      toast({
        title: "Prompt copied!",
        description: `Open ${platform === "chatgpt" ? "ChatGPT" : "Claude"} and paste to discuss this article.`,
      });
      onShare?.(platform);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSocialShare = (platform: string, shareUrl: string) => {
    onShare?.(platform);
    
    // WhatsApp requires direct navigation to avoid CORS issues
    if (platform === "whatsapp") {
      window.location.href = shareUrl;
    } else {
      window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      hoverColor: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
    {
      name: "X",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      hoverColor: "hover:bg-[#000000] hover:text-white hover:border-[#000000]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      hoverColor: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
    {
      name: "Reddit",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      url: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      hoverColor: "hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500]",
    },
    {
      name: "Pinterest",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      ),
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
      hoverColor: "hover:bg-[#E60023] hover:text-white hover:border-[#E60023]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
      hoverColor: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${title}\n\n${excerpt}\n\nRead more: ${url}`)}`,
      hoverColor: "hover:bg-primary hover:text-primary-foreground hover:border-primary",
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Social Media Share Section */}
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold text-foreground">Share this article</h3>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {socialLinks.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <Button
                key={platform.name}
                variant="outline"
                className={`transition-all duration-200 border-border ${platform.hoverColor} h-10 px-3 sm:px-4`}
                onClick={() => handleSocialShare(platform.name.toLowerCase(), platform.url)}
                aria-label={`Share on ${platform.name}`}
              >
                <IconComponent />
                <span className="hidden sm:inline ml-2 text-sm">{platform.name}</span>
              </Button>
            );
          })}
          <Button
            variant="outline"
            className={`transition-all duration-200 border-border h-10 px-3 sm:px-4 ${
              copiedLink
                ? "bg-green-500 text-white border-green-500"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
            onClick={handleCopyLink}
            aria-label="Copy link"
          >
            {copiedLink ? <Check className="h-5 w-5" /> : <Link2 className="h-5 w-5" />}
            <span className="hidden sm:inline ml-2 text-sm">{copiedLink ? "Copied!" : "Copy Link"}</span>
          </Button>
        </div>
      </div>

      {/* AI Share Section */}
      <div className="flex flex-col items-center gap-4 pt-4 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground">Discuss with AI</h3>
        <p className="text-sm text-muted-foreground text-center max-w-md">
          Copy a prompt to discuss this article with your favorite AI assistant
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            className={`transition-all duration-200 border-border h-10 px-3 sm:px-4 ${
              copiedChatGPT
                ? "bg-green-500 text-white border-green-500"
                : "hover:bg-[#10A37F] hover:text-white hover:border-[#10A37F]"
            }`}
            onClick={() => handleShareToAI("chatgpt")}
            aria-label="Share to ChatGPT"
          >
            {copiedChatGPT ? (
              <Check className="h-5 w-5" />
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
              </svg>
            )}
            <span className="hidden sm:inline ml-2 text-sm">
              {copiedChatGPT ? "Copied!" : "Share to ChatGPT"}
            </span>
            <span className="sm:hidden ml-2 text-sm">
              {copiedChatGPT ? "Copied!" : "ChatGPT"}
            </span>
          </Button>
          <Button
            variant="outline"
            className={`transition-all duration-200 border-border h-10 px-3 sm:px-4 ${
              copiedClaude
                ? "bg-green-500 text-white border-green-500"
                : "hover:bg-[#CC9B7A] hover:text-white hover:border-[#CC9B7A]"
            }`}
            onClick={() => handleShareToAI("claude")}
            aria-label="Share to Claude"
          >
            {copiedClaude ? (
              <Check className="h-5 w-5" />
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H8.2l-.696-.696-.395-.79-.593-.099-.791.198-.79-.593-1.384-.494V8.397l.79-1.087.593-.098.692.296 1.186-.493.69-.593h.4l.593-.494.79-.692.89.099.495.593.889.098.593-.098.593.395.79.296h.692l.395.593.297.692 1.384.692.593.494.099.593.593.593-.198.79.198.79.593.593-.099.494.593.198.099.593-.099.79.396.495-.297.988-.494.89-.395.098-.593.593-.593.198-.593-.099-.593-.098-.79-.494-.396-.593-.197-.593-.593-.099-.692.198-.79-.099-.395-.395-.593.197-.593-.098-.889-.296h-.593l-.494.395-.988.099-.593.296-.692.197h-.593l-.988.198-.593-.099zm.89-5.816l-.89.296-.099.89.099.296.79-.099.296-.79-.197-.593zm8.789 5.027l.593-.197.197-.593-.494-.296-.593.296.099.593.197.197zm-4.918-4.72l-.297.395.198.296.494-.098.099-.494-.395-.198-.099.099zm3.04 1.975l-.395.395.197.494.494-.098.099-.593-.296-.297-.099.099zm-3.83 1.384l-.198.494.296.297.395-.198.099-.494-.395-.198-.197.099zm5.52.89l-.296.296.197.494.494-.099.099-.593-.395-.197-.099.099z"/>
              </svg>
            )}
            <span className="hidden sm:inline ml-2 text-sm">
              {copiedClaude ? "Copied!" : "Share to Claude"}
            </span>
            <span className="sm:hidden ml-2 text-sm">
              {copiedClaude ? "Copied!" : "Claude"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
