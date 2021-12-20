

var idd1 = 0;
var html3 = "";


url = "https://localhost:5001/api/Template/GetTemplate"
fetch(url).then((response) => {
    return response.json();
}).then((data) => {
     console.log(data);
    data.forEach(data => {
        var id = data.temp_Id;
        console.log(data);
        idd1++;
        html3 +=
            `       <tr>
                    <th scope="row">${idd1}</th>             
                    <td>${data.temp_Name}</td>                
                    <td>${data.isActive}</td>
                    <td>
                        <button type="button" class="btn mx-1" name="edit"  data-toggle="modal"
        data-target="#exampleModal1">
                            <i class="fa fa-pencil"></i>
                        </button>             
                        <button type="button" class="btn mx-2"  data-toggle="modal"
        data-target="#exampleModalCenter5" onclick = "deleteTemplate(${id})">
                            <i class="fa fa-trash"></i>
                        </button>               
                    </td>
                    </tr>`
    })
    document.getElementById("Template").innerHTML = html3;
})
//-----------post data-----------------

// function addTemplate() {
//   debugger
//   window.location.reload();
//   let TemplateName = document.getElementById("tname").value;
//   let Question = document.getElementById("question").value;
//   let signature = document.getElementById("signature").value;
//   let Lable = document.getElementById("lable").value;
// //let Question1 = document.getElementById("question1").value;
//   let Materials = document.getElementById("materials").value;
//   fetch("https://localhost:5001/api/Template/AddQuestion", {
//     method: "POST",
//     body: JSON.stringify({
//       temp_Name: TemplateName, 
//       question_Id: Question,
//       signature_Id: signature,
//       lable_Id: Lable,
//       image: Question1,
//       material_Id: Materials,
//       isActive: true,
//       actionPerformedBy: "Rajput",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// //-----------Get Question Type-----------------

// url = "https://localhost:5001/api/QuestionType/GetQuestionType";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let newData = document.getElementById("quetype");
//     data.forEach(function (items, index) {
//       newData.innerHTML += `<option value="${items.question_Type_Id}">${items.question_Type_Name}</option>`;
//     });
//   });

//   url = "https://localhost:5001/api/QuestionType/GetQuestionType";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let newData = document.getElementById("quetype1");
//     data.forEach(function (items, index) {
//       newData.innerHTML += `<option value="${items.question_Type_Id}">${items.question_Type_Name}</option>`;
//     });
//   });

//-----------------Delete Data in API------------------
function deleteTemplate(id) {
  window.location.reload();
    fetch(`https://localhost:5001/api/Template/DeleteQuestion`, {
        method: "DELETE",
        body: JSON.stringify({
            "temp_Id": id  
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data)
    })
    alert("Delete successfully!!!")
}


