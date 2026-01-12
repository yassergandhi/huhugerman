import type { Lesson } from '../../models/types';

// ==============================================================================
// LECCIÓN 1: Saludos e Identidad
// ==============================================================================
export const lessonA1_001: Lesson = {
  id: "a1-lesson-001-hallo",
  title: "Hallo! Ich heiße... - ¡Hola! Me llamo...",
  order: 1,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Guten Tag.", spanish: "Buenos días.", audioId: "tts-a1-01-gutentag" },
      { german: "Ich bin Daniel.", spanish: "Yo soy Daniel.", audioId: "tts-a1-01-ichbin" },
      { german: "Wer bist du?", spanish: "¿Quién eres tú?", audioId: "tts-a1-01-werbistdu" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "En la calle, somos más rápidos:",
    phrases: [
      { german: "Hallo, ich bin's!", spanish: "¡Hola, soy yo!", contextNote: "Común al llegar a un lugar conocido." },
      { german: "Hi, ich bin Ana.", spanish: "Hola, soy Ana.", contextNote: "El 'Hi' inglés se usa mucho." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! El verbo 'Ser'",
    explanation: "No memorices tablas hoy. Solo necesitas una etiqueta para ti mismo.\n\nEn español: Yo **soy**.\nEn alemán: Ich **bin**.\n\nUsa 'bin' para decir tu nombre o tu profesión.",
    metaphor: "Ich bin = Yo soy. Pégate esa etiqueta en la frente."
  },
  uebung: {
    id: "ex-a1-01",
    type: 'fill-in-blank',
    instruction: "Preséntate correctamente.",
    sentenceBefore: "Hallo! Ich ",
    sentenceAfter: " Taro.",
    correctAnswer: ["bin"],
    feedback: "¡Correcto! 'Bin' es la forma de 'ser' para 'Yo' (Ich)."
  }
};

// ==============================================================================
// LECCIÓN 2: Estado de Ánimo
// ==============================================================================
export const lessonA1_002: Lesson = {
  id: "a1-lesson-002-wie-geht-es-dir",
  title: "Wie geht's dir? - ¿Cómo estás?",
  order: 2,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Wie geht es Ihnen?", spanish: "¿Cómo está usted? (Formal)", audioId: "tts-a1-02-wiegehtesihnen" },
      { german: "Mir geht es gut.", spanish: "Me va bien.", audioId: "tts-a1-02-mirgehtesgut" },
      { german: "Und Ihnen?", spanish: "¿Y a usted?", audioId: "tts-a1-02-undihnen" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Con amigos, cortamos todo lo que sobra:",
    phrases: [
      { german: "Na? Wie geht's?", spanish: "¿Qué onda? ¿Cómo vas?", contextNote: "'Na?' es el saludo universal corto." },
      { german: "Alles klar?", spanish: "¿Todo bien? / ¿Todo claro?", contextNote: "Sirve como pregunta y respuesta." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! ¿Quién es 'Mir'?",
    explanation: "En alemán no decimos 'Yo estoy bien'. Decimos 'A mí me va bien'.\n\n**Mir** = A mí.\n\nPor eso no dices 'Ich geht es gut'. Dices **Mir geht es gut**.",
    metaphor: "Imagina que Lo Bueno va hacia ti (a Mí...r)."
  },
  uebung: {
    id: "ex-a1-02",
    type: 'multiple-choice',
    instruction: "Tu jefe pregunta 'Wie geht es Ihnen?'.",
    question: "Elige la respuesta correcta y formal:",
    options: ["Ich bin gut.", "Mir geht es gut, danke.", "Na? Alles klar?"],
    correctOptionIndex: 1,
    feedback: "¡Exacto! Usas 'Mir' (a mí) y mantienes la cortesía."
  }
};

// ==============================================================================
// LECCIÓN 3: Despedidas
// ==============================================================================
export const lessonA1_003: Lesson = {
  id: "a1-lesson-003-tschuess",
  title: "Tschüss! - ¡Adiós!",
  order: 3,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Auf Wiedersehen.", spanish: "Adiós (Hasta la vista).", audioId: "tts-a1-03-wiedersehen" },
      { german: "Bis bald.", spanish: "Hasta pronto.", audioId: "tts-a1-03-bisbald" },
      { german: "Gute Nacht.", spanish: "Buenas noches (al irse a dormir).", audioId: "tts-a1-03-gutenacht" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Las despedidas alemanas son famosas por ser cortas:",
    phrases: [
      { german: "Tschüss!", spanish: "¡Bye!", contextNote: "Se usa el 90% del tiempo." },
      { german: "Ciao!", spanish: "Chao.", contextNote: "Sí, importado de Italia, muy usado." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! ¿Volver a ver?",
    explanation: "La despedida formal es muy literal.\n\nAuf = A / Hasta\nWieder = De nuevo\nSehen = Ver\n\nLiteralmente dices: **Hasta que nos veamos de nuevo**.",
    metaphor: "Es una promesa de reencuentro, no un final triste."
  },
  uebung: {
    id: "ex-a1-03",
    type: 'multiple-choice',
    instruction: "Terminas una llamada con un amigo.",
    question: "¿Qué dices para colgar?",
    options: ["Auf Wiedersehen.", "Tschüss!", "Guten Tag."],
    correctOptionIndex: 1,
    feedback: "¡Bien! Tschüss es perfecto para amigos."
  }
};

// ==============================================================================
// LECCIÓN 4: Origen (De dónde vienes)
// ==============================================================================
export const lessonA1_004: Lesson = {
  id: "a1-lesson-004-woher",
  title: "Woher kommst du? - ¿De dónde vienes?",
  order: 4,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Woher kommen Sie?", spanish: "¿De dónde viene usted?", audioId: "tts-a1-04-woherkommen" },
      { german: "Ich komme aus Mexiko.", spanish: "Vengo de México.", audioId: "tts-a1-04-ausmexiko" },
      { german: "Kommen Sie aus Spanien?", spanish: "¿Viene usted de España?", audioId: "tts-a1-04-ausspanien" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Preguntando a un nuevo compañero:",
    phrases: [
      { german: "Wo kommst du her?", spanish: "¿De dónde sales/vienes?", contextNote: "Forma coloquial de separar 'Woher'." },
      { german: "Aus Berlin.", spanish: "De Berlín.", contextNote: "Respuesta corta, sin verbo." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! La regla de la 'E'",
    explanation: "Fíjate en el final del verbo.\n\nCuando dices **Ich** (Yo), el verbo termina en **-e**.\n\nIch komm**e**.\nIch geh**e**.\nIch mach**e**.",
    metaphor: "El 'Yo' es egoísta, siempre quiere terminar con 'Eh...'."
  },
  uebung: {
    id: "ex-a1-04",
    type: 'fill-in-blank',
    instruction: "Completa la frase: Yo vengo de Perú.",
    sentenceBefore: "Ich ",
    sentenceAfter: " aus Peru.",
    correctAnswer: ["komme"],
    feedback: "¡Perfecto! Ich siempre pide una 'e' al final del verbo."
  }
};

// ==============================================================================
// LECCIÓN 5: Preguntas de Sí o No
// ==============================================================================
export const lessonA1_005: Lesson = {
  id: "a1-lesson-005-ja-nein",
  title: "Ja oder Nein? - ¿Sí o No?",
  order: 5,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Sind Sie Herr Müller?", spanish: "¿Es usted el Sr. Müller?", audioId: "tts-a1-05-sindsie" },
      { german: "Ja, das bin ich.", spanish: "Sí, ese soy yo.", audioId: "tts-a1-05-jabinich" },
      { german: "Nein, ich heiße Schmidt.", spanish: "No, me llamo Schmidt.", audioId: "tts-a1-05-nein" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Sonidos para afirmar o negar sin palabras:",
    phrases: [
      { german: "Nee.", spanish: "Nop / Nel.", contextNote: "Forma muy común de decir 'Nein'." },
      { german: "Doch!", spanish: "¡Que sí!", contextNote: "Se usa para contradecir una negación (¡Sí que sí!)." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! El verbo saltarín",
    explanation: "Para hacer una pregunta de Sí/No, el verbo salta al inicio de la frase.\n\nAfirmación: Sie **sind** Daniel.\nPregunta: **Sind** Sie Daniel?",
    metaphor: "El verbo es el rey. Si quiere respuestas, se pone el primero en la fila."
  },
  uebung: {
    id: "ex-a1-05",
    type: 'multiple-choice',
    instruction: "Quieres preguntar: ¿Vienes de México?",
    question: "Elige la estructura correcta:",
    options: ["Kommen Sie aus Mexiko?", "Sie kommen aus Mexiko?", "Aus Mexiko kommen Sie?"],
    correctOptionIndex: 0,
    feedback: "¡Bien! El verbo 'Kommen' va al principio para preguntar."
  }
};

// ==============================================================================
// LECCIÓN 6: Los Números (0-10)
// ==============================================================================
export const lessonA1_006: Lesson = {
  id: "a1-lesson-006-zahlen",
  title: "Eins, zwei, drei - Un, dos, tres",
  order: 6,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Eins, zwei, drei.", spanish: "Uno, dos, tres.", audioId: "tts-a1-06-123" },
      { german: "Vier, fünf, sechs.", spanish: "Cuatro, cinco, seis.", audioId: "tts-a1-06-456" },
      { german: "Sieben, acht, neun, zehn.", spanish: "Siete, ocho, nueve, diez.", audioId: "tts-a1-06-78910" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Dando tu número de teléfono:",
    phrases: [
      { german: "Meine Nummer ist...", spanish: "Mi número es...", contextNote: "Suelen decir los números de uno en uno o de dos en dos." },
      { german: "Null.", spanish: "Cero.", contextNote: "Importante para números de teléfono." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! Sonidos peligrosos",
    explanation: "Dos números tramposos:\n1. **Vier** (4): La V suena como F (Fier).\n2. **Zwei** (2): La Z suena como TS (Ts-vai).",
    metaphor: "La V alemana es una F disfrazada."
  },
  uebung: {
    id: "ex-a1-06",
    type: 'fill-in-blank',
    instruction: "Escribe el número que falta: Eins, ____, Drei.",
    sentenceBefore: "Eins, ",
    sentenceAfter: ", Drei.",
    correctAnswer: ["zwei"],
    feedback: "¡Correcto! Zwei (2) va entre el uno y el tres."
  }
};

// ==============================================================================
// LECCIÓN 7: ¿Quién es ese? (3ra Persona)
// ==============================================================================
export const lessonA1_007: Lesson = {
  id: "a1-lesson-007-wer-ist-das",
  title: "Wer ist das? - ¿Quién es ese?",
  order: 7,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Das ist Herr Müller.", spanish: "Este es el Sr. Müller.", audioId: "tts-a1-07-dasist" },
      { german: "Er kommt aus Deutschland.", spanish: "Él viene de Alemania.", audioId: "tts-a1-07-erkommt" },
      { german: "Sie wohnt in Berlin.", spanish: "Ella vive en Berlín.", audioId: "tts-a1-07-siewohnt" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Presentando amigos en una fiesta:",
    phrases: [
      { german: "Das ist die Anna.", spanish: "Esta es (la) Anna.", contextNote: "Usar artículos con nombres propios es muy común." },
      { german: "Der ist cool.", spanish: "Ése es buena onda (Él es cool).", contextNote: "Usan 'Der' en lugar de 'Er' para señalar." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! Él y Ella",
    explanation: "Para decir 'Él' usamos **Er**. Para 'Ella' usamos **Sie**.\n\nPero fíjate en el verbo: termina en **-t**.\n\nEr komm**t**. Sie wohn**t**.",
    metaphor: "La 'T' final es el dedo índice señalando a otra persona."
  },
  uebung: {
    id: "ex-a1-07",
    type: 'multiple-choice',
    instruction: "¿Cómo dices 'Ella viene de Alemania'?",
    question: "Elige la conjugación correcta:",
    options: ["Sie kommen aus Deutschland.", "Sie kommt aus Deutschland.", "Sie komme aus Deutschland."],
    correctOptionIndex: 1,
    feedback: "¡Bien! Ella (Sie) requiere una 't' al final del verbo."
  }
};

// ==============================================================================
// LECCIÓN 8: La Familia Básica
// ==============================================================================
export const lessonA1_008: Lesson = {
  id: "a1-lesson-008-familie",
  title: "Meine Familie - Mi familia",
  order: 8,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Das ist mein Vater.", spanish: "Este es mi padre.", audioId: "tts-a1-08-vater" },
      { german: "Das ist meine Mutter.", spanish: "Esta es mi madre.", audioId: "tts-a1-08-mutter" },
      { german: "Das sind meine Eltern.", spanish: "Estos son mis padres.", audioId: "tts-a1-08-eltern" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Nadie dice 'Vater' en casa:",
    phrases: [
      { german: "Papa / Mama", spanish: "Papá / Mamá", contextNote: "Universal e igual que en español." },
      { german: "Meine Geschwister.", spanish: "Mis hermanos (general).", contextNote: "Incluye hermanos y hermanas." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! ¿Mein o Meine?",
    explanation: "El alemán tiene géneros.\n\nSi es hombre (Padre): **Mein** Vater.\nSi es mujer (Madre): **Meine** Mutter.\n\nLa 'e' al final de 'Meine' es la marca femenina.",
    metaphor: "La 'E' final es como una falda o pelo largo en el dibujo de la palabra."
  },
  uebung: {
    id: "ex-a1-08",
    type: 'fill-in-blank',
    instruction: "Completa: Esta es mi madre.",
    sentenceBefore: "Das ist ",
    sentenceAfter: " Mutter.",
    correctAnswer: ["meine"],
    feedback: "¡Correcto! Mutter es femenino, así que usas 'Meine'."
  }
};

// ==============================================================================
// LECCIÓN 9: Dónde vivo (Wohnen)
// ==============================================================================
export const lessonA1_009: Lesson = {
  id: "a1-lesson-009-wohnen",
  title: "Ich wohne in... - Vivo en...",
  order: 9,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Wo wohnen Sie?", spanish: "¿Dónde vive usted?", audioId: "tts-a1-09-wowohnen" },
      { german: "Ich wohne in Mexiko-Stadt.", spanish: "Vivo en la Ciudad de México.", audioId: "tts-a1-09-ichwohne" },
      { german: "Ich wohne in der Blumenstraße.", spanish: "Vivo en la calle de las Flores.", audioId: "tts-a1-09-strasse" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "¿Vives solo o acompañado?",
    phrases: [
      { german: "Ich wohne in einer WG.", spanish: "Vivo en un depa compartido.", contextNote: "WG = Wohngemeinschaft (muy común)." },
      { german: "Bei meinen Eltern.", spanish: "Con mis papás.", contextNote: "'Bei' se usa para decir 'en casa de'." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! La preposición amiga",
    explanation: "Buenas noticias: **In** es igual en alemán y en español.\n\nIch wohne **in** Berlin.\nYo vivo **en** Berlín.\n\n¡No cambia!",
    metaphor: "Un puente directo entre los dos idiomas."
  },
  uebung: {
    id: "ex-a1-09",
    type: 'multiple-choice',
    instruction: "¿Cómo dices 'Vivo en Puebla'?",
    question: "Selecciona la opción correcta:",
    options: ["Ich wohnen in Puebla.", "Ich wohne in Puebla.", "Ich wohne aus Puebla."],
    correctOptionIndex: 1,
    feedback: "¡Bien! Verbo con -e (Ich wohne) y preposición 'in'."
  }
};

// ==============================================================================
// LECCIÓN 10: Repaso (El primer diálogo)
// ==============================================================================
export const lessonA1_010: Lesson = {
  id: "a1-lesson-010-review",
  title: "Alles zusammen - Todo junto",
  order: 10,
  hochdeutsch: {
    type: 'hochdeutsch',
    phrases: [
      { german: "Hallo, ich bin Maria.", spanish: "Hola, soy María.", audioId: "tts-a1-10-hallo" },
      { german: "Ich komme aus Spanien.", spanish: "Vengo de España.", audioId: "tts-a1-10-komme" },
      { german: "Und ich wohne in München.", spanish: "Y vivo en Múnich.", audioId: "tts-a1-10-wohne" }
    ]
  },
  umgangssprache: {
    type: 'umgangssprache',
    introText: "Cuando conoces a alguien nuevo:",
    phrases: [
      { german: "Freut mich!", spanish: "¡Mucho gusto!", contextNote: "Es la forma corta de 'Me alegra conocerte'." },
      { german: "Ebenfalls.", spanish: "Igualmente.", contextNote: "La respuesta perfecta a 'Freut mich'." }
    ]
  },
  halt: {
    type: 'halt',
    title: "¡Alto! Tu primera victoria",
    explanation: "Ya puedes:\n1. Saludar.\n2. Decir quién eres.\n3. Decir de dónde vienes.\n4. Decir dónde vives.\n\n¡Felicidades! Has completado el 10% del Nivel 1.",
    metaphor: "El muro del idioma tiene su primera grieta."
  },
  uebung: {
    id: "ex-a1-10",
    type: 'fill-in-blank',
    instruction: "Un extraño te dice: 'Freut mich' (Mucho gusto).",
    sentenceBefore: "Tú respondes: ",
    sentenceAfter: ".",
    correctAnswer: ["Ebenfalls", "ebenfalls"],
    feedback: "¡Excelente! 'Ebenfalls' significa Igualmente."
  }
};

export const lessons: Lesson[] = [lessonA1_001, lessonA1_002, lessonA1_003, lessonA1_004, lessonA1_005, lessonA1_006, lessonA1_007, lessonA1_008, lessonA1_009, lessonA1_010];