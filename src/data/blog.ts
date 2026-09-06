export type BlogSection = "articulos" | "noticias" | "contenidos";

export type BlogPost = {
  id: string;
  section: BlogSection;
  title: string;
  excerpt: string;
  dateLabel: string;
  /** Placeholder visual tone until real cover images exist */
  cover: "strategy" | "media" | "tech" | "process";
  featured?: boolean;
  /**
   * Estructura editorial de demostración.
   * Reemplazar por contenidos verificados y aprobados de MAGÍN.
   */
  isPlaceholder: true;
};

/**
 * Placeholders estructurales del blog.
 * NO son artículos ni noticias institucionales publicadas.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "integrar-comunicacion-tecnologia",
    section: "articulos",
    title: "Cómo integrar comunicación y tecnología en un mismo proyecto",
    excerpt:
      "Una mirada clara a la coordinación entre estrategia, contenido y desarrollo para organizaciones.",
    dateLabel: "Estructura",
    cover: "strategy",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "brief-claro",
    section: "articulos",
    title: "Qué hace útil un brief cuando el proyecto es integral",
    excerpt:
      "Definir necesidades, alcance y evidencia antes de diseñar o desarrollar.",
    dateLabel: "Estructura",
    cover: "process",
    isPlaceholder: true,
  },
  {
    id: "contenido-que-conecta",
    section: "articulos",
    title: "Contenido que conecta: de la idea a la pieza publicada",
    excerpt:
      "Criterios para alinear mensaje, formato y canal sin saturar la narrativa.",
    dateLabel: "Estructura",
    cover: "media",
    isPlaceholder: true,
  },
  {
    id: "diseno-sistema",
    section: "articulos",
    title: "Diseño como sistema, no como pieza aislada",
    excerpt:
      "Consistencia visual y jerarquía para interfaces, campañas y entornos digitales.",
    dateLabel: "Estructura",
    cover: "strategy",
    isPlaceholder: true,
  },
  {
    id: "senal-proceso",
    section: "noticias",
    title: "MAGÍN actualiza la sección Cómo trabajamos en su sitio",
    excerpt:
      "Espacio estructural para comunicar el proceso de trabajo de forma más clara.",
    dateLabel: "Estructura",
    cover: "process",
    isPlaceholder: true,
  },
  {
    id: "senal-portafolio",
    section: "noticias",
    title: "Nueva estructura de portafolio en la web institucional",
    excerpt:
      "Una vitrina ordenada para evidencia verificable cuando los casos estén aprobados.",
    dateLabel: "Estructura",
    cover: "tech",
    isPlaceholder: true,
  },
  {
    id: "senal-soluciones",
    section: "noticias",
    title: "Las cinco disciplinas, presentadas como una sola oferta",
    excerpt:
      "Marketing, audiovisual, diseño, informática y new media como capacidades integradas.",
    dateLabel: "Estructura",
    cover: "media",
    isPlaceholder: true,
  },
  {
    id: "senal-contacto",
    section: "noticias",
    title: "Canal claro para iniciar conversación comercial",
    excerpt:
      "El sitio prioriza reducir incertidumbre y facilitar el primer contacto.",
    dateLabel: "Estructura",
    cover: "strategy",
    isPlaceholder: true,
  },
  {
    id: "guia-kickoff",
    section: "contenidos",
    title: "Guía breve: preparar un kickoff con foco",
    excerpt: "Preguntas útiles antes de la primera reunión de proyecto.",
    dateLabel: "Estructura",
    cover: "process",
    isPlaceholder: true,
  },
  {
    id: "checklist-lanzamiento",
    section: "contenidos",
    title: "Checklist de lanzamiento digital",
    excerpt: "Puntos de revisión previos a publicar una pieza o plataforma.",
    dateLabel: "Estructura",
    cover: "tech",
    isPlaceholder: true,
  },
  {
    id: "glosario-integral",
    section: "contenidos",
    title: "Glosario mínimo de un proyecto integral",
    excerpt: "Términos compartidos entre comunicación, diseño y tecnología.",
    dateLabel: "Estructura",
    cover: "strategy",
    isPlaceholder: true,
  },
  {
    id: "lectura-evidencia",
    section: "contenidos",
    title: "Cómo leer evidencia de un caso sin inventar resultados",
    excerpt: "Criterios para presentar antecedentes de forma verificable.",
    dateLabel: "Estructura",
    cover: "media",
    isPlaceholder: true,
  },
];

export function postsBySection(section: BlogSection) {
  return blogPosts.filter((post) => post.section === section);
}

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}
