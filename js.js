function Szamolas(){

    let osszkoltseg =0

    let erkezes = new Date (document.getElementById("erk").value)
    let tavozas = new Date (document.getElementById("tav").value)

    let napokszama = tavozas-erkezes;
    let egyagyas = document.getElementById("egyagyas").checked;
    let ketagyas = document.getElementById("ketagyas").checked;
    let egypotagy = document.getElementById("egypotagy").checked;
    let ketpotagy = document.getElementById("ketpotagy").checked;
    
    let szobavalasztas = document.querySelector('input[name="radio"]:checked')
    
    if(szobavalasztas.value=1){
        osszkoltseg+=9000
    }
    else if(szobavalasztas.value=2){
        osszkoltseg+=15000
    }
    else if(szobavalasztas.value=3){
        osszkoltseg+=18000
    }
    else if(szobavalasztas.value=4){
        osszkoltseg+=21000
    }
    else{
        alert("Nincs kiválasztva szoba")
    }


    if(erkezes<tavozas){


        alert(`Kedves Vendégünk!\n\nTájékoztatjuk a sikeres foglalásáról\n\nÉrkezés: ${erkezes.toLocaleDateString()}\nTavozás: ${tavozas.toLocaleDateString()}`);
    }
    else{
        alert("Helytelen az érkezés/távozás")
    }



    
}