// All form element id's
const myForm = document.getElementById("myForm");
const firstName=document.getElementById('fname');
const lastName=document.getElementById('lastname');
const address=document.getElementById('address');
const pinCode=document.getElementById('pin_code');
const country=document.getElementById('country');
const male=document.getElementById('Male');
const female=document.getElementById('Female');
const redColor = document.getElementById('red');
const blueColor = document.getElementById('blue');
const greenColor = document.getElementById('green');
const phone=document.getElementById('phone_number');
const email=document.getElementById('mail_id');
const password=document.getElementById('firstPasscode');
const confirmPassword=document.getElementById('confirmPasscode');
// Used to prevent autosubmit 
myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});
// Final functions to check all values
function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const addressValue = address.value.trim();
    const pinCodeValue = pinCode.value;
    const countryValue = country.value;
    const phoneValue = phone.value;
    const maleValue = male.value;
    const femaleValue = female.value;
    const redValue = red.value;
    const blueValue = blue.value;
    const greenValue = green.value;
    const emailValue = email.value;
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    console.log(countryValue);
    // First Name
    if(firstNameValue == ""){
        setErrorFor(firstName, 'Please enter your first name!');
    }else{
        console.log("First name: "+firstName.value);
        setSuccessFor(firstName);
    }
    //Last Name
    if(lastNameValue == ""){
        setErrorFor(lastName, 'Please enter your Last name!');
    }else{
        alert("Last name: "+lastName.value);
        setSuccessFor(lastName);
    }
    // Address
    if(addressValue == "" ){
        setErrorFor(address, '\nAddress cannot be blank');
    }else if(addressValue.length >200){
        setErrorFor(address, '\nAddress cannot exceed 200 characters');
    }else{
        console.log("Your address: "+address.value);
        setSuccessFor(address);
    }
    //pinCode
    if(pinCodeValue == ""){
        setErrorFor(pinCode, 'Please enter your pin number!');
    }else if(pinCodeValue.length <=5){
        setErrorFor(pinCode, '\nPlease enter a valid pincode!');
    }else{
        console.log("Pin code: "+pinCode.value);
        setSuccessFor(pinCode);
    }
    //country name
    if(countryValue == ""){
        setErrorFor(country,'Please select any country');
    }else{
        console.log("country is "+country.value);
        setSuccessFor(country);
    }
    //gender category
    if(male.checked == true && female.checked == false){
        console.log("gender:"+male.value);
        setSuccessFor(gender);
    }else if(female.checked == true && male.checked == false){
        console.log("gender:"+female.value);
        setSuccessFor(female);
    }else{
        setErrorFor(gender,"please select any one gender");
    }

    //preferances
    // if(red.checked == true || blue.checked == true || greenColor.checked == true){
    //     setSuccessFor(preferances);
    // }else{
    //     setErrorFor(preferanceValue,'please select atleaset one preferances');
    // }

    //mobile number
    if(phoneValue == ""){
        setErrorFor(phone, 'phone number cannot be blank');
    }else if(phoneValue.length >10){
        setErrorFor(phone, 'please provide correct number');
    }else{
        console.log("phone number: "+phone.value);
        setSuccessFor(phone);
    }
    // Email
    if(emailValue == ""){
        setErrorFor(email, 'Email id cannot be blank');
    }else{
        console.log("Email id: "+email.value);
        setSuccessFor(email);
    }
    //Password 
    if(passwordValue == ""){
        setErrorFor(password, 'Password cannot be blank');
    }else{
        console.log("Your password: "+password.value);
        setSuccessFor(password);
    }
    //Confirm Password 
    if(confirmPasswordValue == ""){
        setErrorFor(confirmPassword, 'confirmPassword cannot be blank');
    }else if(passwordValue != confirmPasswordValue){
        setErrorFor(confirmPassword, 'Password doesn\'t match');
        console.log("Your confirm password: "+confirmPassword.value);
    }else if(passwordValue === confirmPasswordValue){
        console.log("Your confirm password: "+confirmPassword.value);
        setSuccessFor(confirmPassword);
    }

    let objectValues = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        address:addressValue,
        pinCode:pinCodeValue,
        phone:phoneValue,
        email:emailValue,
        password:passwordValue,
        confirmPassword:confirmPasswordValue,
        country:countryValue,
        gender: genderValue
    }
    console.log(objectValues);
}
// Error function to display Error message and red color
function setErrorFor(input, message){
    const itemControl = input.parentElement;
    const small = itemControl.querySelector('small');
    small.innerText = message;
    itemControl.className = 'item error';
}
// Success function to display green color
function setSuccessFor(input){
    const itemControl = input.parentElement;
    itemControl.className = 'item success';
}
//for first password eye
//for i tag
const togglePassword = document.querySelector('#togglePassword');
// for input tag
const passwordOne = document.querySelector('#firstPasscode');
togglePassword.addEventListener('click', function (first) {
    const type = passwordOne.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordOne.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

//for confirm password
const secondPassword = document.querySelector('#togglePassword-second');
const passwordTwo = document.querySelector('#confirmPasscode');
secondPassword.addEventListener('click', function (second) {
    const type = passwordTwo.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordTwo.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});



