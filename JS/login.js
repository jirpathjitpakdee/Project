var page = 1;
var totalpage = 0;

function loadtb() {
  var uid = sessionStorage.uid;
  var tb = document.getElementById('tb');
  const url = "http://localhost:3000/record"
  fetch(url,
    { method: 'GET' }
  ).then((res) => { return res.json() }
  ).then((res) => {
    html = ''
    for (var i = (page-1)*5; i < page*5; i++) {
      if(i < res.length){
        if (uid == res[i].owner) {
          html += '<tr>';
          html += '<td><div class="d-flex align-items-center"><div class=""><p class="fw-bold mb-1">' + res[i].location + '</p><p class="text-muted mb-0"></p></div></div></td>';
          html += '<td><p class="fw-normal mb-1">' + res[i].Checkin + '</p><p class="text-muted mb-0">' + res[i].Timein + " " + "น." + '</p></td>';
          html += '<td><p class="fw-normal mb-1">' + res[i].Checkout + '</p></td>'
          html += '<td><p class="fw-normal mb-1 ">' + (parseInt(res[i].camper.camper_normal) + parseInt(res[i].camper.camper_kids) + parseInt(res[i].camper.camper_elder)) + ' ' + 'คน' + '</p></td>'
          html += '<td><p class="fw-normal mb-1">' + (parseInt(res[i].camper.camper_normal) * 250) + '&nbsp;บ.' + '</p></td>'
          html += '<td><button class="btn btn-success btn-sm rounded" type="button" data-toggle="tooltip" data-placement="top" title="Edit" style="width: 40px;" onclick="editpage('+res[i].id+')"><i class="fa fa-edit"></i></button>' + '&nbsp;&nbsp;' + '<button class="btn btn-danger btn-sm rounded" type="button" data-toggle="tooltip" data-placement="top" title="Delete" style="width: 40px;" onclick = "del(' + res[i].id + ')"><i class="fa fa-trash"></i></button></td>';
          html += '<tr>';
        }
      }
       
    }
    tb.innerHTML = html;
    totalpage = Math.ceil(res.length/5);
  })
}

function loadpage(){
  var page2 = document.getElementById('page2');
  page2.textContent = page
}

function next(){
  if( page != totalpage){
    page++;
    var page2 = document.getElementById('page2');
    page2.textContent = page;
    loadtb();
  }
}

function back(){
  if( page != 1){
    page--;
    var page2 = document.getElementById('page2');
    page2.textContent = page;
    loadtb();
  }
}
function editpage(id) {
  window.location.href = "camp2.html"
  sessionStorage.setItem('id', id)
}

function loaddata() {
  var id = sessionStorage.id;
  var location = document.getElementById('location');
  var name = document.getElementById('name');
  var mobile = document.getElementById('mobile');
  var CheckIn = document.getElementById('CheckIn');
  var CheckOut = document.getElementById('CheckOut');
  var TimeIn = document.getElementById('TimeIn');
  var camper_normal = document.getElementById('camper_normal');
  var camper_kids = document.getElementById('camper_kids');
  var camper_elder = document.getElementById('camper_elder');

  const url = "http://localhost:3000/record/" + id
  fetch(url,
    { method: 'GET' }
  ).then((res) => { return res.json() }
  ).then((res) => {
     location.value = res.location;
     name.value = res.name;
     mobile.value = res.mobile;
     CheckIn.value = res.Checkin;
     CheckOut.value = res.Checkout;
     TimeIn.value = res.Timein;
     camper_normal.value = res.camper.camper_normal;
     camper_kids.value = res.camper.camper_kids;
     camper_elder.value = res.camper.camper_elder;
  })
}

function update(){
  var id = sessionStorage.id;
  const data = {
    'location': document.getElementById('location').value,
    'name': document.getElementById('name').value,
    'mobile': document.getElementById('mobile').value,
    'Checkin': document.getElementById('CheckIn').value,
    'Checkout': document.getElementById('CheckOut').value,
    'Timein': document.getElementById('TimeIn').value,
    'camper': {
      'camper_normal': document.getElementById('camper_normal').value,
      'camper_kids': document.getElementById('camper_kids').value,
      'camper_elder': document.getElementById('camper_elder').value
    },
    "owner": sessionStorage.uid
  };
  sessionStorage.setItem('location', document.getElementById('location').value);
  sessionStorage.setItem('name1', document.getElementById('name').value);
  sessionStorage.setItem('mobile', document.getElementById('mobile').value);
  sessionStorage.setItem('camper_normal', document.getElementById('camper_normal').value);
  sessionStorage.setItem('camper_kids', document.getElementById('camper_kids').value);
  sessionStorage.setItem('camper_elder', document.getElementById('camper_elder').value);
  sessionStorage.setItem('checkin', document.getElementById('CheckIn').value);
  sessionStorage.setItem('checkout', document.getElementById('CheckOut').value);
  sessionStorage.setItem('time', document.getElementById('TimeIn').value);
  const url = "http://localhost:3000/record/"+id
  fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  ).then((res) => { return res.json() }
  ).then((res) => {
    console.log(JSON.stringify(data));
    window.location.href = "success2.html"
  })
}

function del(uid) {
  swal({
    title: "ยืนยันที่จะยกเลิกการจองใช่หรือไม่",
    text: "เมื่อกด OK จะไม่สามารถกู้คืนได้",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        const url = "http://localhost:3000/record/" + uid
        fetch(url, { method: 'DELETE' }
        ).then((res) => { return res.json() }
        ).then((res) => {
          console.log('success');
        })
      }
    });
}

function login() {
  console.log('good');
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const url = "http://localhost:3000/account"
  fetch(url,
    { method: 'GET' }
  ).then((res) => { return res.json() }
  ).then((res) => {
    for (var i = 0; i < res.length; i++) {
      if (username == res[i].username && password == res[i].password) {
        console.log('Login pass');
        window.location.href = "index_login.html"
        sessionStorage.setItem("uid", res[i].id);
        console.log(sessionStorage.username);
      } else {
        console.log('Login fail');
      }
    }
  })
}



function signup() {
  console.log('good');
  var password = document.getElementById("password");
  var password2 = document.getElementById('password2');
  var warning = document.getElementById('warning');
  const data = {
    "username": document.getElementById('uname').value,
    "email": document.getElementById('email').value,
    "password": document.getElementById('password').value,
    "mobile": document.getElementById('phone').value
  };
  if (password2.value != password.value) {
    warning.textContent = "รหัสผ่านไม่ถูกต้อง"
  } else if (password.value && password2 != null) {
    const url = "http://localhost:3000/account"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    ).then((res) => { return res.json() }
    ).then((res) => {
      console.log(JSON.stringify(data));
      window.location.href = "success.html"

    })
  }


}



function loadname() {
  var name = document.getElementById('User');
  var uid = sessionStorage.uid;
  const url = "http://localhost:3000/account/" + uid
  fetch(url,
    { method: 'GET' }
  ).then((res) => { return res.json() }
  ).then((res) => {
    name.textContent = res.username;
  })

}

function loadname2() {
  var uid = sessionStorage.uid;
  var name2 = document.getElementById('username2');
  var name3 = document.getElementById('username3');
  var email = document.getElementById('email2');
  var mobile = document.getElementById('mobile2');
  var password = document.getElementById('password');
  const url = "http://localhost:3000/account/" + uid
  fetch(url,
    { method: 'GET' }
  ).then((res) => { return res.json() }
  ).then((res) => {
    name2.textContent = res.username;
    name3.value = res.username;
    email.value = res.email;
    mobile.value = res.mobile;
    password.value = res.password;
  })
}

function edit_profile() {
  var email = document.getElementById('email2');
  email.removeAttribute('disabled');
  var mobile = document.getElementById('mobile2');
  mobile.removeAttribute('disabled');
  var cancel = document.getElementById('cancel');
  cancel.removeAttribute('hidden');
  var save = document.getElementById('save');
  save.removeAttribute('hidden');


}

function cancel() {
  var email = document.getElementById('email2');
  email.setAttribute('disabled', true);
  var mobile = document.getElementById('mobile2');
  mobile.setAttribute('disabled', true);
  var cancel = document.getElementById('cancel');
  cancel.setAttribute('hidden', true);
  var save = document.getElementById('save');
  save.setAttribute('hidden', true);
}

function save() {
  var uid = sessionStorage.uid;
  var username = document.getElementById('username3');
  var email = document.getElementById('email2');
  var mobile = document.getElementById('mobile2');
  var password = document.getElementById('password');
  var data = {
    "id": uid,
    "username": username.value,
    "email": email.value,
    "mobile": mobile.value,
    "password": password.value
  }
  const url = "http://localhost:3000/account/" + uid;
  fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  ).then((res) => { return res.json() }
  ).then((res) => {
    console.log(JSON.stringify(data));

  })
}

function Create() {
  const data = {
    'location': document.getElementById('location').value,
    'name': document.getElementById('name').value,
    'mobile': document.getElementById('mobile').value,
    'Checkin': document.getElementById('CheckIn').value,
    'Checkout': document.getElementById('CheckOut').value,
    'Timein': document.getElementById('TimeIn').value,
    'camper': {
      'camper_normal': document.getElementById('camper_normal').value,
      'camper_kids': document.getElementById('camper_kids').value,
      'camper_elder': document.getElementById('camper_elder').value
    },
    "owner": sessionStorage.uid
  };
  sessionStorage.setItem('location', document.getElementById('location').value);
  sessionStorage.setItem('name1', document.getElementById('name').value);
  sessionStorage.setItem('mobile', document.getElementById('mobile').value);
  sessionStorage.setItem('camper_normal', document.getElementById('camper_normal').value);
  sessionStorage.setItem('camper_kids', document.getElementById('camper_kids').value);
  sessionStorage.setItem('camper_elder', document.getElementById('camper_elder').value);
  sessionStorage.setItem('checkin', document.getElementById('CheckIn').value);
  sessionStorage.setItem('checkout', document.getElementById('CheckOut').value);
  sessionStorage.setItem('time', document.getElementById('TimeIn').value);
  const url = "http://localhost:3000/record"
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  ).then((res) => { return res.json() }
  ).then((res) => {
    console.log(JSON.stringify(data));
    window.location.href = "success2.html"
  })
}

function loadbook() {
  var location = document.getElementById('location');
  location.textContent = sessionStorage.location;
  var name = document.getElementById('name');
  name.textContent = sessionStorage.name1;
  var mobile = document.getElementById('mobile');
  mobile.textContent = sessionStorage.mobile;
  var people = document.getElementById('people');
  people.textContent = parseInt(sessionStorage.camper_normal) + parseInt(sessionStorage.camper_kids) + parseInt(sessionStorage.camper_elder) + " " + "คน";
  var cost = document.getElementById('cost');
  cost.textContent = parseInt(sessionStorage.camper_normal) * 250 + " " + "บาท";
  var cost = document.getElementById('check-in');
  cost.textContent = sessionStorage.checkin + " " + 'ถึง' + " " + sessionStorage.checkout;
  var cost = document.getElementById('time');
  cost.textContent = sessionStorage.time + " " + "น.";
}

