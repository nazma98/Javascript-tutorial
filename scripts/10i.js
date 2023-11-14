let calculation = localStorage.getItem('calculation') || '';

        displayCalculation();

        function displayCalculation(){
            document.querySelector('.js-display-calculate').innerHTML = calculation;

        }

        function updateCalculate(character){
            calculation += character;
            displayCalculation();
            console.log(calculation);
            localStorage.setItem('calculation', calculation);
            
        }