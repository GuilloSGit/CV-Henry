document.getElementById("itemHome").onclick = function () { mostrarHome() };
document.getElementById("itemAbout").onclick = function () { mostrarAbout() };
document.getElementById("itemEducation").onclick = function () { mostrarEducation() };
document.getElementById("itemExperience").onclick = function () { mostrarExperience() };
document.getElementById("itemSkills").onclick = function () { mostrarSkills() };
document.getElementById("itemHobbies").onclick = function () { mostrarHobbies() };
document.getElementById("itemMore").onclick = function () { mostrarMore() };
document.getElementById("itemSocial").onclick = function () { mostrarSocial() };

/* Lista de funciones */
function mostrarHome() {
    document.getElementById("homeView").classList.replace("invisible", "visible");
    document.getElementById("aboutView").classList.replace("visible", "invisible");
    document.getElementById("educationView").classList.replace("visible", "invisible");
    document.getElementById("experienceView").classList.replace("visible", "invisible");
    document.getElementById("skillsView").classList.replace("visible", "invisible");
    document.getElementById("hobbiesView").classList.replace("visible", "invisible");
    document.getElementById("moreView").classList.replace("visible", "invisible");  
    document.getElementById("socialView").classList.replace("visible", "invisible"); 
}
function mostrarAbout() {
    document.getElementById("homeView").classList.replace("visible", "invisible");
    document.getElementById("aboutView").classList.replace("invisible", "visible");
    document.getElementById("educationView").classList.replace("visible", "invisible");
    document.getElementById("experienceView").classList.replace("visible", "invisible");
    document.getElementById("skillsView").classList.replace("visible", "invisible");
    document.getElementById("hobbiesView").classList.replace("visible", "invisible");
    document.getElementById("moreView").classList.replace("visible", "invisible"); 
    document.getElementById("socialView").classList.replace("visible", "invisible"); 
}
function mostrarEducation() {
    document.getElementById("homeView").classList.replace("visible", "invisible");
    document.getElementById("aboutView").classList.replace("visible", "invisible");
    document.getElementById("educationView").classList.replace("invisible", "visible");
    document.getElementById("experienceView").classList.replace("visible", "invisible");
    document.getElementById("skillsView").classList.replace("visible", "invisible");
    document.getElementById("hobbiesView").classList.replace("visible", "invisible");
    document.getElementById("moreView").classList.replace("visible", "invisible"); 
    document.getElementById("socialView").classList.replace("visible", "invisible"); 
}
function mostrarExperience() {
    document.getElementById("homeView").classList.replace("visible", "invisible");
    document.getElementById("aboutView").classList.replace("visible", "invisible");
    document.getElementById("educationView").classList.replace("visible", "invisible");
    document.getElementById("experienceView").classList.replace("invisible", "visible");
    document.getElementById("skillsView").classList.replace("visible", "invisible");
    document.getElementById("hobbiesView").classList.replace("visible", "invisible");
    document.getElementById("moreView").classList.replace("visible", "invisible"); 
    document.getElementById("socialView").classList.replace("visible", "invisible"); 
}
function mostrarSkills() {
    document.getElementById("homeView").classList.replace("visible", "invisible");
    document.getElementById("aboutView").classList.replace("visible", "invisible");
    document.getElementById("educationView").classList.replace("visible", "invisible");
    document.getElementById("experienceView").classList.replace("visible", "invisible");
    document.getElementById("skillsView").classList.replace("invisible", "visible");
    document.getElementById("hobbiesView").classList.replace("visible", "invisible");
    document.getElementById("moreView").classList.replace("visible", "invisible"); 
    document.getElementById("socialView").classList.replace("visible", "invisible"); 
}
function mostrarHobbies() {
    document.getElementById("homeView").classList.replace("visible", "invisible");
    document.getElementById("aboutView").classList.replace("visible", "invisible");
    document.getElementById("educationView").classList.replace("visible", "invisible");
    document.getElementById("experienceView").classList.replace("visible", "invisible");
    document.getElementById("skillsView").classList.replace("visible", "invisible");
    document.getElementById("hobbiesView").classList.replace("invisible", "visible");
    document.getElementById("moreView").classList.replace("visible", "invisible"); 
    document.getElementById("socialView").classList.replace("visible", "invisible"); 
}
function mostrarMore() {
    document.getElementById("homeView").classList.replace("visible", "invisible");
    document.getElementById("aboutView").classList.replace("visible", "invisible");
    document.getElementById("educationView").classList.replace("visible", "invisible");
    document.getElementById("experienceView").classList.replace("visible", "invisible");
    document.getElementById("skillsView").classList.replace("visible", "invisible");
    document.getElementById("hobbiesView").classList.replace("visible", "invisible");
    document.getElementById("moreView").classList.replace("invisible", "visible"); 
    document.getElementById("socialView").classList.replace("visible", "invisible"); 
}
function mostrarSocial() {
    document.getElementById("homeView").classList.replace("visible", "invisible");
    document.getElementById("aboutView").classList.replace("visible", "invisible");
    document.getElementById("educationView").classList.replace("visible", "invisible");
    document.getElementById("experienceView").classList.replace("visible", "invisible");
    document.getElementById("skillsView").classList.replace("visible", "invisible");
    document.getElementById("hobbiesView").classList.replace("visible", "invisible");
    document.getElementById("moreView").classList.replace("visible", "invisible"); 
    document.getElementById("socialView").classList.replace("invisible", "visible"); 
}