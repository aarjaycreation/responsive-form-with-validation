let form = document.getElementById("taskForm");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let Email = document.getElementById("Email");
let PhoneNumber = document.getElementById("PhoneNumber");
let Qualification = document.getElementById("Qualification");
let Gender = document.querySelector("input[name = gender]:checked");
let checkboxes = document.getElementsByName("hobbies");
let Comment = document.getElementById("Comment");

// for error
let CommentError = document.getElementById("CommentError");
let QualificationError = document.getElementById("QualificationError");
let HobbyError = document.getElementById("HobbyError");
let PhoneNumberError = document.getElementById("PhoneNumberError");
let EmailError = document.getElementById("EmailError");
let LastNameError = document.getElementById("LastNameError");
let FirstNameError = document.getElementById("FirstNameError");
let Error = document.getElementById("error");

// validate regex
let validFirstName = /^[a-zA-Z]{2,20}$/;
let validLastName = /^[a-zA-Z]{2,20}$/;
let validEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let validPhone = /^[0]?[789]\d{9}$/;

// whan click the submit button
document.querySelector("form#taskForm").addEventListener("submit", (event) => {
  event.preventDefault();
  validation();
  // function call
  // sendData();
});

// clear all error
removeErrors = () => {
  errors = document.getElementsByClassName("Error");
  for (let item of errors) {
    item.innerHTML = "";
  }
};

//function for validation
validation = () => {
  let checkHobbies = document.querySelector("input[name = hobbies]:checked");
  removeErrors();
  // first name
  if (FirstName.value == "") {
    FirstNameError.innerText = "Please Enter First Name";
    location.href = '#firstNameCall'
  }
  
  // check valid first name
  else if (!validFirstName.test(FirstName.value)) {
    FirstNameError.innerText = "Please Enter Valid First Name";
    location.href = '#firstNameCall'
  }

  // last name
  else if (LastName.value == "") {
    LastNameError.innerText = "Please Enter Last Name";
    location.href = '#lastNameCall'
  }

  // check valid last name
  else if (!validLastName.test(LastName.value)) {
    LastNameError.innerText = "Please Enter Valid Last Name";
    location.href = '#lastNameCall'
  }

  // check email
  else if (Email.value == "") {
    EmailError.innerText = "Please Enter Email Address";
    location.href = "#mailCall";
  } 
  else if (!validEmail.test(Email.value)) {
    EmailError.innerText = "Please Enter Valid Email Address";
    location.href = "#mailCall";
  }

  // check PhoneNumber
  else if (PhoneNumber.value == "") {
    PhoneNumberError.innerText = "Please Enter Phone Number";
    location.href = '#phoneCall'
  } 
  else if (!validPhone.test(PhoneNumber.value)) {
    PhoneNumberError.innerText = "Please Enter Valid Phone Number";
    location.href = '#phoneCall'
  }
  // check Qualification  !this.form.checkbox.checked
  else if (Qualification.value === "Qualification") {
    QualificationError.innerText = "Please Choose Your Qualification";
    location.href = '#quailificationCall'
  }

  // check hobbies
  else if (checkHobbies == null) {
    HobbyError.innerText = "Please Choose Hobbies";
    location.href = '#hobbiesCall';
  }

  // check comment
  else if (Comment.value == "") {
    CommentError.innerText = "Please Write Your Comment";
    location.href = '#commentCall'
  }

  // all validation clear than run code
  else {
    // function call
    sendData();
  }
};
//function for send data in body #showdata
sendData = () => {
  let chk = [];

  //  for print checkbox values
  for (let key in checkboxes) {
    if (checkboxes[key].checked == true) {
      chk.push(checkboxes[key].value);
    }
  }

  document.querySelector("#showData").innerHTML += `
  <section class="from__result">
			<div class="from__result-inside">
				<h4>Result</h4>
				<!-- first name  -->
				<div class="form__result-flex">
				<p>FirstName :-</p>
				<div>${FirstName.value}</div>
				</div>
				<!-- last name  -->
				<div class="form__result-flex">
				<p>LastName :-</p>
				<div>${LastName.value}</div>
				</div>
				<!-- email -->
				<div class="form__result-flex">
				<p>Email :-</p>
				<div>${Email.value}</div>
				</div>
				<!-- phone  -->
				<div class="form__result-flex">
				<p>Phone Number :-</p>
				<div>${PhoneNumber.value}</div>
				</div>
				<!-- qualification -->
				<div class="form__result-flex">
				<p>Qualification :-</p>
				<div>${Qualification.value}</div>
				</div>
				<!-- Gander -->
				<div class="form__result-flex">
				<p>Gander :-</p>
				<div>${Gender.value}</div>
				</div>
				<!-- Hobbies -->
				<div class="form__result-flex">
				<p>Hobbies :-</p>
				<div>${chk.toString()}</div>
				</div>
				<!-- comment  -->
				<div class="form__result-flex">
				<p>Comment :-</p>
				<div>${Comment.value}</div>
				</div>
			</div> 
		</section>
`;
  form.reset();
};
