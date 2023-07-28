const form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const span = document.querySelector('span');
    const p = document.querySelector('p');

    function calculoImc () {
        const peso = document.getElementById('floatingInputPeso').value;
        const altura = document.getElementById('floatingPasswordAltura').value;
        
        const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        let msg;

        if (imc < 18.5) {
            msg = 'Abaixo do Peso'
        }
        else if (imc > 18.5 && imc < 24.9){
            msg = 'Peso Normal';
        } 
        else if (imc > 25 && imc < 29.9){
            msg = 'Acima do Peso';
        } 
        else if (imc > 30 && imc < 34.9){
            msg = 'Obesidade I';
        } 
        else if (imc > 35 && imc < 39.9){
            msg = 'Obesidade II';
        } 
        else if (imc > 40){
            msg = 'Obesidade III';
        } 

        p.appendChild(span);
        span.innerHTML = `Seu imc é ${imc.toFixed(2)}, e sua faixa é ${msg}`;
    }
    calculoImc();

})


// if (imc < 18.5) return msg = 'Abaixo do Peso';
// else if (imc > 18.5 && imc < 24.9) return msg = 'Peso Normal';
// else if (imc > 25 && imc < 29.9) return msg = 'Acima do Peso';
// else if (imc > 30 && imc < 34.9) return msg = 'Obesidade I';
// else if (imc > 35 && imc < 39.9) return msg = 'Obesidade II';
// else if (imc > 40) return msg = 'Obesidade III';


// const form = document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     const span = document.querySelector('span');
//     const p = document.querySelector('p');
  
//     function calculoImc() {
//         const peso = document.getElementById('peso').value;
//         const altura = document.getElementById('altura').value;
  
//         const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
  
//         let msg;
//         if (imc < 18.5) msg = 'Abaixo do Peso';
//         else if (imc >= 18.5 && imc <= 24.9) msg = 'Peso Normal';
//         else if (imc >= 25 && imc <= 29.9) msg = 'Acima do Peso';
//         else if (imc >= 30 && imc <= 34.9) msg = 'Obesidade I';
//         else if (imc >= 35 && imc <= 39.9) msg = 'Obesidade II';
//         else if (imc >= 40) msg = 'Obesidade III';
  
//         p.appendChild(span);
//         span.innerHTML = `Seu IMC é ${imc.toFixed(2)}, e sua faixa é ${msg}`;
//     }
  
//     calculoImc();
// });

  
  
  
  
  
  
  