##Wstęp

Wymawiaj &bdquo;Alix&rdquo;. Bo tak prościej!

Ten plik <abbr title="Kaskadowego arkusza stylów" aria-label="Kaskadowego arkusza stylów">CSS</abbr> ma na celu ostrzeganie programistów o <b>możliwych zagrożeniach i błędach</b> występujących w kodzie HTML. Może być również użyty do przybliżonej oceny jakości strony, przez proste dołączenie go jako zewnętrznego arkusza stylów.

##Jak używać?

###Rozszerzenie przeglądarki

Niezależnie od tego, czy używasz <a href="https://addons.mozilla.org/en-GB/firefox/addon/a11ycss/"  target="_blank" rel="noopener noreferrer">Firefox <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="(link zewnętrzny)" width="10" height="10"><polygon fill="currentColor" points="91.875,62 85,62 85,85 15,85 15,15 38,15 38,8.125 38,0 0,0 0,100 100,100 100,62 "></polygon><polygon fill="currentColor" points="54,0 54,0.627 71.787,18.477 52.701,38 38,38 38,62 62,62 62,49.799 82.773,29.462 99.374,46 100,46 100,0 "></polygon></svg></a>, czy <a href="https://chrome.google.com/webstore/detail/a11ycss/iolfinldndiiobhednboghogkiopppid?hl=fr" target="_blank" rel="noopener noreferrer">Chrome <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="(link zewnętrzny)" width="10" height="10"><polygon fill="currentColor" points="91.875,62 85,62 85,85 15,85 15,15 38,15 38,8.125 38,0 0,0 0,100 100,100 100,62 "></polygon><polygon fill="currentColor" points="54,0 54,0.627 71.787,18.477 52.701,38 38,38 38,62 62,62 62,49.799 82.773,29.462 99.374,46 100,46 100,0 "></polygon></svg></a>, zapraszamy do zainstalowania i używania rozszerzenia.

Zapewnia ono kilka fajnych funkcji, których nie ma w głównym pliku CSS (na razie), takich jak:

* wymuszona widoczność fokusu;
* pokazywanie atrybutu lang;
* sprawdzanie alternatyw obrazów poprzez ich wyświetlanie;
* zwiększanie odstępów w tekście.

Ponadto rozszerzenie przeglądarek umożliwiają:

* przełączanie CSS i zmianę poziomu dokładności w locie,, 
* zapamiętywanie ustawień dla każdej karty,
* automatyczną aktualizację w tle.

###Skryptozakładka

Możesz również użyć formularza na lewym pasku bocznym, aby określić minimalny poziom i język, aby wygenerować własną skryptozakładkę. Następnie po prostu przeciągnij zielony przycisk do swoich zakładek i gotowe! Teraz jesteś w stanie używać a11y.css na każdej stronie, którą odwiedzasz, po prostu klikając na tę zakładkę.

####Zastrzeżenia dotyczące zakładki



Główne zastrzeżenie polega na tym, że nagłówki HTTP <abbr title="zasad bezpieczeństwa treści" aria-label="zasad bezpieczeństwa treści">CSP</abbr> blokują niebezpieczne/zewnętrzne skrypty - głównie z powodu błędów i niespójności przeglądarek. Ale wiele zasad <abbr title="Współdzielenie zasobów pomiędzy różnymi źródłami" aria-label="Współdzielenie zasobów pomiędzy różnymi źródłami">CORS</abbr> może zablokować działanie skryptozakładki…

Należy również pamiętać, że ładowanie skryptozakładki może potrwać kilka sekund, ponieważ zasadniczo wstrzykuje ona arkusz stylów <code class="styleguide">a11y.css</code> do <abbr title="Document Object Model" aria-label="Document Object Model">DOM</abbr> przeglądanej strony. Na początku może być trochę powolny, ponieważ jest pobierany z GitHuba, ale jest to cena, którą trzeba zapłacić za jej <b>aktualność</b>.

##Wkład

Jeśli chcesz się zaangażować w ten projekt, upewnij się, że [zajrzysz na jego wiki](https://github.com/lepszyweb/a11y.css/wiki). Z przyjemnością przeczytam twoje problemy lub pull requesty!
