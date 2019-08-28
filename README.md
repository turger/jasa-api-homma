# Jäsä-homma 🌸
Kodarit 3 -tason javascript-harjoitus.  
Html + css + javascript.

Lopputuloksena yksinkertaisen API:n käyttö.

## Alkuvalmistelut

Asenna Atom.

## Oppitunnit

Tunnit eivät ole kiveen hakattuja, voi edetä hitaammin tai nopeammin.

Koodin ohessa voidaan puhua myös sisennysten tärkeydestä.

Jos pitää jakaa jokin urli tai muu kurja copypastettava, niin voidaan perustaa kertakäyttöinen chat oppitunnin ajaksi käyttämällä esim. http://disposablechat.com tai jakaa koodia pastebinilla https://pastebin.com.

⚠️ Huom! Tämän repon commitit on pilkottu pieniin osiin järjestyksessä, jota voi seurata oppitunneilla.

### 1. Html + css kertaus
Tehdään runko tulevalle sovellukselle.  
- Index.html
- css/styles.css
Tässä voi vähän hullutella css-hommilla ja muistella miten ne toimii. Autetaan oppilaita css-unelmien toteuttamisessa.

### 2. Javascript
Tehdään nappula, jota painamalla ilmestyy tekstiä.  
Ensin kirjoitetaan js `index.html` filuun `<head>`-tagin sisään.

Sitten kun tämä toimii niin siirretään tiedostoon `js/leffa.js` ja sourcetetaan funktio sieltä.

### 3. Yksinkertainen kysely leffa-APIsta
Uusi funktio kohteeseen `js/leffa.js`, joka hakee valitun leffan tiedot API:sta nappia painamalla http://www.omdbapi.com.  
(Tee API-key http://www.omdbapi.com/apikey.aspx)  
Tässä vaiheessa kyselyyn kovakoodataan haettavan leffan nimi.

### 4. Leffa-APIsta haku elokuvan nimellä
Tehdään tekstikenttä johon voi kirjoittaa haettavan leffan nimen. Nappia painamalla haetaan elokuvan koko nimi, joka tulee haun tuloksen mukana.
Kun nimi on parsittu vastauksesta, niin sen jälkeen näytetään myös kuvaus ja sitten kuva.

### 5. Css-muotoilut

Lisää css-muotoilut sivulle.
Voidaan lisätä otsikolle joku kiva fontti Google fontseista https://fonts.google.com/ (mutta ei käytetä fontin valintaan liikaa aikaa). Lisätään ohjeiden mukaan fontin import-rivi index.html-tiedostoon <head> tagin sisään.
