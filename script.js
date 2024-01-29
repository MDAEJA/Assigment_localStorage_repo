// getting user data
let first_name = prompt("Enter First Name");
let last_name = prompt("Enter Last Name") ;
let country = prompt("Enter Country");
let phone_Number = prompt("Enter phone-Number");
let state = prompt("Enter state");
let city = prompt("Enter city");
let village = prompt("Enter village");

//store them in local storage
window.localStorage.setItem('first-name',first_name);
window.localStorage.setItem('last-name',last_name);
window.localStorage.setItem('country-name',country);
window.localStorage.setItem('phone-num',phone_Number);
window.localStorage.setItem('city-name',city);
window.localStorage.setItem('state-name',state);
window.localStorage.setItem('village-name',village);

console.log(localStorage);
let student_data = document.querySelector(".data");
let create_div = document.createElement("div");
create_div.innerHTML = `<div class="user-data"> <h1 style="text-align:center">User Information Card</h1>
<div class='field'>
<span class="label">First Name:</span>
<span class="label">${first_name}</span>
</div>

<div class='field'>
<span class="label">Last Name:</span>
<span class="label">${last_name}</span>
</div>

<div class='field'>
<span class="label">Phone Number:</span>
<span class="label">${phone_Number}</span>
</div>

<div class='field'>
<span class="label">Country:</span>
<span class="label">${country}</span>
</div>

<div class='field'>
<span class="label">State:</span>
<span class="label">${state}</span>
</div>

<div class='field'>
<span class="label">City:</span>
<span class="label">${city}</span>
</div>

<div class='field'>
<span class="label">Village:</span>
<span class="label">${village}</span>
</div>
</div>`
student_data.append(create_div);




