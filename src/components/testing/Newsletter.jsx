import "./Newsletter.css";

export default function Newsletter() {
  return (
    <>
      <div id="Newsletter">
        <div class="Newsletter-container">
          <div class="Newsletter-container-close">&times;</div>
          <img
            src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="image"
          />
          <div class="Newsletter-container-text">
            <h2>
              Ideas and UI components in your <br />
              inbox
            </h2>
            <p>
              Sign up to receive ideas, free <br /> components and free
              resources plus 15% on all of our <br /> pro UI kits.
            </p>
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
            <span>No spams included</span>
          </div>
        </div>
      </div>
    </>
  );
}
