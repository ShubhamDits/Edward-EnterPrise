$(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://localhost:5001/api/Customer/GetCustomer",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        //$("#Supplier").empty();  
        console.log(response);
        var data = response.forEach(function (item, index) {
       console.log(item);
       const id = item.customer_Id;
       const CustomerName = item.customer_Name;
       const Address = item.address;
       const Isactive = item.isActive;
       const types = document.getElementById("customer");
         types.innerHTML = `<tbody id="customer">
         <tr>                       
         <td>${CustomerName}</td>
      
         <td>${Address}</td>        
               
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
         data-target="#exampleModalCenter5" onclick = "deleteSupplier(${id})">
                             <i class="fa fa-trash"></i>
                         </button>               
                     </td></tr>
       </tbody>`
              
        });
    }
  })
})
