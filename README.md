# Angular2Wetterwolke

dies ist der [mobile Web Client](http://www.voegtle.org/~christian/ww/app2/) für die Wetterwolke. Sie ist auf Mobilgeräte optimiert. **Android Nutzer** können sich auch die App aus dem [Playstore](https://play.google.com/store/apps/details?id=org.voegtle.weatherwidget) installieren.

Die Wetter Wolke ist ein Netz privater Wetterstationen, die in Deutschland verteilt sind mit einer Außenstation in Shenzhen. Mehr Informationen dazu findet Ihr [hier](http://www.voegtle.org/~christian/ww/).

## Abhängigkeiten

[Angular4.3](https://angular.io/)

Erstellt mit [Angular2-Cli](https://github.com/angular/angular-cli) v1.3.2

Oberflächen erstellt mit [Angular2 Material](https://material.angularjs.org/latest/) Alpha 9.3

## Zusätzliche Buildschritte
Manifest für Caching erzeugen

    appcache-manifest dist/*.{json,ico,html,js,webapp,css} dist/images/*.png --network-star -o dist/ww.appcache


