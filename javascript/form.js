/*function name_validation()
{
  var fname= document.forms["myForm"]["name"].value;
  compare(fname,demo1);
}*/
function name_validation()
{
  var fname = document.forms["myForm"]["name"].value;
  if ((fname.trim()).length == 0)
  {
    document.getElementById("demo1").innerHTML="Name Cannot be Empty!";
    return false;
  }
  else
  {
    document.getElementById("demo1").innerHTML="";
    return true;
  }
}
function email_validation()
{
  var email = document.forms["myForm"]["mail"].value;
  if ((email.trim()).length == 0)
  {
    document.getElementById("demo2").innerHTML="Mail Cannot be Empty!";
    return false;
  }
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    document.getElementById("demo2").innerHTML="";
    return true;
  }
  else
  {
    document.getElementById("demo2").innerHTML="Improper Syntax!";
    return false;
  }
}
function age_validation()
{
  var age_num = document.forms["myForm"]["age"].value;
  if ((age_num.trim()).length == 0)
  {
    document.getElementById("demo3").innerHTML="Age Cannot be Empty!";
    return false;
  }
  else if(age_num>=0)
  {
    document.getElementById("demo3").innerHTML="";
    return true;
  }
    document.getElementById("demo3").innerHTML="Please enter a valid number";
    return false;
}
function gender_validation()
{
  if(!document.getElementById('male').checked)
  {
    if(document.getElementById('female').checked)
    {
      document.getElementById("demo4").innerHTML=""
      return true;
    }
    document.getElementById("demo4").innerHTML="Please choose an option";
    return false;
  }
    document.getElementById("demo4").innerHTML="";
    return true;
}
function number_validation()
{
  var no = document.forms["myForm"]["mobile"].value;
  if ((no.trim()).length == 0) 
  {
    document.getElementById("demo5").innerHTML="Mobile Number cannot be Empty!";
    return false;
  }
  if (/^\d{10}$/.test(no))
  {
    document.getElementById("demo5").innerHTML="";
    return true;
  }
  document.getElementById("demo5").innerHTML="Invalid Number";
  return false;
}
function dob_validation()
{
  var date_birth = document.forms["myForm"]["dob"].value;
  if((date_birth.trim()).length == 0)
  {
    document.getElementById("demo6").innerHTML="DOB cannot be empty";
    return false;
  }
    document.getElementById("demo6").innerHTML="";
    return true;
}
function image_validation()
{
  let image = document.forms["myForm"]["image"].value;
  let validExt = ["jpeg", "jpg", "png","webp"];
  if(image == "") 
  {
    document.getElementById("demo7").innerHTML="enter an image first!";
    return false;
  }
  else 
  {
    let posImgExt = image.lastIndexOf(".") + 1;
    let imgExt = image.substring(posImgExt);
    let result = validExt.includes(imgExt);
    if(result == false) 
    {
      document.getElementById("demo7").innerHTML="please enter in proper format!";
      return false;
    }
    else
    {
      document.getElementById("demo7").innerHTML="";
      return true;
    }
  }
}
function password_validation()
{
  var password1 = document.forms["myForm"]["create"].value;
  var password2 = document.forms["myForm"]["confirm"].value;
  if((password1.trim()).length == 0)
  {
    document.getElementById("demo8").innerHTML="Please enter a password";
    return false;
  }
  else
  {
    if ((password2.trim()).length ==0)
    {
      document.getElementById("demo8").innerHTML="Please confirm your password";
      return false;
    }
    else if(password1 != password2)
    {
      document.getElementById("demo8").innerHTML="Not Match";
      return false;
    }
    else{
      document.getElementById("demo8").innerHTML="";
      return true;
    }
  }
}
function checkbox_validation()
{
  if(!document.getElementById('agree').checked)
  {
    document.getElementById("demo9").innerHTML="Agree Before Submit";
    return false;
  }
  else{
    document.getElementById("demo9").innerHTML="";
    return true;
  }
}
function validation()
{
  if (name_validation()&&email_validation()&&age_validation()&&gender_validation()&&number_validation()&&dob_validation()&&image_validation()&&password_validation()&&checkbox_validation()==true)
  {
    return true;
  }
  else{
    return false;
  }
}

/*function compare(variable_check,demo)
{
  if ((variable_check.trim()).length == 0)
  {
    return false;
    document.getElementById("demo").innerHTML = "Field cannot be empty";
  }
  else
  {
    document.getElementById("demo").innerHTML="";
    return true;
  }
}*/


