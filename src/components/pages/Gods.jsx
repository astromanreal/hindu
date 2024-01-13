import GodsCard from "./../Gods/GodsCard";
import AllGods from "../Gods/AllGogs";

export default function Gods() {
  return (
    <>
      <div id="parallax-world-of-ugg">
        <section>
          <div class="title">
            <h3>Welcome to the </h3>
            <h1>Divine Realm:</h1>
          </div>
        </section>

        <section>
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1415018255745-0ec3f7aee47b?dpr=1&auto=format&fit=crop&w=1500&h=938&q=80&cs=tinysrgb&crop=')`,
            }}
          >
            <h2>Exploring Hindu Deities..</h2>
          </div>
        </section>

        <section>
          <div class="block">
            <p>
              In hindusim, there are various gods and goddesses, each with their
              unique attributes and stories. They embody different facets of the
              divine, reflecting the multifaceted nature of our universe.
            </p>
            <p class="line-break"></p>
            <p>
              On this sacred journey through our website, you will have the
              opportunity to delve into the stories and symbolism of the most
              revered deities in Hinduism, from the creator, preserver, and
              destroyer, to the powerful goddesses and the divine avatars.{" "}
            </p>
          </div>
        </section>
      </div>

      <div className="flex-wrapping">
        {AllGods.map((i) => {
          return (
            <GodsCard title={i.title} img={i.image} desc={i.description} />
          );
        })}
      </div>
    </>
  );
}
