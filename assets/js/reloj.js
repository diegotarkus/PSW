function fechora(){
    let fecha = new Date();

    let horas = fecha.getHours();
    let ampm;
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let diaSemana = fecha.getDay();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();

    let xHoras = document.getElementById("horas");
    let xMinutos = document.getElementById("minutos");
    let xSegundos = document.getElementById("segundos");
    let xDiaSemana = document.getElementById("diaSemana");
    let xDia = document.getElementById("dia");
    let xMes = document.getElementById("mes");
    let xAnio = document.getElementById("anio");

    let semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    xDiaSemana.textContent = semana[diaSemana];

    xDia.textContent = dia;

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    xMes.textContent = meses[mes];

    xAnio.textContent = anio;

    if (horas >= 12){
        horas = horas - 12;
        ampm = "PM";
    }else{
        ampm = "AM"
    };

    if (horas == 0){
        horas = 12
    };

    // Reloj

    xHoras.textContent = horas;

    if (minutos < 10){
        minutos = "0" + minutos
    };
    xMinutos.textContent = minutos;
    xSegundos.textContent = segundos;
}

fechora();

let intervalo = setInterval(fechora, 1000);