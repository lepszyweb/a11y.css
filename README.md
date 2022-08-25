a11y.css
========

Wymawiaj „Alix”. Bo tak prościej!

[![GitHub version](https://badge.fury.io/gh/ffoodd%2Fa11y.css.svg)](https://badge.fury.io/gh/ffoodd%2Fa11y.css)

## Co to jest?

Jest to specjalnie skonfigurowany plik CSS, który ma na celu ostrzeganie programistów o *możliwych błędach i&nbsp;zagrożeniach* w kodzie HTML. Może również posłużyć do przybliżonej oceny jakości strony przez proste dołączenie go jako zewnętrznego arkusza stylów.

**a11y.css** niczego na przeglądanej stronie nie zmienia. Powoduje tylko, że od momentu jej uaktywnienia do odświeżenia strony, przeglądarka stosuje do odtworzenia strony dodatkowy arkusz stylów, który oznacza błędy występujące w kodzie HTML strony i miejsca, które mogą powodować problemy. 

Po uruchamianiu `a11y.css` obok każdego z podejrzanych elementów pojawia się wskazówka sygnalizująca, co się dzieje. 

> Zważ przy tym, że *a11y.css nie zastępuje kompletnego narzędzia, takiego jak [aXe](https://www.deque.com/products/axe/), [Tanaguru](http://www.tanaguru.com/en/) czy [Tenon](http://tenon.io/). Ma on jedynie na celu pokazać możliwe słabości. Oczywiście, aby wiedzieć na pewno, czy kod powinien, czy nie powinien zostać poprawiony, trzeba go sprawdzić ręcznie.*


## Jak stosować a11y.css?

Masz co najmniej trzy możliwości. Możesz skorzystać z rozszerzenia przeglądarki albo ze skryptozakładek, albo użyć **a11y.css** lub jego wariacji jako zewnętrznego arkusza stylów. 

### Rozszerzenie przeglądarki

Niezależnie od tego, której przeglądarki używasz, zainstaluj używasz <a href="https://addons.mozilla.org/en-GB/firefox/addon/a11ycss/" target="_blank" rel="noopener noreferrer">a11y.css dla Firefoksa&nbsp; albo <a href="https://chrome.google.com/webstore/detail/a11ycss/iolfinldndiiobhednboghogkiopppid?hl=fr" target="_blank" rel="noopener noreferrer">a11y.css dla Chrome&nbsp;</a>.

Zapewnia ono kilka fajnych funkcji, których póki co nie ma w pliku CSS, takich jak:

* wymuszona widoczność fokusu,
* pokazywanie atrybutu lang,
* sprawdzanie alternatyw obrazów,
* zwiększanie odstępów w tekście.

Ponadto rozszerzenie przeglądarek umożliwiają:

* przełączanie CSS i zmianę w locie poziomu dokładności alertów, 
* zapamiętywanie ustawień dla każdej karty,
* automatyczną aktualizację pliku w tle.

### Skryptozakładka

Możesz użyć głównego pliku **a11y.css** albo jego wariacji jako skryptozakładki. Na polskiej stronie projektu w bocznym pasku umieściliśmy kilka przycisków, za pomocą których możesz dodać **a11y.css** do swoich zakładek w przeglądarce. Gdy wejdziesz na stronę, którą chcesz zbadać, wystarczy wywołać łącze zakładki. Gdy skończysz badanie, po prostu odśwież stronę. 

#### Zastrzeżenia dotyczące zakładki

Główne zastrzeżenie polega na tym, że nagłówki HTTP CSP blokują niebezpieczne/zewnętrzne skrypty - głównie z powodu błędów i niespójności przeglądarek. Ale wiele zasad <span lang="en">Cross-Origin Resource Sharing</span> (CORS) może zablokować działanie skryptozakładki…. 

Warto również pamiętać, że ładowanie skryptozakładki może potrwać kilka sekund, bo przecież wstrzykuje ona arkusz stylów a11y.css do DOM przeglądanej strony. A ponieważ kod tego arkusza pobierany jest z zewnętrznego serwera, może to chwilę potrwać. Ale jest to cena, którą trzeba zapłacić za *aktualność* arkusza stylów.

Chcesz wiedzieć więcej o CSP i CORS? Przeczytaj:

* [Czym jest Content Security Policy?](https://sekurak.pl/czym-jest-content-security-policy/)
* [Czym jest CORS i jak wpływa na bezpieczeństwo](https://sekurak.pl/czym-jest-cors-cross-origin-resource-sharing-i-jak-wplywa-na-bezpieczenstwo/) 

*** Zewnętrzny plik css

Tworzysz stronę? Dodaj **a11y.css** jako zewnętrzy arkusz stylów. Efekt, ręczę, będzie czasem trudno znieść. I dlatego poprawisz wykryte usterki, a Twoja strona będzie wzorem poprawności. 

## Wkład

Jeśli chcesz się zaangażować w ten projekt, [zajrzyj na jego wiki](https://github.com/lepszyweb/a11y.css/wiki). Każdy wkład jest mile widziany. Pracę nad **a11y.css** rozwija jego twórca **Gaël Poupard**. W repozytorium projektu pod adresem (https://github.com/ffoodd/a11y.css) możesz zgłosić wykryte problemy czy propozycje ulepszeń. Sprawdź jednak wcześniej, czy występują one w oryginalnej wersji. 

Nasze polskie wydanie nie wnosi żadnych nowych, czy innych rozwiązań, a jedynie zapewnia polski interfejs skryptozakładki i polską dokumentację przypadków testowych. Jeśli w nich zauważysz jakieś błędy albo masz pomysły, co możemy zrobić lepiej, daj nam znać, otwierając nowy problem lub zgłaszając poprawkę (PR) na stronie  https://github.com/lepszyweb/a11y.css.

