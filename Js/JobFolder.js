// url = "https://localhost:5001/GetAgreement";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let newData = document.getElementById("agreement");
//     data.forEach(function (items, index) {
//       newData.innerHTML += `<option value="${items.agreement_Id}">${items.agreement_Name}</option>`;
//     });
//   });

// url = "https://localhost:5001/GetJobFolder";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let newData = document.getElementById("jobfolder");
//     data.forEach(function (items, index) {
//       newData.innerHTML += `<option value="${items.folder_Id}">${items.folder_Name}</option>`;
//     });
//   });



$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://localhost:5001/GetAgreement",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            //$("#Supplier").empty();  
            console.log(response); {
                let newData = document.getElementById("agreement");
                response.forEach(function(items, index) {
                    newData.innerHTML += `<option value="${items.agreement_Id}">${items.agreement_Name}</option>`;
                });
            }
        }
    })
})

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://localhost:5001/GetJobFolder",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            //$("#Supplier").empty();  
            console.log(response); {
                let newData = document.getElementById("jobfolder");
                response.forEach(function(items, index) {
                    newData.innerHTML += `<option value="${items.folder_Id}">${items.folder_Name}</option>`;
                });
            }
        }
    })
})