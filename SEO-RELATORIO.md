# Auditoria e execução de SEO — Vertão Resgate

Data: 17/11/2026. Projeto conectado ao repositório `Matheusszb/vertaoresgate` e publicado automaticamente pela Vercel. A atualização regional foi validada no domínio oficial após o push.

## Missão complementar: guincho em Ipatinga (17/11/2026)

**Estado desta etapa:** alterações implementadas e validadas localmente. A publicação citada acima se refere à etapa regional anterior; esta etapa complementar ainda não foi confirmada no domínio público. Sem acesso aos relatórios históricos do Search Console, não é possível afirmar ganho de posição, impressões ou contatos.

### Intenção de busca e mudanças

| URL | Antes | Agora | Intenção principal |
| --- | --- | --- | --- |
| `/` | Title: `Vertão Resgate \| Reboque Pesado e Destombamento em Ipatinga MG`; description iniciava com a marca | Title: `Guincho em Ipatinga MG \| Reboque Pesado \| Vertão Resgate`; description: `Guincho em Ipatinga/MG com a Vertão Resgate: reboque leve, pesado e extra pesado, destombamento e transporte de máquinas. Solicite atendimento.` | Busca ampla por guincho em Ipatinga, com acesso aos serviços especializados |
| `/atendimento/ipatinga-mg/` | Title: `Reboque Pesado e Destombamento em Ipatinga MG \| Vertão Resgate`; descrição breve de serviços | Title mantido; description: `Base da Vertão Resgate em Ipatinga/MG. Saiba como solicitar reboque de caminhões, destombamento e transporte de máquinas conforme sua necessidade.` | Orientação local sobre tipos de serviço, chamado, destino, carga, acesso e orçamento |

O H1 da home foi mantido: “Reboque pesado, destombamento e transporte em Ipatinga e região”. A introdução e uma resposta visível da home agora explicam o guincho em Ipatinga e apontam para a página local. O botão principal da home abre o WhatsApp com uma mensagem de consulta específica. A página de Ipatinga ganhou orientações sobre auto socorro, reboque de caminhões, destombamento e transporte de máquinas, além de perguntas objetivas. Reboque pesado, destombamento e transporte de máquinas passaram a apontar de volta para essa página por links descritivos. Não foram criadas URLs novas.

Os links de WhatsApp das páginas geradas foram corrigidos para `https://wa.me/5531991579660`, sem o sinal `+` no caminho. Os links de ligação continuam em `tel:+5531991579660`.

Os atributos `alt` da galeria e das imagens da home foram ajustados após inspeção visual dos arquivos. Duas fotos mostram escavadeiras sobre caminhões plataforma; uma mostra uma máquina de construção e outra, um veículo leve. Nenhuma foi descrita como foto tirada em Ipatinga sem comprovação. As fotografias, o CSS e o JavaScript foram preservados. A eventual autorização de uso das fotos ainda depende do proprietário.

O `LocalBusiness` da home e das páginas geradas continua com o mesmo `@id`, telefone, Instagram e dez cidades em `areaServed`. O bairro Caravelas foi acrescentado ao endereço estruturado para corresponder ao endereço visível. O `Service` das páginas regionais recebeu a descrição própria da região e manteve referência ao identificador da empresa. Cada página regional conserva canonical próprio; não foram adicionadas avaliações, horários, preços ou tempos de chegada. O `WebSite`, `WebPage` e `BreadcrumbList` existentes permaneceram.

### Regressão e limites da verificação

- `node --check` de `seo-pages.mjs` e `regional-content.mjs`, `build.mjs` e `vercel-build.mjs`: passaram com Node 18.15.0 disponível nesta máquina.
- Nos HTMLs gerados: 19 páginas, 19 titles únicos, um H1 e canonical correto por página, `index,follow`, JSON-LD parseável com `@id` sem duplicação por página e links internos sem destino ausente.
- Sitemap com as mesmas 19 URLs da versão anterior, igual nas saídas `dist/` e `vercel-dist/`; `robots.txt` continua apontando para ele.
- No servidor local, `/`, `/atendimento/ipatinga-mg/`, `/reboque-pesado/`, `/destombamento/` e `/atendimento/coronel-fabriciano-mg/` responderam HTTP 200; uma URL inexistente respondeu 404.
- H1 da home e texto visível das outras nove páginas regionais iguais aos da versão anterior; apenas seus links de WhatsApp e a descrição do `Service` no JSON-LD mudaram. Os títulos dessas regiões foram mantidos. CSS e JavaScript gerados são idênticos aos anteriores.
- O conteúdo da home e de Ipatinga é distinto e os dois canonicals são próprios. Isso reduz sobreposição de intenção; a ocorrência real de canibalização precisa ser observada no Search Console.
- Não houve medição de LCP, INP, CLS ou TTFB, nem auditoria visual por navegador nesta etapa. Os assets e o cache existente não foram alterados; não se atribui ganho de performance sem medição. Links externos de WhatsApp e telefone foram conferidos no HTML, mas não foi realizada uma conversa ou chamada real.

### Após a publicação

No [Search Console](https://support.google.com/webmasters/answer/10268906?hl=pt-BR), enviar ou reconferir `sitemap.xml`, inspecionar `/` e `/atendimento/ipatinga-mg/` e comparar consultas como “guincho em ipatinga”, “reboque pesado em ipatinga” e “destombamento em ipatinga” por **página**. Registrar cliques, impressões, CTR e posição média em janelas equivalentes antes e depois. Sem dados históricos conectados nesta etapa, a linha de base está pendente. Validar os JSON-LD publicados no [Schema Markup Validator](https://validator.schema.org/) e os recursos elegíveis no [Rich Results Test](https://search.google.com/test/rich-results). Medir Core Web Vitals em celular com dados de campo quando disponíveis.

No Perfil da Empresa no Google, avaliar **“Serviço de reboque” como categoria principal se ela estiver disponível e representar o negócio principal**; escolher apenas categorias pertinentes na lista do perfil, conforme a [orientação oficial de categorias](https://support.google.com/business/answer/7249669?hl=pt-BR). Cadastrar os serviços realmente prestados, com descrições fiéis; o Google permite editar essa lista no [perfil](https://support.google.com/business/answer/9455399?hl=pt-BR). Conferir nome, telefone, domínio oficial, fotos reais e cidades de atendimento. Confirmar se o endereço recebe clientes e atende aos requisitos de sinalização; se não, configurar corretamente como empresa de área de serviço e avaliar a exibição pública do endereço, segundo as [regras do Google](https://support.google.com/business/answer/9157481?hl=pt-BR). Solicitar apenas avaliações autênticas. Não foi feita alteração externa no perfil.

## Diagnóstico confirmado

| Prioridade | Evidência | Tratamento |
| --- | --- | --- |
| P0 | Home com dois blocos de empresa no JSON-LD e um `FAQPage` sem benefício de resultado rico esperado para este negócio | Um grafo único na home, com `LocalBusiness`, `WebSite` e `WebPage` |
| P0 | Dez páginas regionais muito semelhantes; nove estavam com `noindex,follow` | O proprietário confirmou cobertura e todos os serviços nas dez cidades. As páginas ganharam contexto e orientações locais; as nove voltaram ao sitemap e a `index,follow` |
| P1 | Sete páginas de serviços com orientação curta e genérica | Conteúdo específico sobre uso, dados para consulta e perguntas úteis |
| P1 | Cards de serviços da home sem links HTML para as páginas específicas | Seis cards passaram a ter links rastreáveis; os demais não têm página própria |
| P1 | Páginas internas sem CTA fixo em celular | Barra de ligação e WhatsApp nas páginas geradas |
| P1 | Arquivos estáticos públicos com `Cache-Control: public, max-age=0, must-revalidate` | Cabeçalhos de cache no `vercel.json` para assets, CSS e JS |
| P2 | Fontes externas carregadas por `@import` no CSS | Links no HTML com preconnect, mantendo as mesmas famílias e pesos |

O projeto é HTML/CSS/JS estático, com páginas de serviço e região geradas por `seo-pages.mjs`. `build.mjs` produz `dist/`; `vercel-build.mjs` produz `vercel-dist/`. A Vercel usa `vercel.json`. O conteúdo principal está no HTML inicial, sem exigir execução de JavaScript. `robots.txt` permite rastreamento e aponta para o sitemap. As imagens já tinham dimensões e lazy loading abaixo da dobra; o pôster principal já tinha preload e o vídeo era carregado após o início da página. Não houve troca de imagens, cores ou layout.

Em 17/11/2026, os quatro endereços HTTP/HTTPS e www/sem www responderam com redirecionamentos 308 até `https://www.vertaosocorro.com.br/`. Uma URL inexistente respondeu 404. Os assets de produção consultados antes da mudança tinham cache `max-age=0`: imagem principal 357.239 bytes, CSS 16.813 bytes e vídeo 4.585.887 bytes. Após a publicação, a imagem principal respondeu com `max-age=86400` e o CSS com `max-age=3600`.

## Arquivos e URLs

Modificados ao longo do projeto: `seo-pages.mjs`, `seo-content.mjs` (novo), `regional-content.mjs` (novo), `public/index.html`, `public/styles.css`, `public/app.js`, `public/sitemap.xml`, `vercel.json` e este relatório. Não houve mudança de slug ou criação de URL pública.

URLs preservadas: `/`, sete serviços (`/reboque-pesado/`, `/reboque-extra-pesado/`, `/destombamento/`, `/transporte-de-maquinas/`, `/servico-munck/`, `/auxilio-quinta-roda/`, `/transporte-interestadual/`), `/atendimento/` e dez páginas em `/atendimento/{cidade}-mg/`. O sitemap voltou a conter 19 URLs, todas com canonical próprio e `index,follow`. Cada página regional explica o atendimento por deslocamento e oferece orientação ligada à localização; somente Ipatinga é apresentada como base física.

Titles e meta descriptions existentes dos serviços foram preservados quando já eram distintos. A home também manteve seu title e H1, que já cobriam reboque pesado, destombamento e Ipatinga. As páginas geradas têm um H1, canonical, Open Graph e Twitter Card. O `Service` de cada página de serviço referencia o mesmo identificador da empresa; `WebPage`, `WebSite`, `LocalBusiness` e breadcrumbs usam IDs estáveis. Não foram publicados horários, notas, avaliações, capacidade, preços ou prazos sem comprovação.

## Validação efetivamente realizada

- `node --check seo-pages.mjs`, `node --check seo-content.mjs` e `node --check regional-content.mjs`: passaram com Node 22.16.0 temporário.
- `node build.mjs` e `node vercel-build.mjs`: passaram; cada saída contém 19 páginas HTML, e os sitemaps das duas saídas são idênticos.
- Checagem dos 19 HTMLs: um H1 e um canonical por página, titles únicos e JSON-LD parseável. Dezenove URLs no sitemap, nenhuma regional com `noindex,follow` e nenhum link interno de caminho absoluto quebrado.
- Prévia local: `/reboque-pesado/` respondeu HTTP 200. A automação visual do navegador estava indisponível nesta sessão; não houve inspeção por screenshot.
- Produção: a Vercel marcou o commit regional como concluído. Coronel Fabriciano e Belo Horizonte responderam com `index,follow` e conteúdo local novo; o sitemap publicado contém 19 URLs. Na publicação anterior, a home e `/reboque-pesado/` responderam HTTP 200, com seis links de cards, um bloco JSON-LD na home e o novo conteúdo do serviço.
- LCP, INP, CLS, FCP e TTFB não foram medidos antes/depois. Não há resultado Lighthouse ou PageSpeed a declarar. Schema Markup Validator e Rich Results Test ainda precisam ser executados no conteúdo publicado.

## Dependências do proprietário e ações externas

**P0 — cobertura confirmada:** o proprietário confirmou atendimento e todos os serviços nas dez cidades listadas. A base de apoio fechada foi mantida apenas em Ipatinga. Não foram inventadas operações realizadas, tempos de chegada nem novas unidades físicas. Exemplos de ocorrências e fotos continuam pendentes e são opcionais para enriquecer as páginas. Confirmar separadamente se o transporte interestadual anunciado cobre estados e rotas específicos.

**P1 — credibilidade e SEO local:** confirmar a URL oficial do Perfil da Empresa no Google, conferir nome/endereço/telefone no Perfil, Instagram e Bing Places, e atualizar serviços, áreas atendidas e fotos reais. Solicitar avaliações autênticas sem incentivos. Confirmar propriedade das fotografias existentes e obter autorização para estudos de caso sem dados sensíveis. Horário, frota, capacidades e histórico continuam **PENDENTE DE CONFIRMAÇÃO**.

**P1 — medição pós-publicação:** validar os JSON-LD em [Schema Markup Validator](https://validator.schema.org/) e testar recursos elegíveis no [Rich Results Test](https://search.google.com/test/rich-results). Verificar sitemap e cobertura no Google Search Console e Bing Webmaster Tools. Medir Core Web Vitals no PageSpeed Insights e dados de campo quando disponíveis.

**P2 — autoridade e pesquisa:** procurar menções editoriais legítimas de parceiros/fornecedores. A pesquisa exploratória encontrou [ATVJ](https://atvj.com.br/) em proteção para pesados, [IBS Locações](https://ibslokmunck.webnode.page/) e [Ramalho Transportes](https://ramalhotransportes.com.br/) em Munck/movimentação. São serviços parcialmente sobrepostos, não um ranking de concorrentes diretos de destombamento. Oportunidade: publicar exemplos próprios, local e condições de solicitação com provas; não copiar textos.

## Próximos 30, 60 e 90 dias

- **30 dias (P0/P1):** validar sitemap/schema e criar linha de base de consultas, cliques, contatos e Core Web Vitals. Conferir o desempenho das dez páginas regionais no Search Console.
- **60 dias (P1):** acrescentar casos e fotos autorizados às páginas regionais quando disponíveis; alinhar Perfil da Empresa, Bing Places e Instagram aos dados oficiais.
- **90 dias (P2):** comparar consultas e contatos qualificados por serviço, revisar conteúdo e links internos, medir desempenho móvel e procurar parcerias editoriais legítimas.

Referências de diretrizes: [sitemaps do Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [política de doorway pages](https://developers.google.com/search/docs/essentials/spam-policies), [mudança de FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes), [configuração de cabeçalhos da Vercel](https://vercel.com/docs/project-configuration/vercel-json).

Referências geográficas usadas nas páginas: [Região Metropolitana do Vale do Aço](https://www.siam.mg.gov.br/sla/download.pdf?idNorma=2148), [BR-381 entre Belo Horizonte e Governador Valadares](https://www.gov.br/antt/pt-br/assuntos/rodovias/novos-projetos-em-rodovias/br-381-mg), [BR-116 em Minas Gerais](https://www.gov.br/dnit/pt-br/assuntos/planejamento-e-pesquisa/desapropriacao-e-reassentamento/mg/br-116/br-116), [BR-262 em Manhuaçu](https://www.gov.br/dnit/pt-br/assuntos/planejamento-e-pesquisa/desapropriacao-e-reassentamento/mg/br-262) e [mapa rodoviário do DNIT](https://www.gov.br/dnit/pt-br/rodovias/mapa-de-gerenciamento/mapas-de-manutencao-janeiro-2025/147-mapa_mg.pdf). Essas fontes identificam vias e cidades; não comprovam operações específicas da empresa.
