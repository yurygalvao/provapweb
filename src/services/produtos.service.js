import { AppError } from '../utils/appError.js';

export class ProdutosService {
  constructor(produtosRepository, categoriasRepository) {
    this.repo = produtosRepository;
    this.categoriasRepo = categoriasRepository;
  }

  async listar() {
    return this.repo.listar();
  }

  async criar(dados) {
    if (!dados.nome || dados.nome.trim() === '') {
      throw new AppError('O nome do produto é obrigatório.', 400);
    }

    const preco = parseFloat(dados.preco);
    if (isNaN(preco) || preco <= 0) {
      throw new AppError('O preço deve ser maior que zero.', 400);
    }

    const categoriaId = parseInt(dados.categoriaId);
    const categoria = await this.categoriasRepo.buscarPorId(categoriaId);
    if (!categoria) {
      throw new AppError('A categoria informada não existe.', 422);
    }

    return this.repo.criar({ nome: dados.nome.trim(), preco, categoriaId });
  }
}
