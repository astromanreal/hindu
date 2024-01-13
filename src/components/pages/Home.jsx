import { Link } from "react-router-dom";
import "./styles/Home.css";
import Testing from "../testing/Testing";

export default function Home() {
  const weOffer = [
    {
      title: "god",
      subtitle: "The Divine Cosmos of Hindu Deities",
      desc: "Hindu gods are divine beings central to Hindu beliefs, representing various aspects of life, nature, and spirituality, worshiped with devotion and reverence.",
      image:
        "https://i.pinimg.com/originals/8e/fc/e5/8efce5baeb406394f8d6e44804f1f488.jpg",
    },
    {
      title: "texts",
      subtitle: "Sacred Scriptures of Hinduism",
      desc: "Hindu texts are ancient scriptures that encompass religious, philosophical, and cultural teachings, guiding the way of life, rituals, and spirituality for followers.",
      image: "https://wallpapercave.com/mwp/wp2036897.jpg",
    },
    {
      title: "shlokas",
      subtitle: "Verses of Wisdom",
      desc: "Sanskrit shlokas are ancient verses filled with profound wisdom and spiritual teachings, guiding individuals on the path of enlightenment and inner growth.",
      image:
        "https://t3.ftcdn.net/jpg/04/56/33/68/360_F_456336870_HsyZnsyMdR1YB5awh8tPkhwIFDVDtusL.jpg",
    },
    {
      title: "aarti",
      subtitle: "Sacred Offering.",
      desc: "Aarti is a Hindu ritual of offering light and prayers to deities, expressing devotion and seeking divine blessings.",
      image:
        "https://galleryofgod.files.wordpress.com/2014/06/puja-arti-e1404052877819.jpg?w=672&h=372&crop=1",
    },
  ];
  return (
    <>
      <Testing />
      {/* <Parallax /> */}
      {/* <SimpleMenu /> */}
      {/* <LargeHero /> */}
      {/* <FixedBack /> */}
      <HomeHeader />
      <div className="only-text-center">
        <h1>This is what we offer: </h1>
      </div>
      <div className="flex-wrapping-and-center">
        {weOffer.map((i) => {
          return (
            <HomeOffer
              image={i.image}
              title={i.title}
              subtitle={i.subtitle}
              desc={i.desc}
            />
          );
        })}
      </div>
    </>
  );
}

export function HomeHeader() {
  return (
    <>
      <header class="home-header">
        <div class="home-brand-box">
          <span class="home-brand">Sanatan vidya</span>
        </div>

        <div class="home-text-box">
          <h1 class="home-heading-primary">
            <span class="home-heading-primary-main">
              Exploring Vedic Wisdom:
            </span>
            <span class="home-heading-primary-sub">
              Navigating the Path of Hinduism
            </span>
          </h1>
          <Link to="explore" class="home-btn home-btn-white home-btn-animated">
            Discover
          </Link>
        </div>
      </header>
    </>
  );
}

export function HomeOffer({ image, title, subtitle, desc }) {
  return (
    <>
      <div class="HomeOffer-col" ontouchstart="this.classList.toggle('hover');">
        <div class="HomeOffer-container">
          <div
            class="HomeOffer-front"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div class="HomeOffer-inner">
              <p>{title}</p>
              <span>{subtitle}</span>
            </div>
          </div>
          <div class="HomeOffer-back">
            <div class="HomeOffer-inner">
              <Link to={title}>
                <p>{desc}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
