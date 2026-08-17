import { useState } from 'react';

export type Category = 'all' | 'jurisdictional-analysis' | 'tax-regulatory' | 'family-governance' | 'market-intelligence';

export interface HubArticle {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: Category;
  categoryLabel: string;
  image: string;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'jurisdictional-analysis', label: 'Jurisdictional Analysis' },
  { value: 'tax-regulatory', label: 'Tax & Regulatory Intelligence' },
  { value: 'family-governance', label: 'Family Governance & Legacy Planning' },
  { value: 'market-intelligence', label: 'Market Intelligence' },
];

const ArticleGrid = ({ articles }: { articles: HubArticle[] }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 rounded-full border ${
                  activeCategory === cat.value
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredArticles.map((article) => (
              <a
                key={article.slug}
                href={article.slug}
                className="group block"
              >
                <div className="aspect-[16/10] overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent-gold font-medium">
                      {article.categoryLabel}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-primary leading-snug group-hover:opacity-70 transition-opacity line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleGrid;
