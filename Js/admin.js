
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://localhost:5001/api/Employees/GetEmployees",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //$("#Supplier").empty();  
      console.log(response);
      var data = response.forEach(function (item, index) {
        console.log(item);
        const id = item.emp_Id;
        console.log(id)
        const First_Name = item.first_Name;
        const Last_Name = item.last_Name;
        const Email = item.email;
        const Phone_Number = item.phone_Number;
        const User_Name = item.user_Name;
        const Role_Name = item.role_Name;
        const isActive = item.isActive;
        const types = document.getElementById("user");
        // add data in Table
        types.innerHTML += `<tbody id="user">
          <tr>                       
          <td>${First_Name}</td>     
          <td>${Last_Name}</td>        
          <td>${Email}</td>
          <td>${Phone_Number}</td>      
          <td>${User_Name}</td>
          <td>${Role_Name}</td>      
          <td> <label class="switch">
           <input type="checkbox" checked>
            <span class="slider round" style="margin-top:0px;"></span>
           </label${isActive}</td>
          <td>
          <button type="button" class="btn mx-1" name="edit"  data-toggle="modal"
          data-target="#exampleModal${id}">
                              <i class="fa fa-pencil"></i>
                          </button>             
                          <button type="button" class="btn mx-2"  data-toggle="modal"
          data-target="#exampleModalCenter5" onclick = "deleteEmp(${id})">
                              <i class="fa fa-trash"></i>
                          </button>               
                      </td></tr>
        </tbody>
        <div class="modal fade" id="exampleModal${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="width:30%;margin-left:400px">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">  
      <h5 class="modal-title" id="exampleModalLabel">Update data in API....</h5> 
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button> 
      </div>
      <div class="modal-body">
       <form class="form" id="myForm1"><br>  
      <label for="title">First_Name:</label><br>
      <input type="text" id="fname${id}" name="name" value="${First_Name}" style="height:35px;width:450px"/><br />
      <label for="title">Last_Name:</label><br>
      <input type="text" id="lname${id}" name="name" value="${Last_Name}" style="height:35px;width:450px"/><br />
      <label for="price">Email:</label><br />
      <input type="text" id="email${id}" name="email" value="${Email}" style="height:35px;width:450px" /><br /><br />  
      <label for="title">Phone_Number:</label><br>
      <input type="text" id="phone${id}" name="phone" value="${Phone_Number}" style="height:35px;width:450px"/><br />
      <label for="price">User_Name:</label><br />
      <input type="text" id="user${id}" name="lname" value="${User_Name}" style="height:35px;width:450px" /><br /><br />  
      <label for="title">Role_Id:</label><br>
      <input type="number" id="role${id}" name="fname" value="${Role_Name}" style="height:35px;width:450px"/><br />
      <label for="price">IsAcive:</label><br />
      <input type="text" id="isactive${id}" name="lname" value="${isActive}" style="height:35px;width:450px" /><br /><br />  
         <button type="submit" id="sub" onclick="updateFunction(${id})" class="btn btn-primary">Update</button> 
    </form>
      </div>   
    </div>
      </div>
      </div>`
      });
    }
  })
})

//-----------post data in Jquery-----------------
$(document).ready(function () {
  $('#sub').click(function () {
    debugger
    window.location.reload();
    var employee = {
      first_Name: $("#fname").val(),
      last_Name: $("#lname").val(),
      email: $("#email").val(),
      phone_Number: $("#phone").val(),
      image: $("#image").val(),
      role_Id: $("#usertype").val(),
      user_Name: $("#username").val(),
      password: $("#pass").val(),
      isActive: true,
      actionPerformedBy: "Rajput@gmail.com"
    }
    
    $.ajax({
      type: 'POST',
      url: 'https://localhost:5001/api/Employees/AddEmployees',
      data: JSON.stringify(employee),
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

//-----------Get Role in Jquery-----------------
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://localhost:5001/api/SetRole/GetSetRole",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //$("#Supplier").empty();  
      console.log(response);
      {
        let newData = document.getElementById("usertype");
        response.forEach(function (items, index) {
          newData.innerHTML += `<option value="${items.role_Id}">${items.role_Name}</option>`;
        });
      }
    }
  })
})

//-----------------Delete Data in API From Jquery------------------
function deleteEmp(id) {
  $(document).ready(function(){
    debugger
    window.location.reload();
    var emp={
      emp_Id:id
    }
    $.ajax({
      type:'Delete',
      url:'https://localhost:5001/api/Employees/DeleteEmployees',
      data:JSON.stringify(emp),
      contentType:'application/json; charset=utf-8',
      dataType:'json',
      success: function(data){
        alert('data is '+data);
      },
      error:function(){
        alert("INSIDE FAILURE");
      }
    })
  })
}

//---------------------Update Data in Api from Jquery----------------
function updateFunction(id) {
$(document).ready(function () {
    debugger
    window.location.reload();
    var employee = {
      emp_Id:id,
      first_Name: $(`#fname${id}`).val(),
      last_Name: $(`#lname${id}`).val(),
      email: $(`#email${id}`).val(),
      phone_Number: $(`#phone${id}`).val(),
      user_Name: $(`#user${id}`).val(), 
      role_Id: $(`#role${id}`).val(), 
      isActive: true,
      actionPerformedBy: "Rajput@gmail.com"
    }
    $.ajax({
      type: 'PUT',
      url: 'https://localhost:5001/api/Employees/UpdateEmployees',
      data: JSON.stringify(employee),
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
}

//----------search api use in jquery--------------
//$(document).ready(function () {
$(".searchClass").autocomplete({
  source: function (request, response) {
      console.log(request.term);
      $.ajax({

          // Wikipedia API url link
          url:
          "https://localhost:5001/api/SearchEmployees/GetSearchEmployees",
          dataType: "jsonp",
          data: {
              action: "opensearch",
              // Output format
              format: "json",
              search: request.term,
              namespace: 0,

              // Maximum number of result
              // to be shown
              limit: 8,
          },
          success: function (data) {
              response(data[1]);
          },
      });
  },
});
