function content1() {
  const body = document.querySelector("body");
  const content1 = document.createElement("div");
  content1.setAttribute("id", "content");
  body.append(content1);
}

export { content1 };
