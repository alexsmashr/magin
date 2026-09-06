export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  keywords: string[];
  icon: "search" | "clipboard" | "map" | "bulb" | "gear" | "people";
};

/** Versión académica del proceso — definida por el propietario vía referencia visual. */
export const processSteps: ProcessStep[] = [
  {
    id: "reconocemos",
    number: "01",
    title: "Reconocemos",
    description: "Entendemos el punto de partida.",
    keywords: ["Escuchar", "Comprender", "Detectar", "Oportunidades"],
    icon: "search",
  },
  {
    id: "evaluamos",
    number: "02",
    title: "Evaluamos",
    description: "Analizamos necesidades y alcance.",
    keywords: ["Analizar", "Priorizar", "Definir", "Alcance"],
    icon: "clipboard",
  },
  {
    id: "planificamos",
    number: "03",
    title: "Planificamos",
    description: "Definimos ruta, tiempos y recursos.",
    keywords: ["Estrategia", "Hoja de ruta", "Recursos", "Metas claras"],
    icon: "map",
  },
  {
    id: "disenamos",
    number: "04",
    title: "Diseñamos",
    description: "Construimos la solución y la experiencia.",
    keywords: ["Creatividad", "Soluciones", "Experiencia", "Valor"],
    icon: "bulb",
  },
  {
    id: "ejecutamos",
    number: "05",
    title: "Ejecutamos",
    description: "Ponemos en marcha el proyecto.",
    keywords: ["Acción", "Coordinación", "Implementación", "Entrega"],
    icon: "gear",
  },
  {
    id: "acompanamos",
    number: "06",
    title: "Acompañamos",
    description: "Damos seguimiento y mejora continua.",
    keywords: ["Seguimiento", "Optimización", "Mejora continua", "Alianza"],
    icon: "people",
  },
];

export const processSideLabels = [
  "Estrategia",
  "Colaboración",
  "Metodología",
  "Crecimiento",
] as const;
