# CV

CV:ni löytyy osoitteesta https://juvalta.github.io/cv/. CV on toteutettu Reactilla, ja lähdekoodia voi katsella tältä sivulta.

TO DO:

- Aseta Typography-elementeille oma tyyli, jotta tyyliä ei tarvitse asettaa jokaiselle elementille erikseen. Vaihtoehtoisesti laita Typography-elementeille tunnisteet, joiden perusteella ne saavat tunnisteen mukaisen tyylin.
- Muokkaa sivun saavutettavuutta (sivu ei toimi lukemistilassa, ja br/ -tagit rivinvaihtoon rikkovat lukemistilaa).
- Lisää nappi (toggle) englannin- ja suomenkieliselle CV:lle

TEHTY:

- Korjaa relatiiviset polut: korjattu laittamalla package.jsoniin homepage: "./" sen sijasta, että siellä lukee homepage: "https://juvalta.github.io/cv/". Jostain syystä githubin linkki rikkoi relatiiviset polut/ei toiminut, sillä silloin github pages yritti etsiä tiedostoja osoittessta "https://juvalta.github.io" sen sijaan, että se etsii ne repositorion osoitteesta "https://juvalta.github.io/cv/".
- Muuta BrowserRouter HashRouteriin, sillä BrowserRouter ei toimi Github Pagesin kanssa.
- Tee englanninkielinen versio.
