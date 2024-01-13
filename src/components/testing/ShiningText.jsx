import "./ShiningText.css";

export default function ShiningText() {
  return (
    <>
      <div id="shin-text">
        <p>
          Welcome to my codepen profile:
          <br />
          <a href="https://codepen.io/cssparadise">codepen.io/cssparadise</a>
        </p>{" "}
      </div>
      <Loding />
    </>
  );
}

export function Loding() {
  return (
    <>
      <div class="loading-container">
        <div class="loading-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </>
  );
}
