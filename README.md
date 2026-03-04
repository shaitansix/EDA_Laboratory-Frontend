# EDA Laboratory

Aplicación web interactiva para análisis exploratorio de datos (EDA) que permite cargar archivos CSV y obtener métricas estadísticas, visualizaciones y análisis de importancia de variables bajo una arquitectura desacoplada frontend-backend orientada a exploración analítica.

---

## Proyecto Completo

Este repositorio corresponde únicamente al `frontend` del sistema.

La interfaz consume una API desarrollada en FastAPI encargada del procesamiento del dataset, cálculo de estadísticas descriptivas y generación de métricas de importancia de características mediante modelos de clasificación.

Video demostración: [EDA Laboratory - Video](https://www.youtube.com/watch?v=TeM_OirnIVQ)  
Repositorio Backend: [EDA Laboratory - Backend](https://github.com/shaitansix/EDA_Laboratory-Backend)  
Repositorio Frontend: [EDA Laboratory - Frontend](https://github.com/shaitansix/EDA_Laboratory-Frontend)  

---

## Arquitectura del Sistema

Descripción general de la arquitectura del proyecto:

- **Frontend:** React + Vite  
- **Backend:** FastAPI  
- **Procesamiento de datos:** Pandas + Scikit-Learn  
- **Modelos utilizados:** Random Forest / Extra Trees  
- **DevOps / Herramientas:** Docker, Git, GitHub

### Descripción adicional

El sistema sigue una arquitectura cliente-servidor donde el frontend permite cargar dinámicamente archivos CSV que son enviados al backend para su procesamiento.

Una vez recibido el dataset, el backend realiza análisis estadístico descriptivo, identificación de tipos de variables y cálculo de importancia de características utilizando modelos de clasificación orientados a relaciones no lineales.

El frontend gestiona el estado del dataset procesado y renderiza dinámicamente métricas clave, resúmenes estadísticos y representaciones gráficas del análisis realizado.

El flujo de procesamiento es síncrono, mostrando los resultados una vez finaliza el análisis del dataset.

---

## Funcionalidades Principales

- Carga dinámica de archivos CSV desde la interfaz.
- Envío del dataset al backend para procesamiento analítico.
- Cálculo de estadísticas descriptivas básicas.
- Identificación automática de tipos de variables.
- Generación de métricas de importancia de variables mediante Random Forest y Extra Trees.
- Visualización estructurada de resultados bajo formato tipo documentación.
- Representación gráfica de variables relevantes.
- Comunicación frontend-backend mediante solicitudes HTTP asincrónicas.

---

## Aspectos Técnicos Destacados

- Integración de procesamiento de datos en arquitectura web desacoplada.
- Implementación de análisis de importancia de variables usando modelos de ensamble.
- Uso de algoritmos orientados a capturar relaciones no lineales.
- Flujo completo: carga → procesamiento → análisis → visualización.
- Separación clara entre lógica analítica (backend) y presentación (frontend).
- Manejo de estado en React para representación consistente de resultados.
- Arquitectura modular que permite extender el sistema a nuevos tipos de análisis.

---

<!--
## Opciones de Despliegue

### Usando Docker

#### 1. Descargar la imagen
```bash
docker pull shaitansix/eda_laboratory-client:1
```

#### 2. Crear y ejecutar el contenedor
```bash
docker run --name eda_laboratory-client -e VITE_API_URL=http://localhost:8000 -p 5173:5173 shaitansix/eda_laboratory-client:1
```

#### 3. Acceder a la aplicación
```bash
http://localhost:5173/
```

### Usando git clone

#### 1. Crear carpeta de trabajo

#### 2. Clonar repositorio
```bash
git clone https://github.com/shaitansix/EDA_Laboratory-Frontend.git
cd EDA_Laboratory-Frontend
```

#### 3. Instalar dependencias
```bash
npm install
```

#### 4. Configurar variables de entorno
Crear un archivo `.env.development` en la raíz del proyecto:
```bash
VITE_API_URL=http://localhost:8000
```

#### 5. Ejecutar servidor de desarrollo
```bash
npm run dev
```

#### 6. Acceder a la aplicación
```bash
http://localhost:5173/
```
-->
