
let currentProject = 1
let projectTitles = ["Efficiency Timer", "Future Project"]
let projectDescriptions = ["Allows user to enter a time to focus on working. Then when the time is up alerts them to take a break that is porportional to the time that they were working.", "Coming Soon"]
let projectLink = ["https://github.com/jdbooth9516/Efficiency_Timer", "#"]

document.getElementById('left-arrow').addEventListener('click', previousFade);

document.getElementById('right-arrow').addEventListener('click', nextFade);
document.getElementById('contact-btn').addEventListener('click', openForm);
document.getElementById('submit-button').addEventListener('click', sendMail);

function previousFade() {
    document.getElementById('pro1').classList.remove('unfade');
    document.getElementById('pro1').classList.add('fade');

    setTimeout(function(){  
        document.getElementById('pro1').classList.remove('fade');
        document.getElementById('pro1').classList.add('unfade');}, 500);  

    setTimeout(function(){ getPrevious();}, 500);
};

function nextFade() {
    document.getElementById('pro1').classList.remove('unfade');
    document.getElementById('pro1').classList.add('fade');

    setTimeout(function(){  
        document.getElementById('pro1').classList.remove('fade');
        document.getElementById('pro1').classList.add('unfade');}, 500); 

    setTimeout(function(){getNext(); }, 500);
};

function getPrevious () {
    if(currentProject == 1) {
        return
    }
    else {
        currentProject--
        console.log(document.getElementById('project-title').href = projectLink[currentProject - 1]);
        console.log(document.getElementById('project-title').innerHTML =    projectTitles[currentProject - 1]);
        console.log(document.getElementById('project-text').innerHTML =     projectDescriptions[currentProject - 1]);
        console.log(currentProject);
    }
};

function getNext () {
    if(currentProject == projectTitles.length){
        return
    }
    else {
        console.log(document.getElementById('project-title').href = projectLink [currentProject]);
        console.log(document.getElementById('project-title').innerHTML =    projectTitles[currentProject]);
        console.log(document.getElementById('project-text').innerHTML =     projectDescriptions[currentProject]);
        currentProject++
        console.log(currentProject);
    }
};

function openForm () {
    document.getElementById('contact-info').style.display = 'none';
    document.getElementById('contact-btn').style.display = 'none';
    document.getElementById('contact-form').style.display = 'flex';
}

function sendMail(e) { 
    e.preventDefault()
    let userName = document.getElementById('name');
    let userEmail = document.getElementById('email');
    let userMessage = document.getElementById('message'); 
    console.log(userName.value, userEmail.value, userMessage.value);
    Email.send({
        SecureToken: "345cba0d-e1f3-4dff-96ad-66cf9246433b",
        To : 'jboothwebdev@gmail.com',
        From : `${userEmail.value}`,
        Subject : "Contact Request",
        Body : `${userMessage.value}`,
    }).then(
      message => alert(message)
    );

    userName.value = '';
    userEmail.value = '';
    userMessage.value = '';
    setTimeout(function(){location.reload(); }, 2000);
}
