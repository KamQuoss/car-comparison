// Praca domowa:
// Przygotować kalkulator porównania opłacalności samochodu elektryczny i spalinowy
// Samochód spalinowy spala 5l /100km w trasie a w mieście 8l/100km
// Samochód z napędem hybrydowym spala 7l /100km w trasie a w mieście 4l/100km
// Przygotować kalkulator porównawczy w zależności od ilości km które przejeżdżamy w mieście i na trasie miesięcznie
// Kalkulator oblicza ile pieniędzy wydamy na jeden samochód i na drugi i pokazuje który jest bardziej opłacalny
// wygląd podobny do wyglądu jak na schemacie


// Comb like Combustion
let
    cityRange = document.querySelector('input#city-range'),
    roadRange = document.querySelector('input#road-range'),
    cityValue = cityRange.value,
    roadValue = roadRange.value,
    cityKm = document.querySelector('#city-km'),
    roadKm = document.querySelector('#road-km'),
    combustionCarCityComb = 8 / 100, // l/km
    combustionCarRoadComb = 5 / 100, // l/km
    hybridCarCityComb = 4 / 100, // l/km
    hybridCarRoadComb = 7 / 100; // l/km
    effectiveness = document.querySelector('.effectiveness')


setValue = (value, valueContainer) => {
    valueContainer.innerHTML = value
}

combustionCarCost = () => {
    return (cityValue * combustionCarCityComb) + (roadValue * combustionCarRoadComb)
}

hybridCarCost = () => {
    return (cityValue * hybridCarCityComb) + (roadValue * hybridCarRoadComb)
}

checkCost = () => {
    ( combustionCarCost() > hybridCarCost() ) ? 
    effectiveness.innerHTML = 'hybrid car' :
    effectiveness.innerHTML = 'combustion car'
}

init = () => {
    setValue(cityValue, cityKm);
    setValue(roadValue, roadKm);
    checkCost();
}

cityRange.addEventListener('change', (e) => {
    cityValue = e.target.value;
    setValue(cityValue, cityKm);
    checkCost()
})
roadRange.addEventListener('change', (e) => {
    roadValue = e.target.value
    setValue(roadValue, roadKm);
    checkCost()
})

init()