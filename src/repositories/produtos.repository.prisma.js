import { prisma } from '../config/database.js';

export class ProdutosRepositoryPrisma {
  async listar() {
    return prisma.produto.findMany({ include: { categoria: true } });
  }

  async criar(dados) {
    return prisma.produto.create({ data: dados });
  }
}
