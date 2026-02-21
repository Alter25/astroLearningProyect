import {useState, useEffect } from "react";
import Card from "./Card";


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