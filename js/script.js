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
    effectiveness = document.querySelector('.effectiveness'),
    fuelPrice = document.querySelector('#fuel-price'),
    fuelPriceValue = fuelPrice.value,
    costDifference = document.querySelector('.cost-difference')


setValue = (value, valueContainer) => {
    valueContainer.innerHTML = value
}

combustionCarCost = () => {
    return ( (cityValue * combustionCarCityComb) + (roadValue * combustionCarRoadComb) ) * fuelPriceValue
}

hybridCarCost = () => {
    return ( (cityValue * hybridCarCityComb) + (roadValue * hybridCarRoadComb) ) * fuelPriceValue
}

checkCost = () => {
    if ( combustionCarCost() > hybridCarCost() ) {
        effectiveness.innerHTML = 'hybrid car';
        let difference = Number(combustionCarCost() - hybridCarCost()).toFixed(2); 
        costDifference.innerHTML = `${difference} €`
    }
    else {
        effectiveness.innerHTML = 'combustion car';
        let difference = Number(hybridCarCost() - combustionCarCost()).toFixed(2); 
        costDifference.innerHTML = `${difference} €`
    }
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
    roadValue = e.target.value;
    setValue(roadValue, roadKm);
    checkCost()
})
fuelPrice.addEventListener('change', (e) => {
    fuelPriceValue = e.target.value;
    checkCost()
})

init()