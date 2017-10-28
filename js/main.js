// function to get the user data
function getUserData() {
  // creating a var to display results
  var results = document.getElementById('results')

  // store values for user first and last name, email and phone number
  var userName = document.getElementById('userName').value
  var userPassword = document.getElementById('userPassword').value
  var userPhone = document.getElementById('userPhone').value

  // storing elements by class for the radios and select setting up the loop for later
  var userGenderEls = document.getElementsByClassName('userGender')
  var userColorEls = document.getElementsByClassName('userColor')


  // create variables to store the user gender, color and birth later
  var userGender, userColor

  // First Name
  if(userName == "") {
    // console.log(results)
    // going to add a class of failure results if there is no username value
    results.className = "failure";
    // Text will update the content pf the result
    results.textContent = "You forgot to Enter your First Name";

    //  run a stop function if ther is no answer
    return;
  };

  // Last Name
  if(userPassword == "") {
  //   // add a class of failures to results if no user last name value
    results.className = "failure";
  //   // update the text content of results
    results.textContent = "You forgot to add your Password";
  //
  //   // stop function if no answer
    return;
  };

  // Gender
  // for loop through all elements with the class= "userGender"
  for(var i = 0; i < userGenderEls.length; i++) {
    // if statement if the radio was selected by the user, do this
    if(userGenderEls[i].checked) {
      // set value answer 3 to the value in the radio items
      userGender = userGenderEls[i].value
console.log(userGender)

    };
  };
  // stop the function if no data is there for gender
  if (userGender == "") {
    // add a classs of failure to results if no user gender value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to select a gender"

    // stop the function if no answer
    return;
  };

  // Phone Numbesr
  if(userPhone == "") {
    // add a class of failure if no user phone value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to add your Phone Number"

    // stop function if no answer
    return;
  };
// console.log(userColorEls.length)
  // Favorite color
  // looping through all elements with class='userColor'
  for(var i = 0; i < userColorEls.length; i++) {
    // check which was the selected color by the user do this
    // console.log(userColorEls[i])
    if(userColorEls[i].selected) {
      // set value of answer 2 to the value in the selected item
      userColor = userColorEls[i].value
console.log(userColor)
    };
  };
  // stop function if no data for question 2
  if(userColor == "") {
    // add a class of failures to results if no user color value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to select your favorite color"

    // stop function if no answer
    return;
  };

  // on success
  // if everything passes add a class of success to results
  results.className = "success";
  // update the text content of results
  results.textContent = "Thank! Updating Now";


  // object for user profile data
  var userProfile = {
    name: userName,
    password: userPassword,
    gender : userGender,
    phone: userPhone,
    color: userColor

  };

  // confirm existance of all user data
  console.log(userProfile);

  // run displayProfile after 1 second passing in new profile data to be displyed
  setTimeout(function() {
    displayProfile(userProfile);
  }, 1000);
};


  // display profile information
  function displayProfile(userProfile) {
    // make sure the user data is being passed through
    console.log(userProfile);

    // select some the HTML elements by id
    var userName = document.getElementById('newUserName')
    var userPassword = document.getElementById('newUserPassword')
    var userGender = document.getElementById('newUserGender')
    var userPhone = document.getElementById('newUserPhone')
    var userColor = document.getElementById('newUserColor')


    // change the text of these variables using the userProfile object bc i slow
    userName.innerText = "Welcome:" + userProfile.name
    userPassword.innerText = "Password: " + userProfile.password
    userGender.innerText = "Gender: " + userProfile.gender
    userPhone.innerText = "Phone: " + userProfile.phone
    userColor.innerText = "Favorite Color: " + userProfile.color

    // hide new profile form
    document.getElementById('newProfile').style.display = "none"
    // display updated profile data
    document.getElementById('updateProfile').style.display = "block"
  };

// add click function to element with id="sendDataButton"
document.getElementById('sendDataButton').addEventListener('click', getUserData, false);

$('.error-page').hide(0);

$('.login-button , .no-access').click(function(){
  $('.login').slideUp(500);
  $('.error-page').slideDown(1000);
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
});
