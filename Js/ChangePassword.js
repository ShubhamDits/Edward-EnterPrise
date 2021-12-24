//---------------Change Password in Jquery------------------
function checkPassword() {
    var user_Name = $("#username").val();
    var password = $("#inputPasswordNew").val();
    var confirmPassword = $("#inputPasswordNewVerify").val();
    if (user_Name = password != confirmPassword)
        $("#CheckPassword").html("Passwords does not match!");
    else
        $("#CheckPassword").html("Passwords match.");
}
$(document).ready(function () {
   $("#inputPasswordNewVerify").keyup(checkPassword)
   {
    $('#save').click(function () {
        debugger
        window.location.reload();
        var reset = {
          user_Name: $("#username").val(),
          newPassword: $("#inputPasswordNew").val(),
          ConfirmPassword:$("#inputPasswordNewVerify").val(),
          isActive: true  
        }
        
        $.ajax({
          type: 'PUT',
          url: 'https://localhost:5001/api/Login/ChangePassword',
          data: JSON.stringify(reset),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function () {
            if (user_Name = password != confirmPassword)
            $("#CheckPassword").html("Passwords does not match!");
        else
            $("#CheckPassword").html("Passwords match.");
          },
          error: function () {
            alert("INSIDE FAILURE");
          }
        });
      });
    }
})
//--------------Show Password--------------------
function myFunction() {
  var x = document.getElementById("inputPasswordNew");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//--------------Show Confirm Password--------------------
function myFunction1() {
  var x = document.getElementById("inputPasswordNewVerify");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}