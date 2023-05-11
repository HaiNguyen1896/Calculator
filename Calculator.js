function add(){
    let so1=document.getElementById("sot1").value;
    so1=parseInt(so1)
    let so2=document.getElementById("sot2").value;
    so2=parseInt(so2)
    let kq;
    kq= "Result Addition: " + (so1+so2);
    document.getElementById("output").innerHTML=kq;
}
function sub(){
    let so1=document.getElementById("sot1").value;
    so1=parseInt(so1)
    let so2=document.getElementById("sot2").value;
    so2=parseInt(so2)
    let kq;
    kq= "Result Subtraction: " + (so1-so2);
    document.getElementById("output").innerHTML=kq;
}
function mul(){
    let so1=document.getElementById("sot1").value;
    so1=parseInt(so1)
    let so2=document.getElementById("sot2").value;
    so2=parseInt(so2)
    let kq;
    kq= "Result Subtraction: " + (so1*so2);
    document.getElementById("output").innerHTML=kq;
}
function div(){
    let so1=document.getElementById("sot1").value;
    so1=parseInt(so1)
    let so2=document.getElementById("sot2").value;
    so2=parseInt(so2)
    let kq;
    if (so2==0){
        alert("So ban nhap khong hop le")
    }
    else {
        kq = "Result Subtraction: " + (so1 / so2);
        document.getElementById("output").innerHTML = kq;
    }
}