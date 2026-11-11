# Richardy de Oliveira Coutinho
# Missão 171 - Testes Unitários


# Questão 1

## A)
Valida os dados (valor > 0 e percentual entre 0 e 100, senão lança "Dados inválidos") e retorna o valor menos o desconto.

## B)
|Entada|Saída|
|---|---|
|100,20|80|
|200,0|200| 
|50,100|0|
|0,10 ou 100,101|Error|

## C)
Testes na seção "Exercício 1" de tests/operacoes.test.js.

# Questão 2

## A)
Nota fora de 0 a 10 lança "Nota inválida"; nota maior ou igual a 7 retorna "Aprovado"; senão retorna "Reprovado".

## B)
|Entada|Saída|
|---|---|
|8|Aprovado|
|7|Aprovado|
|6.9|Reprovado|
|-1 ou 11|Erro " Nota inválida "|

## C)
Testes na seção "Exercício 2" de tests/operacoes.test.js.

## D)
Uma só nota de aprovação não prova o limite: se o código usasse > 7, o teste com 10 passaria mesmo assim e o 7 seria reprovado por engano. É preciso testar a fronteira, os extremos e os valores inválidos.

# Questão 3

## A)
Nome preenchido sem ser só espaços, idade entre 18 e 100 e e-mail com @.

## B)
Testes na seção "Exercício 3" de tests/operacoes.test.js 9 casos mais 1 bônus.

## C)
Retorna false: basta um dado inválido para rejeitar o cadastro.

# Questão 4

## A)
Testes na seção "Exercício 4" de tests/operacoes.test.js 6 casos da tabela.

## B)
A regra é frete grátis para compras de R$ 200 ou mais. O valor 200 está exatamente no limite e o >= o inclui.

# Quetão 5 

## A) 
Testes na seção "Exercício 5" de tests/operacoes.test.js 6 casos da tabela.

## B)
A função valida o tipo (typeof !== "number") e "25" é string. Isso evita conversões implícitas do javaScript resultados inesperados.

# Questão 6

## A)
Testes unitários verificam automaticamente a menor parte do sistema (uma função), de forma isolada. Detectam erros cedo, dão segurança para alterar o código e documentam o comportamento esperado.

## B)
|Teste|Resultado|Motivo|
|---|---|---|
|A|Passa|3 x 10 = 30.|
|B|Passa|0 x 10 = 0,zero não é negativo.|
|C|Passa|Quantidade negativa lança erro.|
|D|Falha|Preço negativo lança erro, não retorna -10|

## C)
Teste D: espera -10, mas a fução proíbe preço negativo, deveria usar o toThorow.

# Questão 7 

## A)
|Teste|Resultado|Motivo|
|---|---|---|
|A|Passa|8 caracteres retorna true.|
|B|Passa|6 caracteres retorna false.|
|C|Falha|10 caracteres retorna true, mas o teste espera false.|
|D|Passa|12 caracteres retorna true.|

## B)
O teste C falha porque a função valida se a senha tem 8 ou mais caracteres, mas o teste espera que 10 caracteres retorne false. O teste está errado, deveria esperar true.

## C) 
Não. A função só verifica o tamanho mínimo; "abcdefgh" é aceita.

# 8 

## A) 
|Teste|Resultado|Motivo|
|---|---|---|
|A|Passa|5 não é maior que 20, retorna aprovada.|
|B|Passa|10 é maior que 5, retorna insulficiente.|
|C|Passa|10>10 é falso, retorna aprovado.|
|D|Falha|Quantidade 0 lança erro, não retorna "insulficiente".|
|E|Passa|Quantidade negativa lança erro.|

## B)
A falha de estoque só ocorre com quantidade  maior que estoque . com valores iguais ainda há unidades suficientes.

## C)
O teste D espera um retorno, mas quantidade 0 é entrada inválida e lança "Quantidade inválida".

# Questão 9

## A)
|Teste|Resultado|Motivo|
|---|---|---|
|1|Passa|(8 + 6) / 2 = 7|
|2|Passa|(10 + 10 ) / 2 = 10|
|3|Passa|(0 + 8 ) / 2 = 4|
|4|Falha|-1 é inválido, laça erro |
|5|Falha|15 é inválido, lança erro |

## B)
Três testes novos na seção "Exercício 9" de tests/operacoes.test.js:
|Entrada|Saída Esperada|
|---|---|
|0,0|0|
|7,6|6.5|
|(10.1,5) ou (5,-0.1)|Erro "Notas inválidas"|

Data de modificação: 2026-11-11 09:09:00