url = "https://localhost:5001/api/Technician/GetTechnician";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("choosetech");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.emp_Id}">${items.name}</option>`;
    });
  });

//   ---------GetHelper-------------

url = "https://localhost:5001/api/Helper/GetHelper";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("helper");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.emp_Id}">${items.name}</option>`;
    });
  });