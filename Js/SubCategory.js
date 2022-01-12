//--------------get Data in Jquery---------------------
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: 'https://localhost:5001/api/SubCategory/GetSubCategory',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            console.log(response);
            var data = response.forEach(function(item, index) {
                console.log(item);
                const id = item.sub_Category_Id;
                console.log(id)
                const category_Name = item.category_Name;
                const subcategory_Name = item.sub_Category_Name;
                const firsthoue = item.first_Hour_Price;
                const eachadditional = item.each_Addition_Hour_Price;
                const isActive = item.isActive;
                const types = document.getElementById("SubCategories");
                // add data in Table
                types.innerHTML += `<tbody id="SubCategories">
          <tr>  
                     
          <td>${category_Name}</td>
          <td>${subcategory_Name}</td>        
          <td>${firsthoue}</td>
          <td>${eachadditional}</td>         
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
          data-target="#exampleModalCenter5" onclick = "deleteSubCategory(${id})">
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
          <label for="title">category_Id:</label><br>
          <input type="number" id="cate${id}" name="name" value="${category_Name}" style="height:35px;width:450px"/><br/>
          <label for="title">Sub_Category_Name:</label><br>
          <input type="text" id="scate${id}" name="name" value="${subcategory_Name}" style="height:35px;width:450px"/><br/>
          <label for="price">First_Houe:</label><br />
          <input type="text" id="firsthour${id}" name="email" value="${firsthoue}" style="height:35px;width:450px" /><br/><br/>
          <label for="title">Each_Additional_Hour:</label><br>
          <input type="text" id="eachadditional${id}" name="phone" value="${eachadditional}" style="height:35px;width:450px"/><br/>
          <label for="price">IsAcive:</label><br/>
          <input type="text" id="isactive${id}" name="lname" value="${isActive}" style="height:35px;width:450px" /><br/><br/> 
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
$(document).ready(function() {
    $('#btnsave').click(function() {
        debugger
        window.location.reload();
        var Subcategory = {
            category_Id: $("#categorie").val(),
            sub_Category_Name: $("#subCategorie").val(),
            first_Hour_Price: $("#fhour").val(),
            each_Addition_Hour_Price: $("#eachadditional").val(),
            isActive: true,
            actionPerformedBy: "Rajput@gmail.com"
        }
        $.ajax({
            type: 'POST',
            url: 'https://localhost:5001/api/SubCategory/AddSubCategory',
            data: JSON.stringify(Subcategory),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(data) {
                alert('data is ' + data);
            },
            error: function() {
                alert("INSIDE FAILURE");
            }
        });
    });
});
//-----------Get Category in Jquery-----------------
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://localhost:5001/api/Category/GetCategory",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            //$("#Supplier").empty();  
            console.log(response); {
                let newData = document.getElementById("categorie");
                response.forEach(function(items, index) {
                    newData.innerHTML += `<option value="${items.category_Id}">${items.category_Name}</option>`;
                });
            }
        }
    })
})

//-----------------Delete Data in Jquery------------------
function deleteSubCategory(id) {
    $(document).ready(function() {
        debugger
        window.location.reload();
        var Subcategory = {
            sub_Category_Id: id,
            isActive: false,
            actionPerformedBy: "Rajput@gmail.com"
        }
        $.ajax({
            type: 'Delete',
            url: 'https://localhost:5001/api/SubCategory/DeleteSubCategory',
            data: JSON.stringify(Subcategory),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(data) {
                alert('data is ' + data);
            },
            error: function() {
                alert("INSIDE FAILURE");
            }
        })
    })
}
//---------------------Update Data in Api from Table----------------
function updateFunction(id) {
    $(document).ready(function() {
        debugger
        window.location.reload();
        var Subcategory = {
            sub_Category_Id: id,
            category_Id: $(`#cate${id}`).val(),
            sub_Category_Name: $(`#scate${id}`).val(),
            first_Hour_Price: $(`#firsthour${id}`).val(),
            each_Addition_Hour_Price: $(`#eachadditional${id}`).val(),
            isActive: true,
            actionPerformedBy: "Rajput@gmail.com"
        }
        $.ajax({
            type: 'PUT',
            url: 'https://localhost:5001/api/SubCategory/UpdateSubCategory',
            data: JSON.stringify(Subcategory),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(data) {
                alert('data is ' + data);
            },
            error: function() {
                alert("INSIDE FAILURE");
            }
        });
    });
}