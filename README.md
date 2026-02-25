# resilient-api-integration-demo

**Chaos engineering diagnostic trainer for SaaS support workflows.**

> **"If you cannot reproduce the error, you cannot resolve it."**

**Status:** ACTIVE DEMO · Diagnostic environment · Recruiter-facing  
**Live demo:** [huhugerman-demo-cse.netlify.app](https://huhugerman-demo-cse.netlify.app/)  
**Stack:** React · TypeScript · Tailwind CSS · Chaos Engineering patterns

---

## What This Repository Solves

In SaaS support, the problem is not that production errors are hard to resolve — it is that they are hard to **reproduce**. Customers report "something doesn't work" without logs, traces, or context. Support teams lack backend access. Engineering teams lack time to investigate every ticket.

A senior Customer Success Engineer needs to:
1. Reproduce the error in a controlled environment
2. Identify the failure type without backend access
3. Document it with sufficient context for L2 escalation
4. Propose an immediate solution or workaround

**This demo is a trainer for that workflow.**

---

## The Real Origin: huhuGERMAN Production

The huhuGERMAN system operated with real students at UAM for 15 years. The lesson-loading module experienced these failures daily: 401 token expirations, 500 upstream timeouts, 404 resource misconfigurations, variable latency from Mexico City to Germany.

This demo isolates that module, instruments it with explicit observability, and converts it into a controlled diagnostic environment. The failure patterns are not hypothetical — they are the distillation of real errors that affected real users, resolved and documented.

---

## How Chaos Injection Works

The `lessonApi.ts` module implements three controlled failure scenarios:

```typescript
// Scenario A: Critical upstream failure (simulates database timeout)
// Status 500 · Structured error message · L2 escalation guidance
{
  status: 500,
  error: "Internal Server Error: Upstream service unavailable",
  requestId: generateRequestId(),
  suggestion: "Check database connection pool. If persistent >2min, escalate to L2."
}

// Scenario B: Session expiration / authentication
// Status 401 · Client remediation pathway
{
  status: 401,
  error: "Authentication token expired",
  requestId: generateRequestId(),
  suggestion: "Refresh token or re-authenticate. Common in mobile sessions idle >24h."
}

// Scenario C: Client configuration error
// Status 404 · Indicates where the problem lives
{
  status: 404,
  error: "Lesson not found",
  requestId: generateRequestId(),
  suggestion: "Verify lesson ID in course configuration. This is a client-side config issue, not backend."
}
```

**20% of requests fail intentionally.** This forces the system to demonstrate error handling, retry logic, and state communication under realistic failure rates.

---

## Observability as a First-Class Feature

Every request exposes:

```typescript
interface ApiResponse<T> {
  data?: T;
  meta: {
    requestId: string;   // Traceable across sessions (Splunk/Datadog)
    latencyMs: number;   // Visible to support without backend logs
    status: number;      // HTTP status code exposed to frontend
  };
}

interface ApiError {
  status: number;
  error: string;
  requestId: string;
  suggestion: string;    // Concrete next action for L1 support
}
```

The `suggestion` field is the difference between an error message that generates a support ticket and one that enables the customer (or L1 agent) to resolve the issue independently.

A standard error response tells the engineer what happened. The `suggestion` tells them what to do next — in language that requires no backend access to interpret.

---

## Latency Jitter: Forcing Real Loading States

```typescript
// Simulates realistic network conditions
// Delay between 300ms and 1500ms, randomized
const delay = 300 + Math.random() * 1200;
await new Promise(resolve => setTimeout(resolve, delay));
```

This forces the frontend to demonstrate that loading states, spinners, and timeout handling work under variable latency — not just in the happy path.

---

## HUHU Method: Fully Typed Domain

```typescript
interface Lesson {
  id: string;
  title: string;
  order: number;
  
  hochdeutsch: {
    phrases: Array<{ german: string; spanish: string; audioId: string }>
  };
  umgangssprache: {
    introText: string;
    phrases: Array<{ german: string; spanish: string; contextNote?: string }>
  };
  halt: {
    title: string;
    explanation: string;
    metaphor?: string;
  };
  uebung: MultipleChoiceExercise | FillInBlankExercise;
}
```

The `uebung` field uses discriminated union types: no exercise exists without a known type. Each exercise type has a complete contract for deterministic evaluation.

---

## Why This Demonstrates Senior-Level CSE Thinking

A junior developer writes the happy path and hopes it works. A senior CSE instruments the failure paths — because that is where customers create tickets.

This demo demonstrates:

**Proactive support thinking:** Errors are not exceptions — they are expected states that require explicit handling, useful messaging, and traceability.

**Observability as product:** `requestId` and `latencyMs` are not internal logs — they are data that a support agent can use to diagnose without backend access. This is the difference between "I don't know what happened" and "Here is exactly what happened and what to do next."

**Separation of concerns:** The API module is replaceable. When the mock is swapped for the production API, UI components do not change. This is the contract that makes systems maintainable at scale.

**Documentation as executable code:** The `suggestion` field in `ApiError` is not a comment — it is information that reaches the customer at error time. It is documentation that runs.

**Failure-first design:** 20% intentional failure rate is not a bug — it is a feature. It forces the system to prove that error handling works, not just that the happy path works.

---

## Related Repositories

→ **[huhugerman.com](https://huhugerman.com)** — Production system  
→ **[feature/dynamic-lessons](https://github.com/yassergandhi/huhugerman)** — Portal with pedagogical domain  
→ **[yassergandhi.dev](https://yassergandhi.dev)** — Professional portfolio

---

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

To experience the different failure scenarios, reload the application repeatedly. The 20% failure rate is randomized, so you will observe all three error types within approximately 5 page loads.

---

## About the Author

**Yasser Gandhi Hernández Esquivel** — The Purple Squirrel of EdTech. Learning Systems Architect · AI-Driven Instructional Designer · German Language Expert C1.

Specialist at the intersection of DaF pedagogy, qualitative research, and software systems. 15 years in public university teaching in Mexico. This demo is the distillation of real failures from real users, resolved and documented.

→ [yassergandhi.dev](https://yassergandhi.dev) · [LinkedIn](https://linkedin.com/in/yassergandhi)

---

*License: Educational use. All rights reserved.*

*HIER DARFST DU FEHLER MACHEN.*
