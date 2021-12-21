//-----------------Get Data in Jquery----------------------
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://localhost:5001/api/Pricing/GetPricing",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //$("#Supplier").empty();  
      console.log(response);
      var data = response.forEach(function (item, index) {
        console.log(item);
        const id = item.pricing_Id;
        console.log(id)
        const Zone_Name = item.zone_Name;
        const Technician = item.name;
        const First_Hour = item.first_Hour;
        const Additional_Hour = item.additional_Hour;
        const isActive = item.isActive;
        const types = document.getElementById("Pricing");
        // add data in Table
        types.innerHTML += `<tbody id="Pricing">
          <tr>                       
          <td>${Zone_Name}</td>     
          <td>${Technician}</td>        
          <td>${First_Hour}</td>      
          <td>${Additional_Hour}</td>   
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
          data-target="#exampleModalCenter5" onclick = "DeletePricing(${id})">
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
          <label for="title">Zone_Id:</label><br>
          <input type="number" id="zone${id}" name="name" value="${Zone_Name}" style="height:35px;width:450px"/><br />
          <label for="title">Technician_Id:</label><br>
          <input type="number" id="tec${id}" name="name" value="${Technician}" style="height:35px;width:450px"/><br />
          <label for="title">First_Hour:</label><br>
          <input type="number" id="firsthour${id}" name="phone" value="${First_Hour}" style="height:35px;width:450px"/><br />
          <label for="price">Additional_Hour:</label><br />
          <input type="number" id="addhour${id}" name="lname" value="${Additional_Hour}" style="height:35px;width:450px" /><br /
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
//-----------post data in jquery-----------------
$(document).ready(function () {
  $('#btnsubmit').click(function () {
    debugger
    window.location.reload();
    var Pricing = {
      zip_Code_Id: $("#zone").val(),
      emp_Id: $("#tec").val(),
      first_Hour: $("#firsthour").val(),
      additional_Hour: $("#addithour").val(),   
      isActive: true,
      actionPerformedBy: "Rajput@gmail.com"
    }
    $.ajax({
      type: 'POST',
      url: 'https://localhost:5001/api/Pricing/AddPricing',
      data: JSON.stringify(Pricing),
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
//-----------Get Zipcode in Jquery-----------------
 $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://localhost:5001/api/Zipcode/GetZipcode",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        //$("#Supplier").empty();  
        console.log(response);
        {
          let newData = document.getElementById("zone");
          response.forEach(function (items, index) {
            newData.innerHTML += `<option value="${items.zip_Code_Id}">${items.zone_Name}</option>`;
          });
        }
      }
    })
  })
//------------------Get Technician Name in Jquery--------------------
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://localhost:5001/api/Technician/GetTechnician",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        //$("#Supplier").empty();  
        console.log(response);
        {
          let newData = document.getElementById("tec");
          response.forEach(function (items, index) {
            newData.innerHTML += `<option value="${items.emp_Id}">${items.name}</option>`;
          });
        }
      }
    })
  })

//-----------------Delete Data in js------------------
function DeletePricing(id) {
  window.location.reload();
  debugger
  fetch(`https://localhost:5001/api/Pricing/DeletePricing`, {
    method: "DELETE",
    body: JSON.stringify({
      "pricing_Id": id
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  }).then(res => {
    return res.json();
  }).then(data => {
    console.log(data)
  })
  alert("Delete successfully!!!")
}


//---------------------Update Data in Apiin js----------------
function updateFunction(id) {
  debugger
  window.location.reload();
  var upZoneName = document.getElementById(`zone${id}`).value;
  var upTechnicianName = document.getElementById(`tec${id}`).value;
  var upFirst_Hour = document.getElementById(`firsthour${id}`).value;
  var upAdditional_Hour = document.getElementById(`addhour${id}`).value;
  // var upIsActive = document.getElementById(`isactive${id}`).value;
  fetch("https://localhost:5001/api/Pricing/UpdatePricing", {
    method: "PUT",
    body: JSON.stringify({
      pricing_Id: id,
      zip_Code_Id: upZoneName,
      emp_Id: upTechnicianName,
      first_Hour: upFirst_Hour,
      additional_Hour: upAdditional_Hour,
      isActive: true,
      actionPerformedBy: "rajput@gmail.com",
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (data) {
      return data.json();
    })
  alert("update successfully!!!")
}

