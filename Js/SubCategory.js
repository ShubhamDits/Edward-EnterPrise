
 //var idd1 = 0;
// var html3 = "";


// url = "https://localhost:5001/api/SubCategory/GetSubCategory"
// fetch(url).then((response) => {
//     return response.json();
// }).then((data) => {
//      console.log(data);
//     data.forEach(data => {
//         var id = data.sub_Category_Id;
//         console.log(data);
//         idd1++;
//         html3 +=
//             `       <tr>
//                     <th scope="row">${idd1}</th>                   
//                     <td>${data.category_Name}</td>
//                     <td>${data.sub_Category_Name}</td>
//                     <td>${data.first_Hour_Price}</td>
//                     <td>${data.each_Addition_Hour_Price}</td>
//                     <td>${data.isActive}</td>
//                     <td>
//                         <button type="button" class="btn mx-1" name="edit"  data-toggle="modal"
//         data-target="#exampleModal1">
//                             <i class="fa fa-pencil"></i>
//                         </button>             
//                         <button type="button" class="btn mx-2"  data-toggle="modal"
//         data-target="#exampleModalCenter5" onclick = "deleteopp(${id})">
//                             <i class="fa fa-trash"></i>
//                         </button>               
//                     </td>
//                     </tr>`
//     })
//     document.getElementById("SubCategories").innerHTML = html3;
// })

fetch(
  "https://localhost:5001/api/SubCategory/GetSubCategory"
)
  .then((actualdata) => {
    return actualdata.json();
    
  })
  .then((actualdata) => {
    var data = actualdata.forEach(function (item, index) {
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
    <label for="title">category_Id:</label><br>
    <input type="number" id="cate${id}" name="name" value="${category_Name}" style="height:35px;width:450px"/><br />
    <label for="title">Sub_Category_Name:</label><br>
    <input type="text" id="scate${id}" name="name" value="${subcategory_Name}" style="height:35px;width:450px"/><br />
    <label for="price">First_Houe:</label><br />
    <input type="text" id="firsthour${id}" name="email" value="${firsthoue}" style="height:35px;width:450px" /><br /><br />  
    <label for="title">Each_Additional_Hour:</label><br>
    <input type="text" id="eachadditional${id}" name="phone" value="${eachadditional}" style="height:35px;width:450px"/><br />
    <label for="price">IsAcive:</label><br />
    <input type="text" id="isactive${id}" name="lname" value="${isActive}" style="height:35px;width:450px" /><br /><br />  
       <button type="submit" id="sub" onclick="updateFunction(${id})" class="btn btn-primary">Update</button> 
  </form>
    </div>   
  </div>
</div>
</div>`   
    });
  });
  



//-----------post data-----------------

function addSubCategory() {
  debugger
  window.location.reload();
  let Categorie = document.getElementById("categorie").value;
  let SubCategorie=document.getElementById("subCategorie").value;
  let FirstHour=document.getElementById("fhour").value;
  let AdditionalHour=document.getElementById("eachadditional").value;
  fetch("https://localhost:5001/api/SubCategory/AddSubCategory", {
    method: "POST",
    body: JSON.stringify({
      category_Id: Categorie,
      sub_Category_Name:SubCategorie,
      first_Hour_Price:FirstHour,
      each_Addition_Hour_Price:AdditionalHour,  
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
//-----------Get Category-----------------

url = "https://localhost:5001/api/Category/GetCategory";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("categorie");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.category_Id}">${items.category_Name}</option>`;
    });
  });

//-----------------Delete Data in API------------------
function deleteopp(id) {
    debugger
    window.location.reload();
      fetch(`https://localhost:5001/api/SubCategory/DeleteSubCategory`, {
          method: "DELETE",
          body: JSON.stringify({
              "sub_Category_Id": id
             
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
function updateFunction(id)
 {
   debugger
  window.location.reload();
  var upcategory = document.getElementById(`cate${id}`).value;
  var upSubcategory = document.getElementById(`scate${id}`).value;
  var upFirstName = document.getElementById(`firsthour${id}`).value;
  var upeachadditional= document.getElementById(`eachadditional${id}`).value;
 // var upIsActive = document.getElementById(`isactive${id}`).value;
  fetch("https://localhost:5001/api/SubCategory/UpdateSubCategory", {
    method: "PUT",
    body: JSON.stringify({
      sub_Category_Id: id,
      category_Id: upcategory,
      sub_Category_Name: upSubcategory,
      first_Hour_Price: upFirstName,
      each_Addition_Hour_Price: upeachadditional,
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
  