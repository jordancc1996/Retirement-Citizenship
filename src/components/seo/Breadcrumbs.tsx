// SEO-Optimized Breadcrumbs Component
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '@/lib/seo/types';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  /** Use 'hero' variant for breadcrumbs on dark hero backgrounds */
  variant?: 'default' | 'hero';
}

const Breadcrumbs = ({ items, className = '', variant = 'default' }: BreadcrumbsProps) => {
  const fullItems: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...items,
  ];

  const schema = generateBreadcrumbSchema(fullItems);

  const isHero = variant === 'hero';
  const textColor = isHero ? 'text-white/70' : 'text-muted-foreground';
  const hoverColor = isHero ? 'hover:text-white' : 'hover:text-primary';
  const activeColor = isHero ? 'text-white font-medium' : 'text-primary font-medium';
  const chevronColor = isHero ? 'text-white/50' : 'text-muted-foreground/50';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav 
        aria-label="Breadcrumb" 
        className={`py-4 ${className}`}
      >
        <ol className={`flex items-center flex-wrap gap-2 text-sm ${textColor}`}>
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            
            return (
              <li key={item.url} className="flex items-center gap-2">
                {index === 0 ? (
                  <a 
                    href={item.url} 
                    className={`flex items-center gap-1 ${hoverColor} transition-colors`}
                    aria-label="Home"
                  >
                    <Home className="h-4 w-4" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ) : isLast ? (
                  <span 
                    className={activeColor} 
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <a 
                    href={item.url} 
                    className={`${hoverColor} transition-colors`}
                  >
                    {item.name}
                  </a>
                )}
                {!isLast && (
                  <ChevronRight className={`h-4 w-4 ${chevronColor}`} />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
