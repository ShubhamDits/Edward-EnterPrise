// function checklogin() {
//     debugger
//     UserName = document.getElementById("name").value;
//     Password = document.getElementById("pass").value;
//     console.log(UserName);
//     console.log(Password);
//     fetch("https://localhost:5001/api/Login/CheckLogin", {
//             method: "POST",
//             body: JSON.stringify({
//                 user_Name: UserName,
//                 password: Password,
//             }),
//             headers: {
//                 "content-type": "application/json ; charset=UTF-8",
//             },
//         })
//         .then(function(data) {
//             console.log(data);
//             return data.json();
//         })
//         .then(function(data) {
//             console.log(data.responseMessage);
//             bb = data.role;
//             a = data.responseMessage;
//             if (bb === "Admin") {
//                 location.href = "User.html";
//             } else if (bb === "Employee") {
//                 location.href = "Customer.html";
//             } else if (bb === "Technician") {
//                 location.href = "Schedule.html";
//             } else if (bb === "Helper") {
//                 location.href = "Schedule.html";
//             } else {
//                 alert("Enter Correct UserName & Password");
//             }
//         });
// }

//------------login in Jquery-----------------
$(document).ready(function () {
  $("#btnlogin").click(function () {
    window.location.reload();
    debugger;
    var login = {
      user_Name: $("#name").val(),
      password: $("#pass").val(),
      isActive: true,
    };
    $.ajax({
      type: "POST",
      url: "https://localhost:5001/api/Login/CheckLogin",
      data: JSON.stringify(login),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data) {
        bb = data.role;
        a = data.responseMessage;
        if (bb === "Admin") {
          location.href = "User.html";
        } else if (bb === "Employee") {
          location.href = "Customer.html";
        } else if (bb === "Technician") {
          location.href = "Schedule.html";
        } else if (bb === "Helper") {
          location.href = "Schedule.html";
        } else {
          alert("Enter Correct UserName & Password" + data);
        }
      },
      error: function () {
        alert("INSIDE FAILURE");
      },
    });
  });
});
