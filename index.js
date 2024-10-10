const typed= new Typed(".multi",{
    strings:["Frontend Web Developer","UI/UX designer"],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,

})

document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});
