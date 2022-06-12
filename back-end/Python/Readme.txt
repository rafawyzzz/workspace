Pre-requisitos para exibição do gráfico da questão 4:


1. Uso do interpetrador python venv, no meu caso pois usei o vs code.
	
	1.1 Em caso de erro de permissão na execução da instalação do venv ou código, realizar a seguinte liberação no terminal que será executado o código (Para Windows): 
		- Set-ExecutionPolicy Unrestricted -Scope Process
	
	2.2 Instação do venv (Windows), instalei na pasta raiz onde se encontravam meus códigos.
		1° comando: py -3 -m venv .venv
		2° comando: .venv\scripts\activate
	
	1.3 No caso do vs code após a instalção selecionar o interpetrador do venv. Pode ser realizado através do seguintes passos:
		1º passo: crlt+shift+P ou view > paleta de comandos
		2º passo: Na caixa de dialogo suspensa digitar "python intrepeter"
		3º passo: Selecionar o interpetrador python venv

	**Após os passos acima instalar o matplotlib**
	
2. Instalação da biblioteca "matplotlib" no terminal integrado vs code
	instalação no windows:
		python -m pip install matplotli
	instalação nos demais S.O: Consultar documentação da biblioteca  matplotli.

Video de suporte instalação venv + matplotlib:
https://www.youtube.com/watch?v=QYLCXLQo1Sc
