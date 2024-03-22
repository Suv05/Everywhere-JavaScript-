const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    //remove active from other buttons
    btns.forEach((bt) => {
      bt.classList.remove("active");
      event.target.classList.add("active");
    });
    //hide other articles
    articles.forEach((art) => {
      art.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
