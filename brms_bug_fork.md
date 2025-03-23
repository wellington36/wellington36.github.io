# Phase I (Dia 11/3)
	- Retirar Gaut approximation faz funcionar?
		- Não, mas vou remover para simplificação do codigo
	- O que temos de output da função `log_Z_com_poisson`? Algo anormal?
		- Parece normal: `k = 76; log_Z_terms[k] = -37.3065; log_Z = 0.936743`
	- Muda algo aumentar o epsilon?
		- Não
	- Se trocar mu por log_mu em `target += com_poisson_log_lpmf(Y[n] | mu[n], shape);` muda algo?
		- Erro, estava certo antes.
	- Reduzir o numero de iter e remover funções não usadas muda algo?
		- Reduzir iter não é uma boa ideia, mas mantenho a remoção de funções não usadas
	- Verificar output da função `com_poisson_log_lpmf`, alguma pista?
		- Dos valores, a média = -2.59, o max = -0.59 e o min = -121. Este min tirando a escala log fica ~2.8x10^-53, um pouco estranho mas não me parece justificar o erro.
	- Se pegar uma versão de um dos testes do paper funciona?
		- Same output
	- If I use poisson instead com_poisson and generate the stan code to compare?
		- Nada saltando aos olhos
	- If I remove the for in the model? What happens?
		- Não é possivel pelo shape dos dados.
	- Se eu só somar um número fixo grande de termos na constante de normalização? Funciona?
		- Para fixo em 100 e iter = 1000 temos Intercept = -0.27, para fixo em 1000 e iter = 200 temos Intercept = -0.27 (este ultimo demorou muito, não é plausivel repetir)
	- Se eu usar o bounding-pairs só que somar mais 10 termos da o mesmo resultado?
		- 10, 50, 100 todos dão o mesmo resultado de Intercept = 0, visto com o max
	- Se eu somar um numero aleatorio de termos entre 30-50?
		- Não da pra gerar numeros aleatorios em função do stan
	- Se eu trocar o criterio de parada por a_n >= epsilon?
		- Intercept = -0.07, subindo para a_n>=2*epsilon vai pra zero.


# Phase II (Dia 12/03)
Parece um problema de aproximação numerica porém a mudança de criterio de parada não deveria afetar o resultado. Diferentes criterios de parada, não só o bounding-pairs, são afetados (e.g. a_n > epsilon) com exeção de um número fixo de valores.
	- O que acontece na versão do exemplo no issue 607?
		- ...
	- O que acontece usando só R para rodar o mcmc?
		- Bounding pairs, threshold and fixed funcionam.


# Phase III (Dia 13/03)
Como funciona numa versão do R, esperamos que é algum problema com o stan. Com uma frequencia de algo em torno de 1/20 uma das cadeias roda perfeitamente (normalmente a chair 2)
	- O que acontece the plotar o grafico do mcmc no stan?
		- Constante igual a zero, em casos com epsilon grande pode plotar algo diferente.
	- Consigo verificar as probabilidades de aceitação?
		- Zero em todos os casos. Os parametros accept_stat, stepsize, treedepth, n_leapfrog, divergent e energy estão todos zerados (se o max tem alguma ideia)?
	- Consigo ver a proposta em cada step?
		- Aparentemente não.
	- Se aleatorizar a inicialização?
		- Aparentemente não muda nada.
	- Comparando a saida do Z na versão do stan e na versão só com R, o que temos?
		- Curiosamente, um o log(Z) é positivo no geral e no outro (no stan) temos -608.
	- Comparando a saida do Z na versão do stan com bounding pairs e a fixa, o que temos?
		- Nada muito anormal, só um número muito grande de chamadas da fixa para avaliar a constante de normalização (>3,3milhoes).


# Phase IV (Dia 18/03)
...
	- Usar outro dataset muda algo?
		- Não, o fixo só precisa de um pouco mais de termos.
	- Consigo fazer o dataset inicial rodar aproximando do código do MCMC_COMPoisson?
		- Não rodou


# Phase V (Dia 19/03)
FUDEU, nem o código do bounding pairs da MCMC_COMPoisson está funcionando
	- Mudar versão do "rstan", funciona?
		- Não funcionou nas versões 2.26.23, 2.32.3, 2.32.6 (old version but we have the same error)
	- Mudar versão do "CmdStan", funciona?
		- Não funcionou nas versões 2.36.0 (12/2024), 2.35.0 (06/2024), 2.33.1 (09/2023) e 2.32.0 (04/2023)

# Phase VI (Dia 20/03)
Temos backend = "rstan" e "cmdstanr". No meu pc funciona só com "rstan2.32.7".
	- Testar rstan na maquina virtual, funciona em quais versões?
		- Ultima versão, mas o que importa é o cmdstanr
	- Testando cmdstan em varias versoes alguma funciona?
		- Erro com 2.36.0, 2.35.0, 2.34.1, 2.33.1, 2.32.2. Versões <=2.31.0 não foram possiveis instalar.

# Phase VII (Dia 23/03)
Temos que backend = "rstan" funciona (na ultima versão), porém "cmdstanr" não.
	- O codigo stan gerado pelo fit (quando da certo em apenas uma cadeia) funciona?
		- Não, mesmo erro.
	- Consigo rodar o cmdstanr na maquina virtual?
		- Não, mesmo erro.
	- Pesquisando sobre o erro, tenho alguma pista?
		-
	- Simplificando o código tenho alguma pista?
		- 
