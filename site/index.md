---
title: Dokumentacja a11y.css
layout: "templates/page"
---

## Wstęp

Wymawiaj „Alix”. Bo tak prościej!

A11y.css to specjalnie skonfigurowany plik <abbr lanag="en" title="Cascading StyleSheet" aria-label="Cascading StyleSheet">CSS</abbr>, który ma na celu ostrzeganie programistów o <b>możliwych błędach i&nbsp;zagrożeniach</b> w kodzie HTML strony internetowej. Może również posłużyć do przybliżonej oceny jakości strony przez proste dołączenie go jako zewnętrznego arkusza stylów.

**a11y.css** niczego na przeglądanej stronie nie zmienia. Powoduje tylko, że od momentu jej uaktywnienia do odświeżenia strony, przeglądarka stosuje do odtworzenia strony dodatkowy arkusz stylów, który oznacza błędy występujące w kodzie HTML strony i miejsca, które mogą powodować problemy. 

Po uruchamianiu `a11y.css` obok każdego z podejrzanych elementów pojawia się wskazówka sygnalizująca, co się dzieje. 

## Jak stosować a11y.css?

Masz co najmniej trzy możliwości. Możesz skorzystać z rozszerzenia przeglądarki albo ze skryptozakładek, albo użyć **a11y.css** lub jego wariacji jako zewnętrznego arkusza stylów.  

### Rozszerzenie przeglądarki

Niezależnie od tego, której przeglądarki używasz, zainstaluj używasz <a href="https://addons.mozilla.org/en-GB/firefox/addon/a11ycss/" target="_blank" rel="noopener noreferrer">a11y.css dla Firefoksa&nbsp;<span class="sr-only">(łącze zewnętrzne)</span>{% include "icons/external-link.svg" %}</a>, albo <a href="https://chrome.google.com/webstore/detail/a11ycss/iolfinldndiiobhednboghogkiopppid?hl=fr" target="_blank" rel="noopener noreferrer">a11y.css dla Chrome&nbsp;<span class="sr-only">(łącze zewnętrzne)</span>{% include "icons/external-link.svg" %}</a>.

Zapewnia ono kilka fajnych funkcji, których nie ma w głównym pliku CSS (na razie), takich jak:

* wymuszona widoczność fokusu;
* pokazywanie atrybutu lang;
* sprawdzanie alternatyw obrazów poprzez ich wyświetlanie;
* zwiększanie odstępów w tekście.

Ponadto rozszerzenia przeglądarek umożliwiają:

* przełączanie CSS i zmianę poziomu dokładności testów w locie,, 
* zapamiętywanie ustawień dla każdej karty,
* automatyczną aktualizację w tle.

### Skryptozakładki 

Skryptozakładki to również dobra opcja. Możesz ich użyć w każdej przeglądarce. Możesz je dodać do swojej ulubionej przeglądarki, korzystając z przycisków na bocznym pasku. Do dyspozycji masz 4 warianty.

### Zewnętrzny plik css

Tworzysz stronę? Dodaj **a11y.css** jako zewnętrzy arkusz stylów. Efekt, ręczę, będzie czasem trudno znieść. I dlatego poprawisz wykryte usterki, a Twoja strona będzie wzorem poprawności.  

## Wkład

Jeśli chcesz się zaangażować w ten projekt, [zajrzyj na jego wiki](https://github.com/lepszyweb/a11y.css/wiki). Każdy wkład jest mile widziany. Pracę nad **a11y.css** rozwija jego twórca **Gaël Poupard**. W repozytorium projektu pod adresem (https://github.com/ffoodd/a11y.css) możesz zgłosić wykryte problemy czy propozycje ulepszeń. Sprawdź jednak wcześniej, czy występują one w oryginalnej wersji. 

Nasze polskie wydanie nie wnosi żadnych nowych, czy innych rozwiązań, a jedynie zapewnia polski interfejs skryptozakładki i polską dokumentację przypadków testowych. Jeśli w nich zauważysz jakieś błędy albo masz pomysły, co możemy zrobić lepiej, daj nam znać, otwierając nowy problem lub zgłaszając poprawkę (PR) na stronie  https://github.com/lepszyweb/a11y.css.
