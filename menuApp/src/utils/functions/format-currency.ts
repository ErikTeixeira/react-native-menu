// Para formatar o valor em reais

export function formatCurrency (value: number) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}