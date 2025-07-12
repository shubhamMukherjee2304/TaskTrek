

# 🚀 TaskTrek – AI-Powered Project Collaboration & Planning Platform

**TaskTrek** is a full-stack, AI-integrated collaborative platform built to help individuals and teams **plan, brainstorm, and manage projects** efficiently. With real-time communication, intelligent task suggestions, and seamless sharing, TaskTrek bridges the gap between **creative ideation** and **structured execution**.

---

## 🛠 Tech Stack

* **Next.js** – Frontend framework for SSR and fast, scalable UIs
* **Firebase** – Real-time database and backend services
* **Clerk** – Authentication and user session management
* **Tailwind CSS** – Utility-first responsive design
* **Gemini AI** – AI assistant for planning and task generation
* **REST APIs** – Backend service integrations and data handling

---

## ✨ Features

* 🔐 **Secure Authentication**: Powered by Clerk, supports individual and organization-level access
* 📂 **Project Dashboards**: Customizable directories for each project to manage workflows
* 💬 **Real-time Collaboration**: Firebase-powered live commenting and discussion
* 🤖 **AI Assistance with Gemini**: Suggests tasks, generates project flows, and ideates development plans
* 🔗 **Sharable Workspaces**: Public/private URLs for external collaboration or team sharing
* 🖥️ **Responsive UI**: Modern, mobile-friendly interfaces using Next.js + Tailwind CSS

---

## 📸 Demo Preview
Link - https://task-trek-rouge.vercel.app/


---

## 📁 Project Structure

```
/tasktrek
├── components/         # Reusable UI components
├── pages/              # Next.js routes
├── styles/             # Tailwind CSS configuration
├── lib/                # Firebase & Clerk helpers
├── public/             # Static assets
├── utils/              # AI and API logic
├── .env.local          # Environment variables
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+)
* Firebase Project (Firestore + Authentication enabled)
* Clerk Project & API keys
* Gemini API Key (from Google AI Studio or Vertex AI)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/shubhamMukherjee2304/tasktrek.git
cd tasktrek
```

2. **Install dependencies**

```bash
npm install
```

3. **Set environment variables**

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

4. **Run the development server**

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📌 Key AI Use Cases

* ✅ Generate smart to-do/task lists based on project goals
* ✅ AI-powered idea expansion for project briefs
* ✅ Optimize task planning using natural language prompts

---

## 🧠 Future Enhancements

* ✅ Kanban-style task boards
* 🔄 Offline sync and conflict resolution
* 🔒 Role-based access control (RBAC)
* 📈 Project analytics dashboard
* 🌐 Internationalization support

---

## 💡 Impact

**TaskTrek** helps users and teams work smarter, not harder—by combining structured project dashboards with real-time communication and AI-driven ideation. It simplifies workflows, enhances creativity, and makes project planning more intuitive and scalable.

---

## 🧑‍💻 Author

**Shubham Mukherjee**
[LinkedIn](https://www.linkedin.com/in/shubham-mukherjee-a851a420a) • [GitHub](https://github.com/shubhamMukherjee2304)


