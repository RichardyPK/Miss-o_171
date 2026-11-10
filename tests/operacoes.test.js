// Caucular Desconto
const { calcularDesconto } = require("../src/operacoes.js");

describe("Exercício 1 - calcularDesconto", () => {
    test("deve aplicar 20% de desconto em 100 e retornar 80", () => {
        expect(calcularDesconto(100, 20)).toBe(80);
    });

    test("deve retornar o valor original quando o percentual for 0", () => {
        expect(calcularDesconto(200, 0)).toBe(200);
    });

    test("deve retornar 0 quando o desconto for de 100%", () => {
        expect(calcularDesconto(50, 100)).toBe(0);
    });

    test("deve lançar erro quando o valor for zero ou negativo", () => {
        expect(() => calcularDesconto(0, 10)).toThrow("Dados inválidos");
        expect(() => calcularDesconto(-10, 10)).toThrow("Dados inválidos");
    });

    test("deve lançar erro quando o percentual for negativo ou maior que 100", () => {
        expect(() => calcularDesconto(100, -1)).toThrow("Dados inválidos");
        expect(() => calcularDesconto(100, 101)).toThrow("Dados inválidos");
    });
});

// Verificar Aprovação
const { verificarAprovacao } = require("../src/operacoes.js");

describe("Exercício 2 - verificarAprovacao", () => {
    test("deve aprovar nota acima da média (8)", () => {
        expect(verificarAprovacao(8)).toBe("Aprovado");
    });

    test("deve aprovar nota exatamente no limite (7)", () => {
        expect(verificarAprovacao(7)).toBe("Aprovado");
    });

    test("deve reprovar nota logo abaixo do limite (6.9)", () => {
        expect(verificarAprovacao(6.9)).toBe("Reprovado");
    });

    test("deve aprovar a nota máxima (10) e reprovar a mínima (0)", () => {
        expect(verificarAprovacao(10)).toBe("Aprovado");
        expect(verificarAprovacao(0)).toBe("Reprovado");
    });

    test("deve lançar erro para nota negativa", () => {
        expect(() => verificarAprovacao(-1)).toThrow("Nota inválida");
    });

    test("deve lançar erro para nota acima de 10", () => {
        expect(() => verificarAprovacao(11)).toThrow("Nota inválida");
    });
});

// Validar Cadastro
const { validarCadastro } = require("../src/operacoes.js");

describe("Exercício 3 - validarCadastro", () => {
    test("todos os dados são válidos", () => {
        expect(validarCadastro("Ana Souza", 25, "ana@email.com")).toBe(true);
    });

    test("todos os dados são inválidos", () => {
        expect(validarCadastro("", 10, "emailinvalido")).toBe(false);
    });

    test("o nome está vazio", () => {
        expect(validarCadastro("", 25, "ana@email.com")).toBe(false);
    });

    test("o nome contém apenas espaços", () => {
        expect(validarCadastro("     ", 25, "ana@email.com")).toBe(false);
    });

    test("a idade está vazia", () => {
        expect(validarCadastro("Ana Souza", undefined, "ana@email.com")).toBe(false);
        expect(validarCadastro("Ana Souza", null, "ana@email.com")).toBe(false);
    });

    test("a idade está abaixo do limite permitido", () => {
        expect(validarCadastro("Ana Souza", 17, "ana@email.com")).toBe(false);
    });

    test("a idade está acima do limite permitido", () => {
        expect(validarCadastro("Ana Souza", 101, "ana@email.com")).toBe(false);
    });

    test("o e-mail está vazio", () => {
        expect(validarCadastro("Ana Souza", 25, "")).toBe(false);
    });

    test("o e-mail não contém o caractere @", () => {
        expect(validarCadastro("Ana Souza", 25, "anaemail.com")).toBe(false);
    });

    // Bônus: valores de fronteira
    test("bônus: aceita idades limite 18 e 100", () => {
        expect(validarCadastro("Ana Souza", 18, "ana@email.com")).toBe(true);
        expect(validarCadastro("Ana Souza", 100, "ana@email.com")).toBe(true);
    });
});

// Calcular Frete
const { calcularFrete } = require("../src/operacoes.js");

describe("Exercício 4 - calcularFrete", () => {
    test("Caso 1: compra de 250 e distância 10 -> frete grátis (0)", () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });

    test("Caso 2: compra de 100 e distância 10 -> frete 20", () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });

    test("Caso 3: compra de 200 e distância 5 -> frete grátis (0)", () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });

    test("Caso 4: compra de 0 e distância 10 -> frete 20", () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });

    test("Caso 5: compra negativa (-50) -> lança erro", () => {
        expect(() => calcularFrete(-50, 10)).toThrow("Valores inválidos");
    });

    test("Caso 6: distância negativa (-5) -> lança erro", () => {
        expect(() => calcularFrete(100, -5)).toThrow("Valores inválidos");
    });
});

// Converter Celsius para Fahrenheit
const { converterCelsiusParaFahrenheit } = require("../src/operacoes.js");

describe("Exercício 5 - converterCelsiusParaFahrenheit", () => {
    test("Caso 1: 0 °C -> 32 °F", () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    test("Caso 2: 100 °C -> 212 °F", () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    test("Caso 3: -40 °C -> -40 °F", () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    test("Caso 4: 25 °C -> 77 °F", () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    test('Caso 5: "25" (string) -> lança erro', () => {
        expect(() => converterCelsiusParaFahrenheit("25"))
            .toThrow("A temperatura deve ser numérica");
    });

    test('Caso 6: "abc" (string) -> lança erro', () => {
        expect(() => converterCelsiusParaFahrenheit("abc"))
            .toThrow("A temperatura deve ser numérica");
    });
});

// Calcular Total
const { calcularTotal } = require("../src/operacoes.js");

// Testes A, B e C são os originais (PASSAM).
// O Teste D original FALHA, pois a função lança erro para preço negativo.
// Aqui ele aparece CORRIGIDO (a expectativa passou a ser compatível com a função).

describe("Exercício 6 - calcularTotal", () => {
    test("Teste A: deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    });

    test("Teste B: deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

    test("Teste C: deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });

    test("Teste D (corrigido): deve lançar erro quando o preço for negativo", () => {
        expect(() => calcularTotal(2, -5)).toThrow("Valores inválidos");
    });
});

// Validar Senha
const { validarSenha } = require("../src/operacoes.js");

// Testes A, B e D são os originais (PASSAM).
// O Teste C original FALHA: espera false para 10 caracteres, mas a função retorna true.
// Aqui ele aparece CORRIGIDO.

describe("Exercício 7 - validarSenha", () => {
    test("Teste A: deve aceitar senha com 8 caracteres", () => {
        expect(validarSenha("abc12345")).toBe(true);
    });

    test("Teste B: deve rejeitar senha com menos de 8 caracteres", () => {
        expect(validarSenha("abc123")).toBe(false);
    });

    test("Teste C (corrigido): deve aceitar senha com 10 caracteres", () => {
        expect(validarSenha("abc1234567")).toBe(true);
    });

    test("Teste D: deve aceitar senha com 12 caracteres", () => {
        expect(validarSenha("abc123456789")).toBe(true);
    });

    // Bônus: comprova que a função só verifica o tamanho
    test("bônus: aceita senha só com letras minúsculas (sem número/maiúscula/especial)", () => {
        expect(validarSenha("abcdefgh")).toBe(true);
    });
});

// Verificar Estoque
const { verificarEstoque } = require("../src/operacoes.js");

// Testes A, B, C e E são os originais (PASSAM).
// O Teste D original FALHA: quantidade 0 lança erro, não retorna "Estoque insuficiente".
// Aqui ele aparece CORRIGIDO.

describe("Exercício 8 - verificarEstoque", () => {
    test("Teste A: deve aprovar pedido quando há estoque suficiente", () => {
        expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
    });

    test("Teste B: deve informar estoque insuficiente", () => {
        expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
    });

    test("Teste C: deve aprovar pedido com quantidade igual ao estoque", () => {
        expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
    });

    test("Teste D (corrigido): deve lançar erro para quantidade zero", () => {
        expect(() => verificarEstoque(10, 0)).toThrow("Quantidade inválida");
    });

    test("Teste E: deve lançar erro para quantidade negativa", () => {
        expect(() => verificarEstoque(10, -2)).toThrow("Quantidade inválida");
    });
});

// Caucular Média
const { calcularMedia } = require("../src/operacoes.js");

// Testes 1, 2 e 3 são os originais (PASSAM).
// Testes 4 e 5 originais FALHAM (a função lança erro para notas fora de 0-10).
// Aqui eles aparecem CORRIGIDOS, seguidos de 3 testes novos (item b).

describe("Exercício 9 - calcularMedia", () => {
    test("Teste 1: média de 8 e 6 é 7", () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

    test("Teste 2: média de 10 e 10 é 10", () => {
        expect(calcularMedia(10, 10)).toBe(10);
    });

    test("Teste 3: média de 0 e 8 é 4", () => {
        expect(calcularMedia(0, 8)).toBe(4);
    });

    test("Teste 4 (corrigido): nota1 negativa lança erro", () => {
        expect(() => calcularMedia(-1, 8)).toThrow("Notas inválidas");
    });

    test("Teste 5 (corrigido): nota2 acima de 10 lança erro", () => {
        expect(() => calcularMedia(5, 15)).toThrow("Notas inválidas");
    });

    // ---- Item b) três testes novos ----
    test("Novo 1: média de 0 e 0 é 0 (limite inferior)", () => {
        expect(calcularMedia(0, 0)).toBe(0);
    });

    test("Novo 2: média com resultado decimal (7 e 6 = 6.5)", () => {
        expect(calcularMedia(7, 6)).toBe(6.5);
    });

    test("Novo 3: nota1 acima de 10 e nota2 negativa lançam erro", () => {
        expect(() => calcularMedia(10.1, 5)).toThrow("Notas inválidas");
        expect(() => calcularMedia(5, -0.1)).toThrow("Notas inválidas");
    });
});
