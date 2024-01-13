import "./HoverNav.css";

export default function HoverNav() {
  return (
    <>
      <main class="container">
        <ul class="hover">
          <li class="hover-item">
            <div class="hover-item-container">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5743b78b4c2f85e9706f7370/1518290164069-LKMPL9WTLB4M3QFVIN3K/Guy-Bourdin-11.jpg?format=1500w"
                class="hover-image"
              />
              <div class="hover-overlay"></div>
              <div class="hover-copy">
                <h2 class="hover-title">France</h2>
                <p class="hover-year">MCMLXXX</p>
              </div>
            </div>
          </li>
          <li class="hover-item">
            <div class="hover-item-container">
              <img
                src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/5/1425572817990/afa6c4a0-8559-4c78-be43-aac9331ed701-2060x1236.jpeg?width=620&quality=45&dpr=2&s=none"
                class="hover-image"
              />
              <div class="hover-overlay"></div>
              <div class="hover-copy">
                <h2 class="hover-title">Archive</h2>
                <p class="hover-year">MCMLXXIX</p>
              </div>
            </div>
          </li>
          <li class="hover-item">
            <div class="hover-item-container">
              <img
                src="https://usaartnews.com/wp-content/uploads/188.jpg"
                class="hover-image"
              />
              <div class="hover-overlay"></div>
              <div class="hover-copy">
                <h2 class="hover-title">Vogue</h2>
                <p class="hover-year">MCMLXIX</p>
              </div>
            </div>
          </li>
          <li class="hover-item">
            <div class="hover-item-container">
              <img
                src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Guy-Bourdin-French-Vogue-Dec-1976-Jan-1977-lot-29.jpg"
                class="hover-image"
              />
              <div class="hover-overlay"></div>
              <div class="hover-copy">
                <h2 class="hover-title">Pentax</h2>
                <p class="hover-year">MCMLXXVI</p>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}
