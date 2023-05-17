$(document).ready(function(){
    $('#modo').click(function(){
        var element = document.body;
        element.classList.toggle("dark"); 
    });
});

if(localStorage.getItem('dark')) {
    element.classList.toggle('dark');
}