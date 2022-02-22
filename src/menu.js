function menu() {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.innerHTML = `<h3>MENU</h3>
  <h4>Beverages</h4>
  <p><h5>Honey Tea</h5>
      A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!
  </p>
  <p><h5>Beary Tea</h5>
      A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.
  </p>
  <h4>Sides</h4>
  <p><h5>Toast and Jam</h5>
      A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.
  </p>`;
  content.append(menu);
}

export { menu };
