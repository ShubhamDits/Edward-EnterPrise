$(document).ready(function () {
  $("#sendmail").click(function (e) {
      e.stopPropagation();
    debugger;
    var send = {
      email: $("#email").val()
    }
    
    $.ajax({
      type: 'POST',
      url: 'https://localhost:5001/api/Employees/CheckEmail',
      data: JSON.stringify(send),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (data) {
        debugger;
        alert(data.responseMessage);
        
        
      },
      error: function () {
        debugger;
        alert("Email Invalid");
        
      },
      
    });
    
  });
  
});

function CheckMail (){
  var email = $("#email").val();
  if(data.email !=email){
  $("#checkemail").html("Email not matched");
  }
  else
  {
    $("#checkemail").html("Email matched");
  }
  $(document).ready (function(){
  
    $("#email").keyup(CheckMail);
  })
  }
  
  