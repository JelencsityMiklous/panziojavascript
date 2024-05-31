function Szamolas(){

    let osszkoltseg =0

    let erkezes = new Date (document.getElementById("erk").value)
    let tavozas = new Date (document.getElementById("tav").value)

    let napokszama = (tavozas-erkezes)/(1000*3600*24)
    
    vendegekszama = Number(document.getElementById("vendegekszama").value)

    let eletkor1 = document.getElementById("eletkor1")
    let eletkor2 = document.getElementById("eletkor2")
    let eletkor3 = document.getElementById("eletkor3")
    let eletkor4 = document.getElementById("eletkor4")

    
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
    
    osszkoltseg=osszkoltseg*napokszama*vendegekszama

    if(erkezes<tavozas){

        if(vendegekszama>0 && vendegekszama<5){

            if(szobavalasztas.value==1 && vendegekszama==1 || szobavalasztas.value==2 && vendegekszama==2 || szobavalasztas.value==3 && vendegekszama==3 || szobavalasztas.value==4 && vendegekszama==4){

                if((szobavalasztas.value==3 && eletkor1.value<17 || eletkor2.value<17 || eletkor3.value<17 ) || (szobavalasztas.value==4 && eletkor1.value<17 || eletkor2.value<17 || eletkor3.value<17 || eletkor4.value17)){
                    alert(`Kedves Vendégünk!\n\nTájékoztatjuk a sikeres foglalásáról\n\nÉrkezés: ${erkezes.toLocaleDateString()}\nTavozás: ${tavozas.toLocaleDateString()}\nSzoba típusa: ${szobatipus}\nVendégek száma: ${vendegekszama}\nEllátás: ${ellatastipus}\nIgényelt szolgáltatások: ${szolgaltatasok}\nA teljes összeg: ${osszkoltseg}\n\nKöszönjük megrendelését!`);
                }
                else{
                    alert("Az életkor határ a pótágynál 16 év")
                }
                
            }
            else{
                alert("Hibás a szobaválasztás/vendégek száma")
            }
        }
        else{
            alert("Vendégek száma nem megfelelő")
        }
    }
    else{
        alert("Helytelen az érkezés/távozás")
    }
    
   


    
}