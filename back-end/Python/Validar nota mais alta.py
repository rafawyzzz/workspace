# coding: utf-8

tabelaClassificacao = []
qtdParticipantes = 0  
#Retornar true ou false para uma conversão para inteiro afim de validar se a conversão é possível.
def isNumber(value):
    try:
         float(value)
    except ValueError:
         return False
    return True


#Retornar true ou false para uma conversão para string afim de validar se a conversão é possível.
def isStr(value):
    try:
         str(value)
    except ValueError:
         return False
    return True


#Valida a entrada de dado do campo nome
def validarNome(pNome):
    
        if(isNumber(pNome) == False and isStr(pNome) == True): 
            return str(pNome)
        else:
            pNome = input("Nome invalidado, informe um nome somente com letras, sem caracteres simbólicos: ") 
            validarNome(pNome)

#Valida a entrada de dado do campo nota
def validarNota(pNota):       
    
        if(isNumber(pNota) == False):
            pNota = input(f"Nota invalida, informe a nota do {qtdParticipantes+1}° participante somente com numeros: ")
            return validarNota(pNota)
            
        elif(isNumber(pNota) == True):
            if(float(pNota) >= 0 and float(pNota) <= 10):
                return float(pNota)
            else:
                pNota = input(f"Nota invalida, a nota do {qtdParticipantes+1}° participante devera ser de 0 até 10: ")
                return validarNota(pNota)
                
        else:
            pNota = input(f"Nota invalida, informe a nota do {qtdParticipantes+1}° participante somente com numeros: ")
            return validarNota(pNota)    

#Exibe o vencedor
def exibirVencedor(pClassificacao):
    nomeVencedor = "nome"
    notaVencedor = 0.0
    for classificado in pClassificacao:
        if(classificado[1] > notaVencedor):
            nomeVencedor = classificado[0]
            notaVencedor = float(classificado[1])           
    print(f"O(a) vencedor(a) foi {nomeVencedor} com nota {notaVencedor:.2f}!")

#Esta dá possibilidade de visualizar o resultado sem que a aplicação encerre e possibilidade de recomeço como também encerramento.
def start(pControle):
    global qtdParticipantes
    global tabelaClassificacao
    if(pControle == "iniciar"):
        while (qtdParticipantes < 5):
            nome = validarNome(input(f"Informe o nome do {qtdParticipantes+1}° participante: "))
            nota = validarNota(input(f"Informe uma nota de 0 até 10 do {qtdParticipantes+1}° participante: "))  
            tabelaClassificacao.append([nome, nota])
            qtdParticipantes += 1  
        exibirVencedor(tabelaClassificacao)
        pControle = input("Digite 'exit' para sair ou 'iniciar' para começar novos registros: ")
        qtdParticipantes = 0
        tabelaClassificacao = []
        start(pControle)
        
    elif(pControle == "exit"):
        return("Encerou")
    else:
        pControle = input("Opção invalida tente novamente. Digite 'exit' para sair ou 'iniciar' para começar novos registros: ")
        qtdParticipantes = 0
        tabelaClassificacao = []
        start(pControle)


#Começo do programa       
start("iniciar")


