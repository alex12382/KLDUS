function atjauninātSensorus() {
    const temp = Math.random() * 30 + 10;
    const mitrums = Math.random() * 50 + 30;
    
    document.getElementById("temp").textContent = temp.toFixed(1);
    document.getElementById("mitrums").textContent = mitrums.toFixed(1);
    
    if (temp > 30) {
        document.getElementById("brīdinājums").textContent = "UZMANĪBU: Augsta temperatūra!";
    } else {
        document.getElementById("brīdinājums").textContent = "";
    }
}

setInterval(atjauninātSensorus, 2000);
atjauninātSensorus();