# Cómo añadir una nota al blog MAGÍN

Los datos viven separados del diseño. No hace falta tocar la plantilla visual para publicar.

## 1. Dónde se crea una nueva nota

Archivo: `src/data/blog.ts`

- Notas publicables → array `publishedArticles`
- Borradores / estructura del listado → array `draftPosts` (o `status: "draft"`)

La UI lee `blogPosts` automáticamente.

## 2. Campos a completar

| Campo | Obligatorio | Notas |
| --- | --- | --- |
| `id` | sí | Identificador interno estable |
| `slug` | sí si published | URL `/blog/{slug}` |
| `status` | sí | `"draft"` \| `"published"` |
| `section` | sí | `articulos` \| `noticias` \| `contenidos` |
| `category` | sí | Ej. `Tecnología e Innovación` |
| `title` | sí | H1 del artículo |
| `excerpt` | sí | Bajada |
| `publicationDate` | recomendado | ISO `YYYY-MM-DD` |
| `author` | no | Solo si hay autor real aprobado |
| `coverTone` | sí | Fallback visual abstracto |
| `coverImage` | recomendado | Ruta en `/public` |
| `coverAlt` | sí con imagen | Alt descriptivo |
| `imageCaption` / `imageCredit` | opcional | Pie y crédito |
| `coverWidth` / `coverHeight` | recomendado | Evitar CLS (ej. 1280×720) |
| `metaTitle` / `metaDescription` | sí published | SEO |
| `primaryKeyword` / `secondaryKeywords` | editorial | No stuffing en el texto |
| `content` | sí published | Bloques `p` / `h2` / `h3` / `pLink` |
| `relatedArticles` | opcional | Array de slugs published |
| `relatedSolution` | opcional | `{ label, href, cta? }` |
| `featured` | opcional | Destacado en `/blog` |

## 3. Dónde colocar la fototitular

1. Guardar el archivo en `public/blog/covers/`
2. Nombre preferible = slug, ej. `mi-nota.svg` o `.jpg` / `.webp`
3. En la nota: `coverImage: "/blog/covers/mi-nota.webp"`
4. Completar `coverAlt`, `coverWidth`, `coverHeight`
5. Si es placeholder, indícalo en `imageCaption` (no presentarlo como evidencia de cliente)

## 4. Cómo se define el slug

- Minúsculas, sin tildes, guiones, descriptivo
- Ejemplo: `gamificacion-capacitacion-empresarial`
- No cambiarlo tras publicar salvo necesidad real

## 5. Publicar o dejar en borrador

- Borrador: `status: "draft"` → aparece como estructura en el listado, **sin URL**, **fuera del sitemap**
- Publicado: `status: "published"` + `slug` + `content` → genera `/blog/[slug]`, entra al sitemap y las tarjetas enlazan

## 6. SEO de la nota

Completar en el mismo objeto:

- `metaTitle`
- `metaDescription`
- `primaryKeyword` / `secondaryKeywords`
- `coverImage` (Open Graph)
- `publicationDate` (BlogPosting JSON-LD)

`generateMetadata` en `src/app/blog/[slug]/page.tsx` y `BlogPostingJsonLd` lo leen automáticamente.

## Recorrido esperado

`/blog` → clic en tarjeta published → `/blog/{slug}` → título, bajada, fototitular, cuerpo H2/H3, solución relacionada, CTA.
