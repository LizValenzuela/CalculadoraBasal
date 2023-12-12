const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const VD = document.getElementById("volumenDiario");

   
CALCULAR.addEventListener('click', () => {
    DATO = document.getElementById("peso").value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
       if(DATO<=30){
            let volumenDiario= metodoHoliday(DATO);
            let flujo = (metodoHoliday(DATO))/24;
            console.log(""+flujo);
            let mantenimiento = flujo*1.5;
            VD.innerHTML= volumenDiario +"cc"
            FLU.innerHTML = flujo.toFixed(2) + ' cc/hr';
            MAN.innerHTML = 'm+m/2: ' + mantenimiento.toFixed(2) + ' cc/hr';
            document.getElementById("volumenDiario").style.display = 'block';
            document.getElementById("flu").style.display = 'block';
            document.getElementById('man').style.display = 'block';
        }
        else{
            let flujo1=metodoSC(DATO)*1500;
            let flujo2= metodoSC(DATO)*2000;
            FLU.innerHTML = "SC*1500: "+flujo1.toFixed(2) + 'cc';
            MAN.innerHTML = "SC*2000: "+flujo2.toFixed(2) + 'cc';
            document.getElementById("volumenDiario").style.display = 'none';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        } 
       
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

//Funciones 
function metodoHoliday(peso) {
    let volumen;
    if (peso <= 10) {
        volumen = peso * 100;
    }
    else if (peso <=20) {
        if(peso<20){
            volumen = 1000 + (peso % 10) * 50;
        }
        else if(peso==20){
            volumen=1500;
        }
    }
    else {
        if(peso<30){
            volumen = 1500 + (peso % 10) * 20
        }
        else if(peso==30){
            volumen=1700;
        }
    }
    return volumen;
}

function metodoSC(peso) {
    let volumen;
    volumen = (((peso * 4) + 7) / (parseInt(peso) + 90));
    return volumen;
}