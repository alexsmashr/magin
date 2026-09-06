# Informe de estado — Sitio web institucional MAGÍN S.R.L.

**Fecha:** 6 de septiembre de 2026  
**Propósito de este documento:** resumir qué es el proyecto, cómo se elaboró hasta ahora, qué está hecho, qué falta y qué reglas no se deben romper, para pedir recomendaciones externas (por ejemplo a ChatGPT) con contexto completo.

---

## 1. Qué es el proyecto

Repositorio del **sitio web institucional** de **MAGÍN S.R.L.**, empresa boliviana B2B que integra comunicación, contenidos y tecnología.

El sitio **no** es un catálogo de servicios sueltos ni una landing genérica. Debe funcionar como base digital institucional y permitir que un potencial cliente:

1. Comprenda qué es MAGÍN.
2. Entienda qué necesidades puede resolver.
3. Conozca sus capacidades.
4. Revise evidencia y casos.
5. Comprenda cómo trabaja.
6. Encuentre una ruta clara de contacto.

**Principio rector:** MAGÍN no vende cinco disciplinas aisladas; resuelve proyectos **usando** cinco disciplinas. La comunicación debe transmitir **integración**.

---

## 2. Arquitectura comercial y de marca

### Tres líneas comerciales
- **Estrategia y Comunicación** (marketing, planificación, comunicación digital, estrategia)
- **Contenido y Diseño** (audiovisual, fotografía, diseño gráfico, contenidos)
- **Tecnología e Innovación** (informática, software, web, plataformas, new media)

### Cinco disciplinas (letras MAGÍN)
- **M** — Marketing  
- **A** — Audiovisual  
- **G** — Diseño Gráfico  
- **I** — Informática  
- **N** — New Media  

### Mensaje institucional aprobado
- Principal: *Comunicación + tecnología para organizaciones.*
- Bajada usada en hero actual: *De la idea al impacto* / *Tu proyecto, sin límites.*
- CTA: *Hablemos de tu proyecto.*
- Secundario: *Conoce cómo trabajamos.*

### Colores
- Núcleo: negro, blanco, **borgoña / guindo** (`#8b1e3d` / `#b8244a` aprox.).
- Las disciplinas usan acentos diferenciados.
- No inventar HEX definitivos a partir de capturas; cuando exista vector maestro, extraer de ahí.

### Tipografía
- **Poppins:** títulos, mensajes destacados, botones  
- **Inter:** interfaz, navegación, párrafos, formularios  
- **IBM Plex Mono:** previsto para detalles técnicos (uso moderado; aún no central)

---

## 3. Stack tecnológico

| Tecnología | Uso |
|---|---|
| Next.js (App Router) | Framework |
| React + TypeScript | UI |
| Tailwind CSS | Utilidades |
| CSS global (`globals.css`) | Sistema visual, secciones, header, footer, blog |
| ESLint | Calidad |

**Pendiente / no instalar aún** (según reglas del proyecto, hasta aprobar estructura estática): Motion, GSAP, ScrollTrigger, Three.js, React Three Fiber.

**Dependencias grandes:** no añadir sin aprobación.

---

## 4. Estructura de código (modular)

```
src/
  app/
    page.tsx          → Homepage
    blog/page.tsx     → Página Blog
    layout.tsx
    globals.css
  components/
    layout/           → Header, Footer
    sections/         → Hero, TrustSignals, IntegratedSolutions, Cases, Process, MaginExplains, Contact
    blog/             → BlogView
    ui/               → MaginLogo, CapabilityToolkit, PortfolioModal
  data/
    portfolio.ts
    process.ts
    blog.ts
public/
  brand/              → logo, letras M-A-G-I-N, hero-banner.png
```

La homepage **no** está toda en un solo archivo: cada sección es un componente.

---

## 5. Recorrido de la homepage (orden actual)

1. **Header** — barra flotante tipo Netflix (fija al scrollear), logo MAGÍN, nav, CTA, idioma ES, menú hamburguesa solo en celular  
2. **Hero (Inicio)** — texto + imagen 3D de portada  
3. **TrustSignals** — señales de confianza (aún stub / mínima)  
4. **IntegratedSolutions** — soluciones integrales con 5 “maletines” / toolkits por disciplina  
5. **Cases (Portafolio)** — fila tipo Netflix + modal con video (placeholders estructurales)  
6. **Process (Cómo trabajamos)** — 6 pasos con path curvo  
7. **MaginExplains** — puente al blog (“Ir al blog”)  
8. **Contact** — CTA + teléfono  
9. **Footer** — columnas tipo referencia (marca, navegación, soluciones, capacidades, contacto, LinkedIn)

---

## 6. Decisiones importantes ya tomadas

### Hero
- Se **eliminó** el logo MAGÍN grande con órbita CSS del hero (el logo queda en el header).
- Hero actual: copy aprobado a la izquierda + **banner PNG** a la derecha.
- Copy actual:
  - Eyebrow: *DE LA IDEA AL IMPACTO*
  - Título: *Tu proyecto,* + *sin límites.* (guindo)
  - Párrafo de integración
- Sin botones CTA dentro del hero (se quitaron a pedido).
- Imagen: `public/brand/hero-banner.png`
- El archivo de imagen suele llegar con fondo negro; en CSS se usa `mix-blend-mode: screen` para que el negro “desaparezca” sobre fondo claro.
- Se afinó tamaño y posición (escala ~90%, `translateX(-4cm)` aprox. al momento de este informe; puede haber microajustes).
- Responsive: en móvil, texto arriba e imagen completa abajo (sin achicar artificialmente).

### Header
- Estilo “caja” oscura flotante que persigue el scroll.
- **Nosotros** se eliminó del menú.
- **Blog** resalta en guindo, **sin cápsula**.
- Hamburguesa **solo en celular** (`< 768px`); tablet/PC muestran nav completa.
- Menú móvil funcional: Inicio, Soluciones, Portafolio, Cómo trabajamos, Blog + CTA.
- Logo en header: versión clara sobre fondo oscuro (`onDark`), con aire vertical/horizontal calibrado y `translateY(-5px)`.

### Soluciones integrales
- Cinco toolkits con letras oficiales en `public/brand/letters/`.
- Estilo 3D corporativo limpio (no videojuego / no cyberpunk).

### Portafolio
- UI tipo Netflix + modal.
- Datos en `portfolio.ts` son **placeholders estructurales** (no casos inventados como reales).
- Regla dura: **nunca inventar** clientes, proyectos, métricas, testimonios, premios.

### Proceso
- 6 pasos académicos: Reconocemos → Evaluamos → Planificamos → Diseñamos → Ejecutamos → Acompañamos.
- Path SVG curvo (desktop zig-zag / móvil S).

### Blog
- Ruta propia: `/blog` (otra “ventana”/página).
- Diagramación inspirada en diario (tipo Opinión): hero editorial, fila relacionada, columna Artículos/Noticias, sidebar Contenidos.
- Secciones: **Artículos**, **Noticias**, **Contenidos**.
- Contenidos actuales = placeholders de demostración, etiquetados como no definitivos.
- Masthead y tabs centrados.

### Footer
- Orden tipo referencia multi-columna.
- Teléfono verificado por el equipo: **+591 64633075**
- Icono LinkedIn (URL aún genérica; falta URL oficial de MAGÍN).

### Tema visual general
- Se trabajó mucho sobre **fondo claro / blanco** (aunque el brief original hablaba de interfaz oscura premium).
- Header y footer sí son oscuros.
- Guindo de marca como acento principal.

---

## 7. Customer journey objetivo

Descubrimiento → interés → evaluación → confianza → contacto → propuesta  

La web **no** debe cerrar contratación automáticamente; debe reducir incertidumbre y facilitar la conversación comercial.

---

## 8. Qué está sólido vs qué está incompleto

### Más avanzado
- Header sticky + menú responsive
- Hero con copy e imagen
- Soluciones (5 disciplinas visuales)
- Portafolio UI + modal (estructura)
- Proceso 6 pasos
- Página Blog con estructura editorial
- Footer multi-columna
- Contacto mínimo con teléfono

### Incompleto / stubs
- **TrustSignals:** aún muy básico o placeholder
- **Casos reales:** solo estructura; faltan proyectos verificados e imágenes/videos reales
- **Blog real:** faltan artículos/noticias/contenidos aprobados e imágenes de portada
- **Formulario de contacto** completo (hoy es CTA + tel)
- **LinkedIn oficial** (URL real)
- **SEO / metadata** del layout aún genéricos (“Create Next App”)
- **Animaciones** avanzadas (orbitas, motion libs) aparcadas a propósito
- Posible inconsistencia brief oscuro vs UI clara actual (decidir dirección definitiva)
- Calidad del PNG del hero: a veces llega comprimido/sin alpha real desde el chat

---

## 9. Reglas críticas para cualquier recomendación

Cualquier consejo de ChatGPT / diseño / código debe respetar:

1. No inventar clientes, métricas, testimonios, premios ni años de experiencia.
2. No presentar las 5 disciplinas como 5 empresas separadas.
3. No rediseñar el hero aprobado sin instrucción explícita (el concepto de órbita del brief original quedó sustituido por banner; el brief maestro en `AGENTS.md` aún menciona órbita — hay tensión a resolver).
4. No instalar Motion/GSAP/Three sin aprobación.
5. Mantener arquitectura modular por secciones.
6. Responsive: desktop, tablet, móvil + accesibilidad básica.
7. Preferir evidencia y claridad sobre slogans grandilocuentes.

---

## 10. Cómo compartir el proyecto con ChatGPT (práctico)

ChatGPT no puede “abrir” todo el repo de golpe. Opciones útiles:

1. **Pegar este informe** y pedir recomendaciones concretas (UX, copy, arquitectura, SEO, performance).
2. **Adjuntar capturas** de homepage, header, hero, soluciones, portafolio, proceso, blog, footer.
3. Si usa Cursor/GitHub: compartir repo o ZIP (sin `.env` ni secretos).
4. Para código puntual: pegar 1–2 archivos clave (`Hero.tsx`, `Header.tsx`, `page.tsx`, fragmentos de `globals.css`), no todo el CSS de una vez.
5. Preguntas recomendadas a ChatGPT:
   - “¿Cómo mejorar TrustSignals sin inventar métricas?”
   - “¿Cómo estructurar el blog para B2B institucional?”
   - “¿La UI clara vs brief oscuro: qué conviene para B2B Bolivia?”
   - “Checklist de lanzamiento SEO/performance para Next.js App Router”
   - “Cómo preparar el PNG del hero con transparencia real”

---

## 11. Rutas útiles en local

- Home: `http://localhost:3000`
- Blog: `http://localhost:3000/blog`
- Comando: `npm run dev`

---

## 12. Resumen ejecutivo (para pegar corto)

> Estamos construyendo el sitio institucional de MAGÍN S.R.L. (Bolivia, B2B) en Next.js + React + TypeScript + Tailwind. La home ya tiene header sticky tipo Netflix, hero con copy “Tu proyecto, sin límites” + banner 3D, soluciones (5 disciplinas), portafolio tipo Netflix con placeholders, proceso de 6 pasos, puente a blog, contacto con teléfono y footer multi-columna. Existe página `/blog` con secciones Artículos / Noticias / Contenidos (contenido demo). Falta evidencia real, TrustSignals serio, formulario, SEO, URL de LinkedIn y decisión final claro/oscuro. Regla dura: no inventar clientes ni métricas; comunicar integración, no cinco áreas sueltas.

---

*Documento generado para handoff / consulta externa. Actualizar cuando cambien decisiones de producto o se aprueben contenidos reales.*
