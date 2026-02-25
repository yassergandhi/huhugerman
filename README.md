# resilient-api-integration-demo

> **"Si no puedes reproducir el error, no puedes resolverlo."**

**Estado:** DEMO ACTIVO · Entorno de diagnóstico · Recruiter-facing  
**Demo en vivo:** [huhugerman-demo-cse.netlify.app](https://huhugerman-demo-cse.netlify.app/)  
**Stack:** React · TypeScript · Tailwind CSS · Chaos Engineering patterns

---

## Qué es este repositorio

Este repositorio es una aplicación de diagnóstico que simula condiciones de producción reales — errores 401, 500, 404, latencia variable, jitter de red — para demostrar cómo se investigan, reproducen y documentan problemas de integración en entornos SaaS.

Originalmente, el sistema huhuGERMAN tenía un módulo de carga de lecciones que experimentaba estos errores con usuarios reales. Este demo aísla ese módulo, lo instrumenta con observabilidad explícita y lo convierte en un entorno controlado de diagnóstico.

---

## Por qué existe: el problema que resuelve en Customer Success Engineering

En soporte técnico de SaaS, el problema más común no es que el error sea difícil de resolver — es que es difícil de **reproducir**. Los clientes reportan "algo no funciona" sin logs, sin trazas, sin contexto. El equipo de soporte no tiene acceso al backend del cliente. El equipo de ingeniería no tiene tiempo de revisar cada ticket.

Un CSE senior necesita:
1. Reproducir el error de manera controlada
2. Identificar el tipo de error sin acceso al backend
3. Documentarlo con suficiente contexto para ingeniería
4. Proponer una solución o workaround inmediato

Este demo es un entrenador para ese flujo.

---

## Inyección de caos: cómo funciona

El módulo `lessonApi.ts` implementa tres escenarios de fallo controlados:

```typescript
// Escenario A: Fallo crítico de upstream (simula timeout de DB)
// Status 500 · Mensaje de error estructurado · Suggestion para L2
{
  message: "Internal Server Error: Upstream service unavailable",
  status: 500,
  requestId: generateRequestId(),
  suggestion: "Check database connection pool. Escalate to L2 if persists."
}

// Escenario B: Expiración de sesión / autenticación
// Status 401 · Guía de remediación para el cliente
{
  message: "Authentication token expired",
  status: 401,
  requestId: generateRequestId(),
  suggestion: "Refresh token or re-authenticate. Common in mobile sessions > 24h."
}

// Escenario C: Error de configuración del cliente
// Status 404 · Indica dónde está el problema
{
  message: "Lesson not found",
  status: 404,
  requestId: generateRequestId(),
  suggestion: "Verify lesson ID in course configuration. This is a client-side config issue."
}
```

**20% de requests fallan intencionalmente.** Esto fuerza al sistema a demostrar manejo de errores, lógica de retry y comunicación de estado al usuario.

---

## Observabilidad: lo que se expone

Cada request genera y expone:

```typescript
interface ApiResponse<T> {
  data: T;
  meta: {
    requestId: string;   // Para correlación en logs (Splunk/Datadog)
    latencyMs: number;   // Para diagnóstico de performance
    status: number;      // HTTP status code expuesto al frontend
  };
}

interface ApiError {
  message: string;
  status: number;
  requestId: string;
  suggestion: string;    // Acción concreta para el troubleshooter
}
```

El campo `suggestion` en el objeto de error es la diferencia entre un mensaje de error que genera un ticket de soporte y uno que permite al cliente (o al agente L1) resolver el problema por sí mismo.

---

## Latencia simulada con jitter

```typescript
// Simula condiciones reales de red
// Delay entre 300ms y 1500ms, aleatorio
const delay = 300 + Math.random() * 1200;
await new Promise(resolve => setTimeout(resolve, delay));
```

Esto fuerza al frontend a demostrar que sus loading states, spinners y timeouts funcionan bajo condiciones de latencia variable — no solo en el happy path.

---

## El modelo de datos del método HUHU: tipado completo

```typescript
interface Lesson {
  id: string;
  title: string;
  order: number;
  
  hochdeutsch: { phrases: Array<{ german, spanish, audioId }> };
  umgangssprache: { introText, phrases: Array<{ german, spanish, contextNote? }> };
  halt: { title, explanation, metaphor? };
  uebung: MultipleChoiceExercise | FillInBlankExercise;
}
```

El tipo `uebung` usa union discriminada: no hay ejercicios sin tipo conocido. Cada tipo de ejercicio tiene contrato completo para evaluación determinística.

---

## Por qué este demo es evidencia de seniority CSE

Un developer junior escribe el happy path y espera que funcione. Un CSE senior instrumenta los failure paths porque sabe que es ahí donde los clientes crean tickets.

Este demo demuestra:

**Pensamiento proactivo de soporte:** Los errores no son excepciones — son estados esperados que necesitan handling explícito, mensajes útiles y trazabilidad.

**Observabilidad como feature:** `requestId` y `latencyMs` no son logs internos — son datos que un agente de soporte puede usar para diagnosticar sin acceso al backend del cliente.

**Separación de responsabilidades:** El módulo de API es intercambiable. Cuando el mock se reemplaza por la API real, los componentes de UI no cambian. Este es el contrato que hace los sistemas mantenibles.

**Documentación como producto:** El campo `suggestion` en `ApiError` es documentación ejecutable. No es un comentario en el código — es información que llega al cliente en tiempo de error.

---

## Conexión con el proyecto huhuGERMAN

Este demo es la extracción y aislamiento del módulo más crítico del sistema huhuGERMAN para diagnóstico y demostración. El sistema original operó con estudiantes reales en UAM, donde los errores de red, las sesiones expiradas y los recursos no encontrados eran eventos cotidianos.

Las decisiones de diseño aquí no son hipotéticas — son la destilación de errores reales que afectaron usuarios reales, resueltos y documentados.

---

## Uso del demo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

Para experimentar los diferentes escenarios de error, recarga la aplicación repetidamente. El 20% de fallos es aleatorio, por lo que verás los tres tipos de error en promedio cada 5 cargas.

---

## Repositorios relacionados

→ **[huhugerman.com](https://huhugerman.com)** — Sistema en producción  
→ **[feature/dynamic-lessons](https://github.com/yassergandhi/huhugerman)** — Portal con dominio pedagógico  
→ **[yassergandhi.dev](https://yassergandhi.dev)** — Portfolio profesional

---

## Sobre el autor

Yasser Gandhi Hernández Esquivel — Learning Systems Architect · AI-Driven Instructional Designer · German Language Expert C1. Especialista en la intersección entre pedagogía DaF, investigación cualitativa y sistemas de software. 15 años en docencia universitaria pública en México.

→ [yassergandhi.dev](https://yassergandhi.dev) · [LinkedIn](https://linkedin.com/in/yassergandhi)

---

*Licencia: Uso educativo. Todos los derechos reservados.*
