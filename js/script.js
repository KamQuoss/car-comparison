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
    hybridCarRoadComb = 7 / 100, // l/km
    effectiveness = document.querySelector('.effectiveness'),
    fuelPrice = document.querySelector('#fuel-price'),
    fuelPriceValue = fuelPrice.value,
    costDifference = document.querySelector('.cost-difference');

setValue = (value, valueContainer) => {
    valueContainer.innerHTML = `<b>${value}</b>`
};

combustionCarCost = () => ((cityValue * combustionCarCityComb) + (roadValue * combustionCarRoadComb)) * fuelPriceValue;

hybridCarCost = () => ((cityValue * hybridCarCityComb) + (roadValue * hybridCarRoadComb)) * fuelPriceValue;

checkCost = () => {
    let difference = Math.abs(Number(hybridCarCost() - combustionCarCost())).toFixed(2);
    costDifference.innerHTML = `${difference} €`

    if (combustionCarCost() == hybridCarCost()) {
        effectiveness.innerHTML = 'no difference';
    } else if (combustionCarCost() > hybridCarCost()) {
        effectiveness.innerHTML = 'hybrid car';
    } else {
        effectiveness.innerHTML = 'combustion car';
    }
};

init = () => {
    setValue(cityValue, cityKm);
    setValue(roadValue, roadKm);
    checkCost();
};

cityRange.addEventListener('input', (e) => {
    cityValue = e.target.value;
    setValue(cityValue, cityKm);
    checkCost()
});
roadRange.addEventListener('input', (e) => {
    roadValue = e.target.value;
    setValue(roadValue, roadKm);
    checkCost()
});
fuelPrice.addEventListener('change', (e) => {
    fuelPriceValue = e.target.value;
    checkCost()
});

init()