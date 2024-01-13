import "./GodCategory.css";

export default function GodCategory({ title, desc, items }) {
  return (
    <>
      <div
        class="GodCategory-container"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')`,
        }}
      >
        <h1>{title}</h1>
        <p>{desc}</p>
        <a href="#">Learn more</a>
      </div>
      <div class="GodCategory-container GodCategory-second">
        {items.map((i) => {
          return <GodCategoryCard name={i.name} />;
        })}
      </div>
    </>
  );
}

export function GodCategoryCard({ name }) {
  return (
    <>
      {" "}
      <div class="GodCategory-item">
        <div
          class="GodCategory-img"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80')`,
          }}
        ></div>
        <div class="GodCategory-card">
          <h3>{name}</h3>
          <p>
            Exploring underground through networks of tunnels and passageways,
            which can be natural or artificial.
          </p>
          <a href="#">See all..</a>
        </div>
      </div>
    </>
  );
}
