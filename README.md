<p align="center">
  <img width="200" src="https://open-wc.org/hero.png" alt="Open WC Logo">
</p>

# Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## 🚀 Quickstart

Para comenzar con el proyecto, sigue estos pasos:

### 1️⃣ Instalar Yalc globalmente (si aún no lo tienes):
```sh
npm install -g yalc
```

### 2️⃣ Restaurar dependencias locales con Yalc:
```sh
yalc install
```

### 3️⃣ Instalar dependencias del proyecto:
```sh
npm install
```

### 4️⃣ Iniciar el servidor backend:
```sh
npm run backend
```
Esto ejecutará un servidor local.

### 5️⃣ En otra terminal, ejecutar la aplicación:
```sh
npm run start
```
📌 *Nota: Requiere Node.js 10+ y npm 6+.*

---

## 📜 Scripts Disponibles

- `start` - Ejecuta la aplicación en modo desarrollo con recarga automática.
- `start:build` - Ejecuta la aplicación después de haber sido compilada.
- `build` - Construye la aplicación y la guarda en el directorio `dist`.
- `test` - Ejecuta el conjunto de pruebas con Web Test Runner.
- `lint` - Ejecuta el linter en el proyecto.
- `format` - Corrige errores de linting y formateo.

---

## ⚙️ Configuración de Herramientas

La mayoría de las configuraciones de herramientas están dentro del `package.json`, reduciendo la cantidad de archivos en el proyecto.

---

## 🛠️ Tecnologías Utilizadas

- **[open-wc](https://open-wc.org/)** - Para el desarrollo de Web Components modernos.
- **[Yalc](https://github.com/wclr/yalc)** - Para gestionar dependencias locales, simulando un entorno similar a Bitbucket en local.

🚀 ¡Disfruta desarrollando con Open WC y Yalc! 🎉

