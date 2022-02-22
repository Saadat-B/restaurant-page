function home() {
  const home = document.createElement("div");
  home.setAttribute("id", "homepage");
  home.innerHTML = `
  <h3>Beary's Breakfast</h3>
          <div class="card">
            <p>
              Beary's has the best porridge! The atmosphere and customer service
              make you feel like you are sitting in the middle of the woods,
              eating like a bear! This is exactly the kind of place that I like
              to return to again and again.
            </p>
          </div>
          <div class="card">
            <h4>Goldilocks</h4>
            <p>
              Beary's has the best porridge! The atmosphere and customer service
              make you feel like you are sitting in the middle of the woods,
              eating like a bear! This is exactly the kind of place that I like
              to return to again and again.
            </p>
          </div>
          <div class="card">
            <h4>Hours</h4>
            <p>
              <li>Sunday: 8am - 8pm</li>
              <li>Monday: 6am - 6pm</li>
              <li>Tuesday: 6am - 6pm</li>
              <li>Wednesday:6am - 6pm</li>
              <li>Thursday: 6am - 10pm</li>
              <li>Friday: 6am - 10pm</li>
              <li>Saturday: 8am -10pm</li>
            </p>
          </div>
          <div class="card">
            <h4>Location</h4>
            <p>123 Forest Drive, Forestville, Maine</p>
          </div>
  `;
  content.append(home);
}

export { home };
