document.getElementById('odpalaczPobieraniaLiczby').addEventListener('click', pobierzLiczbe);

function pobierzLiczbe() {
    let podanaLiczba = document.getElementById('podawanaLiczba').value;
    document.getElementById('wynikDzialaniaNaLiczbie').innerHTML = podanaLiczba;
}
