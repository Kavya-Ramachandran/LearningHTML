document.getElementById("form").addEventListener("submit",function(e){
   e.preventDefault();
   const name=document.getElementById("name").value.trim();
    const age=document.getElementById("age").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;

    if(name=== ""){
        alert("name is required");
        return;
    }
  const numericAge = Number(age);
  if (isNaN(numericAge) || numericAge < 18 || numericAge > 70) {
    alert("Please enter a valid age between 18 and 70.");
    return;
}

    if(!email.includes("@") || !email.includes(".")||email.indexOf("@")||email.lastindexOf(".")){
        alert("enter a valid email id");
        return;
    }
    if(password.length<6 ){
        alert("Passsword must be atleast 6 characters");
        return;
    }

    alert("Form has been submitted");

})