import z from "zod"

export const createProductSchema = z.object({
    body: z.object({
        name: z.string({required_error: "ERRO! nome do produto é obrigatório"}).min(1, "ERRO! Nome do produto não pode ser vazio"),
        price: z.number({required_error: "ERRO! preço do produto é obrigatório"}).nonnegative("ERRO! Preço não pode ser negativo").gt(0, "ERRO! Preço não pode ser zero")
    })
});