🐳 Dockerized Node.js + MongoDB Application

A fully containerized full-stack application using Node.js, Express, MongoDB, Mongo Express, and Docker Compose.
This project demonstrates real-world DevOps practices including containerization, environment configuration, networking, and persistent storage.

📌 Project Overview

This setup includes:

🚀 Node.js server (Express)

📦 MongoDB database

🌐 Mongo Express Admin UI

🔄 Docker Compose for orchestration

🔑 Environment variables via .env

🗂 Docker volumes for persistent storage

⚡ Clean GitHub-ready structure

🧱 Architecture Diagram
          ┌──────────────────────┐
          │    Node.js App       │
          │  (Express Server)    │
          └───────────┬──────────┘
                      │
                 Docker Network
                      │
        ┌─────────────┴─────────────┐
        │                           │
┌──────────────┐            ┌─────────────────┐
│   MongoDB     │            │  Mongo Express  │
│ (Database)    │            │ (Admin UI)      │
└──────────────┘            └─────────────────┘
        │                           │
        └──────────────┬────────────┘
                       │
              Docker Volumes (/data/db)

📂 Folder Structure
/docker-app
│── public/
│   └── index.html
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env  (not included)
│── package.json
│── package-lock.json
│── .gitignore

🎯 Learning Outcomes

Deep understanding of Docker containerization

How to run multi-container apps

Networking inside Docker

Persisting data using Volumes

Publishing images to DockerHub

Managing environment configs

Clean workflow for real-world DevOps setups

👨‍💻 Author

Satyajit Sahoo
Full Stack Developer | DevOps Learner
🔗 GitHub: https://github.com/Satyajit-69
