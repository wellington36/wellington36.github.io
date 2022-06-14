<head>
<script type="text/javascript"
  src="https://www.maths.nottingham.ac.uk/plp/pmadw/LaTeXMathML.js">
</script>
</head>

## Aula 8 (Neural Networks - Part I)
#### Linear models para regressão e classificação, são da forma
$$ y(\textbf{x}, \textbf{w}) = f \left( \sum_{j = 1}^{M-1} w_j \phi_j (\textbf{x}) \right) $$
	
#### Neural Networks, seguem os seguintes passos:

1. Dado um conjunto m de vetores de dados de entrada $\textbf{x} = x_1, \ldots, x_n$, construimos uma combinação linear da forma
		
$$ a_j = \sum_{i=1}^n w_{ji}^{(1)} x_i + w_{j 0}^{(1)} $$
		
2. Cada combinação passa por uma função de ativação diferenciavel h
		
$$z_j = h(a_j)$$
		
3. Refazemos o processo de 1 tomando z como o novo x
		
$$ a_k = \sum_{j=1}^m w_{kj}^{(2)} z_j + w_{k 0}^{(2)} $$
		
4. E repetimos o processo ...
