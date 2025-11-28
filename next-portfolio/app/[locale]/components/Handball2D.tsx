export default function Handball2D() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <p>
        Symulacja meczu piłki ręcznej stworzona w Unity jako projekt studencki.
        Gra odwzorowuje przebieg meczu w widoku 2D, gdzie zawodnicy są
        sprite’ami, a ich zachowanie zależy od statystyk oraz prostych
        algorytmów AI.
      </p>

      <div>
        <p className="font-semibold mb-1">
          Atrybuty zawodników obejmują m.in.:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>szybkość,</li>
          <li>celność,</li>
          <li>siłę rzutu,</li>
          <li>umiejętności defensywne.</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold mb-1">Algorytmy AI decydują o:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>podaniach,</li>
          <li>rzutach na bramkę,</li>
          <li>ustawieniu ofensywnym i defensywnym,</li>
          <li>przechwytach,</li>
          <li>ruchu po boisku w czasie rzeczywistym.</li>
        </ul>
      </div>

      <p>
        Symulacja dynamicznie generuje akcje na podstawie statystyk i
        prawdopodobieństwa, odwzorowując logikę meczu i system decyzyjny
        zawodników.
      </p>

      <p>
        Projekt można rozbudować o taktyki drużyn, tryb kariery, transfery,
        sezony oraz bardziej zaawansowaną fizykę i AI. Łączy on Unity, C#,
        symulację sportową i sztuczną inteligencję.
      </p>
    </div>
  );
}
