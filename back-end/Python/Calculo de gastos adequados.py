maximoMoradia = 30
maximoEducacao = 20
maximoTransporte = 15

def isNumber(value):
    try:
         float(value)
    except ValueError:
         return False
    return True

def validarEntrada(value):       
    
        if(isNumber(value) == False):
            value = input(f"Valor invalido, informe o valor somente com numeros. Atenção! no caso de uso de vírgula a substitua por ponto: ")
            return validarEntrada(value)
            
        else:
                return float(value)

def calcularGastoMaximoIdeal(pRenda, pPercentual):
   return pRenda * pPercentual / 100

def calcularPercentualGasto(pGasto, pRenda):
    return pGasto * 100 / pRenda

def imprimir(rotulo, pRenda, gastoUtilizado, pPercentual):
    percentualGasto = calcularPercentualGasto(gastoUtilizado, pRenda)
    gastoIdeal = calcularGastoMaximoIdeal(pRenda, pPercentual)
    if(percentualGasto <= pPercentual):
        print(f"Seus gastos totais com {rotulo} comprometem {percentualGasto:.1f}% de sua renda total. O máximo recomendado é de {pPercentual}%. Seus gastos com {rotulo} estão dentro da margem recomendada.")
    else:
        print(f"Seus gastos totais com {rotulo} comprometem {percentualGasto:.1f}% de sua renda total. O máximo recomendado é de {pPercentual}%. Portanto, idealmente, o máximo de sua renda comprometida com moradia deveria ser de até R${gastoIdeal:.2f}.")

def novaConsulta(value):
    if(value == "Nova consulta"):
        print("============================================================================================================")
        processar()     
    elif(value == "Terminar"):
        exit()
    else:
        value = input("Valor Invalido, tente novamente. Para uma nova consulta ditite 'Nova consulta' ou 'Terminar' para encerrar a aplicação: ")
        return novaConsulta(value)

def processar():        
    rendaMensalTotal = validarEntrada(input("Informe sua renda mensal:"))
    gastoTotalMoradia = validarEntrada(input("Informe o gasto total com moradia:"))
    gastoTotalEducacao = validarEntrada(input("Informe o gasto total com educação:"))
    gastoTotalTransporte = validarEntrada(input("Informe o gasto total com transporte:"))
    imprimir("moradia", rendaMensalTotal ,gastoTotalMoradia, maximoMoradia)
    imprimir("educação", rendaMensalTotal ,gastoTotalEducacao, maximoEducacao)
    imprimir("transporte", rendaMensalTotal ,gastoTotalTransporte, maximoTransporte)
    novaConsulta(input("Para uma nova consulta ditite 'Nova consulta' ou 'Terminar' para encerrar a aplicação: "))
    

processar()


