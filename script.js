let total = 0;
function izracunaj() {
    
    let pon = document.getElementsByTagName("input")[0].value;
    let uto = document.getElementsByTagName("input")[1].value;
    let sre = document.getElementsByTagName("input")[2].value;
    let cet = document.getElementsByTagName("input")[3].value;
    let pet = document.getElementsByTagName("input")[4].value;
    let sub = document.getElementsByTagName("input")[5].value;
    let ned = document.getElementsByTagName("input")[6].value;
    

    pon = parseInt(pon);
    uto = parseInt(uto);
    sre = parseInt(sre);
    cet = parseInt(cet);
    pet = parseInt(pet);
    sub = parseInt(sub);
    ned = parseInt(ned);
    total = pon + uto + sre + cet + pet + sub + ned;
    total = parseInt(total);
    let prosek = total / 7;
    prosek = parseFloat(prosek).toFixed(2);
    let suma = document.querySelector("p");
    suma.innerHTML = `Ukupno sam spavao ${total} sati, u proseku ${prosek}`;
    
        
    
    
    console.log(total);
}
