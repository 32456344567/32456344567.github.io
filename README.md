# Portafolio Profesional de Alto Impacto (Next.js + Exportación Estática)
**Ing. Angelo Omar Apolo Chamba** — Ingeniero Químico · Procesos Industriales, Analítica & Gemelos Digitales

Este proyecto es una reimaginación editorial y minimalista de alto impacto inspirada en la arquitectura de `dataconale.com`, adaptada estratégicamente a la propuesta de valor de Ingeniería Química y Planta Industrial.

---

## 🌟 Características Implementadas

1. **Hero Section con Identidad Editorial & Gafete 3D:**
   - Marca de agua tipográfica gigante en fondo.
   - Titular de alto contraste (*Chemical Engineer*).
   - Credencial / Gafete industrial interactivo con efecto de inclinación 3D sensible al cursor del mouse.
2. **The Periodic Table of My Stack (Tabla Periódica Técnica):**
   - 30 elementos técnicos con nomenclatura química (`Pt`, `Df`, `Sp`, `Py`, `Bi`, `Ls`, `Tu`, etc.).
   - Filtrado interactivo por familias: *Química & Procesos*, *Planta & Mantenimiento*, *Datos & IA*, *Seguridad & HSE*, *Gestión & Calidad*.
   - Panel lateral de inspección en vivo que detalla aplicación real en planta, proyectos y certificaciones oficiales.
3. **Things I've Built (Drawer / Acordeón de Proyectos):**
   - Sistema de persianas numeradas (`01`, `02`, `03`).
   - Casos industriales: Gemelo Digital PTAR, Control Estadístico & Reducción de Scrap (COPQ), y Optimización de OEE.
   - Diagramas esquemáticos y métricas de impacto de negocio (reducción de costos y fallas).
4. **The Path So Far (Cronología Editorial):**
   - Línea de tiempo profesional 100% sincronizada con la trayectoria oficial (Incarpalm, Symrise AG, Agua Azul Ec., MAATE, UTMACH).
   - Tarjeta final de conversión: *"Next: ¿Tu equipo de planta o proyectos? [Let's talk]"*.
5. **Proof, in Numbers (Carrusel de Métricas Clave):**
   - Cifras gigantes de impacto auditado: 100% cumplimiento TULSMA, -20% tiempos en Excel VBA, 25+ máquinas en Machine Security, 0 accidentes, 18 certificaciones.
6. **Footer de Contacto con Sello Giratorio:**
   - Sello interactivo giratorio.
   - Botón de copiado de correo en un clic (`apoloangelo.ing@gmail.com`).
   - Conexión directa a WhatsApp y LinkedIn.

---

## 🚀 Comandos de Desarrollo y Compilación

* **Modo desarrollo local:**
  ```bash
  npm run dev
  ```
  Abre [http://localhost:3000](http://localhost:3000) en el navegador.

* **Compilar y generar exportación estática para GitHub Pages:**
  ```bash
  npm run build
  ```
  Genera todos los archivos estáticos (HTML, CSS, JS, imágenes) en la carpeta `./out`.

---

## 🌐 Despliegue en GitHub Pages

El proyecto incluye el flujo automatizado en `.github/workflows/deploy.yml`.

1. Sube este proyecto a tu repositorio de GitHub (rama `main`).
2. En GitHub ve a **Settings** > **Pages**.
3. En **Source**, selecciona **GitHub Actions**.
4. Cada vez que hagas un `git push`, GitHub Actions compilará y desplegará tu web automáticamente sin costo alguno.
