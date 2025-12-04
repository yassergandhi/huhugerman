/// <reference lib="webworker" />
/* 
  El comentario de arriba es vital: le dice a TypeScript que este archivo 
  no corre en el navegador normal (DOM), sino en un Worker.
*/

import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

// 1. Definición de tipos para el Service Worker
// Esto evita que TS se queje de que 'self' no existe o no tiene las propiedades correctas.
declare let self: ServiceWorkerGlobalScope;

// 2. Limpieza automática
// Borra cachés antiguos de versiones previas de tu app para no llenar el disco del usuario.
cleanupOutdatedCaches();

// 3. Precaching (La Magia de Vite)
// 'self.__WB_MANIFEST' es un placeholder. Al compilar, Vite lo reemplaza con la lista real
// de tus archivos (index.html, assets/*.js, logo.png, etc.).
// Esta línea descarga y guarda esos archivos instantáneamente.
precacheAndRoute(self.__WB_MANIFEST);

// 4. Control inmediato (Skip Waiting)
// Normalmente, un SW nuevo espera a que cierres todas las pestañas para activarse.
// Esto fuerza al SW a activarse inmediatamente después de instalarse.
self.skipWaiting();

// 5. Reclamar clientes
// Permite que el SW tome control de la página sin necesidad de recargarla.
// Es crucial para que la PWA funcione offline desde el primer momento.
clientsClaim();

// --- AQUÍ IRÁ TU LÓGICA FUTURA ---
// Más adelante añadiremos manejo de Notificaciones Push o caché de llamadas a API aquí.
console.log('Service Worker de huhuGERMAN cargado correctamente.');
