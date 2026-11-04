import { body, validationResult } from 'express-validator';

export const regrasCategoria = [
  body('nome').notEmpty().withMessage('O nome da categoria é obrigatório.'),
];

export const regrasProduto = [
  body('nome').notEmpty().withMessage('O nome do produto é obrigatório.'),
  body('preco').isFloat({ gt: 0 }).withMessage('O preço deve ser maior que zero.'),
  body('categoriaId').notEmpty().withMessage('Selecione uma categoria.'),
];

export function verificar(view, montarDadosDaView = async () => ({})) {
  return async (req, res, next) => {
    const resultado = validationResult(req);
    if (resultado.isEmpty()) return next();

    const erros = resultado.array().map(e => e.msg);
    const dadosExtras = await montarDadosDaView(req);

    return res.status(422).render(view, {
      titulo: 'Preencha os campos corretamente',
      valores: req.body,
      erros,
      ...dadosExtras,
    });
  };
}
