let userName = prompt("Adiniz nedir?")
let userName_info = document.querySelector("#userName")
userName_info.innerHTML = userName

let dijitalSaat

function clock(){
    var tarih = new Date()
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()
    let gün = tarih.getDay()

    switch (gün){
        case 1:
            gün = "Pazartesi";
            break;

        case 2:
            gün = "Salı";
            break;

        case 3:
            gün = "Çarşamba";
            break;

        case 4:
            gün = "Perşembe";
            break;

        case 5:
            gün = "Cuma";
            break;

        case 6:
            gün = "Cumartesi";
            break;

        case 7:
            gün = "Pazar";
            break;
    };


    dijitalSaat = saat + ':' + ((dakika<10) ? '0' : '') + dakika + ':' + ((saniye<10) ? '0' : '') + saniye + "  " + gün ;

    document.querySelector("#time").innerHTML = dijitalSaat

    setTimeout("clock()", 1000)
}




