const openModal = (btn, modal, i) => {
  let span = document.getElementsByClassName("close")[i];
  btn.onclick = () => {
    modal.style.display = "block";
  };
  span.onclick = () => {
    modal.style.display = "none";
  };
};

const ids = ["home", "about", "portfolio"];
for (let i = 0; i < ids.length; i++) {
  const btn = document.getElementById(ids[i]);
  const modal = document.getElementById(ids[i] + "Modal");
  openModal(btn, modal, i);
}

const age = (birthDate) => {
  const senddate = new Date();
  const diffDate = new Date(senddate - birthDate);
  const agestring =
    "I am " +
    (diffDate.toISOString().slice(0, 4) - 1970) +
    " years " +
    diffDate.getMonth() +
    " months " +
    (diffDate.getDate() - 1) +
    " days old";
  document.getElementById("patientAge").innerHTML = agestring;
};

const dob = new Date(2000, 3, 29, 5, 0, 0, 0);
age(dob);

let animation = anime({
  targets: document.getElementById("animate"),
  translateY: "5%",
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
});

// let profession = anime({
//   targets: document.getElementById("profession"),
//   translateY: 250,
//   loop: true,
//   easing: "easeInOutSine",
//   direction: "alternate",
// });

// let img = anime({
//   targets: document.getElementById("img"),
//   rotate: 360,
//   loop: 2,
//   direction: "alternate",
// });
