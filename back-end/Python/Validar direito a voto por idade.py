def validarIdade():
    while True:
        try:
            idade = int(input("Informe a idade: "))
        except ValueError:
            print("Somente numeros são aceitos. Tente novamente.")
            validarIdade()
        if (idade <= 0):
            print("Idade invalida! Programa encerrado")    
            break
        if (idade >= 18 and idade < 70):
            print("Eleitor obrigatório.")
        elif (idade >= 16 and idade < 18 or idade >= 70):
            print("Eleitor facultativo.")
        else:
            print("Não tem direito a voto.")

validarIdade()