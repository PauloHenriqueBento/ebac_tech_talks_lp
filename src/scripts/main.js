AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => { 
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const dias = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

    const text = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    document.getElementById('contador').innerText = text;

    if(distanciaAteOEvento < 0) { 
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerText = 'já acabou';
    }
}, 1000);

document.addEventListener('DOMContentLoaded', function () { 
    contaAsHoras();
})