let currentProject = -1;
let projectTitles = ["YouClone", "Music Library", "Full GitHub "];
let projectDescriptions = [
  "Who doesn't love YouTube? Who doesn't wish they had made Youtube. This was a group project for school to make a youtube clone how we would like it too look.",
  "Playing with API's to make a library of Songs.",
  " Take a look includes everything from the self-taught days to class projects.",
];
let projectLink = [
  "https://github.com/jdbooth9516/YouTube_Clone",
  "https://github.com/jdbooth9516/Music_library",
  "https://github.com/jdbooth9516",
];

document.getElementById("left-arrow").addEventListener("click", previousFade);

document.getElementById("right-arrow").addEventListener("click", nextFade);
document.getElementById("contact-btn").addEventListener("click", openForm);
document.getElementById("submit-button").addEventListener("click", sendMail);

function getMode(mode) {
  if (mode === "light") {
    document.getElementById("style").href = "style.css";
  } else if (mode === "dark") {
    document.getElementById("style").href = "darkStyle.css";
  }
}

function previousFade() {
  document.getElementById("pro1").classList.remove("unfade");
  document.getElementById("pro1").classList.add("fade");

  setTimeout(function () {
    document.getElementById("pro1").classList.remove("fade");
    document.getElementById("pro1").classList.add("unfade");
  }, 500);

  setTimeout(function () {
    getPrevious();
  }, 500);
}

function nextFade() {
  document.getElementById("pro1").classList.remove("unfade");
  document.getElementById("pro1").classList.add("fade");

  setTimeout(function () {
    document.getElementById("pro1").classList.remove("fade");
    document.getElementById("pro1").classList.add("unfade");
  }, 500);

  setTimeout(function () {
    getNext();
  }, 500);
}

function getPrevious() {
  if (currentProject === 0 || currentProject === -1) {
    currentProject = projectTitles.length - 1;
    document.getElementById("project-title").href = projectLink[currentProject];
    document.getElementById("project-title").innerHTML =
      projectTitles[currentProject];
    document.getElementById("project-text").innerHTML =
      projectDescriptions[currentProject];
  } else {
    currentProject--;
    document.getElementById("project-title").href = projectLink[currentProject];
    document.getElementById("project-title").innerHTML =
      projectTitles[currentProject];
    console.log(
      (document.getElementById("project-text").innerHTML =
        projectDescriptions[currentProject])
    );
  }
}

function getNext() {
  if (currentProject === projectTitles.length) {
    currentProject = 0;
    document.getElementById("project-title").href = projectLink[currentProject];
    document.getElementById("project-title").innerHTML =
      projectTitles[currentProject];
    document.getElementById("project-text").innerHTML =
      projectDescriptions[currentProject];
    currentProject++;
  } else if (currentProject === -1) {
    currentProject = 1;
    document.getElementById("project-title").href = projectLink[currentProject];
    document.getElementById("project-title").innerHTML =
      projectTitles[currentProject];
    document.getElementById("project-text").innerHTML =
      projectDescriptions[currentProject];
  } else {
    currentProject++;
    if (currentProject === projectTitles.length) {
      currentProject = 0;
      document.getElementById("project-title").href =
        projectLink[currentProject];
      document.getElementById("project-title").innerHTML =
        projectTitles[currentProject];
      document.getElementById("project-text").innerHTML =
        projectDescriptions[currentProject];
    } else {
      document.getElementById("project-title").href =
        projectLink[currentProject];
      document.getElementById("project-title").innerHTML =
        projectTitles[currentProject];
      document.getElementById("project-text").innerHTML =
        projectDescriptions[currentProject];
    }
  }
}

function opeenForm() {
  doceument.getElementById("contact-info").style.display = "none";
  document.getElementById("contact-btn").style.display = "none";
  document.getElementById("contact-form").style.display = "flex";
}

function sendMail(e) {
  e.preventDefault();
  let userName = document.getElementById("name");
  let userEmail = document.getElementById("email");
  let userMessage = document.getElementById("message");
  console.log(userName.value, userEmail.value, userMessage.value);
  Email.send({
    SecureToken: "345cba0d-e1f3-4dff-96ad-66cf9246433b",
    To: "jboothwebdev@gmail.com",
    From: `${userEmail.value}`,
    Subject: "Contact Request",
    Body: `${userMessage.value}`,
  }).then((message) =>
    alert(
      "Thank you for your request. We will review it and get back to you as soon as possible."
    )
  );

  userName.value = "";
  userEmail.value = "";
  userMessage.value = "";
  setTimeout(function () {
    location.reload();
  }, 2000);
}
