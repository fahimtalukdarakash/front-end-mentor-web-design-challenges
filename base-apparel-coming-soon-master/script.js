var a = document.getElementById("button-addon2");
function ValidateEmail() {
  var b = document.querySelector("input.form-control").value;
  var er= document.querySelector(".error");
  var er_msg= document.querySelector(".error-message");
  var er_brd=document.querySelector(".input-section")
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (validRegex.test(b) === true) {
      er.classList.remove("error2");
    er_msg.classList.remove("error-message2");
      er_brd.classList.remove("input-section-show");
      return true;
  } else {
    er.classList.add("error2");
    er_msg.classList.add("error-message2");
    er_brd.classList.add("input-section-show");

  }

}
a.addEventListener("click",ValidateEmail);

