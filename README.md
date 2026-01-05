Below is a **clean, professional, GitHub-ready `README.md`** you can **copy-paste directly** into your repository.
It reflects **exactly what you built**, without fluff, and is **interview-grade**.

---

# 🚀 MERN Application Deployment on AWS EKS (CI/CD with GitHub Actions)

This repository contains a **full end-to-end MERN application** deployed on **AWS EKS** using **Docker, Helm, ALB Ingress**, and a **multi-stage GitHub Actions CI/CD pipeline**.

The deployment flow is fully automated:

> **`git push` → build → containerize → push to ECR → deploy to EKS**

---

## 📌 Architecture Overview

```
React (Frontend)
   ↓
Nginx (Container)
   ↓
AWS ALB (Ingress)
   ↓
Kubernetes Service
   ↓
Node.js / Express (Backend)
   ↓
MongoDB
```

**CI/CD Flow**

```
GitHub → GitHub Actions
   → Build & Test
   → Docker Build & Push (ECR)
   → Helm Deploy (EKS)
```

---

## 🧰 Tech Stack

| Layer         | Technology                 |
| ------------- | -------------------------- |
| Frontend      | React, Axios, Nginx        |
| Backend       | Node.js, Express           |
| Database      | MongoDB                    |
| Containers    | Docker                     |
| Orchestration | Kubernetes (EKS)           |
| Ingress       | AWS ALB Ingress Controller |
| Packaging     | Helm                       |
| CI/CD         | GitHub Actions             |
| Registry      | Amazon ECR                 |

---

## 📁 Repository Structure

```
.
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── src/
├── backend/
│   ├── Dockerfile
│   └── server.js
├── helm/
│   └── mern-app/
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
├── docker_compose.yaml
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ⚙️ Prerequisites

Make sure the following are installed and configured:

* Node.js
* Docker
* Git
* AWS CLI
* kubectl
* Helm
* AWS account with:

  * EKS cluster
  * ECR repositories
  * ALB Ingress Controller installed

---

## 🧪 Local Development

### Run using Docker Compose

```bash
docker compose up --build
```

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:5000
```

Stop:

```bash
docker compose down
```

---

## ☁️ AWS Setup (One Time)

### Create ECR Repositories

```bash
aws ecr create-repository --repository-name mern-frontend
aws ecr create-repository --repository-name mern-backend
```

### Configure kubeconfig

```bash
aws eks update-kubeconfig --region <region> --name <cluster-name>
```

---

## 📦 Kubernetes Deployment (Helm)

```bash
helm lint helm/mern-app
helm upgrade --install mern helm/mern-app
```

Verify:

```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

---

## 🔐 GitHub Secrets Required

Add the following secrets in **GitHub → Settings → Secrets → Actions**:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
AWS_ACCOUNT_ID
EKS_CLUSTER_NAME
```

---

## 🔁 CI/CD Pipeline (GitHub Actions)

### Pipeline Stages

1. **Build & Test**

   * Install dependencies
   * Build frontend

2. **Build & Push Docker Images**

   * Build frontend & backend images
   * Push images to Amazon ECR

3. **Deploy to EKS**

   * Update kubeconfig
   * Deploy using Helm

Pipeline file:

```
.github/workflows/deploy.yml
```

---

## 🚀 Deployment Flow

```bash
git add .
git commit -m "feature update"
git push
```

✔ Automatically builds
✔ Pushes images to ECR
✔ Deploys to EKS via Helm

---

## 🔎 Debugging Tips

* If app works with:

  ```bash
  kubectl port-forward svc/frontend 8080:80
  ```

  but not via ALB → **Ingress issue**

* Ensure:

  * No symlinks or submodules in repo
  * Dockerfiles are named exactly `Dockerfile`
  * Kubernetes service ports are **named** (required by ALB)

---

## 🧠 Key Learnings

* CI runs on **Linux** (case-sensitive paths)
* Git submodules & symlinks break CI
* ALB requires named ports in services
* Helm enables clean, repeatable deployments
* Multi-stage pipelines are easier to debug and scale

---

## 📌 Resume-Ready Summary

> Built a production-grade CI/CD pipeline using GitHub Actions to containerize a MERN application, push images to Amazon ECR, and deploy to Amazon EKS using Helm with ALB Ingress.

---

## 📜 License

This project is for learning and demonstration purposes.

---

If you want next:

* A **shorter README** for interviews
* A **diagram-only version**
* **Staging & production environments**
* **Security scanning & HPA**

Just tell me 👍
