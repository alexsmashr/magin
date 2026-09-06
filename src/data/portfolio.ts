export type PortfolioTag = {
  label: string;
  tone: "marketing" | "design" | "dev" | "audiovisual" | "immersive";
};

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  duration: string;
  capabilities: string;
  tags: PortfolioTag[];
  /** Poster visual tone for structural placeholders */
  poster: "web" | "av" | "interactive" | "immersive";
  /**
   * Video de demostración estructural.
   * Reemplazar por el video real del proyecto cuando esté aprobado.
   */
  videoSrc: string;
  /** Placeholder hasta tener casos institucionales verificados */
  isPlaceholder: true;
};

/**
 * Estructura visual del portafolio.
 * NO son casos institucionales verificados de MAGÍN.
 * Se reemplazarán cuando existan proyectos aprobados.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "web-corporativo",
    title: "Sitio web corporativo",
    summary:
      "Plataforma digital clara para presentar una organización y facilitar el contacto.",
    description:
      "Ejemplo de presentación de un sitio web corporativo integral: arquitectura de información, diseño de interfaz y desarrollo orientado a la conversión hacia conversación comercial.",
    year: "—",
    duration: "Vista breve",
    capabilities: "Diseño, Informática, Marketing",
    tags: [
      { label: "Marketing", tone: "marketing" },
      { label: "Diseño Gráfico", tone: "design" },
      { label: "Desarrollo web", tone: "dev" },
    ],
    poster: "web",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    isPlaceholder: true,
  },
  {
    id: "produccion-audiovisual",
    title: "Producción audiovisual",
    summary:
      "Pieza audiovisual para explicar un mensaje con ritmo, imagen y sonido.",
    description:
      "Ejemplo de presentación audiovisual: narrativa, edición y acabado visual para comunicar con claridad el valor de un proyecto o una marca.",
    year: "—",
    duration: "Vista breve",
    capabilities: "Audiovisual, Marketing",
    tags: [
      { label: "Audiovisual", tone: "audiovisual" },
      { label: "Marketing", tone: "marketing" },
    ],
    poster: "av",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    isPlaceholder: true,
  },
  {
    id: "experiencia-interactiva",
    title: "Experiencia interactiva",
    summary:
      "Interfaz y contenido digital para explorar una idea de forma dinámica.",
    description:
      "Ejemplo de experiencia interactiva: combinación de diseño, contenido y tecnología para que el usuario comprenda y explore un concepto con fluidez.",
    year: "—",
    duration: "Vista breve",
    capabilities: "New Media, Diseño, Informática",
    tags: [
      { label: "Diseño Gráfico", tone: "design" },
      { label: "New Media", tone: "immersive" },
    ],
    poster: "interactive",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    isPlaceholder: true,
  },
  {
    id: "experiencia-inmersiva",
    title: "Experiencia inmersiva",
    summary:
      "Formato extendido para ampliar las posibilidades de comunicación digital.",
    description:
      "Ejemplo de experiencia inmersiva: nuevos formatos digitales que integran interacción, narrativa y tecnología para generar presencia y recuerdo.",
    year: "—",
    duration: "Vista breve",
    capabilities: "New Media, Audiovisual, Informática",
    tags: [
      { label: "Experiencias inmersivas", tone: "immersive" },
      { label: "Audiovisual", tone: "audiovisual" },
    ],
    poster: "immersive",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    isPlaceholder: true,
  },
];
