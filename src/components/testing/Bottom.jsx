import "./Bottom.css";

export default function Bottom() {
  return (
    <>
      <section class="hero">
        <div class="box content">
          <header>
            <a href="#" class="logo">
              Spark.
            </a>

            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
          <div class="contentBox">
            <blockquote>
              Love is the flower you’ve got to let grow.
              <span>John Lennon</span>
            </blockquote>
          </div>

          <ul class="socials">
            <h2>Follow us on:</h2>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="box images">
          <div class="imgBox">
            <img
              src="https://images.unsplash.com/photo-1580456596733-b715d1879a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxmbG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Img1"
            />
          </div>
          <div class="imgBox">
            <img
              src="https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              alt="Img2"
            />
          </div>
          <div class="imgBox">
            <img
              src="https://images.unsplash.com/photo-1553750294-2f8dfcc86439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Img3"
            />
          </div>
          <div class="imgBox">
            <img
              src="https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              alt="Img4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
