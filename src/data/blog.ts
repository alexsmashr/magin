/**
 * Fuente central de contenido del blog MAGÍN.
 * Añadir notas en `publishedArticles` o `draftPosts`.
 * Ver: docs/BLOG-CONTENIDO.md
 */

export type BlogSection = "articulos" | "noticias" | "contenidos";
export type BlogStatus = "draft" | "published";
export type CoverTone = "strategy" | "media" | "tech" | "process";

export type BlogBlock =
  | { type: "p"; text: string }
  | {
      type: "pLink";
      before: string;
      href: string;
      label: string;
      after: string;
    }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string };

export type BlogPost = {
  id: string;
  slug?: string;
  status: BlogStatus;
  section: BlogSection;
  category: string;
  title: string;
  excerpt: string;
  publicationDate?: string;
  dateLabel?: string;
  author?: string;
  coverTone: CoverTone;
  coverImage?: string;
  coverAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  coverWidth?: number;
  coverHeight?: number;
  featured?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  content?: BlogBlock[];
  relatedArticles?: string[];
  relatedSolution?: {
    label: string;
    href: string;
    cta?: string;
  };
};

const PLACEHOLDER_CAPTION =
  "Ilustración editorial (placeholder). No representa un caso de cliente.";

function editorialCover(tone: CoverTone, alt: string) {
  return {
    coverTone: tone,
    coverImage: `/blog/covers/${tone}.svg`,
    coverAlt: alt,
    imageCaption: PLACEHOLDER_CAPTION,
    imageCredit: "MAGÍN S.R.L.",
    coverWidth: 1280,
    coverHeight: 720,
  } as const;
}

/** Borradores sin URL — reservado para notas incompletas. */
const draftPosts: BlogPost[] = [];

/** Notas published — generan /blog/[slug] y entran al sitemap. */
export const publishedArticles: BlogPost[] = [
  {
    id: "gamificacion-capacitacion-empresarial",
    slug: "gamificacion-capacitacion-empresarial",
    status: "published",
    section: "articulos",
    category: "Tecnología e Innovación",
    title:
      "Gamificación en capacitación empresarial: aplicaciones y posibilidades",
    excerpt:
      "Cómo la gamificación puede aplicarse a procesos de capacitación empresarial y qué posibilidades ofrece para crear experiencias más interactivas.",
    publicationDate: "2026-09-06",
    dateLabel: "6 sep 2026",
    ...editorialCover(
      "tech",
      "Ilustración editorial sobre gamificación en procesos de capacitación empresarial",
    ),
    coverImage: "/blog/covers/gamificacion-capacitacion-empresarial.svg",
    featured: true,
    primaryKeyword: "gamificación en capacitación empresarial",
    secondaryKeywords: [
      "gamificación empresarial",
      "gamificación en empresas",
      "capacitación interactiva",
    ],
    metaTitle: "Gamificación en capacitación empresarial | MAGÍN",
    metaDescription:
      "Conoce cómo la gamificación puede aplicarse a procesos de capacitación empresarial y qué posibilidades ofrece para crear experiencias más interactivas.",
    relatedArticles: [
      "integrar-comunicacion-tecnologia",
      "checklist-lanzamiento-digital",
    ],
    relatedSolution: {
      label: "Tecnología e Innovación",
      href: "/#tecnologia-innovacion",
      cta: "Conoce cómo MAGÍN aborda proyectos de Tecnología e Innovación.",
    },
    content: [
      {
        type: "p",
        text: "La capacitación en las organizaciones ya no se limita a sesiones expositivas. Cada vez más equipos exploran formatos que aumentan la participación, facilitan la práctica y hacen medible el avance. En ese contexto, la gamificación en capacitación empresarial aparece como una vía para diseñar experiencias de aprendizaje más claras e interactivas, sin confundirla con un juego recreativo sin objetivos.",
      },
      {
        type: "h2",
        text: "¿Qué es la gamificación aplicada a la capacitación?",
      },
      {
        type: "p",
        text: "La gamificación aplica mecánicas y dinámicas propias del diseño de juegos a contextos que no son lúdicos por sí mismos. En capacitación empresarial, eso implica traducir objetivos de aprendizaje en recorridos comprensibles: retos, feedback, progreso visible y recompensas alineadas con el desempeño esperado.",
      },
      {
        type: "h2",
        text: "¿Cómo puede utilizarse en una organización?",
      },
      {
        type: "p",
        text: "Las aplicaciones varían según el tamaño del equipo, la cultura interna y el tipo de conocimiento que se quiere transferir.",
      },
      { type: "h3", text: "Procesos de inducción" },
      {
        type: "p",
        text: "La inducción puede fragmentarse en misiones cortas: conocer políticas, recorrer herramientas internas o reconocer actores clave.",
      },
      { type: "h3", text: "Capacitación interna" },
      {
        type: "p",
        text: "Cursos de procesos, seguridad, ventas o uso de sistemas se benefician de ejercicios con feedback inmediato cuando cada reto está anclado a una competencia observable.",
      },
      { type: "h3", text: "Participación y evaluación" },
      {
        type: "p",
        text: "Retos periódicos, tablas de progreso o escenarios de decisión permiten ver comprensión aplicada y sostener la participación a lo largo del tiempo.",
      },
      {
        type: "h2",
        text: "¿Qué tecnologías pueden integrarse?",
      },
      {
        type: "p",
        text: "Según la necesidad pueden combinarse plataformas digitales, contenidos interactivos, experiencias inmersivas, recursos audiovisuales y mecánicas de participación. La tecnología debe elegirse a partir del problema formativo, no al revés.",
      },
      {
        type: "h2",
        text: "¿Cuándo conviene implementar gamificación?",
      },
      {
        type: "p",
        text: "Conviene explorarla cuando hay baja retención, poca práctica real o necesidad de escalar formación. Es menos adecuada si el objetivo aún no está definido o si solo se busca un efecto visual.",
      },
      {
        type: "h2",
        text: "De una necesidad a una solución digital",
      },
      {
        type: "p",
        text: "Pasar de la idea a una solución implica diagnóstico, diseño de experiencia, contenidos y, cuando corresponde, desarrollo tecnológico.",
      },
      {
        type: "pLink",
        before:
          "MAGÍN aborda ese tipo de proyectos desde una mirada integral, como parte de soluciones de ",
        href: "/#tecnologia-innovacion",
        label: "Tecnología e Innovación",
        after: ".",
      },
    ],
  },
  {
    id: "integrar-comunicacion-tecnologia",
    slug: "integrar-comunicacion-tecnologia",
    status: "published",
    section: "articulos",
    category: "Estrategia y Comunicación",
    title: "Cómo integrar comunicación y tecnología en un mismo proyecto",
    excerpt:
      "Una mirada clara a la coordinación entre estrategia, contenido y desarrollo para organizaciones.",
    publicationDate: "2026-09-05",
    dateLabel: "5 sep 2026",
    ...editorialCover(
      "strategy",
      "Ilustración editorial sobre integración de comunicación y tecnología",
    ),
    primaryKeyword: "integrar comunicación y tecnología",
    metaTitle: "Integrar comunicación y tecnología en un proyecto | MAGÍN",
    metaDescription:
      "Claves para coordinar estrategia, contenido y desarrollo cuando un proyecto organizacional combina comunicación y tecnología.",
    relatedArticles: [
      "brief-proyecto-integral",
      "gamificacion-capacitacion-empresarial",
    ],
    relatedSolution: {
      label: "Estrategia y Comunicación",
      href: "/#estrategia-comunicacion",
      cta: "Conoce cómo MAGÍN aborda proyectos de Estrategia y Comunicación.",
    },
    content: [
      {
        type: "p",
        text: "En muchos proyectos institucionales la comunicación y la tecnología se encargan por separado. El resultado suele ser un mensaje claro que no encuentra soporte digital, o una plataforma bien construida que no comunica. Integrar ambas desde el inicio reduce fricción y mejora la coherencia del entregable.",
      },
      {
        type: "h2",
        text: "Por qué conviene planificarlas juntas",
      },
      {
        type: "p",
        text: "Cuando estrategia, contenido y desarrollo comparten el mismo brief, las decisiones se alinean: tono, canales, arquitectura de información y prioridades técnicas. Así se evita rehacer piezas porque “la web no lo permite” o porque “el mensaje no cabe en el formato”.",
      },
      {
        type: "h2",
        text: "Tres puntos de coordinación",
      },
      { type: "h3", text: "Objetivo compartido" },
      {
        type: "p",
        text: "Antes de diseñar o programar, el equipo debe poder explicar qué debe lograr la organización con el proyecto: informar, captar, capacitar, documentar o acompañar un proceso.",
      },
      { type: "h3", text: "Alcance realista" },
      {
        type: "p",
        text: "Definir qué entra en esta etapa y qué queda para después evita sobrecargar la primera entrega. La integración no significa hacerlo todo a la vez; significa que lo que se hace encaja.",
      },
      { type: "h3", text: "Evidencia y criterios" },
      {
        type: "p",
        text: "Acordar cómo se revisará el resultado —claridad del mensaje, usabilidad, accesibilidad, tiempos de carga— ayuda a cerrar sin discusiones improvisadas.",
      },
      {
        type: "h2",
        text: "De la coordinación a la solución",
      },
      {
        type: "pLink",
        before:
          "En MAGÍN esa coordinación forma parte de la línea de ",
        href: "/#estrategia-comunicacion",
        label: "Estrategia y Comunicación",
        after:
          ", articulada con contenido y tecnología según cada necesidad.",
      },
    ],
  },
  {
    id: "brief-proyecto-integral",
    slug: "brief-proyecto-integral",
    status: "published",
    section: "articulos",
    category: "Estrategia y Comunicación",
    title: "Qué hace útil un brief cuando el proyecto es integral",
    excerpt:
      "Definir necesidades, alcance y evidencia antes de diseñar o desarrollar.",
    publicationDate: "2026-09-04",
    dateLabel: "4 sep 2026",
    ...editorialCover(
      "process",
      "Ilustración editorial sobre brief de proyecto integral",
    ),
    primaryKeyword: "brief proyecto integral",
    metaTitle: "Brief útil para un proyecto integral | MAGÍN",
    metaDescription:
      "Qué debe incluir un brief cuando el proyecto combina comunicación, contenidos y tecnología.",
    relatedArticles: [
      "integrar-comunicacion-tecnologia",
      "guia-kickoff-proyecto",
    ],
    relatedSolution: {
      label: "Estrategia y Comunicación",
      href: "/#estrategia-comunicacion",
      cta: "Revisa cómo MAGÍN organiza el inicio de un proyecto.",
    },
    content: [
      {
        type: "p",
        text: "Un brief débil empuja al equipo a improvisar. En proyectos integrales el costo de esa improvisación es alto: se diseñan piezas que no conversan con la plataforma, o se desarrolla una herramienta sin mensaje claro.",
      },
      {
        type: "h2",
        text: "Qué debe responder el brief",
      },
      {
        type: "p",
        text: "Como mínimo: quién es la organización, qué necesidad concreta se atiende, a quién se dirige, qué no debe incluirse y cómo se sabrá que la entrega cumple.",
      },
      {
        type: "h2",
        text: "Elementos que suelen faltar",
      },
      { type: "h3", text: "Restricciones" },
      {
        type: "p",
        text: "Tiempos, marcas, idiomas, accesibilidad, entornos técnicos o aprobaciones internas. Sin restricciones explícitas, el alcance se infla en silencio.",
      },
      { type: "h3", text: "Prioridad de entregables" },
      {
        type: "p",
        text: "Indicar qué es imprescindible en la primera versión y qué puede esperar evita debates tardíos sobre “todo es urgente”.",
      },
      {
        type: "h2",
        text: "Cómo se usa en el proceso",
      },
      {
        type: "pLink",
        before:
          "El brief alimenta el diagnóstico y el diseño de solución. Puedes ver el recorrido general en ",
        href: "/#proceso",
        label: "Cómo trabajamos",
        after: ".",
      },
    ],
  },
  {
    id: "contenido-que-conecta",
    slug: "contenido-que-conecta",
    status: "published",
    section: "articulos",
    category: "Contenido y Diseño",
    title: "Contenido que conecta: de la idea a la pieza publicada",
    excerpt:
      "Criterios para alinear mensaje, formato y canal sin saturar la narrativa.",
    publicationDate: "2026-09-03",
    dateLabel: "3 sep 2026",
    ...editorialCover(
      "media",
      "Ilustración editorial sobre contenido y diseño para organizaciones",
    ),
    primaryKeyword: "contenido que conecta",
    metaTitle: "Contenido que conecta: de la idea a la pieza | MAGÍN",
    metaDescription:
      "Criterios para alinear mensaje, formato y canal en contenidos dirigidos a organizaciones.",
    relatedArticles: [
      "integrar-comunicacion-tecnologia",
      "checklist-lanzamiento-digital",
    ],
    relatedSolution: {
      label: "Contenido y Diseño",
      href: "/#contenido-diseno",
      cta: "Conoce cómo MAGÍN aborda Contenido y Diseño.",
    },
    content: [
      {
        type: "p",
        text: "Publicar más no siempre comunica mejor. Un contenido útil conecta una idea clara con el formato adecuado y el canal donde la audiencia realmente presta atención.",
      },
      {
        type: "h2",
        text: "De la idea al mensaje",
      },
      {
        type: "p",
        text: "Antes de producir, conviene reducir la idea a una frase: qué debe comprender o hacer la persona que lo recibe. Esa frase guía el guion, el diseño y el llamado a la acción.",
      },
      {
        type: "h2",
        text: "Elegir formato con criterio",
      },
      { type: "h3", text: "Audiovisual" },
      {
        type: "p",
        text: "Sirve cuando el procedimiento, el tono humano o la demostración visual aportan más que un texto largo.",
      },
      { type: "h3", text: "Diseño gráfico" },
      {
        type: "p",
        text: "Ordena jerarquías, resume datos y sostiene identidad. Es especialmente útil en piezas de apoyo y síntesis.",
      },
      { type: "h3", text: "Contenido digital" },
      {
        type: "p",
        text: "Artículos, piezas para redes o microcontenidos funcionan cuando el canal y la longitud están pensados para el momento de lectura.",
      },
      {
        type: "h2",
        text: "Publicar sin saturar",
      },
      {
        type: "pLink",
        before:
          "En MAGÍN el contenido se desarrolla dentro de la línea de ",
        href: "/#contenido-diseno",
        label: "Contenido y Diseño",
        after:
          ", integrado a la estrategia del proyecto.",
      },
    ],
  },
  {
    id: "como-trabajamos-sitio",
    slug: "como-trabajamos-sitio",
    status: "published",
    section: "noticias",
    category: "Noticias",
    title: "MAGÍN actualiza la sección Cómo trabajamos en su sitio",
    excerpt:
      "Una explicación más clara del recorrido desde el diagnóstico hasta la implementación.",
    publicationDate: "2026-09-02",
    dateLabel: "2 sep 2026",
    ...editorialCover(
      "process",
      "Ilustración editorial de la sección Cómo trabajamos en el sitio MAGÍN",
    ),
    primaryKeyword: "cómo trabajamos MAGÍN",
    metaTitle: "Actualización: sección Cómo trabajamos | MAGÍN",
    metaDescription:
      "MAGÍN presenta con más claridad el proceso de trabajo en su sitio institucional: del diagnóstico a la implementación.",
    relatedArticles: ["portafolio-sitio-institucional", "guia-kickoff-proyecto"],
    relatedSolution: {
      label: "Cómo trabajamos",
      href: "/#proceso",
      cta: "Revisa el proceso completo en la página institucional.",
    },
    content: [
      {
        type: "p",
        text: "El sitio institucional de MAGÍN incorpora una presentación más clara de Cómo trabajamos. El objetivo es que una organización entienda, sin tecnicismos, qué pasos se siguen al abordar un proyecto.",
      },
      {
        type: "h2",
        text: "Qué cambia en la sección",
      },
      {
        type: "p",
        text: "La sección ordena el recorrido en etapas comprensibles: diagnóstico, definición, diseño, producción, implementación y acompañamiento. Cada etapa se muestra como parte de un mismo proceso, no como servicios aislados.",
      },
      {
        type: "h2",
        text: "Por qué importa para el visitante",
      },
      {
        type: "p",
        text: "Reducir incertidumbre ayuda a preparar una conversación comercial útil: qué información aportar, qué esperar en la primera reunión y cómo se toma una decisión de alcance.",
      },
      {
        type: "h2",
        text: "Ver el proceso",
      },
      {
        type: "pLink",
        before: "Puedes revisar la sección actualizada en ",
        href: "/#proceso",
        label: "Cómo trabajamos",
        after: ".",
      },
    ],
  },
  {
    id: "portafolio-sitio-institucional",
    slug: "portafolio-sitio-institucional",
    status: "published",
    section: "noticias",
    category: "Noticias",
    title: "Nueva estructura de portafolio en la web institucional",
    excerpt:
      "Una vitrina ordenada para evidencia verificable cuando los casos estén aprobados.",
    publicationDate: "2026-09-01",
    dateLabel: "1 sep 2026",
    ...editorialCover(
      "tech",
      "Ilustración editorial de la estructura de portafolio del sitio MAGÍN",
    ),
    primaryKeyword: "portafolio web institucional MAGÍN",
    metaTitle: "Estructura de portafolio en el sitio MAGÍN",
    metaDescription:
      "MAGÍN organiza su portafolio web para mostrar evidencia verificable cuando los proyectos estén aprobados para publicación.",
    relatedArticles: ["cinco-disciplinas-una-oferta", "como-trabajamos-sitio"],
    relatedSolution: {
      label: "Experiencia y proyectos",
      href: "/#portafolio",
      cta: "Explora la sección de experiencia y proyectos.",
    },
    content: [
      {
        type: "p",
        text: "El sitio institucional incluye una estructura de portafolio pensada para evidenciar trabajo real. Mientras los casos definitivos se aprueban, la sección mantiene una presentación clara sin inventar clientes ni resultados.",
      },
      {
        type: "h2",
        text: "Qué busca la estructura",
      },
      {
        type: "p",
        text: "Ordenar proyectos por necesidad y capacidades involucradas, de modo que un visitante entienda cómo se combinan comunicación, contenido y tecnología en un mismo encargo.",
      },
      {
        type: "h2",
        text: "Criterio editorial",
      },
      {
        type: "p",
        text: "Solo se publicarán como evidencia institucional los proyectos verificables y autorizados. Los espacios temporales se identifican como estructura, no como casos cerrados.",
      },
      {
        type: "h2",
        text: "Dónde verlo",
      },
      {
        type: "pLink",
        before: "La sección está disponible en ",
        href: "/#portafolio",
        label: "Experiencia y proyectos",
        after: ".",
      },
    ],
  },
  {
    id: "cinco-disciplinas-una-oferta",
    slug: "cinco-disciplinas-una-oferta",
    status: "published",
    section: "noticias",
    category: "Noticias",
    title: "Las cinco disciplinas, presentadas como una sola oferta",
    excerpt:
      "Marketing, audiovisual, diseño, informática y new media como capacidades integradas.",
    publicationDate: "2026-08-30",
    dateLabel: "30 ago 2026",
    ...editorialCover(
      "media",
      "Ilustración editorial de las cinco capacidades integradas de MAGÍN",
    ),
    primaryKeyword: "cinco disciplinas MAGÍN",
    metaTitle: "Cinco disciplinas, una sola oferta | MAGÍN",
    metaDescription:
      "Cómo MAGÍN presenta Marketing, Audiovisual, Diseño Gráfico, Informática y New Media como capacidades que se combinan en soluciones integrales.",
    relatedArticles: [
      "integrar-comunicacion-tecnologia",
      "portafolio-sitio-institucional",
    ],
    relatedSolution: {
      label: "Soluciones integrales",
      href: "/#soluciones",
      cta: "Conoce las soluciones integrales de MAGÍN.",
    },
    content: [
      {
        type: "p",
        text: "MAGÍN no se presenta como cinco áreas aisladas. Marketing, Audiovisual, Diseño Gráfico, Informática y New Media son capacidades que se combinan según la necesidad del proyecto.",
      },
      {
        type: "h2",
        text: "Tres líneas comerciales",
      },
      {
        type: "p",
        text: "La oferta se organiza en Estrategia y Comunicación, Contenido y Diseño, y Tecnología e Innovación. Las cinco disciplinas alimentan esas líneas; no las reemplazan como cinco empresas distintas.",
      },
      {
        type: "h2",
        text: "Qué implica para un proyecto",
      },
      {
        type: "p",
        text: "Un mismo encargo puede requerir mensaje, piezas audiovisuales y una plataforma. La integración evita que cada disciplina entregue por separado sin una narrativa común.",
      },
      {
        type: "h2",
        text: "Ver la oferta",
      },
      {
        type: "pLink",
        before: "Puedes revisar esta presentación en ",
        href: "/#soluciones",
        label: "Soluciones integrales",
        after: ".",
      },
    ],
  },
  {
    id: "guia-kickoff-proyecto",
    slug: "guia-kickoff-proyecto",
    status: "published",
    section: "contenidos",
    category: "Contenidos",
    title: "Guía breve: preparar un kickoff con foco",
    excerpt: "Preguntas útiles antes de la primera reunión de proyecto.",
    publicationDate: "2026-08-28",
    dateLabel: "28 ago 2026",
    ...editorialCover(
      "process",
      "Ilustración editorial sobre preparación de kickoff de proyecto",
    ),
    primaryKeyword: "kickoff de proyecto",
    metaTitle: "Guía breve para un kickoff con foco | MAGÍN",
    metaDescription:
      "Preguntas útiles para preparar la primera reunión de un proyecto de comunicación, contenidos o tecnología.",
    relatedArticles: ["brief-proyecto-integral", "como-trabajamos-sitio"],
    relatedSolution: {
      label: "Cómo trabajamos",
      href: "/#proceso",
      cta: "Mira cómo MAGÍN organiza el inicio de un proyecto.",
    },
    content: [
      {
        type: "p",
        text: "Un kickoff con foco ahorra semanas. Llegar con respuestas mínimas permite pasar más rápido del contexto a las decisiones de alcance.",
      },
      {
        type: "h2",
        text: "Preguntas para llevar",
      },
      {
        type: "p",
        text: "¿Qué problema queremos resolver? ¿Quién decide? ¿Qué ya existe (marca, contenidos, sistemas)? ¿Qué debe estar listo en la primera entrega?",
      },
      {
        type: "h2",
        text: "Qué no hace falta aún",
      },
      {
        type: "p",
        text: "No es necesario llegar con soluciones cerradas ni con un listado interminable de tareas. Sí ayuda llegar con restricciones claras y ejemplos de referencias visuales o funcionales.",
      },
      {
        type: "h2",
        text: "Siguiente paso",
      },
      {
        type: "pLink",
        before: "Si quieres conversar sobre un proyecto, puedes escribir desde ",
        href: "/#contacto",
        label: "Contacto",
        after: ".",
      },
    ],
  },
  {
    id: "checklist-lanzamiento-digital",
    slug: "checklist-lanzamiento-digital",
    status: "published",
    section: "contenidos",
    category: "Contenidos",
    title: "Checklist de lanzamiento digital",
    excerpt: "Puntos de revisión previos a publicar una pieza o plataforma.",
    publicationDate: "2026-08-26",
    dateLabel: "26 ago 2026",
    ...editorialCover(
      "tech",
      "Ilustración editorial de checklist de lanzamiento digital",
    ),
    primaryKeyword: "checklist lanzamiento digital",
    metaTitle: "Checklist de lanzamiento digital | MAGÍN",
    metaDescription:
      "Puntos de revisión antes de publicar una pieza, campaña o plataforma digital.",
    relatedArticles: [
      "contenido-que-conecta",
      "gamificacion-capacitacion-empresarial",
    ],
    relatedSolution: {
      label: "Tecnología e Innovación",
      href: "/#tecnologia-innovacion",
      cta: "Conoce el enfoque de MAGÍN en proyectos digitales.",
    },
    content: [
      {
        type: "p",
        text: "Antes de publicar conviene una pasada corta y disciplinado. Esta lista no garantiza resultados; ayuda a reducir errores evitables.",
      },
      {
        type: "h2",
        text: "Contenido y mensaje",
      },
      {
        type: "p",
        text: "Revisar ortografía, nombres, datos verificables, enlaces y que el llamado a la acción coincida con el objetivo del proyecto.",
      },
      {
        type: "h2",
        text: "Experiencia y técnica",
      },
      { type: "h3", text: "Escritorio y móvil" },
      {
        type: "p",
        text: "Comprobar lectura, botones y formularios en pantallas reales o emuladas.",
      },
      { type: "h3", text: "Accesibilidad básica" },
      {
        type: "p",
        text: "Textos alternativos, contraste suficiente y foco visible en elementos interactivos.",
      },
      {
        type: "h2",
        text: "Cierre",
      },
      {
        type: "pLink",
        before:
          "Si el lanzamiento forma parte de una solución mayor, revisa también ",
        href: "/#proceso",
        label: "Cómo trabajamos",
        after: ".",
      },
    ],
  },
  {
    id: "glosario-proyecto-integral",
    slug: "glosario-proyecto-integral",
    status: "published",
    section: "contenidos",
    category: "Contenidos",
    title: "Glosario mínimo de un proyecto integral",
    excerpt: "Términos compartidos entre comunicación, diseño y tecnología.",
    publicationDate: "2026-08-24",
    dateLabel: "24 ago 2026",
    ...editorialCover(
      "strategy",
      "Ilustración editorial de glosario de proyecto integral",
    ),
    primaryKeyword: "glosario proyecto integral",
    metaTitle: "Glosario mínimo de un proyecto integral | MAGÍN",
    metaDescription:
      "Términos compartidos para alinear comunicación, diseño y tecnología en un mismo proyecto.",
    relatedArticles: [
      "brief-proyecto-integral",
      "integrar-comunicacion-tecnologia",
    ],
    relatedSolution: {
      label: "Soluciones integrales",
      href: "/#soluciones",
      cta: "Explora las soluciones integrales de MAGÍN.",
    },
    content: [
      {
        type: "p",
        text: "Hablar el mismo idioma acelera las decisiones. Este glosario mínimo no es exhaustivo: sirve para alinear equipos mixtos.",
      },
      {
        type: "h2",
        text: "Términos de partida",
      },
      { type: "h3", text: "Brief" },
      {
        type: "p",
        text: "Documento o conversación estructurada que define necesidad, audiencia, alcance y criterios de éxito.",
      },
      { type: "h3", text: "Alcance" },
      {
        type: "p",
        text: "Lo que entra —y lo que no entra— en una etapa concreta del proyecto.",
      },
      { type: "h3", text: "Entregable" },
      {
        type: "p",
        text: "Pieza o funcionalidad concreta que se revisa y se aprueba: guion, diseño, plataforma, campaña, etc.",
      },
      {
        type: "h2",
        text: "Términos de integración",
      },
      {
        type: "p",
        text: "Solución integral: respuesta que combina las capacidades necesarias sin tratarlas como encargos desconectados. Evidencia: material verificable que demuestra el trabajo realizado.",
      },
      {
        type: "h2",
        text: "Seguir explorando",
      },
      {
        type: "pLink",
        before: "Para ver cómo se organizan las capacidades, visita ",
        href: "/#soluciones",
        label: "Soluciones integrales",
        after: ".",
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [...publishedArticles, ...draftPosts];

export function isPublished(post: BlogPost): boolean {
  return post.status === "published" && Boolean(post.slug);
}

export function getPublishedArticles() {
  return blogPosts.filter(isPublished);
}

export function getArticleBySlug(slug: string) {
  return getPublishedArticles().find((p) => p.slug === slug);
}

export function getRelatedArticles(post: BlogPost, limit = 4): BlogPost[] {
  const explicit = (post.relatedArticles ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));

  const seen = new Set<string>([post.id, ...explicit.map((p) => p.id)]);
  const fill: BlogPost[] = [];

  const candidates = [
    ...getPublishedArticles().filter((p) => p.section === post.section),
    ...getPublishedArticles(),
  ];

  for (const candidate of candidates) {
    if (seen.has(candidate.id)) continue;
    seen.add(candidate.id);
    fill.push(candidate);
    if (explicit.length + fill.length >= limit) break;
  }

  return [...explicit, ...fill].slice(0, limit);
}

export function postsBySection(section: BlogSection) {
  return blogPosts.filter((post) => post.section === section);
}

export function getFeaturedPost() {
  return (
    getPublishedArticles().find((post) => post.featured) ??
    getPublishedArticles()[0] ??
    blogPosts[0]
  );
}

export function articleHref(post: BlogPost): string | undefined {
  return isPublished(post) ? `/blog/${post.slug}` : undefined;
}

export function formatPublicationLabel(post: BlogPost): string {
  if (post.dateLabel) return post.dateLabel;
  if (!post.publicationDate) return "Sin fecha";
  const date = new Date(`${post.publicationDate}T12:00:00`);
  return date.toLocaleDateString("es-BO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
