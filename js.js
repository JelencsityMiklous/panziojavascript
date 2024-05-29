function Szamolas(){

    let osszkoltseg =0

    let erkezes = new Date (document.getElementById("erk").value)
    let tavozas = new Date (document.getElementById("tav").value)

    let napokszama = tavozas-erkezes
    
    vendegekszama = document.getElementById("vendegekszama")


    
    let szobavalasztas = document.querySelector('input[name="radio"]:checked')

    let szobatipus=""
    let ellatastipus=""

    let belteri = document.getElementById("belteri")
    let kulteri = document.getElementById("kulteri")
    let szauna = document.getElementById("szauna")
    let teljesbelepo = document.getElementById("teljesbelepo")
    
    if(szobavalasztas.value==1){
        osszkoltseg+=9000
        szobatipus="Egyágyas"
    }
    else if(szobavalasztas.value==2){
        osszkoltseg+=15000
        szobatipus="Kétágyas"
    }
    else if(szobavalasztas.value==3){
        osszkoltseg+=18000
        szobatipus="Egyágyas 1 pótággyal"
    }
    else if(szobavalasztas.value==4){
        osszkoltseg+=21000
        szobatipus="Egyágyas 2 pótággyal"
        
    }
    else{
        alert("Nincs kiválasztva szoba")
    }

    let ellatasvalasztas = document.querySelector('input[name="radio2"]:checked')
    
    if(ellatasvalasztas.value==1){
        osszkoltseg+=900
        ellatastipus="Reggeli"
    }
    else if(ellatasvalasztas.value==2){
        osszkoltseg+=2900
        ellatastipus="Félpanzió"
    }
    else if(ellatasvalasztas.value==3){
        osszkoltseg+=4900
        ellatastipus="Teljes panzió"
    }
    else{
        alert("Nincs kiválasztva ellátás")
    }

    let szolgaltatasok="" 

    if(teljesbelepo.checked==true){
        osszkoltseg+=2000
        szolgaltatasok="Teljes belépő"
    }
    if(belteri.checked==true && teljesbelepo.checked==false){
        osszkoltseg+=800
        szolgaltatasok="Beltéri medencék "
    }
    if(kulteri.checked==true && teljesbelepo.checked==false){
        osszkoltseg+=800
        szolgaltatasok+="Kültéri medencék "
    }
    if(szauna.checked==true && teljesbelepo.checked==false){
        osszkoltseg+=800
        szolgaltatasok+="Szauna belépő "
    }
    if(szauna.checked==false && kulteri.checked==false && belteri.checked==false && teljesbelepo.checked==false){
        szolgaltatasok="Nincsen egyéb szolgáltatás"
    }
    
    



    if(erkezes<tavozas){

        if(vendegekszama.value>0){
        alert(`Kedves Vendégünk!\n\nTájékoztatjuk a sikeres foglalásáról\n\nÉrkezés: ${erkezes.toLocaleDateString()}\nTavozás: ${tavozas.toLocaleDateString()}\nSzoba típusa: ${szobatipus}\nVendégek száma: ${vendegekszama.value}\nEllátás: ${ellatastipus}\nIgényelt szolgáltatások: ${szolgaltatasok}`);
        }
        else{
            alert("Vendégek száma nem megfelelő")
        }
    }
    else{
        alert("Helytelen az érkezés/távozás")
    }
    alert(`${osszkoltseg}`)


    
}