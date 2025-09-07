import OrganicHeader from "@/components/OrganicHeader";
import OrganicHero from "@/components/OrganicHero";
import OrganicFeatures from "@/components/OrganicFeatures";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <OrganicHeader />
      <OrganicHero />
      <OrganicFeatures />
    </div>
  );
};

export default Index;
