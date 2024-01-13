import "./Profile.css";

export default function Profile() {
  return (
    <>
      <div id="Profile-body">
        <div class="header__wrapper">
          <header></header>
          <div class="cols__container">
            <div class="left__col">
              <div class="img__container">
                <img
                  src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Alexandra Smith"
                />
                <span></span>
              </div>
              <h2>Alexandra Smith</h2>
              <p>UX/UI Designer</p>
              <p>a.smith@gmail.com</p>

              <ul class="about">
                <li>
                  <span>4,073</span>Followers
                </li>
                <li>
                  <span>322</span>Following
                </li>
                <li>
                  <span>200,543</span>Attraction
                </li>
              </ul>

              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor
                  dictum, nisl ligula egestas nulla.{" "}
                </p>

                <ul>
                  <li>
                    <i class="fab fa-twitter"></i>
                  </li>
                  <i class="fab fa-pinterest"></i>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-dribbble"></i>
                </ul>
              </div>
            </div>
            <div class="right__col">
              <nav>
                <ul>
                  <li>
                    <a href="">photos</a>
                  </li>
                  <li>
                    <a href="">galleries</a>
                  </li>
                  <li>
                    <a href="">groups</a>
                  </li>
                  <li>
                    <a href="">about</a>
                  </li>
                </ul>
                <button>Follow</button>
              </nav>

              <div class="photos">
                <img
                  src="https://images.unsplash.com/photo-1495100793874-7f94aecae1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Photo"
                />
                <img
                  src="https://images.unsplash.com/photo-1428447207228-b396f310848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Photo"
                />
                <img
                  src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                  alt="Photo"
                />
                <img
                  src="https://images.unsplash.com/photo-1473210630848-e12656228f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=965&q=80"
                  alt="Photo"
                />
                <img
                  src="https://images.unsplash.com/photo-1428280047984-b1e0c0cfe2b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Photo"
                />
                <img
                  src="https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
