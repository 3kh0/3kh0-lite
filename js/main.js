console.warn(
  "%cHello!!", "color: red; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "Feel free to use anything you find here for your own projects, credit is appricated but not required! Visit my website at https://3kh0.net for more information."
);

const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
  console.log("Title set to: " + local_title);
}
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
  console.log("Icon set to: " + local_icon);
}