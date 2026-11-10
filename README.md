# Richardy de Oliveira Coutinho

# Questão 1

##  a
Valida os dados (valor > 0 e percentual entre 0 e 100, senão lança "Dados inválidos") e retorna o valor menos o desconto.

## B
|Entada|Saída|
|---|---|
|(100,20)|80|
|(200,0)|200| 
|(50,100)|0|
|(0,10)ou(100,101)|Error|

## C
Testes na seção "Exercício 1" de tests/operacoes.test.js.

# Questão 2

## A
Nota fora de 0 a 10 lança "Nota inválida"; nota maior ou igual a 7 retorna "Aprovado"; senão retorna "Reprovado".

## B

|Entada|Saída|
|---|---|
|8|Aprovado|
|7|Aprovado|
|6.9|Reprovado|
|-1 ou 11|Erro " Nota inválida "|

## C
Testes na seção "Exercício 2" de tests/operacoes.test.js.

## D
Uma só nota de aprovação não prova o limite: se o código usasse > 7, o teste com 10 passaria mesmo assim e o 7 seria reprovado por engano. É preciso testar a fronteira, os extremos e os valores inválidos.
