# Huhugerman - Technical Integration Demo

A specialized React application designed to demonstrate **Implementation Engineering**, **Resilience Patterns**, and **Technical Support** workflows.

Unlike standard portfolio projects, this repository simulates a production-grade environment with network instability, requiring diagnostic skills to operate.

## 🚀 Key Technical Features

### 1. Simulated API Layer (SDK)
* **Chaos Engineering:** The `lessonApi.ts` module injects random failures:
    * **Latency Jitter:** 300ms - 1500ms variable delay to test loading states.
    * **Reliability Testing:** ~20% of requests fail intentionally (500/401 errors) to verify error boundaries.
* **Observability:** Every request generates a unique `Trace ID` for log correlation.

### 2. Diagnostic Tooling (CSE Focused)
* **Integration Debug Panel:** A built-in footer exposing internal metrics (`Status Code`, `Latency`, `Request ID`) directly in the UI.
* **Raw Payload Inspector:** A dedicated panel displaying the live JSON response to verify data integrity against UI rendering.

### 3. Self-Healing UX
* **Graceful Degradation:** The UI handles failures without crashing.
* **Recovery Mechanism:** User-facing "Retry Request" logic to recover from transient upstream failures.

## 🛠️ Tech Stack
* **Frontend:** React 18 + TypeScript
* **Styling:** Tailwind CSS (Dark Mode / Console Aesthetic)
* **Build:** Vite
* **Deployment:** Netlify

## 🏃‍♂️ How to Run the Simulation

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the local server:**
    ```bash
    npm run dev
    ```

3.  **Test the Troubleshooting Workflow:**
    * Open the app.
    * Reload multiple times to trigger the **Chaos Engine**.
    * Use the **Debug Panel** at the bottom to analyze the error.
    * Refer to `TROUBLESHOOTING.md` to diagnose the specific error code.

## 📚 Documentation

For standard operating procedures (SOPs) on handling specific error codes, please refer to:
👉 **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)**

---
*Built by Yasser Gandhi - Implementation Engineer Candidate*