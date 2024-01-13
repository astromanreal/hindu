import "./Search.css";

export default function Search() {
  return (
    <>
      <form
        id="search-form"
        action="https://www.google.com/search"
        method="get"
        target="_blank"
      >
        <div class="search">
          <input
            type="search"
            class="search-input"
            name="q"
            placeholder="search"
          />
          <button type="submit" class="search-submit">
            <ion-icon name="search-outline" class="search-icon"></ion-icon>
          </button>
          <button class="search-clear">
            <ion-icon name="close-outline" class="search-icon"></ion-icon>
          </button>
        </div>
      </form>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}
