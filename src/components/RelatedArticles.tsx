import { assetUrl } from '@/lib/assetUrl';

import goldenVisaCoast from "@/assets/golden-visa-coast.jpg";
import capitalControlsPrison from "@/assets/capital-controls-prison.jpg";
import goldenVisaStudents from "@/assets/golden-visa-students.jpg";
import h1bMigrationLisbon from "@/assets/h1b-migration-lisbon.jpg";
import residencyTimelinesCoast from "@/assets/residency-timelines-coast.jpg";
import portuguesePassportPorto from "@/assets/portuguese-passport-porto.jpg";
import portugalIficiLisbon from "@/assets/portugal-ifici-lisbon.jpg";
import goldenVisaBlog from "@/assets/golden-visa-blog.jpg";
import portfolioImage from "@/assets/portuguese-coast.jpg";
import europeanResidency from "@/assets/european-residency.jpg";
import retirementMobilityImage from "@/assets/retirement-mobility-blog.jpg";
import wealthManagersImage from "@/assets/wealth-managers-analysis.jpg";

interface Article {
  title: string;
  slug: string;
  type: 'blog' | 'analysis';
  image: string | { src: string };
}

const allBlogs: Article[] = [
  { title: "The Rise of Second Residency in 2026", slug: "/strategic-analysis/second-residency-2026", type: 'blog', image: europeanResidency },
  { title: "Golden Visa vs Citizenship by Investment", slug: "/strategic-analysis/golden-visa-citizenship", type: 'blog', image: goldenVisaCoast },
  { title: "The Return of Capital Controls", slug: "/strategic-analysis/capital-controls", type: 'blog', image: capitalControlsPrison },
  { title: "Advantage of Golden Visas for Students", slug: "/strategic-analysis/golden-visa-students", type: 'blog', image: goldenVisaStudents },
  { title: "The Great Migration: H-1B to Portugal", slug: "/strategic-analysis/h1b-migration-portugal", type: 'blog', image: h1bMigrationLisbon },
  { title: "Residency Timelines by Country", slug: "/strategic-analysis/residency-timelines-2025", type: 'blog', image: residencyTimelinesCoast },
  { title: "The New Geography of Retirement Mobility", slug: "/strategic-analysis/retirement-mobility", type: 'blog', image: retirementMobilityImage },
];

const allAnalysis: Article[] = [
  { title: "Portugal Golden Visa 2026 Guide", slug: "/strategic-analysis/portugal-golden-visa-2026-guide", type: 'analysis', image: goldenVisaBlog },
  { title: "Portugal IFICI Tax Regime 2025", slug: "/strategic-analysis/portugal-ifici-tax-regime-2025", type: 'analysis', image: portugalIficiLisbon },
  { title: "Portuguese Passport for Global Investors", slug: "/strategic-analysis/portuguese-passport-global-investors", type: 'analysis', image: portuguesePassportPorto },
  { title: "Portugal Golden Visa Portfolio", slug: "/strategic-analysis/portugal-golden-visa-portfolio", type: 'analysis', image: portfolioImage },
  { title: "Wealth Managers & Immigration Brokers", slug: "/strategic-analysis/wealth-managers-immigration-brokers", type: 'analysis', image: wealthManagersImage },
];

interface RelatedArticlesProps {
  currentSlug: string;
  currentType: 'blog' | 'analysis';
}

const ArticleCard = ({ article }: { article: Article }) => (
  <a 
    href={article.slug}
    className="group block overflow-hidden rounded-lg border border-border/30 bg-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
  >
    <div className="aspect-[16/9] overflow-hidden">
      <img 
        src={assetUrl(article.image)} 
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h4 className="text-sm font-medium text-primary group-hover:text-primary/70 transition-colors line-clamp-2">
        {article.title}
      </h4>
    </div>
  </a>
);

const RelatedArticles = ({ currentSlug, currentType }: RelatedArticlesProps) => {
  const relatedBlogs = allBlogs
    .filter(article => article.slug !== currentSlug)
    .slice(0, 3);
  
  const relatedAnalysis = allAnalysis
    .filter(article => article.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-2xl font-bold text-primary mb-8">Related Reading</h2>
        
        <div className="space-y-10">
          <div>
            <h3 className="text-sm text-primary/60 mb-4">Articles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedBlogs.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-primary/60 mb-4">Analysis</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedAnalysis.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
