
var effect=new Typed(".auto-type",{
    strings:["Developer","Coder"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})



function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}


function closesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}


function sendmsg(){
    alert("message sent successfully");
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('subject').value='';
    document.getElementById('message').value='';
}