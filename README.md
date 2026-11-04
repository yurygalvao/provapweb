# Prova Prática — Catálogo (Categoria 1-N Produto)

> ## Observação sobre a entrega — Yury Galvão
>
> No commit `Rotas e telas` (03/11, 20:21) subiu por engano só o arquivo
> `src/views/categorias/form.ejs`. O restante do código, feito durante a prova, foi
> enviado depois, sem alterações, em commits separados por camada
> (`Repository`, `Prisma`, `Service`, `Controller`, `Routes`, `Views`,
> `Dependencias`), entre 21:29 e 21:33 do mesmo dia.
>
> Commits feitos durante a prova (horário de Brasília, 03/11/2026):
>
> | Horário  | Registro |
> |----------|----------|
> | 20:03:59 | Commit `Schema prisma` (`75e568e`) com `prisma/schema.prisma` (Categoria, Produto e relacionamento 1-N) |
> | 20:21:53 | Commit `Rotas e telas` (`8711948`), mas só com `src/views/categorias/form.ejs` |
>
> Caso não seja possível considerar a entrega completa, tudo bem: o erro foi meu,
> por falta de atenção. Peço que considere pelo menos o commit `Schema prisma`.

Você recebe este **esqueleto já configurado** (Express + EJS + middlewares + layout).
Seu trabalho é **preencher os módulos marcados com comentários/`TODO`** e **modelar o
banco** com Prisma, implementando um CRUD das **duas entidades** com o relacionamento
**1-N** (uma Categoria tem vários Produtos).

## Primeiros passos

```bash
npm install                    # instala as dependências (já listadas)
cp .env.example .env           # DATABASE_URL="file:./dev.db"
# 1) modele prisma/schema.prisma (as duas entidades e o relacionamento)
npx prisma migrate dev --name init   # cria o banco e gera o Prisma Client
npm run dev                    # http://localhost:3000
```

> O servidor **sobe** assim que você roda `npm run dev` — mas as páginas só
> funcionam conforme você implementa os módulos. Comece pelo schema + migração.

## Onde trabalhar (procure os comentários e `TODO`)

- `prisma/schema.prisma` — **modele** Categoria e Produto e o relacionamento 1-N.
- `src/repositories/*.prisma.js` — acesso ao banco (Prisma).
- `src/services/*.service.js` — regras de negócio e validações.
- `src/middlewares/validacao.middleware.js` — validação dos formulários.
- `src/controllers/*.controller.js` — renderização das telas (SSR) + redirecionamentos.
- `src/routes/index.js` — composition root + rotas.
- `src/views/categorias/*.ejs` e `src/views/produtos/*.ejs` — as telas.

## Autocorreção

Com o servidor no ar, em outro terminal:

```bash
BASE_URL=http://localhost:3000 node autograder/check.mjs
```

O autograder mostra sua nota e o que falta. Rode quantas vezes quiser.
