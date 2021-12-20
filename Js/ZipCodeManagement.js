

fetch(
  "https://localhost:5001/api/Zipcode/GetZipcode"
)
  .then((actualdata) => {
    return actualdata.json();
  })
  .then((actualdata) => {
    var data = actualdata.forEach(function (item, index) {
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
    <input type="text" id="zone${id}" name="zname" value="${Zone_Name}" style="height:35px;width:450px"/><br />
    <label for="title">City:</label><br>
    <input type="text" id="city${id}" name="city" value="${City}" style="height:35px;width:450px"/><br />
    <label for="title">State:</label><br>
    <input type="text" id="state${id}" name="state" value="${State}" style="height:35px;width:450px"/><br />
    <label for="price">Zip Code:</label><br />
    <input type="number" id="zip${id}" name="zip" value="${Zip_Code}" style="height:35px;width:450px" /><br /><br /> 
    <label for="price">Status:</label><br />
    <input type="text" id="status${id}" name="status" value="${Status}" style="height:35px;width:450px" /><br /><br />  
    <label for="price">IsAcive:</label><br />
    <input type="text" id="isactive${id}" name="isactive" value="${isActive}" style="height:35px;width:450px" /><br /><br />  
    <button type="submit" id="sub" onclick="updateFunction(${id})" class="btn btn-primary">Update</button> 
  </form>
    </div>   
  </div>
</div>
</div>`
    });
  });


//-----------post data-----------------

function addZipCode() {
  debugger
  window.location.reload();
  let Zonename = document.getElementById("zone").value;
  let State = document.getElementById("state").value;
  let City = document.getElementById("city").value;
  let Zip_Code = document.getElementById("zip").value;
  let Status = document.getElementById("status").value;
  fetch("https://localhost:5001/api/Zipcode/AddZipcode", {
    method: "POST",
    body: JSON.stringify({
      zone_Name: Zonename,
      state: State,
      city: City,
      zip_Code: Zip_Code,
      status: Status,
      isActive: true,
      actionPerformedBy: "Rajput",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}


//-----------------Delete Data in API------------------
function deleteZipCode(id) {
  debugger
  window.location.reload();
  fetch(`https://localhost:5001/api/Zipcode/DeleteZipcode`, {
    method: "DELETE",
    body: JSON.stringify({
      "zip_Code_Id": id
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  }).then(res => {
    return res.json();
  }).then(data => {
    console.log(data)
  })
  alert("Delete successfully!!!")
}


//---------------------Update Data in Api from Table----------------
function updateFunction(id) {
  debugger
  window.location.reload();
  var upZoneName = document.getElementById(`zone${id}`).value;
  var upCity = document.getElementById(`city${id}`).value;
  var upState = document.getElementById(`state${id}`).value;
  var upZipCode = document.getElementById(`zip${id}`).value;
  var upStatus = document.getElementById(`status${id}`).value;
  // var upIsActive = document.getElementById(`isactive${id}`).value;
  fetch("https://localhost:5001/api/Zipcode/UpdateZipcode", {
    method: "PUT",
    body: JSON.stringify({
      zip_Code_Id: id,
      zone_Name: upZoneName,
      city: upCity,
      state: upState,
      zip_Code: upZipCode,
      status: upStatus,
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
