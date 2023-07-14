function whitespaceclean(string){
    flag = false
    while (!flag){
        if (string.endsWith(" "))
        {
            flag = false;
            string = string.slice(0, length - 1);
        }
        else
        {

            flag = true
        }
    }
    return string
}


// Validation function

function validateForm(){
    var fName, lName, email, contact, pass;
    var index = 0;
    fName = whitespaceclean(document.signUp.fName.value);
    document.signUp.fName.value =fName;
    lName = whitespaceclean(document.signUp.lName.value);
    document.signUp.lName.value = lName;
    email = document.signUp.email.value;
    contact = document.signUp.contact.value;
    pass = whitespaceclean(document.signUp.pass.value);
    document.signUp.pass.value = pass;
    pattern = /^\d{10}$/;


    if (fName == null || fName == '')
    {   
        console.log("hello")
        alert("Please provide your First Name");
        return false;
    }

    else {
        for (c of fName){
            if (!((c.charCodeAt(index) >= 65 && c.charCodeAt(index) <= 90) || (c.charCodeAt(index) >= 97 && c.charCodeAt(index) <= 122)))
            {
                console.log(c.charCodeAt(index));
                alert("Name should only contain alphabets");
                return false;
            }
        }
    }

    if (lName == null || lName == '')
    {
        alert("Please provide your Last Name");
        return false;
    }
    else {
        for (c of lName){
            if (!((c.charCodeAt(index) >= 65 && c.charCodeAt(index) <= 90) || (c.charCodeAt(index) >= 97 &&c.charCodeAt(index) <= 122)))
            {
                alert("Name should only contain alphabets");
                return false;
            }
        }
    }


    if (email == null || email == '')
    {
        alert("Please provide your Email");
        return false;
    }
    else
    {
        var apos = email.indexOf("@");
        var dpos = email.lastIndexOf(".");  
        if (apos < 1 || dpos - apos < 2)
        {
            alert("Please enter correct email id");
            return false;
        }
    }

    if (!(contact.match(pattern)))
    {
        alert("contact should be of 10 digits");
        return false;
    }


    if (pass == null || pass == '')
    {
        alert("Enter your password");
        return false;
    }
    else 
    {
        alert("Submitted")
        return true;
        
    }
}