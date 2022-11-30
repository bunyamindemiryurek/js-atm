


// localStorage.setItem("sifree",1234);


let sifre = localStorage.getItem("sifree");
let bakiye = localStorage.getItem("bakiye");
let guncelBorc = localStorage.getItem("borc");
$(".girisyap").click(function () {
    let girilenSifre = $(".girilenSifre").val();
    if (girilenSifre == sifre) {
        $(".login").css("display", "none");
        $(".islem").css("display", "block");

        $(".güncelBakiye").html("Kalan Bakiyeniz :" + bakiye);

        $(".islembtn").click(function () {
            let secilenİslem = $(".secilenİslem").val();
            let girilenTutar = Number($(".girilenTutar").val());
            if (secilenİslem == "Para Çek") {
                bakiye = bakiye - girilenTutar;
                localStorage.setItem("bakiye", bakiye);
                $(".güncelBakiye").html("Kalan Bakiye :" + bakiye);
            }
            else if (secilenİslem == "Para Yatır") {
                bakiye = Number(bakiye);
                bakiye = bakiye + girilenTutar;
                localStorage.setItem("bakiye", bakiye);
                $(".güncelBakiye").html("Kalan Bakiyeniz :" + bakiye);
            }
            else if (secilenİslem == "Kredi Çek") {
                $(".islem").hide();
                $(".krediVade").show();

                $(".krediCek").click(function () {
                    let krediAy = $(".krediAy").val();

                    if (krediAy == "3 Ay") {
                        bakiye = Number(bakiye);
                        bakiye = bakiye + girilenTutar;
                        localStorage.getItem("bakiye",girilenTutar);
                        let toplamBorc = girilenTutar * 2;
                        let ayBorc = Math.round(toplamBorc / 3);
                        guncelBorc = Number(localStorage.getItem("borc"));
                        guncelBorc = guncelBorc + toplamBorc;
                        localStorage.setItem("borc", guncelBorc);
                        $(".krediSonuc").html(`Toplam Borcunuz : ${toplamBorc} TL Aylık Ödemeniz: ${ayBorc}`);
                    }
                    else if(krediAy == "6 Ay"){
                        bakiye = Number(bakiye);
                        bakiye = bakiye + girilenTutar;
                        localStorage.getItem("bakiye",girilenTutar);
                        let toplamBorc = girilenTutar * 2.5;
                        let ayBorc = Math.round(toplamBorc / 6);
                        guncelBorc = Number(localStorage.getItem("borc"));
                        guncelBorc = guncelBorc + toplamBorc;
                        localStorage.setItem("borc", guncelBorc);
                        $(".krediSonuc").html(`Toplam Borcunuz : ${toplamBorc} TL Aylık Ödemeniz: ${ayBorc}`);
                    }
                    else if(krediAy == "12 Ay"){
                        bakiye = Number(bakiye);
                        bakiye = bakiye + girilenTutar;
                        localStorage.getItem("bakiye",girilenTutar);
                        let toplamBorc = girilenTutar * 3;
                        let ayBorc = Math.round(toplamBorc / 12);
                        guncelBorc = Number(localStorage.getItem("borc"));
                        guncelBorc = guncelBorc + toplamBorc;
                        localStorage.setItem("borc", guncelBorc);
                        $(".krediSonuc").html(`Toplam Borcunuz : ${toplamBorc} TL Aylık Ödemeniz: ${ayBorc}`);
                    }
                });
            }
        });

    }
    else {
        $(".alert-bg").css("display", "block");
    }
});








$(".sifreUnuttum").click(function () {
    $(".sifreUnut").css("display", "block");
    $(".login").css("display", "none");

    $(".guvenlikBtn").click(function () {
        let guvenlikInput = $(".güvenlikİnp").val();
        let guvenlikSorusu = localStorage.getItem("güvenliksorusu");
        if (guvenlikInput == guvenlikSorusu) {
            let yeniSifre = prompt("Lütfen Yeni Sifrenizi Giriniz");
            localStorage.setItem("sifre", yeniSifre);
            $(".güvenlikP").html("Tebrikler şifrenizi değişti");
        }
        else {
            $(".güvenlikP").html("güvenlik sorusuna yanşıl cevap verdin");
        }
    });
});

