
//------------------get data in table from jquery-----------------------
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://localhost:5001/api/Supplier/GetSupplier",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //$("#Supplier").empty();  
      console.log(response);
      var data = response.forEach(function (item, index) {
        console.log(item);
        const id = item.supplier_Id;
        console.log(id)
        const First_Name = item.first_Name;
        const Last_Name = item.last_Name;
        const Phone_Number = item.phone_Number;
        const Category_Name = item.category_Name;
        const Company_Name = item.company_Name;
        const Company_Address = item.company_Address;
        const isActive = item.isActive;
        const types = document.getElementById("Supplier");
        // add data in Table
        types.innerHTML += `<tbody id="Supplier">
              <tr>                       
              <td>${First_Name}</td>
           
              <td>${Last_Name}</td>        
              <td>${Phone_Number}</td>      
              <td>${Category_Name}</td>
              <td>${Company_Name}</td> 
              <td>${Company_Address}</td>     
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
              data-target="#exampleModalCenter5" onclick = "deleteSupplier(${id})">
                                  <i class="fa fa-trash"></i>
                              </button>               
                          </td></tr>
            </tbody>
            <div class="modal fade" id="exampleModal${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
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
          <label for="title">Phone_Number:</label><br>
          <input type="text" id="phone${id}" name="phone" value="${Phone_Number}" style="height:35px;width:450px"/><br />
          <label for="price">Category Id:</label><br />
          <input type="number" id="cate${id}" name="lname" value="${Category_Name}" style="height:35px;width:450px" /><br /><br />  
          <label for="title">Company Name:</label><br>
          <input type="text" id="companyname${id}" name="fname" value="${Company_Name}" style="height:35px;width:450px"/><br />
          <label for="price">Company Address:</label><br />
          <input type="text" id="companyaddress${id}" name="email" value="${Company_Address}" style="height:35px;width:450px" /><br /><br />  
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

//-------------------------------Post Method in Jquery------------------------------
$(document).ready(function () {
  $('#btnsub').click(function ()     
  {
      window.location.reload();
      var supplier = {first_Name: $("#fname").val(),
                  last_Name: $("#lname").val(),
                  phone_Number: $("#phone").val(),
                  street_Address: $("#staddress").val(),
                  state: $("#state").val(),
                  city: $("#city").val(),
                  zip_Code: $("#zip").val(),
                  company_Name: $("#company").val(),
                  company_Address: $("#companyAddress").val(),
                  category_Id: $("#categorie").val(),
                  isActive: true,
                  actionPerformedBy: "Rajput" 
                 }
                 
          $.ajax({
              type: 'POST',
              url: 'https://localhost:5001/api/Supplier/AddSupplier',
              data: JSON.stringify(supplier),
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

//-----------get Categoryname in Jquery-------------------------

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://localhost:5001/api/Category/GetCategory",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //$("#Supplier").empty();  
      console.log(response);
      {
        let newData = document.getElementById("categorie");
        response.forEach(function (items, index) {
          newData.innerHTML += `<option value="${items.category_Id}">${items.category_Name}</option>`;
        });
      }
    }
  })
})

//--------------delete data in jquery api---------------------------
function deleteSupplier(id) {
  $(document).ready(function(){
    debugger
    window.location.reload();
    var Supplier={
      supplier_Id:id
    }
    $.ajax({
      type:'Delete',
      url:'https://localhost:5001/api/Supplier/DeleteSupplier',
      data:JSON.stringify(Supplier),
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
      var Supplier = {
        supplier_Id:id,
        first_Name: $(`#fname${id}`).val(),
        last_Name: $(`#lname${id}`).val(),
        phone_Number: $(`#phone${id}`).val(),
        category_Id: $(`#cate${id}`).val(),
        company_Name: $(`#companyname${id}`).val(), 
        company_Address: $(`#companyaddress${id}`).val(), 
        isActive: true,
        actionPerformedBy: "Rajput@gmail.com"
      }
      $.ajax({
        type: 'PUT',
        url: 'https://localhost:5001/api/Supplier/UpdateSupplier',
        data: JSON.stringify(Supplier),
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