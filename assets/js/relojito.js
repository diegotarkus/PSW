function fecha(){
    var fecha = new Date();
    var diaSemana = fecha.getDay();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    var fechahoy;

    var semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    diaSemana.textContent = semana[diaSemana];

    fechahoy = diaSemana + " " + dia + " de " + mes + " del " + anio;
    $("#fecha").html(fechahoy);
}


function relojdigital(){
    var tiempo = new Date();
    var minutos = tiempo.getMinutes();
    var segundos = tiempo.getSeconds();
    var hora = tiempo.getHours();
    
    var exthora;
    var horacompleta;

    if(minutos<10){
        minutos = "0" + minutos;
    }else{
        minutos = "" + minutos;
    }

    if(segundos<10){
        segundos = "0" + segundos;
    }
    else{
        segundos = "" + segundos;
    }

    if(hora >12){
        exthora = "AM";
    }
    else{
        exthora = "PM";
    }

    if(hora > 12){
        hora -=12;
    }
    else{
        hora = hora;
    }

    horacompleta = hora + ":" + minutos + ":" + segundos + " " + exthora;
    $("#reloj").html(horacompleta);
}

$(document).ready(function(){
    setInterval(relojdigital, 1000 );
})