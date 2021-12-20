
var idd1 = 0;
var html3 = "";


url = "https://localhost:5001/api/AssignedTemplates/GetAssignedTemplates"
fetch(url).then((response) => {
    return response.json();
}).then((data) => {
     console.log(data);
    data.forEach(data => {
        var id = data.assigned_Template_Id;
        console.log(data);
        idd1++;
        html3 +=
            `       <tr>
                    <th scope="row">${idd1}</th>                  
                    <td>${data.temp_Name}</td>
                    <td>${data.technician_Name}</td>
                    <td>${data.isActive}</td>
                    <td>
                        <button type="button" class="btn mx-1" name="edit"  data-toggle="modal"
        data-target="#exampleModal1">
                            <i class="fa fa-pencil"></i>
                        </button>             
                        <button type="button" class="btn mx-2"  data-toggle="modal"
        data-target="#exampleModalCenter5" onclick = "DeleteAssTemp(${id})">
                            <i class="fa fa-trash"></i>
                        </button>               
                    </td>
                    </tr>`
    })
    document.getElementById("AssignedTemplate").innerHTML = html3;
})
//-----------post data-----------------

function AddAssignedTemplate() {
  debugger
  window.location.reload();

  let Template = document.getElementById("template").value;
  let Technician = document.getElementById("tec").value;
  fetch("https://localhost:5001/api/AssignedTemplates/AddAssignedTemplates", {
    method: "POST",
    body: JSON.stringify({
      temp_Id: Template, 
      emp_Id: Technician,
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
//-----------Get api-----------------

url = "https://localhost:5001/api/Template/GetTemplate";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("template");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.temp_Id}">${items.temp_Name}</option>`;
    });
  });

  url = "https://localhost:5001/api/Technician/GetTechnician";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("tec");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.emp_Id}">${items.name}</option>`;
    });
  });


//-----------------Delete Data in API------------------
function DeleteAssTemp(id) {
  window.location.reload();
debugger
    fetch(`https://localhost:5001/api/AssignedTemplates/DeleteAssignedTemplates`, {
        method: "DELETE",
        body: JSON.stringify({
            "assigned_Template_Id": id  
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data)
    })
    alert("Delete successfully!!!")
}
