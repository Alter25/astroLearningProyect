import type { Character } from "../../types/types";

interface Props{
  character: Character;
}

export default function Card({ character }: Props) {
  const { name, status, gender, origin, image } = character;
  
  return <article className="border w-40 h-60 flex flex-col justify-center rounded-xl">
    <section>
      <h2>{name}</h2>
      <img src={image} alt="" />
    </section>
    <section>
      <p>{origin.name}</p>
    </section>
  </article>
}