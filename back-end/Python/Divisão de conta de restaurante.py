sair = 0
def dividirConsumo(pConsumo, pPessoas, pPercentual):
        totalConsumo = pConsumo + pConsumo * pPercentual / 100
        divisaoConsumo = pConsumo / pPessoas           
        print("O valor total da conta, com a taxa de serviço, será de R$", round(totalConsumo, 2))
        print("Dividindo a conta por ",totalPessoas," pessoa(s), cada pessoa deverá pagar R$", round(divisaoConsumo, 2))

while(sair == 0):
    totalConsumo = float(input("Informe o total do consumo: R$"))
    totalPessoas = int(input("Informe o total de Pessoas:"))
    if(totalPessoas > 0):
        percentualServico = float(input("Informe o percentual da taxa de serviço: %"))
        if(percentualServico > 0 and percentualServico <= 100):
            dividirConsumo(totalConsumo, totalPessoas, percentualServico)
        else:    
            print("Valor inválido!")
            sair = 1
    else:
        print("Valor invalido!")
        sair = 1
