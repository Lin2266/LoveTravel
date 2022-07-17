//checkInDate
var d = new Date();
document.getElementById("checkInDate").value = 
d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();

document.getElementById("checkOutDate").value = 
d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate()+1);
