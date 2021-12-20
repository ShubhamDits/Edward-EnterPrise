//------------------get data in table from jquery-----------------------
 $(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://localhost:5001/api/Category/GetCategory",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //$("#Supplier").empty();  
      console.log(response);
      var data = response.forEach(function (item, index) {
        console.log(item);
        const id = item.category_Id;
        console.log(id)
        const categorie = item.category_Name;        
        const isActive = item.isActive;
        const types = document.getElementById("Categories");        
        // add data in Table
        types.innerHTML += `<tbody id="Categories">
          <tr>                       
          <td>${categorie}</td>     
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
          data-target="#exampleModalCenter5" onclick = "deleteopp(${id})">
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
            <label for="title">category_Name:</label><br>
            <input type="text" id="category${id}" name="name" value="${categorie}" style="height:35px;width:450px"/><br />
            <label for="title">Is Active:</label><br>
            <input type="text" id="isactive${id}" name="isactive" value="${isActive}" style="height:35px;width:450px" /><br /><br> 
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
  $('#btnsubmit').click(function ()     
  {
      window.location.reload();
      var category = {category_Name: $("#categorie").val(),               
                 isActive: true,
                  actionPerformedBy: "Rajput" 
                 }
          $.ajax({
              type: 'POST',
              url: 'https://localhost:5001/api/Category/AddCategory',
              data: JSON.stringify(category),
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

//-----------------Delete Data in API from Jquery------------------
function deleteopp(id) {
  $(document).ready(function(){
    debugger
    window.location.reload();
    var category={
      category_Id:id
    }
    $.ajax({
      type:'Delete',
      url:'https://localhost:5001/api/Category/DeleteCategory',
      data:JSON.stringify(category),
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
      var category = {
        category_Id:id,
        category_Name: $(`#category${id}`).val(),
        isActive: true,
        actionPerformedBy: "Rajput@gmail.com"
      }
      $.ajax({
        type: 'PUT',
        url: 'https://localhost:5001/api/Category/UpdateCategory',
        data: JSON.stringify(category),
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
