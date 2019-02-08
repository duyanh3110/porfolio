let skill_arr = ["HTML", "CSS", "JavaScript", "ReactJS"];

let old_skills = document.getElementById("list-skills");
old_skills.innerHTML = "Old skills list: ";

let new_skills = document.getElementById("curr-skills");

let skill = document.getElementById("skill-input");

function displaySkills() {
  for (item of skill_arr) {
    old_skills.innerHTML += item + " ";
  }
}

function updateSkills() {
  new_skills.innerHTML = "Current skills list: ";
  skill_arr.pop();
  skill_arr.unshift(skill.value);
  for (item of skill_arr) {
    new_skills.innerHTML += item + " ";
  }
}
