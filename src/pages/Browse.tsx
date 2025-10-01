import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Star, Search } from "lucide-react";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Quantum Nexus", genre: "Sci-Fi", rating: 8.9, year: 2024 },
    { id: 2, title: "Shadow Protocol", genre: "Thriller", rating: 8.5, year: 2024 },
    { id: 3, title: "Digital Dreams", genre: "Drama", rating: 9.2, year: 2023 },
    { id: 4, title: "Neon Nights", genre: "Action", rating: 8.7, year: 2024 },
    { id: 5, title: "Cosmic Journey", genre: "Adventure", rating: 8.4, year: 2023 },
    { id: 6, title: "Silent Echo", genre: "Mystery", rating: 9.0, year: 2024 },
    { id: 7, title: "Velocity Rush", genre: "Action", rating: 8.3, year: 2024 },
    { id: 8, title: "Eternal Horizon", genre: "Romance", rating: 8.8, year: 2023 },
  ];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Browse <span className="text-gradient">Our Collection</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Discover thousands of movies and series across all genres
            </p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <Card key={movie.id} className="bg-card border-border hover:border-primary/50 transition-all shadow-card hover:shadow-glow group overflow-hidden">
                <div className="aspect-[2/3] bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="lg" className="rounded-full w-16 h-16 p-0">
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold text-lg mb-1 truncate">{movie.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{movie.genre} • {movie.year}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="font-medium">{movie.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No movies found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
