a11y.css
========

Wymawiaj &bdquo;Alix&rdquo;. Bo tak prościej!

[![GitHub version](https://badge.fury.io/gh/ffoodd%2Fa11y.css.svg)](https://badge.fury.io/gh/ffoodd%2Fa11y.css)
[![Build Status](https://travis-ci.org/ffoodd/a11y.css.svg?branch=master)](https://travis-ci.org/ffoodd/a11y.css)

## Wstęp

Wymawiaj "Alix".

Ten plik CSS ma na celu ostrzeganie programistów o *możliwych zagrożeniach i błędach* występujących w kodzie HTML. Może być również użyty do przybliżonej oceny jakości strony, przez proste dołączenie go jako zewnętrznego arkusza stylów.

Podczas uruchamiania arkusza stylów obok każdego z obciążonych elementów powinna pojawić się wskazówka informująca o tym, co się dzieje.

*Ten pilnik nie zastępuje kompletnego narzędzia, takiego jak [aXe](https://www.deque.com/products/axe/), [Tanaguru](http://www.tanaguru.com/en/) czy [Tenon](http://tenon.io/). Ma on jedynie na celu pokazać możliwe słabości. Oczywiście, powinieneś ręcznie sprawdzić ręcznie, aby wiedzieć, czy kod powinien, czy nie powinien zostać poprawiony.*

## Jak stosować?

### Rozszerzenie przeglądarki

Niezależnie od tego, czy używasz [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/a11ycss/), czy [Chrome](https://chrome.google.com/webstore/detail/a11ycss/iolfinldndiiobhednboghogkiopppid?hl=en), , zapraszamy do zainstalowania i używania rozszerzenia przeglądarki **a11y.css**.

Zapewnia ono kilka fajnych funkcji, których nie ma w głównym pliku CSS (na razie), takich jak:

* wymuszona widoczność fokusu;
* pokazywanie atrybutu lang;
* sprawdzanie alternatyw obrazów poprzez ich wyświetlanie;
* zwiększanie odstępów w tekście.

Ponadto rozszerzenie przeglądarek umożliwiają:

* przełączanie CSS i zmianę poziomu dokładności w locie,, 
* zapamiętywanie ustawień dla każdej karty,
* automatyczną aktualizację w tle.

### Skryptozakładka

Możesz również użyć formularza na lewym pasku bocznym, aby określić minimalny poziom i język, aby wygenerować własną skryptozakładkę. Następnie po prostu przeciągnij zielony przycisk do swoich zakładek i gotowe! Teraz jesteś w stanie używać a11y.css na każdej stronie, którą odwiedzasz, po prostu klikając na tę zakładkę.

#### Zastrzeżenia dotyczące zakładki

Główne zastrzeżenie polega na tym, że nagłówki HTTP CSP blokują niebezpieczne/zewnętrzne skrypty - głównie z powodu błędów i niespójności przeglądarek. Ale wiele zasad CORS może zablokować działanie skryptozakładki…

Należy również pamiętać, że ładowanie skryptozakładki może potrwać kilka sekund, ponieważ zasadniczo wstrzykuje ona arkusz stylów a11y.css do DOM przeglądanej strony. Na początku może być trochę powolny, ponieważ jest pobierany z GitHuba, ale jest to cena, którą trzeba zapłacić za jej *aktualność*.

## Wkład

Jeśli chcesz się zaangażować w ten projekt, upewnij się, że [zajrzysz na jego wiki](https://github.com/lepszyweb/a11y.css/wiki). Z przyjemnością przeczytam twoje problemy lub pull requesty!

Możesz również zaangażować się w oryginalny projekt, który prowadzi Gaël Poupard. Znajdziesz go pod adresem (https://github.com/ffoodd/a11y.css)
