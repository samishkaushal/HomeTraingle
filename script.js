const btn = document.getElementById("detectLocation");
const city = document.getElementById("city");

btn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Geolocation is not supported.");
    }
});

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(lat, lon);

    city.innerText = `Latitude: ${lat}, Longitude: ${lon}`;
}

function error() {
    alert("Location access denied!");
}
const popup = document.getElementById("popup");

document.getElementById("openBtn").onclick = () => {
    popup.style.display = "flex";
}

document.getElementById("closeBtn").onclick = () => {
    popup.style.display = "none";
}

window.onclick = (e)=>{
    if(e.target==popup){
        popup.style.display="none";
    }
}
