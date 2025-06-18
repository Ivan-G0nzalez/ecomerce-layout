# 🛍️ E-commerce Layout Project

Un proyecto de maquetación web para un e-commerce moderno desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción rápida para desarrollo
- **Tailwind CSS 4** - Framework CSS utility-first
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Redux Toolkit** - Gestión de estado global con patron Redux
- **React Redux** - Integración de Redux con React
- **React Icons** - Biblioteca de iconos para React

## ✨ Características del Proyecto

### 🎨 Componentes de UI
- **NavBar** - Barra de navegación con logo, búsqueda y carrito
- **Hero Banner** - Sección principal con imagen destacada
- **Categorías** - Grid de categorías de productos
- **Productos** - Lista de productos con filtros
- **Footer** - Pie de página con enlaces y certificaciones

### 🛠️ Funcionalidades
- Navegación entre páginas con React Router
- Gestión de estado global con Redux Toolkit
- Filtros de productos por categoría, precio y talla
- Diseño responsive con Tailwind CSS
- Galería de imágenes de productos
- Carrito de compras (interfaz)


## 🏃‍♂️ Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
```bash
git clone <url-del-repositorio>
cd maquetacionWeb
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
Navega a `http://localhost:5173` para ver la aplicación

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Buttons/        # Botones personalizados
│   ├── Cards/          # Tarjetas de productos
│   ├── Categories/     # Componentes de categorías
│   ├── Footer/         # Pie de página
│   ├── MainSection/    # Sección principal
│   ├── NavBar/         # Barra de navegación
│   ├── Products/       # Componentes de productos
│   └── SocialHeader/   # Header social
├── hooks/              # Custom hooks
├── interfaces/         # Tipos TypeScript
├── Layouts/           # Layouts de la aplicación
├── pages/             # Páginas de la aplicación
├── store/             # Configuración de Redux
└── main.tsx           # Punto de entrada
```

## 🎯 Patrones de Diseño

- **Redux Pattern** - Gestión centralizada del estado
- **Component Composition** - Composición de componentes
- **Custom Hooks** - Lógica reutilizable
- **TypeScript Interfaces** - Tipado fuerte para mejor desarrollo

