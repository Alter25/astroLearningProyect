import {useState, useEffect } from "react";
import Card from "./Card";

interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

interface ApiProps {
  info?: ApiResponse;
}

const ApiUrl = 'https://rickandmortyapi.com/api/character';

export default function TaskListWrapper({ }) {
  const [listaCartas,setListaCartas] = useState<any>();
  
  async function getData() {
    try {
      const response = await fetch(ApiUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (e) {
      console.log("Error!", e);
    }
  }

  useEffect(() => {
    setListaCartas(getData());
   },[])

  return <section>
    <ul>
      {
        listaCartas.map()
      }
    </ul>
  </section>
}