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
                let newData = document.getElementById("category");
                response.forEach(function(items, index) {
                    newData.innerHTML += `<option value="${items.category_Id}">${items.category_Name}</option>`;
                });
            }
        }
    })
})

//-----------Get Technician in Jquery-----------------
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://localhost:5001/GetTechnician",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            //$("#Supplier").empty();
            console.log(response); {
                let newData = document.getElementById("technician");
                response.forEach(function(items, index) {
                    newData.innerHTML += `<option value="${items.emp_Id}">${items.name}</option>`;
                });
            }
        },
    });
});

//-----------Get Helper in Jquery-----------------
// $(document).ready(function () {
//     $.ajax({
//       type: "GET",
//       url: "https://localhost:5001/api/Helper/GetHelper",
//       contentType: "application/json; charset=utf-8",
//       dataType: "json",
//       success: function (response) {
//         //$("#Supplier").empty();  
//         console.log(response);
//         {
//           let newData = document.getElementById("helper");
//           response.forEach(function (items, index) {
//             newData.innerHTML += `<option value="${items.emp_Id}">${items.name}</option>`;
//           });
//         }
//       }
//     })
//   })

//-----------post data in Jquery-----------------
$(document).ready(function() {
    $('#btnsave').click(function() {
        debugger
        window.location.reload();
        var ResidentialAssignTechnician = {
            category_Id: $("#category").val(),
            first_Hour: $("#fihour").val(),
            each_Additional_Hour: $("#eachadd").val(),
            emp_Id: $("#technician").val(),
            //emp_Id:$("#helper").val(),
            start_Time: $("#stime").val(),
            length_Of_Time: $("#ltime").val(),
            length_Of_Arrival: $("#arrival").val(),
            isActive: true,
            actionPerformedBy: "Soni"
        }
        $.ajax({
            type: 'POST',
            url: 'https://localhost:5001/api/CommAssignTechnician/AddCommercialServiceRequest',
            data: JSON.stringify(ResidentialAssignTechnician),
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