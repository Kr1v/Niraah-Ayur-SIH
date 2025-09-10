import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Search, Filter, Leaf, Apple, Carrot, Wheat, Fish, Milk, Coffee, Heart, Zap, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Foods = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFood, setSelectedFood] = useState<any>(null);

  const categories = [
    { id: "all", label: "All Foods", icon: Leaf, color: "vibrant-teal" },
    { id: "fruits", label: "Fruits", icon: Apple, color: "soft-coral" },
    { id: "vegetables", label: "Vegetables", icon: Carrot, color: "sage-green" },
    { id: "grains", label: "Grains", icon: Wheat, color: "lavender" },
    { id: "proteins", label: "Proteins", icon: Fish, color: "sunset-orange" },
    { id: "dairy", label: "Dairy", icon: Milk, color: "warm-coral" },
    { id: "beverages", label: "Beverages", icon: Coffee, color: "vibrant-teal" },
  ];

  const foods = [
    {
      id: 1,
      name: "Sweet Potato",
      category: "vegetables",
      dosha: "Vata, Pitta",
      season: "Winter",
      benefits: ["Digestive Health", "Energy Boost", "Skin Health"],
      nutrients: ["Vitamin A", "Fiber", "Potassium"],
      image: "🍠",
      rating: 4.8,
      isOrganic: true
    },
    {
      id: 2,
      name: "Mango",
      category: "fruits",
      dosha: "Pitta, Kapha",
      season: "Summer",
      benefits: ["Immune Support", "Eye Health", "Digestive Aid"],
      nutrients: ["Vitamin C", "Vitamin A", "Fiber"],
      image: "🥭",
      rating: 4.9,
      isOrganic: false
    },
    {
      id: 3,
      name: "Quinoa",
      category: "grains",
      dosha: "All Doshas",
      season: "All Seasons",
      benefits: ["Complete Protein", "Heart Health", "Weight Management"],
      nutrients: ["Protein", "Fiber", "Magnesium"],
      image: "🌾",
      rating: 4.7,
      isOrganic: true
    },
    {
      id: 4,
      name: "Salmon",
      category: "proteins",
      dosha: "Vata, Pitta",
      season: "All Seasons",
      benefits: ["Brain Health", "Heart Health", "Anti-inflammatory"],
      nutrients: ["Omega-3", "Protein", "Vitamin D"],
      image: "🐟",
      rating: 4.6,
      isOrganic: false
    },
    {
      id: 5,
      name: "Ghee",
      category: "dairy",
      dosha: "All Doshas",
      season: "All Seasons",
      benefits: ["Digestive Fire", "Memory", "Skin Health"],
      nutrients: ["Healthy Fats", "Vitamin A", "Vitamin E"],
      image: "🧈",
      rating: 4.9,
      isOrganic: true
    },
    {
      id: 6,
      name: "Green Tea",
      category: "beverages",
      dosha: "Pitta, Kapha",
      season: "All Seasons",
      benefits: ["Antioxidants", "Metabolism", "Mental Clarity"],
      nutrients: ["Catechins", "L-Theanine", "Caffeine"],
      image: "🍵",
      rating: 4.5,
      isOrganic: true
    }
  ];

  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDoshaColor = (dosha: string) => {
    if (dosha.includes("Vata")) return "vibrant-teal";
    if (dosha.includes("Pitta")) return "soft-coral";
    if (dosha.includes("Kapha")) return "sage-green";
    return "lavender";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-vibrant-teal/5 to-soft-coral/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vibrant-teal/20 to-transparent rounded-blob animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-soft-coral/20 to-transparent animate-morph"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-lavender/20 to-transparent rounded-organic animate-float"></div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-vibrant-teal rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-20 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-soft-coral rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-space font-bold">8K+ Foods Database</h1>
                <p className="text-sm text-muted-foreground">Ayurvedic nutrition at your fingertips</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto p-4 space-y-6">
        {/* Search and Filter */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search foods, nutrients, or benefits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`whitespace-nowrap rounded-2xl ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r from-${category.color} to-${category.color}/80 text-white`
                      : "glass dark:glass-dark"
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Total Foods", value: "8,247", icon: Leaf, color: "vibrant-teal" },
            { label: "Organic Options", value: "3,156", icon: Star, color: "soft-coral" },
            { label: "Nutrients Tracked", value: "127", icon: Zap, color: "sage-green" },
            { label: "Dosha Classified", value: "100%", icon: Heart, color: "lavender" },
          ].map((stat, index) => (
            <Card key={index} className="glass dark:glass-dark border-0 rounded-2xl p-4 text-center group hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 bg-${stat.color}/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-float`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <div className="text-2xl font-space font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Foods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map((food) => (
            <Card
              key={food.id}
              className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedFood(food)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{food.image}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{food.rating}</span>
                    </div>
                    {food.isOrganic && (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600 text-xs">
                        Organic
                      </Badge>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-space font-bold mb-2">{food.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{food.season} • {food.category}</p>

                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium mb-1">Dosha Compatibility</div>
                    <Badge variant="secondary" className={`bg-${getDoshaColor(food.dosha)}/20 text-${getDoshaColor(food.dosha)}`}>
                      {food.dosha}
                    </Badge>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-1">Key Benefits</div>
                    <div className="flex flex-wrap gap-1">
                      {food.benefits.slice(0, 2).map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Food Detail Modal */}
        {selectedFood && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="glass dark:glass-dark border-0 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{selectedFood.image}</div>
                    <div>
                      <h2 className="text-2xl font-space font-bold">{selectedFood.name}</h2>
                      <p className="text-muted-foreground">{selectedFood.season} • {selectedFood.category}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedFood(null)}
                    className="hover:scale-105 transition-transform"
                  >
                    ×
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-space font-semibold mb-3">Benefits</h3>
                    <div className="space-y-2">
                      {selectedFood.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-soft-coral" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-space font-semibold mb-3">Key Nutrients</h3>
                    <div className="space-y-2">
                      {selectedFood.nutrients.map((nutrient, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-vibrant-teal" />
                          <span className="text-sm">{nutrient}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <h3 className="font-space font-semibold mb-3">Dosha Compatibility</h3>
                  <Badge variant="secondary" className={`bg-${getDoshaColor(selectedFood.dosha)}/20 text-${getDoshaColor(selectedFood.dosha)}`}>
                    {selectedFood.dosha}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Foods;


