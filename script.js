const calculat = document.getElementById('Calculat');
const showError = document.getElementById('show-error')

// calculat The Total In Column
function calculatTheTotalInColumn(column, coef){
    const sum=0 ;

    for(let i=1; i<=4; i++){
        if(document.getElementById(`C${column}L${i}`).value < 0){
           showError.className="haid";
           break;
        }
    }

    for(let i=1; i<=4; i++){
        const valu = parseFloat(document.getElementById(`C${column}L${i}`).value);
        sum = sum + valu;
    }
    return sum*coef;
}

// event listener
calculat.addEventListener('submit', function(e){
    
    
    a = calculatTheTotalInColumn(1,0.5);
    b = calculatTheTotalInColumn(2,0.7);
    c = calculatTheTotalInColumn(3,1);
    d = calculatTheTotalInColumn(4,1.5);
    console.log(typeof(calculatTheTotalInColumn()))
    console.log(a)

    const total = sum(a,b,c,d);
    console.log(`Total egal = ${total}`)
    e.preventDefault();
})