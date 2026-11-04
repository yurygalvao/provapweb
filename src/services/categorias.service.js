import { AppError } from '../utils/appError.js';

export class CategoriasService {
  constructor(categoriasRepository) {
    this.repo = categoriasRepository;
  }

  async listar() {
    return this.repo.listar();
  }

  async criar(dados) {
    if (!dados.nome || dados.nome.trim() === '') {
      throw new AppError('O nome da categoria é obrigatório.', 400);
    }
    return this.repo.criar({ nome: dados.nome.trim() });
  }
}
