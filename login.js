
document.getElementById("continueBtn").onclick = function () {

    const phone = document.getElementById("phone").value;

    if (phone.length !== 10) {
        alert("Please enter a valid 10 digit mobile number.");
        return;
    }

    document.getElementById("number").innerText = phone;

    const popup = document.getElementById("popup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
};