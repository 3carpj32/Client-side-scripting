function validateFormElement(formValue) {
    if((typeof formValue === 'string') && formValue.length > 0) {
        return true;
    }
    return false;
}

function main() {
    
function validate() {
    
    var form = document.getElementById("contact_form");
    
    if(form.first_name.value == "")
    

    var validationResults = [];

    if (!validateFormElement(document.contactForm.first_name.value)) {
        validationResults.push('Enter first name');
        document.getElementById("first_name").style.backgroundColor = "red";
        document.getElementById("first_name_valid").style.display = "none";
        document.getElementById("first_name_invalid").style.display = "inline";
    } else {
        document.getElementById("first_name").style.backgroundColor = "";
        document.getElementById("first_name_valid").style.display = "inline";
        document.getElementById("first_name_invalid").style.display = "none";
    }

    if (!validateFormElement(document.contactForm.last_name.value)) {
        validationResults.push('Last name is needed');
        document.getElementById("last_name").style.backgroundColor = "red";
        document.getElementById("last_name_valid").style.display = "none";
        document.getElementById("last_name_invalid").style.display = "inline";
    } else {
        document.getElementById("last_name").style.backgroundColor = "";
        document.getElementById("last_name_valid").style.display = "inline";
        document.getElementById("last_name_invalid").style.display = "none";
    }

    if (!validateFormElement(document.contactForm.email.value)) {
        validationResults.push('Email is needed');
        document.getElementById("email").style.backgroundColor = "red";
        document.getElementById("email_valid").style.display = "none";
        document.getElementById("email_invalid").style.display = "inline";
    } else {
        document.getElementById("email").style.backgroundColor = "";
        document.getElementById("email_valid").style.display = "inline";
        document.getElementById("email_invalid").style.display = "none";
    }

    if (!validateFormElement(document.contactForm.message.value)) {
        validationResults.push('Please enter a message');
        document.getElementById("message").style.backgroundColor = "red";
        document.getElementById("message_valid").style.display = "none";
        document.getElementById("message_invalid").style.display = "inline";
    } else {
        document.getElementById("message").style.backgroundColor = "";
        document.getElementById("message_valid").style.display = "inline";
        document.getElementById("message_invalid").style.display = "none";
    }

    // Display the results.
    if (validationResults.length === 0) {
        document.getElementById('validationResult').innerHTML = '<em>Form is valid</em>';
    } else {
        // Clear the results area.
        document.getElementById('validationResult').innerHTML = 'Please resubmit with the following information:-';
        for (var i=0; i < validationResults.length; i += 1) {
            var docList = document.createElement('ul')
            document.getElementById('validationResult').appendChild(docList);
            var feedback = document.createElement('li');
            feedback.innerHTML = validationResults[i];
            docList.appendChild(feedback);
        }
    }
   
}