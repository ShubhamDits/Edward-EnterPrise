//-----------Get Agreement api-----------------
url = "https://localhost:5001/api/Agreement/GetAgreement";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("chooseagreement");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.agreement_Id}">${items.agreement_Name}</option>`;
    });
  });
//-----------Get JobFolders api-----------------
  url = "https://localhost:5001/api/JobFolders/GetJobFolders";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("chooseJobfolder");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.job_Folder_Id}">${items.job_Folder_Name}</option>`;
    });
  });

  // ------------------------FacilityServiceRequestPost-----------------------

$(document).ready(function()
{
  debugger
  $("#servicerequest").click(function()
  {
    var FacilityServiceRequest = {
      work_Order_Number : $("#workorder").val(),
      short_Description : $("#shortdesc").val(),
      ntE_DNE          :   $("#nte").val(),
      work_Description : $("#fullworkdesc").val(),
      labour_Rate      : $("#labourrate").val(),
      travel_Rate      : $("#travelrate").val(),
      addition_Travel  : $("#additionalrate").val(),
      minimum_On_Site  : $("#minimumonsite").val(),
      phone_Number     : $("#phoneno").val(),
      pin_Code         : $("#pin").val(),
      work_Oder        : $("#workorder").val(),
      agreement_Id     : $("#chooseagreement").val(),
      job_Folder_Id    : $("#chooseJobfolder").val(),
      isActive         : true,
      actionPerformedBy : "Mithun",

    }

    $.ajax({
        type :'POST',
        url : 'https://localhost:5001/api/FacilityServiceRequest/FacilityServiceRequest',
        data : JSON.stringify(FacilityServiceRequest),
        contentType: 'application/json; charset=utf-8',
        dataType : 'json',
        success : function(data){
        alert("Added Successfully")
        },
        
        error:function()
        {
          alert("Data Failure")
        }


    })


  })
})  