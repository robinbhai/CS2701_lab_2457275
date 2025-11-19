//Let's define some variables to represent the form data
//At the beginning, the form is empty, and therefore, not valid

//Data to send
var formData = {
    username: "",
    email: "",
    password: "",
    buyer: false,
    seller: false
}

//This data will be read but not be sent as part of the form submission
var formValid= false;
var repPassword="";
var tosCheckBox=false;


//Function to read the form
function readForm(){
   formData.username = document.getElementById("name").value.trim();
   formData.email = document.getElementById("email").value.trim();
   formData.password = document.getElementById("password").value.trim();
   repPassword = document.getElementById("repPassword").value.trim();

    //Read the buyer and seller checkboxes 
    formData.buyer = document.getElementById("buyer").checked;
    formData.seller = document.getElementById("seller").checked;

    tosCheckBox = document.getElementById("tos").checked;

}

//Function to validate the form
function validateForm() {
    formValid = false;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

// Validate that all required fields are filled
if(formData.username=="" || formData.email=="" || formData.password=="" ){
    alert("Fill all the section of the form")
}
else{
    if(!mailformat.test(formData.email)){
        alert("Please add a valid email address");
        }
    
    else if(!formData.password.length>=8){
        alert("Password has to be 8 character long")
    }
    else if(!passwordRegex.test(formData.password)){
        alert("your password must have 1 UpperCase, 1 Lowercase ,1 number and 1 special chaarcter")
    }
    else if(formData.password !=repPassword){
        alert("Your password doesnt match.");
    }
    else if(!tosCheckBox){
        alert("you must agree to the terms and condition")
    }
    else{
        formValid=true;
    }
    
    
}


// Verify that the email address is in a valid format

// Perform password strength and matching checks

// Validate that the required checkboxes are selected
}

//Function to write the Registration success on the page
function createNewParagraph(content){
    var text = document.createTextNode(content);
    var paragraph = document.createElement("p");
    paragraph.appendChild(text);
    paragraph.style = "white-space: pre;"
    paragraph.id = "hiddenParagraph";

    var element = document.getElementById("hiddenSection");
    var existingParagraph = document.getElementById("hiddenParagraph")
    element.replaceChild(paragraph, existingParagraph);
}

//Function  to submit the form, this should be called by the Register button
//on click
function submitForm(){
    readForm();
// call the validation function
validateForm();
    if (formValid){
        var formText = formData.username +" registered as:\n";
        formText += formData.buyer?"buyer\n":"";
        formText += formData.seller?"seller":"";

        console.log(formText);
        createNewParagraph(formText);
    }
}
