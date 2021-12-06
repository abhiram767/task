
function form3()
{
    var z = document.forms["myForm"]["age"].value;
      if (z=="")
   {
    document.getElementById("demo3").innerHTML="Age Cannot be Empty!";
    return false;
  }
  else if(z>=0){
    document.getElementById("demo3").innerHTML="";
    return true;
  }
  document.getElementById("demo3").innerHTML="Please enter a valid number";
    return false;
}
function form8(){
  var p1 = document.forms["myForm"]["create"].value;
  var p2 = document.forms["myForm"]["confirm"].value;
  if(p1=="")
  {
    document.getElementById("demo8").innerHTML="Please enter a password";
    return false;
  }
  else{
    if (p2==""){
      document.getElementById("demo8").innerHTML="Please confirm your password";
      return false;
    }
    else if(p1 != p2)
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
function form5(){
  var no = document.forms["myForm"]["mobile"].value;
  if (no == "") {
      document.getElementById("demo5").innerHTML="Mobile Number cannot be Empty!";
      errorcount++;
    }
  if (/^\d{10}$/.test(no))
    {
      document.getElementById("demo5").innerHTML="";
    }
    document.getElementById("demo5").innerHTML="Invalid Number";
    errorcount++;
}
function form6(){
  var d = document.forms["myForm"]["dob"].value;
  if(d==""){
    document.getElementById("demo6").innerHTML="DOB cannot be empty";
    errorcount++;
  }
    document.getElementById("demo6").innerHTML="";
}

function form9(){
  if(!document.getElementById('agree').checked){
      document.getElementById("demo9").innerHTML="Agree Before Submit";
            errorcount++;
  }
  else{
    document.getElementById("demo9").innerHTML="";
  }
}
function form4(){
    if(!document.getElementById('male').checked){
      if(document.getElementById('female').checked){
        document.getElementById("demo4").innerHTML=""
        return true;
      }
      document.getElementById("demo4").innerHTML="Please choose an option";
          return false;
}
    document.getElementById("demo4").innerHTML="";
    return true;
}

function form7(){
    let image = document.forms["myForm"]["image"].value;
    let validExt = ["jpeg", "jpg", "png","webp"];
    if(image == "") {
        document.getElementById("demo7").innerHTML="enter an image first!";
        return false;
    }
    else {
        let posImgExt = image.lastIndexOf(".") + 1;
        let imgExt = image.substring(posImgExt);
        let result = validExt.includes(imgExt);
        if(result == false) {
            document.getElementById("demo7").innerHTML="please enter in proper format!";
            return false;
        }
        else{
            document.getElementById("demo7").innerHTML="";
            return true;
        }
    }
}
