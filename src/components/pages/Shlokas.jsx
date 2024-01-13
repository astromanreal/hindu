import "./styles/Shlokas.css";

export default function Shlokas() {
  return (
    <>
      <ShlokasHero />
    </>
  );
}

export function ShlokasHero() {
  return (
    <>
      <header class="mainHeading">
        <div class="mainHeading__content">
          <article class="mainHeading__text">
            <p class="mainHeading__preTitle">texts</p>
            <h2 class="mainHeading__title">Vedic Shlokas </h2>
            <p class="mainHeading__description">
              Unveiling Ancient Wisdom, Inspiring Modern Souls. Explore Vedic
              wisdom, timeless mantras, and Hindu philosophy for enlightenment.
            </p>
            <button class="mainHeading__cta">know more</button>
          </article>

          <figure class="mainHeading__image">
            <img
              src="https://imgs.search.brave.com/Cmmd3K5cWo26Voz3cVGKjrzRmoDD7X2U1uVQQm6tGXE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hvcnRmb3JtLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA1L2dh/bmVzaGEtc3RhdHVl/LTc1MHgzNTAuanBn"
              alt=""
            />
          </figure>
        </div>
      </header>
    </>
  );
}
