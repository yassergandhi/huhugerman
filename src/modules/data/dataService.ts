import type { Lesson } from '../../models/types';
import { 
  lessonA1_001, lessonA1_002, lessonA1_003, lessonA1_004, lessonA1_005,
  lessonA1_006, lessonA1_007, lessonA1_008, lessonA1_009, lessonA1_010 
} from './mockData';

// Agrupar todas las lecciones en un array maestro
const ALL_LESSONS: Lesson[] = [
  lessonA1_001, lessonA1_002, lessonA1_003, lessonA1_004, lessonA1_005,
  lessonA1_006, lessonA1_007, lessonA1_008, lessonA1_009, lessonA1_010
];

export const dataService = {
  // Obtener todas las lecciones (para la lista de inicio)
  getAllLessons: (): Lesson[] => {
    return ALL_LESSONS.sort((a, b) => a.order - b.order);
  },

  // Obtener una lección específica por ID
  getLessonById: (lessonId: string): Lesson | undefined => {
    return ALL_LESSONS.find(l => l.id === lessonId);
  },

  // Obtener la siguiente lección basada en el ID actual
  getNextLessonId: (currentLessonId: string): string | null => {
    const currentIndex = ALL_LESSONS.findIndex(l => l.id === currentLessonId);
    if (currentIndex === -1 || currentIndex === ALL_LESSONS.length - 1) {
      return null; // No hay siguiente lección o ID inválido
    }
    return ALL_LESSONS[currentIndex + 1].id;
  }
};