const about = document.getElementById("about");
const study = document.getElementById("study");
const work = document.getElementById("work");
const hobby = document.getElementById("hobby");

const aboutContent = document.getElementById("aboutContent");
const studyContent = document.getElementById("studyContent");
const workContent = document.getElementById("workContent");
const hobbyContent = document.getElementById("hobbyContent");

const pages = [
  { nav: about, page: aboutContent },
  { nav: study, page: studyContent },
  { nav: work, page: workContent },
  { nav: hobby, page: hobbyContent },
];

pages.map((p) => {
  p.nav.onclick = () => {
    //ENABLE SELECTED NAVBAR BUTTON/PAGE
    if (!p.nav.classList.contains("active") && p.page.classList.contains("hidden")) {
      //UPDATE NAVBAR
      p.nav.classList.add("active");

      //UPDATE PAGE CONTENT
      p.page.classList.remove("hidden");
    }

    //DISABLE OTHER NAVBAR BUTTONS/PAGES
    pages
      .filter((f) => p.nav !== f.nav)
      .forEach((element) => {
        if (element.nav.classList.contains("active") && !p.page.classList.contains("hidden")) {
          //UPDATE NAVBAR
          element.nav.classList.remove("active");
          //UPDATE PAGE CONTENT
          element.page.classList.add("hidden");
        }
      });
  };
});
