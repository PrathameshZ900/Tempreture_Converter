// const calculateTemp = () => {
//     const inputTemp = document.getElementById("temp").value;
//     const tempSelected = document.getElementById("temp_diff");
//     const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

//     // Celsius to Fahrenheit 
//     const celToFah = (cel) => {
//         let fahrenheit =((cel * 9/5)+32).toFixed(1);
//         return fahrenheit;

//     }

//     // Fahrenheit to Celsius
//     const fahToCel = (fah) => {
//         let celsius = ((fah - 32) * 5 / 9).toFixed(1);
//         return celsius;
//     }
//     if(valueTemp == "cel" ) {
//         const newLocal = document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";

//     }
//     else{
//         document.getElementById("result").innerHTML = `${fahToCel(inputTemp)}&#176; Celsius`
//     }
// }


const calculateTemp = () => {
    const inputTemp = parseFloat(document.getElementById("temp").value);
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        return ((cel * 9/5) + 32).toFixed(1) + "&#176; Fahrenheit";
    }

    const fahToCel = (fah) => {
        return ((fah - 32) * 5 / 9).toFixed(1) + "&#176; Celsius";
    }
    
    const kalToCel = (kel) => {
        const celsius = (kel - 273.15).toFixed(1);
        return celsius + "° Celsius";
    }

    const resultElement = document.getElementById("result");
    if (valueTemp === "cel") {
        resultElement.innerHTML = celToFah(inputTemp);
    } else if(valueTemp === "fah") {
        resultElement.innerHTML = fahToCel(inputTemp);
    }else{
        resultElement.innerHTML = kalToCel(inputTemp)
    }
}