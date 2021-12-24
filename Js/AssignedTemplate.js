
// ---------------Get AssignedTemplate--------------------
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://localhost:5001/api/AssignedTemplates/GetAssignedTemplates",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //$("#Supplier").empty();  
      console.log(response);
      response.forEach(function (item,index) {
        console.log(item)
        const id = item.assigned_Template_Id;
        const Name = item.temp_Name;
        const Tech = item.technician_Name;
        const Isactive = item.isActive;
        const type = document.getElementById("AssignedTemplate");
        type.innerHTML += `<tbody id = "AssignedTemplate">
        <tr>
        <td>${Name}</td>
        <td>${Tech}</td>
        
        <td> <label class="switch">
               <input type="checkbox" checked>
                <span class="slider round" style="margin-top:0px;"></span>
               </label${Isactive}</td>
              <td>
              <button type="button" class="btn mx-1" name="edit"  data-toggle="modal"
              data-target="#exampleModal${id}">
                                  <i class="fa fa-pencil"></i>
                              </button>             
                              <button type="button" class="btn mx-2"  data-toggle="modal"
              data-target="#exampleModalCenter5" onclick = "DeleteAssTemp(${id})">
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
                        <form class="form" id="myForm1">  
                        <label for="title">Template_Name:</label><br>
                        <input type="text" id="tem${id}" name="tempname" value="${Name}" style="height:35px;width:450px"/><br/>
                        <label for="title">Technician_Name:</label><br>
                        <input type="text" id="techin${id}" name="tecname" value="${Tech}" style="height:35px;width:450px"/><br/>
                        <label for="price">IsAcive:</label><br/>
                        <input type="text" id="isactive${id}" name="isactive" value="${Isactive}" style="height:35px;width:450px"/><br/><br/>
                        <button type="submit" id="sub" onclick="updateAssignTemplate(${id})" class="btn btn-primary">Update</button> 
                      </form>
                      </div>   
                     </div>
                    </div>
                    </div>`
         

      })
    }
  }
)
})
// ---------------Add AssignedTemplate--------------------

$(document).ready(function () {
  $('#assigntemplate').click(function () {
   debugger
    window.location.reload();

    var Template = {

      temp_Id : $("#template").val(),
      emp_Id: $("#tec").val(),
      isActive : true,
      actionPerformedBy : "Mithun"
    }
    $.ajax({
      type:'POST',
      url:'https://localhost:5001/api/AssignedTemplates/AddAssignedTemplates',
      data :JSON.stringify(Template),
      contentType:'application/json; charset = utf-8',
      dataType: 'json',
       success:function (data) {
         alert("data is" + data);
       },
       error: function() {
         alert("Inside Failure");
       }

    })
  })
})
//-----------Get api-----------------



url = "https://localhost:5001/api/Template/GetTemplate";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("template");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.temp_Id}">${items.temp_Name}</option>`;
    });
  });

  url = "https://localhost:5001/api/Technician/GetTechnician";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("tec");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.emp_Id}">${items.name}</option>`;
    });
  });


//-----------------Delete Data in API------------------
function DeleteAssTemp(id) {
  debugger
  
  

$(document).ready(function () {
  
var AssignedTemplate = {
  assigned_Template_Id : id
}
console.log(id)
$.ajax({
  
 type :'Delete',
 url: 'https://localhost:5001/api/AssignedTemplates/DeleteAssignedTemplates',
 data : JSON.stringify(AssignedTemplate),
 contentType :'application/json; charset =utf-8',
 dataType:'json',
 success: function(data){
  window.location.reload();
   alert("data is"+data);
 },
 error:function(){
   alert("Inside Failure");
 }
 
})
})
}   
// ---------------Update AssignedTemplate--------------------
function updateAssignTemplate(id){
  $(document).ready (function() {
   window.location.reload();
    var assign_template = {
      assigned_Template_Id:id,
      temp_Id: $(`#tem${id}`).val(),
      emp_Id : $(`#techin${id}`).val(),
      isActive: true,
      actionPerformedBy: "Mithun"
    }
    $.ajax({
      type:'PUT',
      url : 'https://localhost:5001/api/AssignedTemplates/UpdateAssignedTemplates',
      data : JSON.stringify(assign_template),
      contentType:'application/json; charset = utf-8',
      dataType: 'json',
      success:function(data){
        alert('data is' + data);
      },
      error: function(){
        alert ('Data Failure')
      }
    })
    
  })

}

