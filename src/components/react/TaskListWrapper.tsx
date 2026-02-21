import {useState, useEffect } from "react";
import Card from "./Card";
import type { ApiResponse } from "../../types/types";


const ApiUrl = 'https://rickandmortyapi.com/api/character';

export default function TaskListWrapper() {
  const [listaCartas,setListaCartas] = useState<ApiResponse>();
  
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
    const fetchData = async () => {
      const data = await getData();
      setListaCartas(data);
    }
    fetchData();
   },[])

  return <section className="w-screen h-full">
    <ul className="grid grid-cols-min gap-6">
      {
        listaCartas?.results.map(character => (
          <li key={character.id}><Card  character={ character}/></li>
        ))
        // listaCartas.map()
      }
    </ul>
  </section>
}