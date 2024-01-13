import "./styles/Explore.css";
import { Link } from "react-router-dom";

export default function Explore() {
  const ExploreItems = [
    {
      id: "1",
      title: "Tridev",
      route: "/god/tridev",
      desciption:
        "Mahadev, a reference to Lord Shiva in Hinduism, embodies creation, destruction, and transformation. Worshiped for cosmic energy and spirituality, he's depicted with unique symbols.",
    },
    {
      id: "2",
      title: "Aarti",
      route: "/aarti",
      desciption:
        "A Hindu aarti is a devotional ritual involving the offering of light, incense, or food to deities, accompanied by singing or chanting hymns, expressing reverence and gratitude.",
    },
    {
      id: "3",
      title: "Texts",
      route: "/texts",
      desciption:
        "Hinduism's sacred texts, including the Vedas, Upanishads, Bhagavad Gita, and Ramayana, provide spiritual wisdom, moral guidance, and religious stories for millions of followers.",
    },
  ];
  return (
    <>
      <div class="ExploreCard-container">
        {ExploreItems.map((i) => {
          return (
            <ExploreCard
              id={i.id}
              title={i.title}
              route={i.route}
              desc={i.desciption}
            />
          );
        })}
      </div>
    </>
  );
}

export function ExploreCard({ id, title, route, desc }) {
  return (
    <>
      <div class="ExploreCard-card">
        <div class="ExploreCard-box">
          <div class="ExploreCard-content">
            <span class="ExploreCard-heading">{id}</span>
            <span class="ExploreCard-content">{title} </span>
            <p>{desc}</p>
            <Link to={route}>Read more..</Link>
          </div>
        </div>
      </div>
    </>
  );
}
