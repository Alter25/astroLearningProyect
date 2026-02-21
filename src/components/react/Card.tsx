
interface Props{
  title: string;
  imgUrl?: string;
  description: string;
}

export default function Card({title,imgUrl,description }:Props) {
  return <article className="border w-40 h-50 rounded-xl">
    <section>
      <h2>{title}</h2>
      <img src={imgUrl} alt="" />
    </section>
    <section>
      <p>{description}</p>
    </section>
  </article>
}