import "./LargeHero.css";

export default function LargeHero() {
  return (
    <>
      <section
        class="LargeHero-hero LargeHero-image-as-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&dpr=2&fit=crop&fm=jpg&h=700&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300')`,
        }}
      >
        <div class="LargeHero-hero-container">
          <p class="LargeHero-animate LargeHero-fadeInLeft LargeHero-delay-400">
            Mazgine cover hero style
          </p>
          <h1 class="LargeHero-hero-title LargeHero-animate LargeHero-fadeInLeft LargeHero-delay-600">
            This is a large hero section
          </h1>
          <a
            href="#"
            class="LargeHero-hero-button LargeHero-animate LargeHero-fadeInLeft LargeHero-delay-800"
            title="Click to see more"
          >
            Click Me
          </a>
        </div>
      </section>
      <section class="LargeHero-main-content">
        <h2>This is the additional content</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </>
  );
}
