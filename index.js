const typed= new Typed(".multi",{
    strings:["Software Analyst","Webflow Developer"],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,

})

document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});
