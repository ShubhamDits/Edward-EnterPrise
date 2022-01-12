

//-----------post data in Jquery-----------------
$(document).ready(function () {
    $('#btnNext').click(function () {
      debugger
      window.location.reload();
      var ResidentialServiceRequest = {
        labour_Rate: $("#labour").val(),
        travel_Rate: $("#travel").val(),
        addition_Travel: $("#addtra").val(),
        minimum_On_Site: $("#minonsite").val(),
        short_Description: $("#short").val(),
        medium_Description: $("#min").val(),
        work_Detail: $("#workdes").val(),
        agreement_Id: $("#agreement1").val(),
        job_Folder_Id: $("#jobfloder1").val(),
        isActive: true,
        actionPerformedBy: "Rajput@gmail.com"
      }
      $.ajax({
        type: 'POST',
        url: 'https://localhost:5001/api/ResidentialServiceRequest/AddResidentialServiceRequest',
        data: JSON.stringify(ResidentialServiceRequest),
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
  //-----------Get Agreement in jquery-----------------
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://localhost:5001/api/Agreement/GetAgreement",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        console.log(response);
        {
          let newData = document.getElementById("agreement1");
          response.forEach(function (items, index) {
            newData.innerHTML += `<option value="${items.agreement_Id}">${items.agreement_Name}</option>`;
          });
        }
      }
    })
  })
  //-----------Get JobFolders in jquery -----------------
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://localhost:5001/api/JobFolders/GetJobFolders",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) { 
        console.log(response);
        {
          let newData = document.getElementById("jobfloder1");
          response.forEach(function (items, index) {
            newData.innerHTML += `<option value="${items.job_Folder_Id}">${items.job_Folder_Name}</option>`;
          });
        }
      }
    })
  })