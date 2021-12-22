
//---------------------Get Data in jquery----------------
$(document).ready(function(){
  $.ajax({
    type:"GET",
    url:'https://localhost:5001/api/Zipcode/GetZipcode',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      console.log(response);
      var data = response.forEach(function (item, index) {
        console.log(item);
        const id = item.zip_Code_Id;
        console.log(id)
        const Zone_Name = item.zone_Name;
        const City = item.city;
        const State = item.state;
        const Zip_Code = item.zip_Code;
        const Status = item.status;
        const isActive = item.isActive;
        const types = document.getElementById("zones");
        // add data in Table
        types.innerHTML += `<tbody id="zones">
          <tr>                       
          <td>${Zone_Name}</td>  
          <td>${City}</td>        
          <td>${State}</td>      
          <td>${Zip_Code}</td> 
          <td>${Status}</td>    
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
                          data-target="#exampleModalCenter5" onclick = "deleteZipCode(${id})">
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
                        <label for="title">Zone_Name:</label><br>
                        <input type="text" id="zone${id}" name="zname" value="${Zone_Name}" style="height:35px;width:450px"/><br/>
                        <label for="title">City:</label><br>
                        <input type="text" id="city${id}" name="city" value="${City}" style="height:35px;width:450px"/><br/>
                        <label for="title">State:</label><br>
                        <input type="text" id="state${id}" name="state" value="${State}" style="height:35px;width:450px"/><br/>
                        <label for="price">Zip Code:</label><br/>
                        <input type="number" id="zip${id}" name="zip" value="${Zip_Code}" style="height:35px;width:450px" /><br /><br/> 
                        <label for="price">Status:</label><br/>
                        <input type="text" id="status${id}" name="status" value="${Status}" style="height:35px;width:450px"/><br /><br/>  
                        <label for="price">IsAcive:</label><br/>
                        <input type="text" id="isactive${id}" name="isactive" value="${isActive}" style="height:35px;width:450px"/><br/><br/>
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
  $('#btnsave').click(function () {
    debugger
    window.location.reload();
    var ZipCode = {
      zone_Name: $("#zone").val(),
      state: $("#state").val(),
      city: $("#city").val(),
      zip_Code: $("#zip").val(),
      status: $("#status").val(),   
      isActive: true,
      actionPerformedBy: "Rajput@gmail.com"
    }
    $.ajax({
      type: 'POST',
      url: 'https://localhost:5001/api/Zipcode/AddZipcode',
      data: JSON.stringify(ZipCode),
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

//-----------------Delete Data in Jquery------------------
function deleteZipCode(id) {
  $(document).ready(function(){
    debugger
    window.location.reload();
    var zipcode={
      zip_Code_Id:id,
      isActive: false,
      actionPerformedBy: "Rajput@gmail.com"
    }
    $.ajax({
      type:'Delete',
      url:'https://localhost:5001/api/Zipcode/DeleteZipcode',
      data:JSON.stringify(zipcode),
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

//---------------------Update Data in Jquery----------------

function updateFunction(id) {
  $(document).ready(function () {
      debugger
      window.location.reload();
      var zipcode = {
        zip_Code_Id:id,
        zone_Name: $(`#zone${id}`).val(),
        city: $(`#city${id}`).val(),
        state: $(`#state${id}`).val(),
        zip_Code: $(`#zip${id}`).val(),
        status: $(`#status${id}`).val(),
        isActive: true,
        actionPerformedBy: "Rajput@gmail.com"
      }
      $.ajax({
        type: 'PUT',
        url: 'https://localhost:5001/api/Zipcode/UpdateZipcode',
        data: JSON.stringify(zipcode),
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