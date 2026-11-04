export class CategoriasController {
  constructor(categoriasService) {
    this.service = categoriasService;
    this.index = this.index.bind(this);
    this.nova = this.nova.bind(this);
    this.criar = this.criar.bind(this);
  }

  async index(req, res) {
    const categorias = await this.service.listar();
    res.render('categorias/index', { titulo: 'Categorias', categorias });
  }

  nova(req, res) {
    res.render('categorias/form', { titulo: 'Nova Categoria', valores: {}, erros: [] });
  }

  async criar(req, res, next) {
    try {
      await this.service.criar(req.body);
      res.redirect('/categorias');
    } catch (err) {
      if (err.status >= 400 && err.status < 500) {
        return res.status(err.status).render('categorias/form', {
          titulo: 'Nova Categoria',
          valores: req.body,
          erros: [err.message],
        });
      }
      next(err);
    }
  }
}
