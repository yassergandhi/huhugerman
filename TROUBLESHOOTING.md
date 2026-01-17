# 🔧 Troubleshooting Guide: Integration & Diagnostics

## Overview
This document outlines standard resolution steps for issues encountered within the Huhugerman integration demo. It is intended for Support Engineers and Implementation Specialists.

## Diagnostic Tools
The application includes two primary tools for root cause analysis:
1.  **Debug Panel (Footer):** Displays real-time HTTP metrics (`Status`, `Latency`, `Trace ID`).
2.  **Payload Inspector (Right Panel):** Shows the raw JSON data received from the `lessonApi`.

## Common Error Codes

### 🔴 500 Internal Server Error (Upstream Failure)
* **Symptom:** Red error screen. Message: *"Internal Server Error - Database timeout"*.
* **Root Cause:** Simulated database connectivity failure (Chaos Injection: ~10% probability).
* **Resolution:**
    1.  Capture the `Trace ID` from the Debug Panel.
    2.  Click the **"Retry Request"** button. The system employs transient error handling, and the next request will likely succeed.

### 🔴 401 Unauthorized (Session Error)
* **Symptom:** Red error screen. Message: *"Unauthorized - Invalid API Token"*.
* **Root Cause:** Simulated session expiration or invalid API key (Chaos Injection: ~10% probability).
* **Resolution:**
    1.  Verify the `Authorization` header in the simulated request.
    2.  **Action:** Click **"Retry Request"** to trigger a token refresh simulation.

### 🟠 404 Not Found (Configuration Error)
* **Symptom:** UI displays error message. Debug Panel shows `STATUS: 404`.
* **Root Cause:** Mismatch between the configured `TARGET_LESSON_ID` in the code and the available data in `mockData.ts`.
* **Resolution:**
    1.  Check the **Payload Inspector** (it will be empty or show the error).
    2.  Verify the ID in `LessonView.tsx`.
    3.  **Fix:** Update configuration to use a valid UUID (e.g., `a1-lesson-001-hallo`).

### 🟡 High Latency (>1000ms)
* **Observation:** Loader spins for more than 1 second.
* **Analysis:** Check the `Latency` metric in the Debug Panel.
* **Context:** This is expected behavior. The API simulates real-world network jitter (300-1500ms). No action required unless latency exceeds 5000ms.

## Escalation Path
When escalating to Engineering, always include the **JSON Payload** or the **Trace ID** from the debug tools.