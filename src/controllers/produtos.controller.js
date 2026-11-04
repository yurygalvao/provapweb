export class ProdutosController {
  constructor(produtosService, categoriasService) {
    this.service = produtosService;
    this.categoriasService = categoriasService;
    this.index = this.index.bind(this);
    this.novo = this.novo.bind(this);
    this.criar = this.criar.bind(this);
  }

  async index(req, res) {
    const produtos = await this.service.listar();
    res.render('produtos/index', { titulo: 'Produtos', produtos });
  }

  async novo(req, res) {
    const categorias = await this.categoriasService.listar();
    res.render('produtos/form', { titulo: 'Novo Produto', valores: {}, erros: [], categorias });
  }

  async criar(req, res, next) {
    try {
      await this.service.criar(req.body);
      res.redirect('/produtos');
    } catch (err) {
      if (err.status >= 400 && err.status < 500) {
        const categorias = await this.categoriasService.listar();
        return res.status(err.status).render('produtos/form', {
          titulo: 'Novo Produto',
          valores: req.body,
          erros: [err.message],
          categorias,
        });
      }
      next(err);
    }
  }
}
