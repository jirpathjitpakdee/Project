
function Add1(){
    var camper_normal = document.getElementById('camper_normal');
    var cur = parseInt(document.getElementById('camper_normal').value);
    camper_normal.value = parseInt(cur+1);
    console.log(camper_normal.value);
}

function Add2(){
    var camper_kids = document.getElementById('camper_kids');
    var cur = parseInt(document.getElementById('camper_kids').value);
    camper_kids.value = parseInt(cur+1);
    console.log(camper_kids.value);
}

function Add3(){
    var camper_elder = document.getElementById('camper_elder');
    var cur = parseInt(document.getElementById('camper_elder').value);
    camper_elder.value = parseInt(cur+1);
    console.log(camper_elder.value);
}
function Check(){
    var camper_normal = document.getElementById('camper_normal');
    var camper_kids = document.getElementById('camper_kids');
    var camper_elder = document.getElementById('camper_elder');
    var camper_normal_value = camper_normal.value;
    var camper_kids_value = camper_kids.value;
    var camper_elder_value = camper_elder.value;

    if(camper_normal_value > 0){
        var del1 = document.getElementById('decrement_camper_normal');
        del1.classList.remove('disabled');
    }
    else{
        var del1 = document.getElementById('decrement_camper_normal');
        del1.classList.add('disabled');
    }

    if(camper_kids_value >0){
        var del2 = document.getElementById('decrement_camper_kids');
        del2.classList.remove('disabled');
    }
    else{
        var del2 = document.getElementById('decrement_camper_kids');
        del2.classList.add('disabled');
    }

    if(camper_elder_value >0){
        var del3 = document.getElementById('decrement_camper_elder');
        del3.classList.remove('disabled');
    }
    else{
        var del3 = document.getElementById('decrement_camper_elder');
        del3.classList.add('disabled');
    }
}


function Del1(){
    var camper_normal = document.getElementById('camper_normal');
    var cur = parseInt(document.getElementById('camper_normal').value);
    camper_normal.value = parseInt(cur-1);
    console.log(camper_normal.value);
}

function Del2(){
    var camper_kids = document.getElementById('camper_kids');
    var cur = parseInt(document.getElementById('camper_kids').value);
    camper_kids.value = parseInt(cur-1);
    console.log(camper_kids.value);
}

function Del3(){
    var camper_elder = document.getElementById('camper_elder');
    var cur = parseInt(document.getElementById('camper_elder').value);
    camper_elder.value = parseInt(cur-1);
    console.log(camper_elder.value);
}

function CheckReq(){
    var CheckIn = document.getElementById('CheckIn').value;
    var Time = document.getElementById('TimeIn').value;
    var CheckOut = document.getElementById('CheckOut').value;
    var camper_normal = document.getElementById('camper_normal').value;
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var summit = document.getElementById('confirmation_reservation');
    if(CheckIn&&CheckOut!= null &&(camper_normal != 0)&&name&&mobile&&Time ){
            summit.classList.remove('disabled')
    }else{
        summit.classList.add('disabled')
    };
}


function showpass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function loadlocation(obj){
    var location  = obj.name;
    sessionStorage.setItem('name',location)
    console.log(sessionStorage.name);
}

function loadlocation2(){
    var location  = document.getElementById('location');
    location.value = sessionStorage.name

}
  

