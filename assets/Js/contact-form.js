function sendMail(){
  
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    student_name : document.getElementById("student_name").value,
    age : document.getElementById("fullName").value,
    phone_number : document.getElementById("phone_number").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_22z15hy", "template_eonhbro", params).then(function(res){

    alert("success!" + res.status);
  });
}