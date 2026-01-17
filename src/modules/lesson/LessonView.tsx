import { useState, useEffect } from 'react';
import { lessonApi } from '../data/lessonApi'; 
import type { Lesson } from '../../models/types';
import type { ApiError, ApiResponse } from '../data/lessonApi';

export const LessonView = () => {
  // UI State Management
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lesson, setLesson] = useState<Lesson | null>(null);
  
  // Observability State: Captures metadata for troubleshooting (Latency, Trace IDs)
  const [debugInfo, setDebugInfo] = useState<{
    requestId?: string;
    latency?: number;
    statusCode?: number;
    errorMessage?: string;
    timestamp?: string;
  } | null>(null);

  // Configuration: Target ID. Change to an invalid string to simulate 404 Config Errors.
  const TARGET_LESSON_ID = "a1-lesson-001-hallo"; 

  const fetchLessonData = async () => {
    setStatus('loading');
    setDebugInfo(null);
    const startTime = Date.now();

    try {
      // API Call: Simulating network request with potential latency/failure
      const response: ApiResponse<Lesson> = await lessonApi.getLessonById(TARGET_LESSON_ID);
      setLesson(response.data);
      setStatus('success');
      
      // Success Logging: Capture trace ID for audit trails
      setDebugInfo({
        requestId: response.meta.requestId,
        latency: response.meta.latencyMs,
        statusCode: response.meta.status,
        timestamp: new Date().toISOString()
      });

    } catch (err) {
      const error = err as ApiError;
      setStatus('error');
      
      // Error Capture: Preserves context for Support Engineers (L1/L2)
      setDebugInfo({
        requestId: error.requestId || 'unknown',
        statusCode: error.status || 0,
        errorMessage: error.message || 'Unknown error',
        latency: Date.now() - startTime,
        timestamp: new Date().toISOString()
      });
      console.error("Integration Error:", error);
    }
  };

  useEffect(() => {
    fetchLessonData();
  }, []);

  // --- INTERNAL TOOLS ---

  /**
   * DebugPanel: Exposes internal API metrics to the UI.
   * critical for diagnosing issues without needing browser devtools access.
   */
  const DebugPanel = () => (
    <div className="sticky bottom-0 z-10 border-t border-slate-700 bg-slate-950 p-4 font-mono text-xs text-slate-400 mt-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-6">
          <div>
            <span className="text-slate-600 block uppercase tracking-wider">Status</span>
            <span className={`font-bold ${status === 'error' ? 'text-red-500' : 'text-emerald-500'}`}>
              {debugInfo?.statusCode || '---'}
            </span>
          </div>
          <div>
            <span className="text-slate-600 block uppercase tracking-wider">Latency</span>
            <span className="text-blue-400">{debugInfo?.latency}ms</span>
          </div>
          <div>
            <span className="text-slate-600 block uppercase tracking-wider">Trace ID</span>
            <span className="text-yellow-100/70 select-all">{debugInfo?.requestId}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-slate-600 block">Timestamp</span>
          <span>{debugInfo?.timestamp}</span>
        </div>
      </div>
    </div>
  );

  // --- RENDER LOGIC ---

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-cyan-400">
        <div className="animate-spin text-4xl mb-4">⟳</div>
        <p className="font-mono text-sm animate-pulse">Establishing secure connection to LessonAPI...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-900">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-xl w-full bg-slate-800 border border-red-500/30 rounded-lg shadow-2xl overflow-hidden">
            {/* Error Boundary UI: Friendly message for user + technical details for support */}
            <div className="bg-red-500/10 p-6 border-b border-red-500/20 flex items-start gap-4">
              <div className="bg-red-500/20 p-2 rounded text-red-500 text-2xl">⚠️</div>
              <div>
                <h2 className="text-xl font-bold text-red-400">Integration Failure</h2>
                <p className="text-slate-300 mt-1">{debugInfo?.errorMessage}</p>
              </div>
            </div>
            
            {/* Recovery Actions */}
            <div className="p-6">
              <div className="bg-slate-950 rounded p-4 mb-6 font-mono text-xs text-red-300 overflow-x-auto">
                {`Error: ${debugInfo?.errorMessage}\nCode: ${debugInfo?.statusCode}\nTrace: ${debugInfo?.requestId}`}
              </div>
              <button 
                onClick={fetchLessonData}
                className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded transition shadow-lg shadow-red-900/20"
              >
                Retry Request (Simulate Recovery)
              </button>
            </div>
          </div>
        </div>
        <DebugPanel />
      </div>
    );
  }

  // Happy Path UI
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      {/* Simulation Control Bar */}
      <nav className="border-b border-slate-700 bg-slate-800/50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold text-slate-100">Huhugerman <span className="text-cyan-400 text-xs uppercase ml-2 bg-cyan-900/30 px-2 py-1 rounded">Integration Demo</span></span>
          <button onClick={fetchLessonData} className="text-xs text-slate-400 hover:text-white underline">Force Reload</button>
        </div>
      </nav>

      <div className="flex-1 container mx-auto p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: Rendered View (End-User Experience) */}
          <div className="bg-white text-slate-900 rounded-lg shadow-xl overflow-hidden">
            <div className="bg-cyan-600 p-6 text-white">
              <h1 className="text-2xl font-bold">{lesson?.title}</h1>
              <p className="opacity-80 text-sm mt-1">Lesson ID: {lesson?.id}</p>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed">
                Willkommen! En esta lección aprenderemos los fundamentos.
              </p>
              <div className="mt-6 p-4 bg-slate-100 rounded border border-slate-200">
                <p className="font-semibold text-sm text-slate-500 uppercase mb-2">Ejercicio</p>
                <p>Traduce: "Hola, me llamo Yasser".</p>
              </div>
            </div>
          </div>

          {/* Column 2: Raw Payload Inspector (Technical Validation) */}
          {/* Used to verify data integrity against UI rendering issues */}
          <div className="bg-slate-950 rounded-lg border border-slate-700 p-6 font-mono text-xs overflow-hidden">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Data Payload
            </h3>
            <pre className="text-slate-400 overflow-x-auto">
              {JSON.stringify(lesson, null, 2)}
            </pre>
          </div>

        </div>
      </div>

      <DebugPanel />
    </div>
  );
};