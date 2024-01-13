import { Link } from "react-router-dom";
import "./Bubble.css";

export default function Bubble() {
  return (
    <>
      <div class="Bubble-container">
        <div class="Bubble-drop">
          <div class="Bubble-content">
            <h2>01</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              magnam!
            </p>
            <Link to="/">Read More</Link>
          </div>
        </div>
        <div class="Bubble-drop">
          <div class="Bubble-content">
            <h2>02</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              magnam!
            </p>
            <Link to="#">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
}
