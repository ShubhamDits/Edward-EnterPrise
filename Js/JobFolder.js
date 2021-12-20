//-----------Get Agreement api-----------------

url = "https://localhost:5001/api/Agreement/GetAgreement";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("agreement");
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
    let newData = document.getElementById("jobfolder");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.job_Folder_Id}">${items.job_Folder_Name}</option>`;
    });
  });