from tkinter import PIESLICE
from turtle import pos, position
import matplotlib.pyplot as plt
montante = []
periodos =[]

def calcularJuros(pJuros, pMontante):
    pMontante = float(pMontante)
    return pMontante * pJuros / 100

#Verifica a quantidade de periodos e monta uma lista, necessário para o gráfico.
def montarPeriodo():
    contador = 0
    pPeriodos = []
    while (contador < qtdPeriodos):
        pPeriodos.append(contador + 1)
        contador += 1
    return pPeriodos

def realizarFaturamentoComImpressao():
    posicao = 0
    primeiro = True
    valorJuros = calcularJuros(juros, montante[posicao])
    valorFaturado = montante[posicao] + valorJuros + aporte
    while (posicao < len(periodos) -1):
        if(primeiro == True):
            montante[posicao] = valorFaturado
            print(f"Após 1 período(s), o montante será de R${montante[posicao]:.2f}")
            primeiro = False
        else:
            valorJuros = calcularJuros(juros, montante[posicao])
            valorFaturado = montante[posicao] + valorJuros + aporte
            montante.append(valorFaturado)
            posicao += 1
            print(f"Após {len(montante)} período(s), o montante será de R${montante[posicao]:.2f}")

#Entrada de dados
montante.append(float(input("Valor inicial: R$")))
juros = float(input("Rendimento por período (%): "))
aporte = float(input("Aporte a cada período: R$"))
qtdPeriodos = int(input("Total de períodos: "))

#Processamento dos dados
periodos = montarPeriodo()
realizarFaturamentoComImpressao()

#Variável para definição da exibição do grafico 10% maior que o valor final
tamanhoExibicao = montante[len(periodos)-1] *10/100 + montante[len(periodos)-1]

#Exibição do gráfico
plt.plot(periodos,montante)    
plt.xlabel("Período")
plt.ylabel("Faturamento em R$")
plt.axis(ymin=0, ymax=tamanhoExibicao)
plt.show()