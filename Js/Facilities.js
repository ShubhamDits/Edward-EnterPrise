$(document).ready(function()
{  debugger
   $("#facility").click(function()
   {
    debugger
    var facilityClient = {
        facilitie_Name : $("#facltyclientname").val(),
        phone_Number : $("#phonenumber").val(),
        address : $("#address").val(),
        state : $("#state").val(),
        city :$("#city").val(),
        zip_Code :$("#zipcode").val(),
        isActive :  true,
        actionPerformedBy : "Mithun"
    }
    $.ajax({
       type : 'POST',
       url : 'https://localhost:5001/api/Facilitie_Clients/AddFaciliteClients',
       data : JSON.stringify(facilityClient),
       contentType : 'application/json; charset=utf-8',
       dataType : 'json',
       success : function (data){
           alert('Data Updated Successfully')
       },
    error : function(){
        alert("data failure")
    }

    })

   })   
});
// -------------------FacilityJobSite-------------------------------
$(document).ready(function()
{  debugger
   $("#facility").click(function()
   {
    debugger
    var facilityJobSite = {
        job_Site_Name : $("#facilityjobname").val(),
        phone_Number : $("#phonnmber").val(),
        address : $("#jobaddress").val(),
        state : $("#jobstate").val(),
        city :$("#jobcity").val(),
        zip_Code :$("#jobzipcode").val(),
        isActive :  true,
        actionPerformedBy : "Mithun"
    }
    $.ajax({
       type : 'POST',
       url : 'https://localhost:5001/api/Facilite_Job_Sites/AddFaciliteJobSites',
       data : JSON.stringify(facilityJobSite),
       contentType : 'application/json; charset=utf-8',
       dataType : 'json',
       success : function (data){
           alert('Data Updated Successfully')
       },
    error : function(){
        alert("data failure")
    }

    })

   })   
});