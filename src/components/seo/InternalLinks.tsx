// Automated Internal Linking Component
import { getRelatedPages } from '@/lib/seo/config';
import { ArrowRight } from 'lucide-react';

interface InternalLinksProps {
  currentPath: string;
  category?: string;
  title?: string;
  limit?: number;
  variant?: 'cards' | 'list' | 'inline';
}

const InternalLinks = ({ 
  currentPath, 
  category, 
  title = 'Related Articles',
  limit = 3,
  variant = 'cards' 
}: InternalLinksProps) => {
  const relatedPages = getRelatedPages(currentPath, category, limit);

  if (relatedPages.length === 0) return null;

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap gap-2">
        {relatedPages.map(page => (
          <a
            key={page.path}
            href={page.path}
            className="text-primary underline hover:opacity-70 transition-opacity"
          >
            {page.title}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <nav className="space-y-2" aria-label={title}>
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <ul className="space-y-2">
          {relatedPages.map(page => (
            <li key={page.path}>
              <a
                href={page.path}
                className="flex items-center gap-2 text-primary hover:opacity-70 transition-opacity group"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <section className="py-12 bg-secondary/10" aria-label={title}>
      <div className="container mx-auto px-8">
        <h2 className="text-2xl font-light text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPages.map(page => (
            <a
              key={page.path}
              href={page.path}
              className="block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-medium text-primary mb-2 group-hover:opacity-70 transition-opacity">
                {page.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {page.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 group-hover:gap-2 transition-all">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
