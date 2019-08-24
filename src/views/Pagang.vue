<template>
  <div id="paGangWrapper">
    <h1>På Gång!</h1>
    <div class="body-wrapper">
      <div class="body-content">
        <img src="/images/viSomAkte.jpg" />
        <h4>Vi var de som åkte</h4>
        <p>
          Jag håller på att slutföra dokumentärfilmen
          <span>Vi var de som åkte</span> som jag regisserat.
          Den handlar om mormor och morfars flykt från Chile till Sverige efter militärkuppen i Santiago 1973,
          om hur deras liv blivit påverkade av det som hände.
          Jag har gjort intervjuer med mormor, morfar, deras barn och med de som blev kvar och levde under diktaturen.
          Filmen tar upp frågor kring flykt, saknad, sorg, förlust och kärlek som övervinner gränser och avstånd.
          Kommer snart!
        </p>
      </div>
    </div>
    <div class="body-wrapper">
      <div class="body-content">
        <img src="/images/svt.jpg" />
        <h4>Vad ska vi göra idag?</h4>
        <p>
          Nu är ryska versionen av URs Vad ska vi göra idag ute där jag läst in Bengt!
          Regisserad av Johanna Oskarsson. Alla avsnitt finns att lyssna på
          <a
            href="https://urplay.se/program/209216-vad-ska-vi-gora-idag-ryska-bengt-och-bodil-far-besok"
          >här</a>
        </p>
      </div>
    </div>
    <div class="body-wrapper">
      <div class="body-content">
        <img src="/images/geInteUpp.jpg" />
        <h4>Ge inte upp musikvideo</h4>
        <p>
          Jag har tillsammans med Andreas Granér regisserat Dreaming of Space nya musikvideo Ge inte upp.
          Tack till Ashley Michael Briggs som filmade och till alla
          skådespelare och crew som var med! Kolla in videon
          <a
            href=" https://www.youtube.com/watch?v=8CtTftYQQzs"
          >här.</a>
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagang"
};
</script>

<style scoped>
.body-wrapper {
  margin-bottom: 10%;
}
img {
  width: 100%;
  background: black;
  margin-bottom: 3%;
}
h4 {
  margin-top: 50px;
  text-align: center;
}
#paGangWrapper {
  display: inline-block;
}

a {
  font-family: "Ilisarniq-DemiItalic";
  text-decoration: none;
}
</style>