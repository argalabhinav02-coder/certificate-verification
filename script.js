const certificates = {
"2026/025":"certificates/001.pdf",
"2026/024":"certificates/002.pdf",
"2026/023":"certificates/003.pdf"
};

document.getElementById("verifyBtn").onclick=function(){

let serial=document.getElementById("serialInput").value.trim();

if(serial===""){
document.getElementById("errorMsg").innerText="Please enter serial number";
return;
}

if(certificates[serial]){

window.location.href="viewer.html?cert="+encodeURIComponent(certificates[serial]);

}

else{

document.getElementById("errorMsg").innerText="Certificate not found";

}
document.getElementById("verifyBtn").onclick=function(){

let serial=document.getElementById("serialInput").value.trim();

if(serial===""){
document.getElementById("errorMsg").innerText="Enter serial number";
return;
}

window.location.href="verify.html?serial="+serial;

}
}
