### Exercício: Cálculo do preço total de uma compra

Escreva uma função em JavaScript chamada `calcularPrecoTotal` que recebe dois parâmetros: `precoUnitario` e `quantidade`, representando o preço unitário de um produto e a quantidade desse produto a ser comprada, respectivamente.

Esta função deve calcular o preço total da compra, levando em consideração as seguintes regras:

- Se o subtotal da compra (preço unitário multiplicado pela quantidade) for superior a R$ 100, um desconto de 10% deverá ser aplicado sobre o subtotal.
- Caso contrário, nenhum desconto será aplicado.

Utilize as seguintes instruções para realizar este exercício:

- Utilize a palavra-chave `function` para definir a função `calcularPrecoTotal`.
- Declare a constante `TAXA_DESCONTO` com o valor de 0.1 (representando 10% de desconto).
- Utilize `let` para declarar as variáveis `subtotal` e `desconto`, pois seus valores podem ser alterados.
- Utilize `var` para declarar as variáveis `precoUnitario` e `quantidade`.
- A função deve retornar o preço final da compra após aplicar os descontos, se houver.

Ao final do enunciado, sugere-se um exemplo de uso da função, conforme mostrado no código JavaScript fornecido.
