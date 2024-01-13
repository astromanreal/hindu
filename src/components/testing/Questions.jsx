import "./Questions.css";

export default function Questions() {
  return (
    <>
      <main id="Questions-main">
        <header>
          <h1>Questions? Look here</h1>
        </header>
        <div class="faqs">
          <details>
            <summary>
              <span>How many team members can I invite?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                odit exercitationem quaerat molestias ad accusamus.
              </p>
            </div>
          </details>
          <details>
            <summary>
              <span>What is the maximum upload size?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                cum.
              </p>
              <p>
                Sapiente labore omnis ipsum nihil dicta a, tempore maxime eos?
              </p>
            </div>
          </details>
          <details>
            <summary>
              <span>How do I reset my password?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                excepturi hic eius officia officiis perferendis eligendi velit
                dolore rerum dolores.
              </p>
            </div>
          </details>
          <details>
            <summary>
              <span>Can I cancel my subscription?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </summary>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </details>
          <details>
            <summary>
              <span>Do you provide additional support?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                laudantium eius optio officia beatae asperiores amet rem.
              </p>
            </div>
          </details>
        </div>
      </main>
    </>
  );
}
