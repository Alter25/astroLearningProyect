export interface Link {
  href: string;
  text: string;
}

export interface toggleLink extends Link {
  name: string;
}

type ItemContent = {
  content: string;
};

export interface Items {
  name: string;
  id: string;
  content: ItemContent;
  date: string;
}

// RickAndMorty Api
type Status = "Alive" | "Dead" | "unknown";
type Species = "Human" | "Alien" | "unknown";
type Gender = "Female" | "Male" | "Genderless" | "unknown";

export interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ApiResponse {
  info: ApiInfo;
  results: Character[];
}