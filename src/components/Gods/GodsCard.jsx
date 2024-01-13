import "./GodsStyle.css";
import { Link } from "react-router-dom";

export default function GodsCard({ title, desc, img }) {
  return (
    <>
      <div class="GodsCard-card">
        <div class="GodsCard-image">
          <img src={img} alt="not found" />
        </div>
        <div class="GodsCard-content">
          <Link to="/">
            <span class="GodsCard-title">{title}</span>
          </Link>

          <p class="GodsCard-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
          </p>
          <Link to={`${title}`} class="GodsCard-action">
            Find out more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
