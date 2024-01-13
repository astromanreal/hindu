import "./TextsList.css";
import { Link } from "react-router-dom";

export default function TextsList() {
  const TextsList = [
    {
      _id: "1",
      name: "Veda",
      img: "https://imgs.search.brave.com/YyHOwrcSPHDNmIwPuy8KYB5Q6spAQ8BTCfUm7xutv1Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFqbWZzbktFbUwu/anBn",
      desc: "The Vedas are the oldest and most revered sacred texts in Hinduism. They form the foundational scriptures of this ancient religion and are considered to be of divine origin. The term Veda means knowledge in Sanskrit, reflecting their role as sources of profound spiritual and philosophical wisdom.",
    },
    {
      _id: "2",
      name: "Puran",
      img: "https://imgs.search.brave.com/PvZLLMoQ3mGlYm8cLkI-5zy1FiGfRELfRWsuN6JmaJo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxVTYyMU0rZTZM/Ll9BQ19VTDIwMF9T/UjIwMCwyMDBfLmpw/Zw",
      desc: "Puranas are a genre of ancient Indian texts that encompass a vast and diverse collection of narratives, stories, legends, and mythological accounts. The term Purana means ancient or old, and these texts are traditionally believed to contain the history and knowledge of ancient India. There are 18 major Puranas, as well as numerous minor ones, each dedicated to specific deities or themes.",
    },
    {
      _id: "3",
      name: "Bhawat geeta",
      img: "https://imgs.search.brave.com/EICuo8qsf6Lo_q-IsMOPT3wUU-Aqj7I3MBdbEqh6b6o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8yLzc4/LzNsVVZhbS5qcGc",
      desc: "The Bhagavad Gita is a 700-verse Hindu scripture that features a conversation between Prince Arjuna and Lord Krishna. It offers essential teachings on duty, righteousness, and the path to self-realization, serving as a spiritual guide for leading a meaningful life.",
    },
  ];
  return (
    <>
      <section class="TextsList-articles">
        {TextsList.map((i) => {
          return <TextsList_single name={i.name} img={i.img} desc={i.desc} />;
        })}
      </section>
    </>
  );
}

export function TextsList_single({ name, img, desc }) {
  return (
    <>
      <article>
        <Link to={name}>
          <div class="TextsList-image-wrapper">
            <img src={img} alt={name + " not found"} />
          </div>
          <div class="TextsList-caption-wrapper">
            <div class="TextsList-caption">
              <h2>{name}</h2>
              <p>{desc}</p>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
