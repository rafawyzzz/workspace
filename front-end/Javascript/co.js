let idade = 0
idade = Number(prompt("Digite uma idade"));

if(idade<18){
 alert(`${idade} menor que 18`)
}
else if (idade >= 18 && idade<= 24){
    alert(`${idade} entre 18 e 24`)
}
else{
    alert(`${idade} maior que 24`)
}