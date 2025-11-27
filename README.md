# 🔬 EDA Laboratory
*Interactive platform for performing Exploratory Data Analysis (EDA) using modern frontend and backend technologies.*

> **Note:**
> For the frontend to function correctly, you must configure the EDA Laboratory Backend project.  
> To configure the backend, go to [EDA Laboratory Backend](https://github.com/shaitansix/EDA_Laboratory-Backend).

---
## 🚀 Quick Setup Guide

## Using docker

### 1. Download the Docker Hub image
```bash
docker pull shaitansix/eda_laboratory-client:1
```

### 2. Create a Docker container and then initialize it
```bash
docker run --name eda_laboratory-client -e VITE_API_URL=http://localhost:8000 -p 5173:5173 shaitansix/eda_laboratory-client:1
```

## Using Node Js

### 1. Create a folder for the project and open cmd in this folder

### 2. Clone the Repository
```bash
git clone https://github.com/shaitansix/EDA_Laboratory-Frontend.git
cd EDA_Laboratory-Frontend
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the development server
```bash
npm run dev
```

*✔️ Frontend available at: 
http://localhost:5173/*