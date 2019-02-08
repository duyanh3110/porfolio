function displayInfo(event) {
  event.preventDefault();
  let firstname = document.getElementById("inputFirstName").value;
  let lastname = document.getElementById("inputLastName").value;
  let gender = document.getElementById("inputGender").value;
  let age = document.getElementById("inputAge").value;
  let email = document.getElementById("inputEmail").value;
  let website = document.getElementById("inputWebsite").value;
  let comment = document.getElementById("inputComment").value;
  document.getElementById("name").innerHTML =
    "Name: " + firstname + " " + lastname;
  document.getElementById("gender").innerHTML = "Gender: " + gender;
  document.getElementById("age").innerHTML = "Age: " + age;
  document.getElementById("email").innerHTML = "Email: " + email;
  document.getElementById("website").innerHTML = "Website: " + website;
  document.getElementById("comment").innerHTML = "Comment: " + comment;
}
