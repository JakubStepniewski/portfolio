export default function AiCarDet() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <p>
        Aplikacja oparta na sztucznej inteligencji, która rozpoznaje marki i
        modele samochodów na podstawie obrazów. System został zbudowany jako
        projekt magisterski i wykorzystuje dane w formacie COCO wraz z
        publicznym zbiorem Stanford Cars.
      </p>

      <div>
        <p className="font-semibold mb-1">Pipeline aplikacji obejmuje:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>analizę i czyszczenie danych,</li>
          <li>filtrowanie wybranych klas,</li>
          <li>
            zaawansowaną augmentację (obrót, przesunięcia, skalowanie, szumy,
            kolory),
          </li>
          <li>trenowanie modeli CNN: MobileNetV2, ResNet18, ResNet101,</li>
          <li>wizualizację wyników i predykcji z bounding boxami.</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold mb-1">GUI w Tkinterze umożliwia:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>podgląd danych przed i po augmentacji,</li>
          <li>wybór modelu i ustawień treningu,</li>
          <li>wykres strat i dokładności po każdej epoce,</li>
          <li>generowanie raportów i predykcji.</li>
        </ul>
      </div>

      <p>
        Projekt łączy AI, przetwarzanie obrazów, Python + PyTorch oraz tworzenie
        aplikacji desktopowych. Może stanowić podstawę systemu do automatycznej
        identyfikacji pojazdów.
      </p>
    </div>
  );
}
