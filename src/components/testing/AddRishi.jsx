import "./AddRishi.css";

export default function AddRishi() {
  return (
    <>
      <div id="AddRishi">
        <h1 id="title">Just Another Survey Form</h1>
        <p id="description">Thank you for your comments</p>
        <form id="survey-form">
          <div class="form-group">
            <strong>
              {" "}
              <label for="name" id="name-label">
                Name*
              </label>
            </strong>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              id="name"
            />
            <strong>
              <label for="email" id="email-label">
                Email*
              </label>
            </strong>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              required
            />
            <strong>
              <label id="number-label" for="number">
                Age <span class="clue">(optional)</span>
              </label>
            </strong>
            <input
              type="number"
              name="age"
              id="number"
              min="10"
              max="99"
              placeholder="Age"
            />
          </div>
          <p class="question">What is your favourite animal?</p>
          <select id="dropdown" name="role" class="form-control" required>
            <option disabled selected value>
              Select current role
            </option>
            <option value="parrot">Parrot</option>
            <option value="tiger">Tiger</option>
            <option value="hawk">Hawk</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
          <div class="form-group">
            <p class="question">What is your favourite part of the day?</p>
            <label>
              <input
                name="user-recommend"
                value="definitely"
                type="radio"
                class="input-radio"
                checked
              />
              Morning
            </label>
            <label>
              <input name="user-recommend" value="maybe" type="radio" />
              Afternoon
            </label>

            <label>
              <input name="user-recommend" value="evening" type="radio" />
              Evening
            </label>
          </div>
          <div class="form-group">
            <p class="question">
              If you could be an animal, what would it be?
              <span class="clue">
                <br />
                (Check all that apply)
              </span>
            </p>

            <label>
              <input
                name="prefer"
                value="turtle"
                type="checkbox"
                class="input-checkbox"
              />
              Turtle
            </label>
            <label>
              <input
                name="prefer"
                value="cheetah"
                type="checkbox"
                class="input-checkbox"
              />
              Cheetah
            </label>
            <label>
              <input
                name="prefer"
                value="dog"
                type="checkbox"
                class="input-checkbox"
              />
              Dog
            </label>
            <label>
              <input
                name="prefer"
                value="cat"
                type="checkbox"
                class="input-checkbox"
              />
              Cat
            </label>
            <label>
              <input
                name="prefer"
                value="owl"
                type="checkbox"
                class="input-checkbox"
              />
              Owl
            </label>
          </div>
          <p class="question">Have you some comments or suggestions?</p>
          <textarea
            id="comments"
            name="comment"
            placeholder="Enter your comment here..."
          ></textarea>
          <button type="submit" id="submit">
            Submit
          </button>
        </form>{" "}
      </div>
    </>
  );
}
