//-----------post data in Client Billing with in Jquery-----------------
$(document).ready(function () {
    $('#btnsubmit').click(function () {
      debugger
      window.location.reload();
      var ResidentialCustomer = {
        first_Name: $("#fnam").val(),
        last_Name: $("#lname").val(),
        phone_Number: $("#phone").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        zip_Code: $("#zip").val(),
        isActive: true,
        actionPerformedBy: "Rajput@gmail.com"
      }
      $.ajax({
        type: 'POST',
        url: 'https://localhost:5001/api/ResidentialClient/AddResidentialClient',
        data: JSON.stringify(ResidentialCustomer),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
          alert('data is ' + data);
        },
        error: function () {
          alert("INSIDE FAILURE");
        }
      });
    });
  });

  //-----------post data in Client Job Site with in Jquery-----------------
$(document).ready(function () {
    $('#btnNext').click(function () {
      debugger
      window.location.reload();
      var ResidentialCustomer = {
        first_Name: $("#fname1").val(),
        last_Name: $("#lname1").val(),
        phone_Number: $("#phone1").val(),
        email: $("#email1").val(),
        address: $("#address1").val(),
        city: $("#city1").val(),
        state: $("#state1").val(),
        zip_Code: $("#zip1").val(),
        isActive: true,
        actionPerformedBy: "Rajput@gmail.com"
      }
      $.ajax({
        type: 'POST',
        url: 'https://localhost:5001/api/ResidentialJobSite/AddResidentialJobSite',
        data: JSON.stringify(ResidentialCustomer),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
          alert('data is ' + data);
        },
        error: function () {
          alert("INSIDE FAILURE");
        }
      });
    });
  });