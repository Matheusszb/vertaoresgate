# Auditoria e execução de SEO — Vertão Resgate

Data: 17/11/2026. Escopo: checkout local; produção em Vercel não foi publicada nesta execução.

## Diagnóstico confirmado

| Prioridade | Evidência | Tratamento |
| --- | --- | --- |
| P0 | Home com dois blocos de empresa no JSON-LD e um `FAQPage` sem benefício de resultado rico esperado para este negócio | Um grafo único na home, com `LocalBusiness`, `WebSite` e `WebPage` |
| P0 | Dez páginas regionais muito semelhantes; nove sem dados próprios suficientes | URLs preservadas; nove páginas fora do sitemap e com `noindex,follow` até terem conteúdo comprovado |
| P1 | Sete páginas de serviços com orientação curta e genérica | Conteúdo específico sobre uso, dados para consulta e perguntas úteis |
| P1 | Cards de serviços da home sem links HTML para as páginas específicas | Seis cards passaram a ter links rastreáveis; os demais não têm página própria |
| P1 | Páginas internas sem CTA fixo em celular | Barra de ligação e WhatsApp nas páginas geradas |
| P1 | Arquivos estáticos públicos com `Cache-Control: public, max-age=0, must-revalidate` | Cabeçalhos de cache no `vercel.json` para assets, CSS e JS |
| P2 | Fontes externas carregadas por `@import` no CSS | Links no HTML com preconnect, mantendo as mesmas famílias e pesos |

O projeto é HTML/CSS/JS estático, com páginas de serviço e região geradas por `seo-pages.mjs`. `build.mjs` produz `dist/`; `vercel-build.mjs` produz `vercel-dist/`. A Vercel usa `vercel.json`. O conteúdo principal está no HTML inicial, sem exigir execução de JavaScript. `robots.txt` permite rastreamento e aponta para o sitemap. As imagens já tinham dimensões e lazy loading abaixo da dobra; o pôster principal já tinha preload e o vídeo era carregado após o início da página. Não houve troca de imagens, cores ou layout.

Em 17/11/2026, os quatro endereços HTTP/HTTPS e www/sem www responderam com redirecionamentos 308 até `https://www.vertaosocorro.com.br/`. Uma URL inexistente respondeu 404. Os assets de produção consultados antes da mudança tinham cache `max-age=0`: imagem principal 357.239 bytes, CSS 16.813 bytes e vídeo 4.585.887 bytes. Os novos cabeçalhos só poderão ser verificados após publicação.

## Arquivos e URLs

Modificados: `seo-pages.mjs`, `seo-content.mjs` (novo), `public/index.html`, `public/styles.css`, `public/app.js`, `public/sitemap.xml`, `vercel.json` e este relatório. Não houve mudança de slug ou criação de URL pública.

URLs preservadas: `/`, sete serviços (`/reboque-pesado/`, `/reboque-extra-pesado/`, `/destombamento/`, `/transporte-de-maquinas/`, `/servico-munck/`, `/auxilio-quinta-roda/`, `/transporte-interestadual/`), `/atendimento/` e dez páginas em `/atendimento/{cidade}-mg/`. O sitemap passou de 19 para 10 URLs: home, sete serviços, hub de atendimento e Ipatinga. As outras nove páginas regionais continuam acessíveis para usuários, com canonical próprio e `noindex,follow`. A decisão pode ser revista assim que houver dados locais únicos e confirmados.

Titles e meta descriptions existentes dos serviços foram preservados quando já eram distintos. A home também manteve seu title e H1, que já cobriam reboque pesado, destombamento e Ipatinga. As páginas geradas têm um H1, canonical, Open Graph e Twitter Card. O `Service` de cada página de serviço referencia o mesmo identificador da empresa; `WebPage`, `WebSite`, `LocalBusiness` e breadcrumbs usam IDs estáveis. Não foram publicados horários, notas, avaliações, capacidade, preços ou prazos sem comprovação.

## Validação efetivamente realizada

- `node --check seo-pages.mjs` e `node --check seo-content.mjs`: passaram com Node 22.16.0 temporário.
- `node build.mjs` e `node vercel-build.mjs`: passaram; cada saída contém 19 páginas HTML, e os sitemaps das duas saídas são idênticos.
- Checagem dos 19 HTMLs: um H1 e um canonical por página, titles únicos e JSON-LD parseável. Dez URLs no sitemap, nove regionais com `noindex,follow`, nenhum link interno de caminho absoluto quebrado.
- Prévia local: `/reboque-pesado/` respondeu HTTP 200. A automação visual do navegador estava indisponível nesta sessão; não houve inspeção por screenshot.
- LCP, INP, CLS, FCP e TTFB não foram medidos antes/depois. Não há resultado Lighthouse ou PageSpeed a declarar. Schema Markup Validator e Rich Results Test ainda precisam ser executados no conteúdo publicado.

## Dependências do proprietário e ações externas

**P0 — confirmar antes de promover páginas regionais:** cidades realmente atendidas, tipo de atendimento por cidade, rotas, operações documentadas e fotos com autorização. Confirmar também se o transporte interestadual anunciado no site cobre estados/rotas específicos. As nove páginas com pouco conteúdo devem receber material próprio verificável ou ser consolidadas no hub.

**P1 — credibilidade e SEO local:** confirmar a URL oficial do Perfil da Empresa no Google, conferir nome/endereço/telefone no Perfil, Instagram e Bing Places, e atualizar serviços, áreas atendidas e fotos reais. Solicitar avaliações autênticas sem incentivos. Confirmar propriedade das fotografias existentes e obter autorização para estudos de caso sem dados sensíveis. Horário, frota, capacidades e histórico continuam **PENDENTE DE CONFIRMAÇÃO**.

**P1 — publicação e medição:** publicar o build na Vercel, verificar os cabeçalhos de cache, repetir checagens das URLs em produção, validar os JSON-LD em [Schema Markup Validator](https://validator.schema.org/) e testar recursos elegíveis no [Rich Results Test](https://search.google.com/test/rich-results). Verificar sitemap e cobertura no Google Search Console e Bing Webmaster Tools. Medir Core Web Vitals no PageSpeed Insights e dados de campo quando disponíveis.

**P2 — autoridade e pesquisa:** procurar menções editoriais legítimas de parceiros/fornecedores. A pesquisa exploratória encontrou [ATVJ](https://atvj.com.br/) em proteção para pesados, [IBS Locações](https://ibslokmunck.webnode.page/) e [Ramalho Transportes](https://ramalhotransportes.com.br/) em Munck/movimentação. São serviços parcialmente sobrepostos, não um ranking de concorrentes diretos de destombamento. Oportunidade: publicar exemplos próprios, local e condições de solicitação com provas; não copiar textos.

## Próximos 30, 60 e 90 dias

- **30 dias (P0/P1):** confirmar cobertura e provas regionais, publicar, validar sitemap/schema e criar linha de base de consultas, cliques, contatos e Core Web Vitals.
- **60 dias (P1):** aprofundar apenas páginas regionais com material exclusivo e cases autorizados; alinhar Perfil da Empresa, Bing Places e Instagram aos dados oficiais.
- **90 dias (P2):** comparar consultas e contatos qualificados por serviço, revisar conteúdo e links internos, medir desempenho móvel e procurar parcerias editoriais legítimas.

Referências de diretrizes: [sitemaps do Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [política de doorway pages](https://developers.google.com/search/docs/essentials/spam-policies), [mudança de FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes), [configuração de cabeçalhos da Vercel](https://vercel.com/docs/project-configuration/vercel-json).
