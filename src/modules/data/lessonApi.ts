import { lessons } from './mockData';
import type { Lesson } from '../../models/types';

/**
 * Standardized API Response Envelope
 * Includes metadata (meta) for observability and tracing, not just raw data.
 */
export interface ApiResponse<T> {
  data: T;
  meta: {
    requestId: string;
    latencyMs: number;
    status: number;
  };
}

/**
 * Structured Error Object
 * Designed to provide context for Support Engineers (L1/L2).
 * Includes 'suggestion' field for self-healing or quick resolution.
 */
export interface ApiError {
  message: string;
  status: number;
  requestId: string;
  suggestion: string; // Actionable advice for the troubleshooter
}

// Utility: Generates unique trace IDs for log correlation (e.g., Splunk/Datadog usage)
const generateRequestId = () => `req_${Math.random().toString(36).substr(2, 9)}`;

export const lessonApi = {
  /**
   * Fetches lesson data with simulated real-world network conditions.
   * Implements Chaos Engineering principles to test frontend resilience.
   * @param id - The Lesson ID to fetch
   */
  getLessonById: async (id: string): Promise<ApiResponse<Lesson>> => {
    const requestId = generateRequestId();
    const startTime = Date.now();
    
    // 1. Network Latency Simulation (Jitter)
    // Delays response between 300ms and 1500ms to test Loading States and Spinners.
    const delay = Math.floor(Math.random() * 1200) + 300;
    await new Promise(resolve => setTimeout(resolve, delay));

    // 2. Chaos Injection (Failure Simulation)
    // 20% of requests fail intentionally to test Error Boundaries and Retry Logic.
    const randomChance = Math.random();

    // Scenario A: Critical Upstream Failure (Simulates DB Timeout)
    if (randomChance < 0.1) {
      throw {
        status: 500,
        message: "Internal Server Error - Database timeout",
        requestId,
        suggestion: "Check database connectivity or retry."
      } as ApiError;
    }

    // Scenario B: Authentication/Session Expiration
    if (randomChance < 0.2) {
      throw {
        status: 401,
        message: "Unauthorized - Invalid API Token",
        requestId,
        suggestion: "Refresh session or check API keys."
      } as ApiError;
    }

    // 3. Business Logic / Data Retrieval
    const lesson = lessons.find(l => l.id === id);
    const latencyMs = Date.now() - startTime;

    // Scenario C: Client Configuration Error (Resource Not Found)
    if (!lesson) {
      throw {
        status: 404,
        message: `Lesson with ID '${id}' not found`,
        requestId,
        suggestion: "Verify the Lesson ID in the URL/Configuration."
      } as ApiError;
    }

    // 4. Success Response (Happy Path)
    // Returns data payload wrapped with telemetry metadata.
    return {
      data: lesson,
      meta: {
        requestId,
        latencyMs,
        status: 200
      }
    };
  }
};