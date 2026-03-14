const pora = document.getElementById("pora");
const nastroj = document.getElementById("nastroj");
const sprawdz = document.getElementById("sprawdz");
const wynik = document.getElementById("wynik");

sprawdz.onclick = function() {
    wartosc_pora = pora.value;
    wartosc_nastroj = nastroj.value;

    //--------------------------------------Rano-----------------------------
    if (wartosc_pora == "rano" && wartosc_nastroj == "smutny") {
        wynik.innerHTML = `Czekoladowa Owsianka:<br>
        Opis: Ciepły posiłek, idealny na poprawienie twojego nastroju.<br>

        Składniki: Pół szklanki płatków owsianych, 1 szklanka mleka, 2 kostki czekolady, pół banana.<br><br>

        Przygotowanie:<br>
        1. Wlej mleko do garnka i wsyp płatki owsiane.<br>
        2. Gotuj na małym ogniu, często mieszając, aż płatki zmiękną.<br>
        3. Do gorącej owsianki wrzuć kostki czekolady i mieszaj do rozpuszczenia.<br>
        4. Przełóż do miseczki i na wierzchu ułóż plasterki banana.<br>
        <center><img src="zdj/owsianka.jpg" width="300px" height="300px"></center>`;
    }

    else if (wartosc_pora == "rano" && wartosc_nastroj == "normalny") {
        wynik.innerHTML = `Tosty z szynką i serem:<br>
        Opis: Solidne śniadanie, które da tobie energię na cały dzień.<br>

        Składniki: 4 kromki chleba tostowego, 2 plastry żółtego sera, 2 plastry szynki, masło.<br><br>

        Przygotowanie:<br>
        1. Każdą kromkę chleba posmaruj masłem z jednej i z drugiej strony.<br>
        2. Połóż ser i szynkę między dwie kromki.<br>
        3. Włóż do piekarniczka/tostera.<br>
        4. Czekaj około 3 minuty, aż ser się rozpuści, a chleb będzie złocisty.<br>
        5. Przekrój na trójkąty i podawaj z ulubionym sosem.
        <center><img src="zdj/tosty.jpg" width="300px" height="300px"></center>`;
    }

    else if (wartosc_pora == "rano" && wartosc_nastroj == "wesoły") {
        wynik.innerHTML = `Placuszki:<br>
        Opis: Gdy masz świetny humor, idealne są placuszki!<br>

        Składniki: 1 szklanka mąki, 1 jajko, pół szklanki mleka, łyżeczka proszku do pieczenia, owoce.<br><br>

        Przygotowanie:<br>
        1. W misce wymieszaj jajko z mlekiem, a potem dodaj mąkę i proszek.<br>
        2. Miksuj, aż powstanie gęsta masa bez grudek.<br>
        3. Rozgrzej patelnię z odrobiną oleju.<br>
        4. Nakładaj małe porcje ciasta, tworząc okrągłe placuszki.<br>
        5. Smaż z obu stron na złoty kolor.<br>
        6. Podawaj z dużą ilością świeżych owoców i syropem lub miodem.
        <center><img src="zdj/placuszki.png" width="300px" height="300px"></center>`;
    }

    //--------------------------------------Południe-----------------------------
    else if (wartosc_pora == "południe" && wartosc_nastroj == "smutny") {
        wynik.innerHTML = `Sałatka z Kurczakiem:<br>
        Opis: Lekkie, orzeźwiające danie, idealne na pełne energii popołudnie.<br>

        Składniki: Pierś kurczaka, mieszanka sałat, pomidorki koktajlowe, ogórek, papryka (dowolny kolor), sos jogurtowo-ziołowy.<br><br>

        Przygotowanie:<br>
        1. Pierś kurczaka pokrój w kostkę, dopraw solą i pieprzem, usmaż na patelni do złocistego koloru.<br>
        2. Warzywa umyj i pokrój: pomidorki na połówki, ogórek i paprykę w kostkę.<br>
        3. Na talerzu ułóż mieszankę sałat, dodaj pokrojone warzywa i usmażonego kurczaka.<br>
        4. Całość polej sosem np jogurtowym.<br>
        5. Smacznego.
        <center><img src="zdj/salatka.jpg" width="300px" height="300px"></center>`;
    }

    else if (wartosc_pora == "południe" && wartosc_nastroj == "normalny") {
        wynik.innerHTML = `Domowy Burger Wołowy:<br>
        Opis: Klasyczny, sycący obiad!<br>

        Składniki: Bułka do burgerów, mielona wołowina, plaster sera cheddar, sałata, pomidor, ogórek kiszony, ketchup i majonez.<br><br>

        Przygotowanie:<br>
        1. Z mięsa uformuj płaski krążek, dopraw solą i pieprzem.<br>
        2. Smaż mięso na mocno rozgrzanej patelni przez około 3-4 min z każdej strony.<br>
        3. Pod koniec smażenia połóż plaster sera na mięsie, aby lekko się rozpuścił.<br>
        4. Bułkę przekrój i podpiecz chwilę w tosterze lub na patelni, aż będzie chrupiąca.<br>
        5. Posmaruj bułkę sosami, połóż sałatę, gotowe mięso z serem oraz plastry pomidora i ogórka.<br>
        6. Przykryj górną częścią bułki i zajadaj!
        <center><img src="zdj/burger.png" width="300px" height="300px"></center>`;
    }

    else if (wartosc_pora == "południe" && wartosc_nastroj == "wesoły") {
        wynik.innerHTML = `Makaron z jajkiem:<br>
        Opis: Najprostsze danie świata, które zawsze poprawia humor. Ciepłe, sycące i pyszne.<br>

        Składniki: Szklanka ugotowanego makaronu, 2 jajka, 1 łyżka masła, sól, pieprz, szczypiorek (opcjonalnie).<br><br>

        Przygotowanie:<br>
        1. Na patelni rozpuść łyżkę masła na średnim ogniu.<br>
        2. Wrzuć ugotowany wcześniej makaron i podsmażaj go przez chwilę, aż zrobi się gorący i lekko chrupiący.<br>
        3. Wbij jajka bezpośrednio na makaron.<br>
        4. Wszystko wymieszaj dokładnie, dopraw solą i dużą ilością pieprzu.<br>
        5. Smaż jeszcze chwilę, aż jajka się zetną (tak jak w jajecznicy).<br>
        6. Przełóż na talerz i posyp szczypiorkiem, jeśli go masz. Gotowe!
        <center><img src="zdj/makaron.png" width="300px" height="300px"></center>`;
    }

    //--------------------------------------Noc-----------------------------
    else if (wartosc_pora == "noc" && wartosc_nastroj == "smutny") {
        wynik.innerHTML = `Jajecznica na maśle:<br>
        Opis: Ciepła, mięciutka i domowa. Najlepsze jedzenie, gdy chcesz się poczuć lepiej przed snem.<br>

        Składniki: 2-3 jajka, łyżeczka masła, szczypta soli, kawałek bułki.<br><br>

        Przygotowanie:<br>
        1. Rozpuść masło na patelni na małym ogniu (nie przypal go!).<br>
        2. Wbij jajka bezpośrednio na patelnię.<br>
        3. Powoli mieszaj, aż jajka zetną się tak, jak lubisz (bardziej płynne lub bardziej suche).<br>
        4. Posól na samym końcu.<br>
        5. Zjedz prosto z patelni lub talerza z miękką bułką.
        <center><img src="zdj/jajecznica.png" width="300px" height="300px"></center>`;
    }

    else if (wartosc_pora == "noc" && wartosc_nastroj == "normalny") {
        wynik.innerHTML = `Gorące Parówki:<br>
        Opis: Szybka i klasyczna kolacja, gdy po prostu chcesz się najeść bez stania przy garach.<br>

        Składniki: 2-3 parówki, ketchup, musztarda, kromka chleba z masłem.<br><br>

        Przygotowanie:<br>
        1. Zagotuj wodę w małym garnku.<br>
        2. Wrzuć parówki do wrzątku, przykryj i wyłącz ogień. Poczekaj 3 minuty.<br>
        3. Wyjmij parówki na talerz.<br>
        4. Podawaj z kleksem ketchupu i musztardy oraz chlebem posmarowanym masłem.<br>
        5. Nic prostszego nie istnieje!
        <center><img src="zdj/parowki.png" width="300px" height="300px"></center>`;
    }

    else if (wartosc_pora == "noc" && wartosc_nastroj == "wesoły") {
        wynik.innerHTML = `Chleb w jajku:<br>
        Opis: Klasyk z dzieciństwa! Idealny, gdy masz dobry humor i chcesz coś pysznego na szybko.<br>

        Składniki: 2 kromki chleba (może być czerstwy), 1 jajko, odrobina mleka, szczypta soli, masło lub olej do smażenia.<br><br>

        Przygotowanie:<br>
        1. W głębokim talerzu roztrzep jajko z odrobiną mleka i szczyptą soli.<br>
        2. Namocz kromki chleba z obu stron w jajecznej masie, aż dobrze nasiąkną.<br>
        3. Rozgrzej tłuszcz na patelni.<br>
        4. Smaż chleb z obu stron na złoty kolor, aż będzie chrupiący z zewnątrz i miękki w środku.<br>
        5. Podawaj z serem, szynką lub po prostu samym ketchupem.
        <center><img src="zdj/jajkochleb.png" width="300px" height="300px"></center>`;
    }

    else {
        wynik.innerHTML = `Nieprawidłowy wybór`;
    }
}
