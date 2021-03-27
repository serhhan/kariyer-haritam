const data = [
    {
        "id":1,
        "question":"Bir yazı yazarken, bir ödev yaparken, yazım (imla) kurallarına dikkat eder misiniz?",
        "field": "SÖZEL"
    },
    {
        "id":2,
        "question":"Bir hikaye kitabını hızlı ve doğru okuyabilir misiniz?",
        "field": "SÖZEL"
    },
    {
        "id":3,
        "question":"Çarpım tablosunu, bölme işlemini kolay öğrenebildiniz mi?",
        "field": "SAYISAL"
    },
    {
        "id":4,
        "question":"Birbirine çok benzeyen iki resmin arasındaki küçük farkları hemen görebilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },
    {
        "id":5,
        "question":"Kelimeleri doğru bir biçimde yazabiliyor ve söyleyebiliyor musunuz?",
        "field": "SÖZEL"
    },
    {
        "id":6,
        "question":"Bir dairenin merkezini doğru bir biçimde tahmin ederek işaretleyebilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },
    {
        "id":7,
        "question":"İki çizgi arsında çok az bir uzunluk farkı olduğunda, bunu kolaylıkla algılayabilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },
    {
        "id":8,
        "question":"Bir parçayı bir kere okuduktan sonra hemen özetleyebiliyor musunuz?",
        "field": "SÖZEL"
    },
    {
        "id":9,
        "question":"Dört işlemle akıldan, hızlı problem çözebilir misiniz?",
        "field": "SAYISAL"
    },
    {
        "id":10,
        "question":"Bir doğru parçasının kaç santimetre olduğunu doğru tahmin edebilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },
    {
        "id":11,
        "question":" Yeni duyduğunuz kelimelerin anlamlarını öğrenmeye çalışır mısınız?",
        "field": "SÖZEL"
    },
    {
        "id":12,
        "question":"Okuduğunuz bir parçada belirten fikirler arsında ilişki kurabiliyor musunuz?",
        "field": "SÖZEL"
    },
    {
        "id":13,
        "question":"Bir matematik probleminin çözüm yolunu öğrendikten sonra, ona benzer problemleri çözebiliyor musunuz?",
        "field": "SAYISAL"
    },
    {
        "id":14,
        "question":"İlk defa gittiğiniz binada yönünüzü bulabiliyor musunuz?",
        "field": "ŞEKİL- UZAY"
    },{
        "id":15,
        "question":"Bir defa başkaları ile birlikte gittiğiniz bir yeri, ikinci defa yalnız başına gittiğinizde, kolaylıkla bulabilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },{
        "id":16,
        "question":"Gelişigüzel parçaları ayrılmış bir şeklin veya cismin parçalarını eski yerlerine kolaylıkla yerleştirebilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },{
        "id":17,
        "question":"Bir makinanın şemasına bakarak makineyi kurabilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },{
        "id":18,
        "question":"Açılmış hali verilen geometrik bir cismin, kapandığı zaman açılacağı şekli göz önünde canlandırabilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },{
        "id":19,
        "question":"Bir konuda edindiğiniz bilgileri, kendi sözcüklerinizle başkalarına aktarabiliyor musunuz?",
        "field": "SÖZEL"
    },{
        "id":20,
        "question":"Sizin düzeyinizde bir matematik kitabını okuyarak bir problemin çözüm yolunu bulabiliyor musunuz?",
        "field": "SAYISAL"
    },{
        "id":21,
        "question":"Boş zamanlarınızda, zevk için matematik problemleri çözmeye çalışır mısınız?",
        "field": "SAYISAL"
    },{
        "id":22,
        "question":"Bir konuyu söz ve yazı ile anlatırken, fikirleri doğru bir sıra ile verebiliyor musunuz?",
        "field": "SÖZEL"
    },{
        "id":23,
        "question":"Matematik dersinde, özel bir yardım (ders) almadan başarılı olabiliyor musunuz?",
        "field": "SAYISAL"
    },{
        "id":24,
        "question":"Bir yazıdaki fikir ve ifade hatalarını kolaylıkla görebilir misiniz?",
        "field": "SÖZEL"
    },{
        "id":25,
        "question":"Boş bir kesme şeker kutusu, kısa kenarlarından kesilip açılınca hangi yüzeyin nereye geleceğini gözönünde canlandırabilir misiniz?",
        "field":"ŞEKİL- UZAY"
    },{
        "id":26,
        "question":"Öğrendiğiniz matematik kurallarına fen bilgisi derslerindeki problemlere uygulayabiliyor musunuz?",
        "field": "SAYISAL"
    },{
        "id":27,
        "question":"Bir kağıda, cetvel kullanmadan düzgün paralel çizgiler çizebiliyor musunuz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":28,
        "question":"Karmaşık bir geometrik şeklin, sağa ve sola döndürülmesi ile alacağı durumu gözönünde canlandırabilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },{
        "id":29,
        "question":"Bir problemin, size öğretilen çözüm yollarından farklı çözüm yollarını bulabilir misiniz?",
        "field": "SAYISAL"
    },{
        "id":30,
        "question":"Akıcı bir üslupla güzel yazı (örneğin bir mektup) yazabilir misiniz?",
        "field": "SÖZEL"
    },{
        "id":31,
        "question":"Okuduğunuz bir parçada anlatılan fikirleri bulup özetleyebiliyor musunuz?",
        "field":"SÖZEL"
    },{
        "id":32,
        "question":"Sizin düzeyinde, ama daha önce hiç görmediğiniz bir matematik kitabını rahatlıkla okuyabilir misiniz?",
        "field":"SAYISAL"
    },{
        "id":33,
        "question":"Bir evin planına baktığınızda, evin yapılmış halini gözönünde canlandırabilir misiniz?",
        "field": "ŞEKİL- UZAY"
    },{
        "id":34,
        "question":"Bir kağıda çizilen yıldız biçimindeki bir şekli makasla, düzgün bir biçimde kesip çıkarabilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":35,
        "question":"Alet kullanmadan düzgün geometrik şekiller çizebilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":36,
        "question":"Attığınız bir bilyeyi veya bir taşı istediğiniz hedefe gönderebilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":37,
        "question":"Satranç öğrenmek için çaba sarfediyor musunuz?",
        "field": ""
    },{
        "id":38,
        "question":"Fen dersleri ile ilgili konuları kolay öğrenebiliyor musunuz?",
        "field": "FEN BİL."
    },{
        "id":39,
        "question":"Desenli kağıtları, şekilleri birbirine tamamlayacak şekilde, yanyana yapıştırabilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":40,
        "question":"Bir aletin (örneğin, saatin) çok küçük bir parçasını (vidasını) yerine kolayca yerleştirebilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":41,
        "question":"Gelecekte kendinizi, laboratuarda araştırmacı olarak düşlediğiniz oldumu?",
        "field": "FEN BİL."
    },{
        "id":42,
        "question":"Bir kente gittiğinizde, müzeleri, tarihi yerleri gezer misiniz? (gezmek ister misiniz)",
        "field": "SOSYAL BİL."
    },{
        "id":43,
        "question":"Çeşitli atasözlerinin ve özdeyişlerin nereden çıktığını araştırmak ister misiniz?",
        "field": "SOSYAL BİL."
    },{
        "id":44,
        "question":"İnsanların ne düşündüklerini ve ne hissettiklerini incelemekten hoşlanır mısınız?",
        "field": "SOSYAL BİL."
    },{
        "id":45,
        "question":"Fen derslerinde öğrendiğiniz ilke ve kuralları evinizdeki sorunların çözümünde kullanır mısınız?",
        "field": "FEN BİL."
    },{
        "id":46,
        "question":"Fen dersleri ile ilgili konularda sınıfta öğretilenlerden daha fazla bilgi edinmek için başka kaynaklara başvurduğunuz oluyor mu?",
        "field": "FEN BİL."
    },{
        "id":47,
        "question":"Evcil hayvanların veya bitkilerin gelişmelerini incelemekten hoşlanır mısınız?",
        "field": ""
    },{
        "id":48,
        "question":"Yeni öğrendiğiniz yabancı dildeki sözcükleri bir cümlede kullanmaya çalışır mısınız?",
        "field": "Y. DİL"
    },{
        "id":49,
        "question":"Fen bilgisi ile ilgili problemleri çözmekten hoşlanır mısınız?",
        "field": "FEN BİL."
    },{
        "id":50,
        "question":"Deniz dibindeki hayatı gösteren bir filmi ilgi ve dikkatle izler misiniz?",
        "field": "FEN BİL."
    },{
        "id":51,
        "question":"Yabancı dildeki kelimeleri kolaylıkla ezberleyebiliyor musunuz?",
        "field": "Y. DİL"
    },{
        "id":52,
        "question":"Bir bilyeyi, başka bir bilye ile vurarak, istediğiniz hedefe gönderebilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":53,
        "question":"Büyük coğrafya keşiflerini anlatan bir televizyon dizisini izlemekten hoşlanır mısınız?",
        "field": "SOSYAL BİL."
    },{
        "id":54,
        "question":"Tarih ve coğrafya derslerinde okutulan konuları kolay öğrenebiliyor musunuz?",
        "field": "SOSYAL BİL."
    },{
        "id":55,
        "question":"Bilimsel proje sergilerini gezer misiniz? (Gezmek ister misiniz)",
        "field": "FEN BİL."
    },{
        "id":56,
        "question":"İnsanların gazetelerde hangi haberleri merakla okuduklarını araştırmak ister misiniz?",
        "field": "SOSYAL BİL."
    },{
        "id":57,
        "question":"Tarih romanları okumaktan hoşlanır mısınız?",
        "field": "SOSYAL BİL."
    },{
        "id":58,
        "question":"Televizyonda bilimsel buluşları anlatan belgesel programları izler misiniz?",
        "field": "FEN BİL."
    },{
        "id":59,
        "question":"Ünlü bilim adamlarının hayatını anlatan televizyon dizilerini izler misiniz?",
        "field": "FEN BİL."
    },{
        "id":60,
        "question":"Bir pastayı veya böreği, eşit olarak ve düzgün biçimde kesebilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":61,
        "question":"“Çocuklarda yaratıcılık” başlıklı bir makaleyi okumak ister misiniz?",
        "field": "SOSYAL BİL."
    },{
        "id":62,
        "question":" Çevrenizdeki insanların davranışlarının nedenlerini merak edip araştırır mısınız?",
        "field": "SOSYAL BİL."
    },{
        "id":63,
        "question":"Uzay araçlarının, roketlerin evrimini gösteren bir sergiyi izlemek ister misiniz?",
        "field": "FEN BİL."
    },{
        "id":64,
        "question":"Ünlü toplum liderlerinin hayatını anlatan eserleri okumak veya filmleri izlemek ister misiniz?",
        "field": "SOSYAL BİL."
    },{
        "id":65,
        "question":"“İnsan hakları” konulu bir ödev hazırlayıp sınıfta sunmak ister misiniz?",
        "field": "SOSYAL BİL."
    },{
        "id":66,
        "question":"Küçük bir deliğe, ince bir çubuğu, deliğin kenarına değdirmeden sokabilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":67,
        "question":"Küçük bir şeklin (örneğin bir çiçek resminin) içini, dışarı taşırmadan sulu boya ile boyayabilir misiniz?",
        "field": "GÖZ-EL KOORD."
    },{
        "id":68,
        "question":"Orta Asya’daki eski uygarlık eserlerini gösteren bir belgesel filmi izlemekten hoşlanır mısınız?",
        "field": "SOSYAL BİL."
    },{
        "id":69,
        "question":"Evinizde ipekböceği yetiştirip bakımını üstlenebilir misiniz?",
        "field": "ZİRAAT"
    },{
        "id":70,
        "question":"Kapı zili, kilit gibi ev aletlerini onarmaya çalışır mısınız?",
        "field": "MEKANİK"
    },{
        "id":71,
        "question":"Tahtadan veya metalden oyuncaklar yapabilir misiniz?",
        "field": "MEKANİK"
    },{
        "id":72,
        "question":"Yeni çiçek türleri yetiştirmeyi denemek ister misiniz?",
        "field": "ZİRAAT"
    },{
        "id":73,
        "question":"Bir yabancı turistle, bildiğiniz yabancı dille konuşmaya çalışır mısınız?",
        "field": "Y. DİL"
    },{
        "id":74,
        "question":"Gelecekte yabancı dilinizi ilerletip o dilde yazılmış dergi ve kitapları okumayı düşünür müsünüz?",
        "field": "Y. DİL"
    },{
        "id":75,
        "question":"“Hayvanat bahçesine getirilen hayvanların yeni çevreye uyum sorunları” konulu bir belgesel filmi ilgi ile izler misiniz?",
        "field": "ZİRAAT"
    },{
        "id":76,
        "question":"Bir çiftliğin yöneticisi olmayı düşünür müsünüz?",
        "field": "ZİRAAT"
    },{
        "id":77,
        "question":"Yeni öğrendiğiniz yabancı dildeki sözcükleri doğru biçimde söylemeye gayret eder misiniz?",
        "field": "Y. DİL"
    },{
        "id":78,
        "question":"Kaliteli meyve yetiştiren bir üretici olmayı düşünür müsünüz?",
        "field": "ZİRAAT"
    },{
        "id":79,
        "question":"Bir aleti parçalara ayırıp tekrar birleştirebilir misiniz?",
        "field": "MEKANİK"
    },{
        "id":80,
        "question":"Evcil hayvanların hangi koşullarda ve ortamda daha iyi geliştiklerini incelemekten hoşlanır mısınız?",
        "field": "ZİRAAT"
    },{
        "id":81,
        "question":"Yeni bir alet veya makine ile karşılaştığınızda, hemen onun nasıl çalıştığını öğrenmeye çalışır mısınız?",
        "field": "MEKANİK"
    },{
        "id":82,
        "question":"Evde bir hayvan (kuş) besler, bakımını yapar mısınız?",
        "field": "ZİRAAT"
    },{
        "id":83,
        "question":"Saksıda ve bahçede çiçek yetiştirip bakımını üstlenir misiniz?",
        "field": "ZİRAAT"
    },{
        "id":84,
        "question":"Elektrikli aletlerin nasıl işlediklerini inceler misiniz?",
        "field": "MEKANİK"
    },{
        "id":85,
        "question":"Havuzlarda balık üretme yöntemlerini gösteren bir filmi ilgi ile izler misiniz?",
        "field": "ZİRAAT"
    },{
        "id":86,
        "question":"Her türlü araç ve gereç sağlansa, bir kafes yapmayı dener misiniz?",
        "field": "MEKANİK"
    },{
        "id":87,
        "question":"İnanç ve düşüncelerinizi başkalarına kolaylıkla aktarabilir misiniz?",
        "field": "İKNA"
    },{
        "id":88,
        "question":"Tartışmalarda güçlü kanıtlar bularak, görüşünüzü karşınızdakilere kabul ettirebilir misiniz?",
        "field": "İKNA"
    },{
        "id":89,
        "question":"Belleğiniz kuvvetli midir?",
        "field": "Y. DİL"
    },{
        "id":90,
        "question":"İnsanların daha çok hangi malları almak istediklerini öğrenmeye çalışır mısınız?",
        "field": "TİCARET"
    },{
        "id":91,
        "question":"Model uçak yapmaya çalışır mısınız?",
        "field": "MEKANİK"
    },{
        "id":92,
        "question":"Arkadaşlarınız arasındaki çatışmaların çözümünde arabuluculuk yapar mısınız?",
        "field": "İKNA"
    },{
        "id":93,
        "question":"Bir yazıdaki hataları düzeltmekten, bir hesabı kontrol etmekten hoşlanır mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":94,
        "question":"Yaptığınız herhangi bir işin temiz ve özenli olması için gereken özeni gösterir misiniz?",
        "field": "İŞ AYRINTI"
    },{
        "id":95,
        "question":"Bir makinanın, örneğin bir elektrik motorunun, evrimini gösteren bir sergiyi gezmek ister misiniz?",
        "field": "MEKANİK"
    },{
        "id":96,
        "question":"Çevrenizde “Hazırcevap” bir kişi olarak tanınır mısınız?",
        "field": "İKNA"
    },{
        "id":97,
        "question":"Okul kantini ya da kooperatifini yönetmek ister misiniz?",
        "field": "TİCARET"
    },{
        "id":98,
        "question":"Bir işin ince ayrıntıları ile uğraşır mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":99,
        "question":"Paranızı nerelerde harcadığınızın kaydını tutar mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":100,
        "question":"Anılarınızı yazar mısınız?",
        "field": "EDEBİYAT"
    },{
        "id":101,
        "question":"Yaz aylarında bir dükkanda ya da ticarethanede çalışmak ister misiniz?",
        "field": "TİCARET"
    },{
        "id":102,
        "question":"Derslerinize günü gününe çalışır mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":103,
        "question":"Okulda şiir okuma yarışmaları düzenleyen bir grubun üyesi olmak ister misiniz?",
        "field": "EDEBİYAT"
    },{
        "id":104,
        "question":"Mektuplarınızı eski okul karnelerinizi tarih sırasına koyup saklar mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":105,
        "question":"Aldığınız her şeyin ya da yaptığınız her işin düzenli bir biçimde kaydını tutar mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":106,
        "question":"Yabancı dil kurslarına gitmek ister misiniz?",
        "field": "Y. DİL"
    },{
        "id":107,
        "question":"Bir makinanın çalışmasını geliştirici yöntemler düşünür müsünüz?",
        "field": "MEKANİK"
    },{
        "id":108,
        "question":". Söz ve davranışlarınızın başkaları üzerindeki etkilerini öğrenmeye çalışır mısınız?",
        "field": "İKNA"
    },{
        "id":109,
        "question":"Konuşurken çevrenizdeki insanların ilgisini çekebilir ve görüşlerinizi onlara kabul ettirebilir misiniz?",
        "field": "İKNA"
    },{
        "id":110,
        "question":"Televizyondaki reklamların daha iyi nasıl yapılabileceği üzerinde araştırma yapan bir grubun içinde yer almak ister misiniz?",
        "field": "TİCARET"
    },{
        "id":111,
        "question":"Evleri dolaşıp bir malın tanıtımını yapmaktan hoşlanır mısınız?",
        "field": "TİCARET"
    },{
        "id":112,
        "question":"Ödevlerinizi zamanında ve düzgün biçimde yapar mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":113,
        "question":"Televizyonda veya radyoda şiir saatlerini izler misiniz?",
        "field": "EDEBİYAT"
    },{
        "id":114,
        "question":"Kendini gelecekte bir yazar olarak düşlediğiniz olur mu?",
        "field": "EDEBİYAT"
    },{
        "id":115,
        "question":"Yaptığınız her hangi bir şeyi özenle süsler misiniz?",
        "field": "SANAT"
    },{
        "id":116,
        "question":"Küçük hikayeler yazmayı dener misiniz?",
        "field": "EDEBİYAT"
    },{
        "id":117,
        "question":"Ünlü sanatçıların, ressamların hayatını merak eder misiniz?",
        "field": "SANAT"
    },{
        "id":118,
        "question":"Çevrenizdeki çeşitli makinaların bakımını yapar, onları bozmadan kullanabilir misiniz?",
        "field": "MEKANİK"
    },{
        "id":119,
        "question":"Sizin gibi düşünmeyen insanları ikna etmek için uzun tartışmalara girer misiniz?",
        "field": "İKNA"
    },{
        "id":120,
        "question":"Çevrenizdeki eşyaların, ürünlerin, satılsalar kaç lira edeceklerini düşünür müsünüz?",
        "field": "TİCARET"
    },{
        "id":121,
        "question":"Eşyalarınızı yerli yerine koyar, çevrenizi düzenli tutar mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":122,
        "question":"Bir malı satmak için neler yapmak gerektiğini öğreten bir kursa katılmak ister misiniz?",
        "field": "TİCARET"
    },{
        "id":123,
        "question":"Gazete, boş şişe gibi kullanılmış şeyleri satarak para kazanmayı düşünür müsünüz?",
        "field": "TİCARET"
    },{
        "id":124,
        "question":"Yabancı dilde şarkı söylemeye özenir misiniz?",
        "field": "Y. DİL"
    },{
        "id":125,
        "question":"Mektupları zamanında cevaplandırır mısınız?",
        "field": "İŞ AYRINTI"
    },{
        "id":126,
        "question":"Bir şeyi satın alacağınız zaman çeşitli dükkanları dolaşıp fiyatları karşılaştırarak gereğini duyar mısınız?",
        "field": "TİCARET"
    },{
        "id":127,
        "question":"Bir aleti, tarifesine ve şemasına bakarak çalıştırabilir misiniz?",
        "field": "MEKANİK"
    },{
        "id":128,
        "question":"Güzel konuşma ve başkalarını ikna edebilme gücünü geliştirici kurslara katılmak ister misiniz?",
        "field": "İKNA"
    },{
        "id":129,
        "question":"Arkadaşlarınıza ciklet, çikolata, bilye vb. şeyler sattınız mı?",
        "field": "TİCARET"
    },{
        "id":130,
        "question":"Gelecekte kendinizi bir tüccar olarak düşlediğiniz olur mu?",
        "field": "TİCARET"
    },{
        "id":131,
        "question":"Roman, hikaye veya şiir okur musunuz?",
        "field": "EDEBİYAT"
    },{
        "id":132,
        "question":"Boş vakitlerinizde çiçek, nakış, resim, heykel vb. yapar mısınız?",
        "field": "SANAT"
    },{
        "id":133,
        "question":"Radyo ve televizyonda müzik programlarını isler misiniz?",
        "field": "MÜZİK"
    },{
        "id":134,
        "question":"Müzik yarışmalarına katılmak ister misiniz?",
        "field": "MÜZİK"
    },{
        "id":135,
        "question":" Televizyonda resim sanatı ile ilgili haberleri ilgi ile izler misiniz?",
        "field": "SANAT"
    },{
        "id":136,
        "question":"Gittiğiniz bir kentte sanat galerilerini, resim sergilerini gezmek ister misiniz?",
        "field": "SANAT"
    },{
        "id":137,
        "question":"Ağlayan bir çocuğu oyalayabilir misiniz?",
        "field": "SOSYAL YARD."
    },{
        "id":138,
        "question":"Yaşlılar yurdunda eğlence günleri düzenlemekten hoşlanır mısınız?",
        "field": "SOSYAL YARD."
    },{
        "id":139,
        "question":"Başkalarına kişisel sorunların çözümünde yardımcı olabiliyor musunuz?",
        "field": "SOSYAL YARD."
    },{
        "id":140,
        "question":"Çocuk gürültüsüne katlanabilir misiniz?",
        "field": "SOSYAL YARD."
    },{
        "id":141,
        "question":"Belli bir anda pek çok şeye birden dikkat edebilir misiniz?",
        "field": "SOSYAL YARD."
    },{
        "id":142,
        "question":"Kompozisyon derslerinde başarılı mısınız?",
        "field": "EDEBİYAT"
    },{
        "id":143,
        "question":"Okul gazetesine yazı yazar mısınız? (Yazmak ister misiniz?)",
        "field": "EDEBİYAT"
    },{
        "id":144,
        "question":"Müzik dersleri alıyor musunuz veya almak ister misiniz?",
        "field": "MÜZİK"
    },{
        "id":145,
        "question":"Bir müzik aleti çalar mısınız?",
        "field": "MÜZİK"
    },{
        "id":146,
        "question":"Bir hastaya bakabilir, ilaçlarını zamanında verebilir misiniz?",
        "field": "SOSYAL YARD."
    },{
        "id":147,
        "question":"Resim ve mimarlık sanatının gelişimini anlatan bir kitabı zevkle okur musunuz?",
        "field": "SANAT"
    },{
        "id":148,
        "question":"Bir hastanede, yaz aylarında gönüllü olarak çalışmak ister misiniz?",
        "field": "SOSYAL YARD."
    },{
        "id":149,
        "question":"Boş vakitlerinizi resim veya el işleri yaparak geçirmeye çalışır mısınız?",
        "field": "SANAT"
    },{
        "id":150,
        "question":"Konuştuğunuz zaman kendinizi çevrenizdeki insanlara dinletebiliyor musunuz?",
        "field": "İKNA"
    },{
        "id":151,
        "question":"Karşınızdaki insanların ne düşündükleri ve ne hissettiklerini anlayabilir misiniz",
        "field": ["İKNA","SOSYAL YARD."]
    },{
        "id":152,
        "question":"Müzik aletleri sergisini gezmek ister misiniz?",
        "field": "MÜZİK"
    },{
        "id":153,
        "question":"Çeşitli ülkelerin halk şarkılarını tanıtan bir program izler misiniz?",
        "field": "MÜZİK"
    },{
        "id":154,
        "question":"Hastalar ve yaşlılara kitap okumaktan hoşlanır mısınız?",
        "field": "SOSYAL YARD."
    },{
        "id":155,
        "question":"Küçük çocuklara oyun öğretmekten, onlara şarkı söylemekten hoşlanır mısınız?",
        "field": "SOSYAL YARD."
    },{
        "id":156,
        "question":"İmkanlarınız ölçüsünde konserlere gitmeye çalışır mısınız?",
        "field": "MÜZİK"
    },{
        "id":157,
        "question":"Yabancı dil dersinde başarılı mısınız?",
        "field": "Y. DİL"
    },{
        "id":158,
        "question":"Ayakta ve hareketli olarak çalışmaktan hoşlanır mısınız?",
        "field": "SOSYAL YARD."
    },{
        "id":159,
        "question":"Ufak tefek besteler yapmaya çalışır mısınız?",
        "field": "MÜZİK"
    },{
        "id":160,
        "question":"Bir evi ya da salonu süslemekten hoşlanır mısınız?",
        "field": "SANAT"
    },{
        "id":161,
        "question":"Başkalarına dinletecek düzeyde bir müzik aleti çalıyor musunuz?",
        "field": "MÜZİK"
    },{
        "id":162,
        "question":"Odanızı, yaptığınız resim veya el işleri ile süsler misiniz?",
        "field": "SANAT"
    },{
        "id":163,
        "question":"El sanatları ya da resim kurslarına gitmek ister misiniz?",
        "field": "SANAT"
    },{
        "id":164,
        "question":"Yeni duyduğunuz bir müzik parçasını çalmaya veya söylemeye çalışır mısınız?",
        "field": "MÜZİK"
    },{
        "id":165,
        "question":"Gazete ve dergilerdeki edebiyat sütunlarını okur musunuz?",
        "field": "EDEBİYAT"
    },{
        "id":166,
        "question":"Okul kitaplığına gider ve kitap alır mısınız?",
        "field": "EDEBİYAT"
    },{
        "id":167,
        "question":"Dilbilgisi kurallarını öğrenip uygulayabiliyor musunuz?",
        "field": ["SÖZEL","EDEBİYAT"]
    },{
        "id":168,
        "question":"Görüşlerinize karşı çıkıldığında bunu soğukkanlılıkla karşılar mısınız?",
        "field": "İKNA"
    },{
        "id":169,
        "question":"Açık havada çalışmaktan hoşlanır mısınız?",
        "field": "ZİRAAT"
    },{
        "id":170,
        "question":"Gelecekte kendinizi çeşitli dillerin yapı ve özellikleri üzerinde çalışan bir araştırmacı olarak düşünebilir misiniz?",
        "field": "Y. DİL"
    }
]

export default data;

