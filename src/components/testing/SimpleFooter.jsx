import "./SimpleFooter.css";

export default function SimpleFooter() {
  return (
    <>
      <footer id="simple-footer">
        <header>
          <h2>Quota</h2>
          <p>
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            accusantium?"
          </p>
          <ul class="icons">
            <ion-icon class="icon" name="logo-facebook">
              facebook
            </ion-icon>
            <ion-icon class="icon" name="logo-instagram">
              insta
            </ion-icon>
            <ion-icon class="icon" name="logo-twitter">
              twitter
            </ion-icon>
            <ion-icon class="icon" name="logo-youtube">
              youtube
            </ion-icon>
          </ul>
        </header>
        <aside>
          <ul class="category">
            <li>
              <h3>Project</h3>
            </li>
            <li>Houses</li>
            <li>Rooms</li>
            <li>Flats</li>
            <li>Apartments</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Company</h3>
            </li>
            <li>Objective</li>
            <li>Capital</li>
            <li>Security</li>
            <li>Selling</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Movement</h3>
            </li>
            <li>Movement</li>
            <li>Support us</li>
            <li>Pricing</li>
            <li>Renting</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Help</h3>
            </li>
            <li>Privacy</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </aside>
      </footer>
    </>
  );
}
