// ---------------------------------------------------------------------------
// Zonas geográficas: cada una tiene su pestaña.
// ---------------------------------------------------------------------------
const ZONES = {
  norte: {
    route: 'norte', name: 'Norte', title: 'Desierto de Atacama',
    tagline: 'El desierto más árido del mundo: salares, géiseres y lagunas altiplánicas sobre los 2.400 m.',
    facts: [
      ['Mejor época', 'Todo el año; en febrero puede llover en el altiplano'],
      ['Clima', 'Días de 25 °C, noches bajo 0 °C'],
      ['Cómo llegar', 'Vuelo Santiago–Calama (2 h) + 1 h 20 por tierra'],
      ['Base', 'San Pedro de Atacama, 2.407 m'],
    ],
    tips: ['Tómate el primer día con calma para aclimatarte a la altura.', 'Toma mucha agua y usa bloqueador aunque haga frío.', 'Reserva las noches sin luna para el astroturismo.'],
  },
  centro: {
    route: 'centro', name: 'Centro', title: 'Chile Central',
    tagline: 'Valparaíso, valles de viñedos y la Cordillera de los Andes a una hora de Santiago.',
    facts: [
      ['Mejor época', 'Septiembre a abril; vendimia en marzo y abril'],
      ['Clima', 'Mediterráneo, 30 °C en verano y 15 °C en invierno'],
      ['Cómo llegar', 'Aeropuerto de Santiago (SCL)'],
      ['Base', 'Santiago'],
    ],
    tips: ['Ideal para el primer y último día de tu viaje por Chile.', 'Valparaíso se recorre a pie: lleva zapatos cómodos.', 'El camino a El Yeso puede cerrar por nieve en invierno.'],
  },
  sur: {
    route: 'sur', name: 'Sur', title: 'Lagos y Volcanes',
    tagline: 'Bosque lluvioso, volcanes nevados, termas y el archipiélago de Chiloé.',
    facts: [
      ['Mejor época', 'Diciembre a marzo'],
      ['Clima', '12 a 24 °C, lluvia frecuente'],
      ['Cómo llegar', 'Vuelo a Puerto Montt o Temuco (1 h 45)'],
      ['Base', 'Pucón y Puerto Varas'],
    ],
    tips: ['Lleva siempre una capa impermeable.', 'El ascenso al Villarrica depende de la alerta volcánica del día.', 'Prueba el kuchen en Frutillar y el curanto en Chiloé.'],
  },
  patagonia: {
    route: 'patagonia', name: 'Patagonia', title: 'Patagonia',
    tagline: 'Torres del Paine, glaciares azules y los campos de hielo del fin del mundo.',
    facts: [
      ['Mejor época', 'Octubre a abril'],
      ['Clima', '5 a 18 °C, viento de hasta 100 km/h'],
      ['Cómo llegar', 'Vuelo a Punta Arenas o Puerto Natales (3 h 30)'],
      ['Base', 'Puerto Natales'],
    ],
    tips: ['Los refugios del Paine se agotan: reserva con 4 a 6 meses de anticipación.', 'Viste en capas; el clima cambia varias veces al día.', 'En verano hay luz hasta las 22:30.'],
  },
  isla: {
    route: 'rapanui', name: 'Rapa Nui', title: 'Rapa Nui · Isla de Pascua',
    tagline: 'Moáis, cráteres volcánicos y cultura polinésica a 3.700 km del continente.',
    facts: [
      ['Mejor época', 'Todo el año; festival Tapati en febrero'],
      ['Clima', 'Subtropical, 20 a 28 °C'],
      ['Cómo llegar', 'Vuelo Santiago–Hanga Roa (5 h 30)'],
      ['Base', 'Hanga Roa'],
    ],
    tips: ['El ticket del Parque Nacional es obligatorio y vale para toda la estadía.', 'Rano Raraku y Orongo solo se visitan una vez y con guía local.', 'Máximo 30 días de estadía para visitantes.'],
  },
};
const REGIONS = { norte: 'Norte', centro: 'Centro', sur: 'Sur', patagonia: 'Patagonia', isla: 'Rapa Nui', multi: 'Todo Chile' };
const REGION_ORDER = ['norte', 'centro', 'sur', 'patagonia', 'isla'];
const ROUTE_TO_REGION = Object.fromEntries(REGION_ORDER.map(r => [ZONES[r].route, r]));

// ---------------------------------------------------------------------------
// Catálogo. Precios por persona en CLP (premium: base habitación doble).
// Cada día del itinerario: items [hora, actividad, detalle].
// pin: posición [x, y] en el mapa (viewBox 220 × 430) o null.
// ---------------------------------------------------------------------------
const TOURS = [
  // ---------- NORTE ----------
  {
    id: 'tatio', region: 'norte', title: 'Géiseres del Tatio al amanecer', days: 1, price: 55000,
    level: 'Fácil', maxAlt: '4.320 m', pin: [132, 44], base: 'San Pedro de Atacama',
    desc: 'El campo geotérmico más alto del hemisferio sur, humeando bajo el primer sol.',
    includes: ['Traslado ida y vuelta', 'Desayuno en altura', 'Entrada al Tatio', 'Guía bilingüe'],
    bring: ['Ropa de abrigo en capas (−10 °C al amanecer)', 'Traje de baño y toalla', 'Bloqueador y lentes de sol'],
    itinerary: [{
      title: 'Géiseres, Machuca y Putana', stat: '190 km · 4.320 m',
      items: [
        ['04:30', 'Recogida en tu alojamiento', 'Viaje nocturno por el altiplano; llevamos mantas.'],
        ['06:15', 'Campo geotérmico del Tatio', 'Más de 80 géiseres en su máxima actividad al amanecer.'],
        ['07:30', 'Desayuno caliente junto a las fumarolas', 'Café, té de coca, pan amasado y huevos cocidos en el géiser.'],
        ['08:30', 'Piscina termal natural', 'Baño opcional a 30 °C en medio del altiplano.'],
        ['09:30', 'Pueblo de Machuca', 'Iglesia de adobe y techo de paja; anticucho de llama.'],
        ['10:30', 'Humedal de Putana', 'Flamencos, vicuñas y taguas con el volcán de fondo.'],
        ['12:00', 'Regreso a San Pedro', ''],
      ],
    }],
  },
  {
    id: 'luna', region: 'norte', title: 'Valle de la Luna y astroturismo', days: 1, price: 68000,
    level: 'Fácil', maxAlt: '2.500 m', pin: [127, 64], base: 'San Pedro de Atacama',
    desc: 'Dunas y sal al atardecer, y de noche los cielos más limpios del planeta.',
    includes: ['Traslados', 'Entrada al Valle de la Luna', 'Observación con telescopios', 'Chocolate caliente'],
    bring: ['Agua (mínimo 1,5 l)', 'Chaqueta para la noche', 'Zapatillas cómodas'],
    itinerary: [{
      title: 'Del atardecer a las estrellas', stat: '8 km a pie · 2.500 m',
      items: [
        ['15:30', 'Recogida en San Pedro', ''],
        ['16:00', 'Valle de la Luna', 'Duna Mayor, las Tres Marías y el Anfiteatro.'],
        ['18:00', 'Mirador de Kari', 'Atardecer sobre la Cordillera de la Sal; la tierra se vuelve roja.'],
        ['19:30', 'Cena libre en San Pedro', 'Te recomendamos dónde comer.'],
        ['21:30', 'Tour astronómico', 'Telescopios, Cruz del Sur, Nubes de Magallanes y Saturno si está visible.'],
        ['23:30', 'Regreso al alojamiento', ''],
      ],
    }],
  },
  {
    id: 'lagunas', region: 'norte', title: 'Lagunas altiplánicas y Salar de Atacama', days: 1, price: 75000,
    level: 'Moderado', maxAlt: '4.200 m', pin: [135, 82], base: 'San Pedro de Atacama',
    desc: 'Laguna Chaxa con flamencos y las lagunas Miscanti y Miñiques a 4.200 m.',
    includes: ['Traslados', 'Desayuno y almuerzo', 'Entradas a Chaxa y Miscanti', 'Guía'],
    bring: ['Abrigo y cortavientos', 'Lentes de sol', 'Agua'],
    itinerary: [{
      title: 'Del salar al altiplano', stat: '310 km · 4.200 m',
      items: [
        ['07:00', 'Recogida en San Pedro', ''],
        ['08:00', 'Laguna Chaxa', 'Tres especies de flamencos en el corazón del salar.'],
        ['09:00', 'Desayuno en Toconao', 'Pueblo de piedra volcánica y su campanario de 1750.'],
        ['11:00', 'Lagunas Miscanti y Miñiques', 'Azul intenso a 4.200 m, rodeadas de volcanes.'],
        ['13:30', 'Almuerzo en Socaire', 'Cocina atacameña con quinoa y cordero.'],
        ['15:00', 'Piedras Rojas', 'Rocas color óxido junto a un salar turquesa (según acceso).'],
        ['18:00', 'Regreso a San Pedro', ''],
      ],
    }],
  },

  // ---------- CENTRO ----------
  {
    id: 'valpo', region: 'centro', title: 'Valparaíso patrimonial y viñas', days: 1, price: 98000,
    level: 'Fácil', maxAlt: '350 m', pin: [121, 168], base: 'Santiago',
    desc: 'Cerros de colores, ascensores centenarios y cata en el valle de Casablanca.',
    includes: ['Traslado desde Santiago', 'Cata de 3 vinos', 'Ascensor y entradas', 'Almuerzo'],
    bring: ['Zapatos cómodos (muchas escaleras)', 'Cortavientos', 'Cámara'],
    itinerary: [{
      title: 'Casablanca, Valparaíso y Viña', stat: '260 km · 6 km a pie',
      items: [
        ['08:00', 'Salida desde Santiago', ''],
        ['09:30', 'Viña en el valle de Casablanca', 'Cata de sauvignon blanc y pinot noir de clima frío.'],
        ['11:30', 'Plaza Sotomayor y muelle Prat', 'Inicio del recorrido patrimonial.'],
        ['12:15', 'Ascensor Concepción', 'Subida en el ascensor más antiguo de la ciudad (1883).'],
        ['12:30', 'Cerros Alegre y Concepción', 'Murales, pasajes y miradores sobre la bahía.'],
        ['14:00', 'Almuerzo', 'Pescado del día o chupe de mariscos.'],
        ['15:30', 'La Sebastiana', 'Casa museo de Pablo Neruda.'],
        ['17:00', 'Viña del Mar', 'Reloj de flores y paseo por la costanera.'],
        ['19:00', 'Regreso a Santiago', ''],
      ],
    }],
  },
  {
    id: 'maipo', region: 'centro', title: 'Cajón del Maipo y Embalse El Yeso', days: 1, price: 65000,
    level: 'Fácil', maxAlt: '2.500 m', pin: [124, 180], base: 'Santiago',
    desc: 'Una laguna turquesa entre cumbres de 5.000 m, con picnic de vinos y quesos.',
    includes: ['Traslado en 4×4', 'Picnic con vino y quesos', 'Guía', 'Empanadas de regreso'],
    bring: ['Abrigo', 'Bloqueador', 'Zapatos cerrados'],
    itinerary: [{
      title: 'Cordillera a una hora de Santiago', stat: '200 km · 2.500 m',
      items: [
        ['07:30', 'Salida desde Santiago', ''],
        ['09:00', 'San José de Maipo', 'Café y pan amasado en el pueblo.'],
        ['10:30', 'Embalse El Yeso', 'Agua turquesa a 2.500 m rodeada de glaciares.'],
        ['12:30', 'Picnic junto al embalse', 'Vinos del Maipo, quesos de cabra y frutos secos.'],
        ['14:30', 'Baños Morales', 'Caminata corta con vista al glaciar El Morado.'],
        ['16:30', 'Empanadas en San José de Maipo', ''],
        ['18:30', 'Regreso a Santiago', ''],
      ],
    }],
  },

  // ---------- SUR ----------
  {
    id: 'villarrica', region: 'sur', title: 'Ascenso al volcán Villarrica', days: 1, price: 135000,
    level: 'Exigente', maxAlt: '2.847 m', pin: [119, 232], base: 'Pucón',
    desc: 'Crampones, piolet y el cráter de un volcán activo. Sujeto a la alerta volcánica.',
    includes: ['Equipo técnico completo', 'Guías de montaña certificados', 'Entrada al parque', 'Seguro y traslados'],
    bring: ['Almuerzo y 2 l de agua', 'Guantes y gorro', 'Buena condición física'],
    itinerary: [{
      title: 'Cumbre del Villarrica', stat: '+1.400 m de desnivel',
      items: [
        ['06:00', 'Reunión en la agencia', 'Prueba de equipo: botas, crampones, piolet y casco.'],
        ['07:00', 'Traslado a la base del volcán', 'Centro de ski Pucón, 1.400 m.'],
        ['07:30', 'Telesilla opcional', 'Ahorra 400 m de subida.'],
        ['08:00', 'Inicio del ascenso', 'Técnica de piolet y marcha en nieve con crampones.'],
        ['12:30', 'Cumbre: 2.847 m', 'Vista al cráter activo y a seis volcanes más en días claros.'],
        ['13:30', 'Descenso en trineo', 'Bajada por canales de nieve, la parte favorita de todos.'],
        ['16:00', 'Regreso a Pucón', ''],
      ],
    }],
  },
  {
    id: 'petrohue', region: 'sur', title: 'Saltos del Petrohué y volcán Osorno', days: 1, price: 72000,
    level: 'Fácil', maxAlt: '1.570 m', pin: [114, 268], base: 'Puerto Varas',
    desc: 'Cascadas sobre roca volcánica, el lago Todos los Santos y kuchen en Frutillar.',
    includes: ['Traslados', 'Entrada a los Saltos', 'Telesilla del Osorno', 'Guía'],
    bring: ['Impermeable', 'Zapatillas', 'Efectivo para el kuchen'],
    itinerary: [{
      title: 'Ruta del lago Llanquihue', stat: '180 km',
      items: [
        ['09:00', 'Salida desde Puerto Varas', 'Por la orilla del lago Llanquihue.'],
        ['10:00', 'Saltos del Petrohué', 'Agua verde esmeralda sobre lava con el Osorno de fondo.'],
        ['11:30', 'Lago Todos los Santos', 'Playa de arena negra en Petrohué.'],
        ['13:00', 'Almuerzo en Ensenada', ''],
        ['15:00', 'Volcán Osorno', 'Telesilla hasta 1.570 m y vista a cinco volcanes.'],
        ['17:30', 'Frutillar', 'Casas alemanas, Teatro del Lago y kuchen.'],
        ['19:00', 'Regreso a Puerto Varas', ''],
      ],
    }],
  },
  {
    id: 'chiloe', region: 'sur', title: 'Chiloé: palafitos e iglesias', days: 3, nights: 2, price: 390000,
    level: 'Moderado', maxAlt: '200 m', pin: [110, 292], base: 'Puerto Montt',
    desc: 'Tres días de islas, madera, lana y curanto con una familia chilota.',
    includes: ['2 noches en palafito', 'Desayunos y 2 almuerzos', 'Ferry y lancha', 'Entrada al Parque Nacional'],
    bring: ['Impermeable (llueve seguido)', 'Botas o zapatillas que se puedan mojar', 'Efectivo para la feria'],
    itinerary: [
      {
        title: 'Cruce del canal y Castro', stat: '190 km',
        items: [
          ['10:00', 'Recogida en Puerto Montt', ''],
          ['11:30', 'Ferry por el canal de Chacao', 'Con suerte, delfines australes y pingüinos.'],
          ['13:00', 'Ancud', 'Fuerte San Antonio y almuerzo libre.'],
          ['16:00', 'Castro', 'Palafitos de Gamboa e iglesia San Francisco.'],
          ['20:00', 'Noche en palafito', 'Sobre el agua, con vista a la marea.'],
        ],
      },
      {
        title: 'Islas del archipiélago', stat: 'Lancha · 2 islas',
        items: [
          ['09:00', 'Feria de Dalcahue', 'Tejidos de lana, cestería y mariscos.'],
          ['10:30', 'Lancha a la isla Quinchao', ''],
          ['11:30', 'Iglesia de Achao', 'La más antigua de Chiloé, construida sin clavos.'],
          ['13:30', 'Curanto al hoyo', 'Con una familia de Curaco de Vélez: mariscos, carne y milcao.'],
          ['17:00', 'Regreso a Castro', ''],
        ],
      },
      {
        title: 'Parque Nacional Chiloé', stat: '9 km a pie',
        items: [
          ['09:00', 'Salida a Cucao', 'Costa del Pacífico.'],
          ['10:00', 'Sendero El Tepual', 'Pasarelas de madera por bosque nativo y dunas.'],
          ['13:00', 'Almuerzo en Cucao', ''],
          ['15:00', 'Regreso a Puerto Montt', 'Llegada aproximada a las 18:30.'],
        ],
      },
    ],
  },

  // ---------- PATAGONIA ----------
  {
    id: 'w-trek', region: 'patagonia', title: 'Circuito W en Torres del Paine', days: 5, nights: 4, price: 1890000, depositPct: .5,
    level: 'Exigente', maxAlt: '870 m', pin: [86, 386], base: 'Puerto Natales',
    desc: 'Cinco días de glaciares, granito y guanacos. Refugios y comidas incluidos.',
    includes: ['4 noches en refugio', 'Pensión completa', 'Entrada al parque', 'Catamarán Pehoé', 'Guía todo el recorrido'],
    bring: ['Botas de trekking ya usadas', 'Mochila de 30 l', 'Ropa impermeable y cortavientos', 'Bastones'],
    itinerary: [
      {
        title: 'Base de las Torres', stat: '19 km · +900 m',
        items: [
          ['07:00', 'Bus desde Puerto Natales', ''],
          ['09:30', 'Ingreso por Laguna Amarga', 'Primeros guanacos y ñandúes.'],
          ['10:30', 'Subida por el valle Ascencio', ''],
          ['15:00', 'Mirador Base de las Torres', 'Las tres torres de granito sobre la laguna.'],
          ['19:00', 'Cena en refugio Central', ''],
        ],
      },
      {
        title: 'Orilla del lago Nordenskjöld', stat: '12 km',
        items: [
          ['08:30', 'Caminata junto al lago', 'Agua turquesa y vistas a los Cuernos.'],
          ['13:00', 'Almuerzo con vista', ''],
          ['16:00', 'Refugio Los Cuernos', 'Tarde libre en la playa del lago.'],
        ],
      },
      {
        title: 'Valle del Francés', stat: '22 km · +700 m',
        items: [
          ['08:00', 'Campamento Italiano', ''],
          ['11:00', 'Mirador Francés', 'Glaciar colgante; se escuchan los desprendimientos.'],
          ['13:00', 'Mirador Británico (opcional)', 'Anfiteatro de paredes de granito.'],
          ['18:00', 'Refugio Paine Grande', ''],
        ],
      },
      {
        title: 'Glaciar Grey', stat: '22 km ida y vuelta',
        items: [
          ['08:30', 'Subida hacia el lago Grey', 'Témpanos flotando en el lago.'],
          ['12:00', 'Mirador del glaciar', 'Frente de hielo de 30 m de alto.'],
          ['13:00', 'Refugio Grey', 'Kayak entre témpanos opcional (costo extra).'],
          ['17:00', 'Regreso a Paine Grande', ''],
        ],
      },
      {
        title: 'Pehoé y regreso', stat: 'Catamarán + bus',
        items: [
          ['09:30', 'Catamarán por el lago Pehoé', 'Los Cuernos desde el agua.'],
          ['11:00', 'Salto Grande', 'Cascada entre los lagos Nordenskjöld y Pehoé.'],
          ['13:00', 'Bus a Puerto Natales', 'Llegada aproximada a las 15:30.'],
        ],
      },
    ],
  },
  {
    id: 'grey', region: 'patagonia', title: 'Navegación al Glaciar Grey', days: 1, price: 195000,
    level: 'Fácil', maxAlt: '150 m', pin: [96, 368], base: 'Puerto Natales',
    desc: 'Torres del Paine sin trekking: cueva prehistórica y navegación hasta el hielo.',
    includes: ['Traslados', 'Navegación de 3 h', 'Entrada al parque y a la cueva', 'Box lunch'],
    bring: ['Parka y gorro (viento fuerte)', 'Lentes de sol', 'Cámara'],
    itinerary: [{
      title: 'Milodón y glaciar Grey', stat: '300 km · navegación 3 h',
      items: [
        ['07:30', 'Salida desde Puerto Natales', ''],
        ['08:15', 'Cueva del Milodón', 'Donde se hallaron restos de un perezoso gigante prehistórico.'],
        ['10:30', 'Mirador lago Sarmiento', 'Primera vista del macizo Paine.'],
        ['12:30', 'Playa del lago Grey', 'Caminata sobre la morrena hasta el embarcadero.'],
        ['13:00', 'Navegación al glaciar', 'Hasta el frente de hielo; brindis con hielo milenario.'],
        ['16:30', 'Salto Grande', ''],
        ['18:30', 'Regreso a Puerto Natales', ''],
      ],
    }],
  },

  // ---------- RAPA NUI ----------
  {
    id: 'rapanui', region: 'isla', title: 'Rapa Nui esencial', days: 4, nights: 3, price: 890000,
    level: 'Moderado', maxAlt: '324 m', pin: [30, 186], base: 'Hanga Roa',
    desc: 'Moáis al amanecer, la cantera de Rano Raraku y el cráter de Rano Kau.',
    includes: ['3 noches en Hanga Roa', 'Desayunos', 'Ticket del Parque Nacional', 'Guía rapanui', 'Traslados aeropuerto'],
    bring: ['Bloqueador alto (sol muy fuerte)', 'Traje de baño y snorkel', 'Sombrero'],
    itinerary: [
      {
        title: 'Iorana, Hanga Roa', stat: 'Llegada',
        items: [
          ['13:00', 'Llegada al aeropuerto Mataveri', 'Recepción con collar de flores.'],
          ['16:00', 'Museo Antropológico', 'Historia y escritura rongorongo.'],
          ['19:00', 'Atardecer en Ahu Tahai', 'Moáis a contraluz frente al Pacífico.'],
        ],
      },
      {
        title: 'La ruta de los moáis', stat: '70 km',
        items: [
          ['06:00', 'Amanecer en Ahu Tongariki', 'Quince moáis en fila con el sol detrás.'],
          ['09:30', 'Cantera de Rano Raraku', 'Casi 400 moáis en distintas etapas de tallado.'],
          ['12:30', 'Playa de Anakena', 'Arena blanca, palmeras y el Ahu Nau Nau.'],
          ['16:00', 'Regreso a Hanga Roa', ''],
        ],
      },
      {
        title: 'Rano Kau y Orongo', stat: '6 km a pie',
        items: [
          ['09:00', 'Cráter de Rano Kau', 'Laguna dentro del volcán.'],
          ['10:30', 'Aldea ceremonial de Orongo', 'Petroglifos del culto al Hombre Pájaro.'],
          ['14:00', 'Cueva Ana Kai Tangata', 'Pinturas rupestres junto al mar.'],
          ['16:00', 'Tarde libre', 'Snorkel en la caleta de Hanga Roa.'],
        ],
      },
      {
        title: 'Ahu Akivi y despedida', stat: 'Salida',
        items: [
          ['09:00', 'Puna Pau', 'Cantera de los pukao, los tocados rojos de los moáis.'],
          ['10:30', 'Ahu Akivi', 'Los siete moáis que miran hacia el mar.'],
          ['14:00', 'Traslado al aeropuerto', ''],
        ],
      },
    ],
  },
  {
    id: 'bici', region: 'isla', title: 'Rapa Nui en bicicleta y snorkel', days: 1, price: 85000,
    level: 'Moderado', maxAlt: '200 m', pin: [38, 196], base: 'Hanga Roa',
    desc: 'La costa oeste a tu ritmo, una cueva volcánica y snorkel con tortugas.',
    includes: ['Bicicleta y casco', 'Equipo de snorkel', 'Almuerzo local', 'Guía'],
    bring: ['Bloqueador', 'Traje de baño', 'Agua'],
    itinerary: [{
      title: 'Costa oeste y tortugas', stat: '28 km en bici',
      items: [
        ['09:00', 'Entrega de bicicletas', 'En Hanga Roa, con ajuste y casco.'],
        ['09:30', 'Ahu Tahai y costa oeste', 'Pedaleo suave junto al mar.'],
        ['11:00', 'Cueva Ana Te Pahu', 'Tubo de lava donde se cultivaban plátanos.'],
        ['12:00', 'Ahu Akivi', 'Los siete moáis que miran al mar.'],
        ['13:30', 'Almuerzo local', 'Pescado con camote y po\'e de plátano.'],
        ['15:00', 'Snorkel en Hanga Roa', 'Tortugas verdes en la caleta.'],
        ['17:30', 'Fin del tour', ''],
      ],
    }],
  },

  // ---------- PREMIUM ALL INCLUSIVE ----------
  {
    id: 'atacama-lux', premium: true, region: 'norte', title: 'Atacama de lujo', days: 5, nights: 4, price: 5400000,
    level: 'Fácil', maxAlt: '4.320 m', pin: [138, 100], base: 'San Pedro de Atacama',
    desc: 'Lodge con spa, excursiones privadas cada día y cena bajo las estrellas.',
    includes: ['4 noches en lodge de lujo con spa y piscina', 'Pensión completa, vinos y barra abierta', 'Excursiones privadas con guía', 'Traslados privados desde Calama', 'Observación astronómica privada', 'Un masaje por persona'],
    bring: ['Ropa de abrigo para la noche', 'Traje de baño', 'Lentes de sol'],
    itinerary: [
      { title: 'Llegada al lodge', stat: 'Traslado privado', items: [
        ['13:00', 'Recepción en el aeropuerto de Calama', 'Van privada con snacks y agua.'],
        ['15:00', 'Bienvenida en el lodge', 'Pisco sour y paseo por el oasis.'],
        ['17:30', 'Masaje de aclimatación', 'En el spa del lodge.'],
        ['20:00', 'Cena de degustación', 'Cocina de autor con ingredientes atacameños.'],
      ] },
      { title: 'Salar y lagunas altiplánicas', stat: 'Privado · 4.200 m', items: [
        ['08:00', 'Laguna Chaxa', 'Flamencos sin grupos alrededor.'],
        ['11:00', 'Lagunas Miscanti y Miñiques', ''],
        ['13:30', 'Almuerzo gourmet en altura', 'Mesa montada frente a la laguna.'],
        ['18:00', 'Regreso al lodge y spa', ''],
      ] },
      { title: 'Géiseres privados y cabalgata', stat: '4.320 m', items: [
        ['05:00', 'Salida privada al Tatio', 'Llegas antes que los buses.'],
        ['07:30', 'Desayuno de campo junto a los géiseres', ''],
        ['12:00', 'Almuerzo en el lodge', ''],
        ['17:00', 'Cabalgata al Valle de la Muerte', 'Atardecer a caballo entre dunas.'],
      ] },
      { title: 'Lagunas de Baltinache y estrellas', stat: 'Privado', items: [
        ['10:00', 'Lagunas escondidas de Baltinache', 'Flotas en agua más salada que el mar.'],
        ['13:30', 'Almuerzo en el lodge', ''],
        ['20:30', 'Cena bajo las estrellas', 'Con astrónomo y telescopio privado.'],
      ] },
      { title: 'Despedida', stat: 'Traslado privado', items: [
        ['09:00', 'Desayuno y mañana libre', 'Piscina o spa.'],
        ['12:00', 'Traslado privado a Calama', ''],
      ] },
    ],
  },
  {
    id: 'vino-lux', premium: true, region: 'centro', title: 'Valles del vino en helicóptero', days: 3, nights: 2, price: 3300000,
    level: 'Fácil', maxAlt: '600 m', pin: [118, 186], base: 'Santiago',
    desc: 'Catas privadas en Maipo, Colchagua y Casablanca, con vuelo en helicóptero.',
    includes: ['2 noches en hotel boutique entre viñedos', 'Pensión completa con maridajes', 'Vuelo en helicóptero Santiago–Colchagua', 'Catas privadas en 5 viñas', 'Chofer privado'],
    bring: ['Ropa casual elegante', 'Lentes de sol', 'Espacio en la maleta para vinos'],
    itinerary: [
      { title: 'Alto Maipo', stat: 'Chofer privado', items: [
        ['10:00', 'Recogida en tu hotel en Santiago', ''],
        ['11:00', 'Cata privada en viña del Alto Maipo', 'Cabernet sauvignon al pie de la cordillera.'],
        ['13:30', 'Almuerzo maridado en la viña', ''],
        ['17:00', 'Viña boutique familiar', 'Cata de barrica con el enólogo.'],
        ['20:30', 'Cena en restaurante de autor', ''],
      ] },
      { title: 'Colchagua en helicóptero', stat: '40 min de vuelo', items: [
        ['09:00', 'Vuelo en helicóptero', 'Sobre la Cordillera de la Costa hasta Colchagua.'],
        ['10:00', 'Viña ícono de Colchagua', 'Carmenere, el vino emblema de Chile.'],
        ['13:00', 'Almuerzo campestre', 'Asado de cordero entre viñedos.'],
        ['16:00', 'Paseo a caballo por los viñedos', ''],
        ['20:00', 'Cena y noche en hotel boutique', ''],
      ] },
      { title: 'Casablanca y la costa', stat: 'Chofer privado', items: [
        ['10:00', 'Viña en Casablanca', 'Sauvignon blanc y pinot noir de clima frío.'],
        ['13:00', 'Almuerzo de mariscos en la costa', ''],
        ['15:00', 'Valparaíso privado', 'Cerros Alegre y Concepción con guía.'],
        ['19:00', 'Regreso a tu hotel en Santiago', ''],
      ] },
    ],
  },
  {
    id: 'lagos-lux', premium: true, region: 'sur', title: 'Lagos y volcanes premium', days: 5, nights: 4, price: 3900000,
    level: 'Fácil', maxAlt: '1.570 m', pin: [120, 250], base: 'Puerto Varas',
    desc: 'Lodge frente al lago, termas privadas, pesca con mosca y navegación exclusiva.',
    includes: ['4 noches en lodge frente al lago', 'Pensión completa, vinos y barra abierta', 'Excursiones privadas', 'Termas y navegación privadas', 'Traslados privados desde Puerto Montt'],
    bring: ['Impermeable', 'Traje de baño', 'Zapatos de caminata'],
    itinerary: [
      { title: 'Llegada al lago Llanquihue', stat: 'Traslado privado', items: [
        ['12:00', 'Recepción en el aeropuerto de Puerto Montt', ''],
        ['13:30', 'Almuerzo en el lodge', 'Vista a los volcanes Osorno y Calbuco.'],
        ['17:00', 'Kayak al atardecer en el lago', ''],
        ['20:00', 'Cena de bienvenida', ''],
      ] },
      { title: 'Petrohué y Todos los Santos', stat: 'Navegación privada', items: [
        ['09:30', 'Saltos del Petrohué', 'Antes de la llegada de los grupos.'],
        ['11:00', 'Navegación privada por Todos los Santos', 'Hasta Peulla entre selva y volcanes.'],
        ['13:30', 'Almuerzo a bordo', ''],
        ['18:00', 'Regreso al lodge', ''],
      ] },
      { title: 'Pesca con mosca', stat: 'Río Petrohué', items: [
        ['08:30', 'Pesca con guía experto', 'Truchas y salmones; equipo incluido.'],
        ['13:00', 'Asado a la orilla del río', ''],
        ['17:00', 'Spa del lodge', ''],
      ] },
      { title: 'Chiloé privado', stat: 'Ferry + chofer', items: [
        ['08:30', 'Cruce a Chiloé', ''],
        ['11:00', 'Castro y sus palafitos', ''],
        ['13:30', 'Curanto gourmet', 'Preparado por una cocinera chilota.'],
        ['19:30', 'Regreso al lodge', ''],
      ] },
      { title: 'Despedida', stat: 'Traslado privado', items: [
        ['09:00', 'Desayuno y mañana libre', ''],
        ['12:00', 'Traslado al aeropuerto', ''],
      ] },
    ],
  },
  {
    id: 'patagonia-lux', premium: true, region: 'patagonia', title: 'Patagonia all inclusive en lodge', days: 6, nights: 5, price: 7900000,
    level: 'Moderado', maxAlt: '870 m', pin: [92, 352], base: 'Puerto Natales',
    desc: 'Lodge dentro de Torres del Paine: eliges cada mañana entre caminatas, cabalgatas y navegación.',
    includes: ['5 noches en lodge de lujo en el parque', 'Pensión completa, vinos y barra abierta', 'Excursiones diarias a elección con guía', 'Entrada al parque', 'Traslados privados desde Punta Arenas', 'Spa y piscina'],
    bring: ['Capas térmicas e impermeable', 'Botas de trekking', 'Guantes y gorro'],
    itinerary: [
      { title: 'Llegada a Torres del Paine', stat: 'Traslado privado', items: [
        ['11:00', 'Recepción en Punta Arenas', 'Traslado privado con parada en Puerto Natales.'],
        ['17:00', 'Llegada al lodge', 'Vista directa al macizo Paine.'],
        ['20:00', 'Cena de cordero magallánico', ''],
      ] },
      { title: 'Base de las Torres', stat: '19 km · +900 m', items: [
        ['07:30', 'Caminata guiada a las Torres', 'O alternativa suave por la laguna Azul.'],
        ['13:00', 'Almuerzo de campo', ''],
        ['19:00', 'Regreso al lodge y spa', ''],
      ] },
      { title: 'Cabalgata con baqueanos', stat: 'Estancia ganadera', items: [
        ['09:00', 'Cabalgata por la estepa', 'Con gauchos patagones.'],
        ['13:00', 'Cordero al palo en la estancia', ''],
        ['17:00', 'Tarde libre en el lodge', ''],
      ] },
      { title: 'Glaciar Grey', stat: 'Navegación', items: [
        ['09:00', 'Navegación al glaciar Grey', 'Brindis con hielo milenario.'],
        ['14:00', 'Mirador Condor', 'Buscando cóndores y pumas con guía.'],
        ['20:00', 'Cena de degustación', ''],
      ] },
      { title: 'Valle del Francés o kayak', stat: 'A elección', items: [
        ['08:00', 'Caminata al Mirador Francés', 'O kayak entre témpanos en el lago Grey.'],
        ['18:00', 'Regreso al lodge', ''],
      ] },
      { title: 'Despedida', stat: 'Traslado privado', items: [
        ['08:30', 'Desayuno con vista a los Cuernos', ''],
        ['10:00', 'Traslado privado a Punta Arenas', ''],
      ] },
    ],
  },
  {
    id: 'rapanui-lux', premium: true, region: 'isla', title: 'Rapa Nui de lujo', days: 5, nights: 4, price: 5900000,
    level: 'Fácil', maxAlt: '324 m', pin: [26, 196], base: 'Hanga Roa',
    desc: 'Lodge frente al océano, arqueólogo privado y ceremonia de curanto umu tahu.',
    includes: ['4 noches en lodge de lujo frente al mar', 'Pensión completa, vinos y barra abierta', 'Guía arqueólogo privado', 'Ticket del Parque Nacional', 'Cena umu tahu tradicional', 'Buceo o snorkel privado'],
    bring: ['Bloqueador alto', 'Ropa liviana', 'Traje de baño'],
    itinerary: [
      { title: 'Iorana', stat: 'Traslado privado', items: [
        ['13:00', 'Recepción en Mataveri', 'Collar de flores y traslado al lodge.'],
        ['18:30', 'Atardecer privado en Ahu Tahai', 'Con espumante.'],
        ['20:30', 'Cena en el lodge', ''],
      ] },
      { title: 'Amanecer en Tongariki', stat: 'Arqueólogo privado', items: [
        ['05:45', 'Amanecer en Ahu Tongariki', ''],
        ['08:30', 'Desayuno de campo', ''],
        ['10:00', 'Rano Raraku con arqueólogo', 'La historia detrás de cada moái.'],
        ['14:00', 'Tarde en Anakena', 'Almuerzo y playa.'],
      ] },
      { title: 'Orongo y el mar', stat: 'Buceo privado', items: [
        ['09:00', 'Rano Kau y Orongo', ''],
        ['13:00', 'Almuerzo en el lodge', ''],
        ['15:00', 'Buceo o snorkel privado', 'Aguas con visibilidad de hasta 40 m.'],
      ] },
      { title: 'Cultura rapanui', stat: 'Ceremonia', items: [
        ['10:00', 'Taller de tallado con artesano', ''],
        ['13:00', 'Umu tahu', 'Curanto ceremonial cocinado bajo tierra.'],
        ['20:30', 'Espectáculo de danza tradicional', ''],
      ] },
      { title: 'Despedida', stat: 'Traslado privado', items: [
        ['09:00', 'Mañana libre', ''],
        ['13:00', 'Traslado al aeropuerto', ''],
      ] },
    ],
  },
  {
    id: 'chile-grand', premium: true, region: 'multi', title: 'Gran Chile: del desierto al glaciar', days: 12, nights: 11, price: 19800000,
    level: 'Moderado', maxAlt: '4.320 m', pin: null, base: 'Santiago',
    desc: 'Atacama, valles del vino, Patagonia y Rapa Nui en un solo viaje, con vuelos internos incluidos.',
    includes: ['11 noches en hoteles y lodges de lujo', 'Pensión completa, vinos y barra abierta', 'Todos los vuelos internos (4 tramos)', 'Guías privados en cada zona', 'Traslados privados', 'Entradas a parques nacionales'],
    bring: ['Ropa para clima de desierto, frío y playa', 'Botas de trekking', 'Bloqueador y lentes'],
    itinerary: [
      { title: 'Santiago', stat: 'Llegada', items: [['10:00', 'Recepción en el aeropuerto de Santiago', ''], ['16:00', 'Santiago privado', 'Barrio Lastarria y cerro San Cristóbal.'], ['20:30', 'Cena de bienvenida', '']] },
      { title: 'Valles del vino', stat: 'Chofer privado', items: [['10:00', 'Catas privadas en el Alto Maipo', ''], ['13:30', 'Almuerzo maridado', '']] },
      { title: 'Vuelo a Atacama', stat: 'Vuelo SCL–CJC', items: [['09:00', 'Vuelo a Calama', ''], ['14:00', 'Llegada al lodge en San Pedro', ''], ['18:00', 'Atardecer en el Valle de la Luna', '']] },
      { title: 'Lagunas altiplánicas', stat: '4.200 m', items: [['08:00', 'Salar de Atacama y lagunas Miscanti y Miñiques', ''], ['21:00', 'Astronomía privada', '']] },
      { title: 'Géiseres del Tatio', stat: '4.320 m', items: [['05:00', 'Tatio privado al amanecer', ''], ['16:00', 'Spa en el lodge', '']] },
      { title: 'Vuelo a Patagonia', stat: 'CJC–SCL–PUQ', items: [['10:00', 'Vuelos a Punta Arenas', ''], ['18:00', 'Llegada al lodge en Torres del Paine', '']] },
      { title: 'Base de las Torres', stat: '19 km', items: [['07:30', 'Caminata a las Torres o alternativa suave', '']] },
      { title: 'Glaciar Grey', stat: 'Navegación', items: [['09:00', 'Navegación al glaciar Grey', ''], ['15:00', 'Cabalgata en estancia', '']] },
      { title: 'Vuelo a Rapa Nui', stat: 'PUQ–SCL–IPC', items: [['08:00', 'Vuelos a Hanga Roa vía Santiago', ''], ['19:00', 'Cena en el lodge frente al mar', '']] },
      { title: 'Ruta de los moáis', stat: 'Arqueólogo privado', items: [['05:45', 'Amanecer en Ahu Tongariki', ''], ['10:00', 'Rano Raraku', ''], ['14:00', 'Playa de Anakena', '']] },
      { title: 'Orongo y el océano', stat: 'Snorkel privado', items: [['09:00', 'Rano Kau y Orongo', ''], ['15:00', 'Snorkel privado', ''], ['20:00', 'Cena umu tahu', '']] },
      { title: 'Regreso', stat: 'Vuelo IPC–SCL', items: [['13:00', 'Vuelo a Santiago y conexión internacional', '']] },
    ],
  },
];

const HINTS = {
  norte: 'Norte · desierto, géiseres y salares',
  centro: 'Centro · Valparaíso, viñedos y cordillera',
  sur: 'Sur · volcanes, lagos y Chiloé',
  patagonia: 'Patagonia · glaciares y Torres del Paine',
  isla: 'Rapa Nui · moáis en medio del Pacífico',
};

const byId = id => TOURS.find(t => t.id === id);
const $ = sel => document.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const TOUR_SCENE = {
  tatio: 'geysers', luna: 'moon', lagunas: 'lagoons', valpo: 'valpo', maipo: 'maipo',
  villarrica: 'volcano', petrohue: 'waterfall', chiloe: 'chiloe', 'w-trek': 'torres', grey: 'glacier',
  rapanui: 'moai', bici: 'sea', 'atacama-lux': 'lodge', 'vino-lux': 'wine', 'lagos-lux': 'lake',
  'patagonia-lux': 'torres', 'rapanui-lux': 'moai', 'chile-grand': 'glacier',
};
const ZONE_SCENE = { norte: 'lagoons', centro: 'valpo', sur: 'volcano', patagonia: 'torres', isla: 'moai' };
// Foto real si el tour tiene "photo"; si no, la ilustración.
const media = t => t.photo
  ? `<img class="scene" src="${t.photo}" alt="${t.title}" loading="lazy">`
  : scene(TOUR_SCENE[t.id]);

// Política de pago: cuánto se paga al reservar y cuándo vence el saldo.
function payPolicy(t) {
  if (t.premium) return { pct: .5, due: 60 };
  if (t.depositPct) return { pct: t.depositPct, due: 45 };
  if (t.days > 1) return { pct: .3, due: 30 };
  return { pct: 1, due: 0 };
}

const duration = t => t.nights ? `${plural(t.days, 'día', 'días')} · ${plural(t.nights, 'noche', 'noches')}` : plural(t.days, 'día', 'días');

// ---------------------------------------------------------------------------
// Moneda
// ---------------------------------------------------------------------------
const USD_RATE = 950; // CLP por 1 USD, referencial
const fmtCLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
const fmtUSD = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'USD', currencyDisplay: 'code', maximumFractionDigits: 0 });
const money = clp => state.currency === 'USD' ? fmtUSD.format(Math.round(clp / USD_RATE / 5) * 5) : fmtCLP.format(clp);

// ---------------------------------------------------------------------------
// Estado del viaje (se recuerda en este navegador si es posible).
// ---------------------------------------------------------------------------
const STORE = 'rutas-del-sur-viaje-v2';
const EXAMPLE = { trip: ['tatio', 'luna', 'w-trek'], people: 2, start: '', example: true, currency: 'CLP' };
let state = load();

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE));
    if (saved && Array.isArray(saved.trip)) {
      saved.trip = saved.trip.filter(byId);
      return { ...EXAMPLE, ...saved };
    }
  } catch (e) { /* sin almacenamiento disponible */ }
  return { ...EXAMPLE, trip: [...EXAMPLE.trip] };
}
function save() {
  try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignorar */ }
}
function update(changes, { keepExample = false } = {}) {
  state = { ...state, ...changes, example: keepExample ? state.example : false };
  save();
  renderAll();
}
const inTrip = id => state.trip.includes(id);
function toggleTrip(id) {
  const t = byId(id);
  if (inTrip(id)) {
    update({ trip: state.trip.filter(x => x !== id) });
    toast(`Quitado: ${t.title}`);
  } else {
    update({ trip: [...state.trip, id] });
    toast(`Agregado a tu viaje: ${t.title}`);
    const pill = $('#trip-pill');
    pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
  }
}

// ---------------------------------------------------------------------------
// Tarjetas
// ---------------------------------------------------------------------------
function card(t, i) {
  const added = inTrip(t.id);
  return `
    <article class="card ${t.premium ? 'premium' : ''}" data-region="${t.region}" data-id="${t.id}" style="--i:${i}" tabindex="0"
      aria-label="${t.title}, ${duration(t)}, ver itinerario">
      <div class="card-art">
        <span class="card-days">${plural(t.days, 'día', 'días')}</span>
        ${t.premium ? '<span class="badge">✦ All inclusive</span>' : ''}
        ${media(t)}
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${REGIONS[t.region]}</span><span>·</span><span class="lvl">${t.level}</span><span>·</span><span>${t.maxAlt}</span></div>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
        <div class="card-foot">
          <span class="card-price">${money(t.price)}<small>${t.premium ? 'por persona, base doble' : 'por persona'}</small></span>
          <button class="add-btn ${added ? 'is-added' : ''}" data-add="${t.id}"
            aria-label="${added ? 'Quitar de' : 'Agregar a'} mi viaje" aria-pressed="${added}">${added ? '✓' : '+'}</button>
        </div>
      </div>
    </article>`;
}

// Delegación: cualquier tarjeta en la página abre su itinerario o se agrega al viaje.
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { e.preventDefault(); toggleTrip(add.dataset.add); return; }
  const c = e.target.closest('.card');
  if (c) openTour(c.dataset.id);
});
document.addEventListener('keydown', e => {
  const c = e.target.closest?.('.card');
  if (c && e.target === c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openTour(c.dataset.id); }
});
document.addEventListener('pointerover', e => {
  const c = e.target.closest?.('.card');
  hot(c ? c.dataset.id : null);
});
function hot(id) {
  document.querySelectorAll('.pin').forEach(p => p.classList.toggle('is-hot', p.dataset.id === id));
}

// ---------------------------------------------------------------------------
// Inicio: mapa, fichas de zona y adelanto premium
// ---------------------------------------------------------------------------
const map = $('#map');
$('#pins').innerHTML = TOURS.filter(t => t.pin).map(t => `
  <g class="pin ${t.premium ? 'pin-premium' : ''}" data-id="${t.id}" data-region="${t.region}" tabindex="0" role="button" aria-label="${t.title}">
    <title>${t.title}</title>
    <circle class="pulse" cx="${t.pin[0]}" cy="${t.pin[1]}" r="5"/>
    <circle cx="${t.pin[0]}" cy="${t.pin[1]}" r="${t.premium ? 4 : 5}"/>
  </g>`).join('');
map.addEventListener('click', e => {
  const pin = e.target.closest('.pin');
  if (pin) { openTour(pin.dataset.id); return; }
  const r = e.target.closest('[data-region]');
  if (r) go(ZONES[r.dataset.region].route);
});
map.addEventListener('pointerover', e => {
  const pin = e.target.closest('.pin');
  const r = e.target.closest('[data-region]');
  map.querySelectorAll('.band').forEach(b => b.classList.toggle('is-active', !!r && b.dataset.region === r.dataset.region));
  $('#map-hint').textContent = pin ? byId(pin.dataset.id).title : r ? HINTS[r.dataset.region] : 'Toca una zona para abrir su pestaña';
});
map.addEventListener('pointerleave', () => {
  map.querySelectorAll('.band').forEach(b => b.classList.remove('is-active'));
  $('#map-hint').textContent = 'Toca una zona para abrir su pestaña';
});
map.addEventListener('keydown', e => {
  const pin = e.target.closest('.pin');
  if (pin && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openTour(pin.dataset.id); }
});

function renderHome() {
  $('#zone-tiles').innerHTML = REGION_ORDER.map((r, i) => {
    const z = ZONES[r];
    const list = TOURS.filter(t => t.region === r);
    const from = Math.min(...list.map(t => t.price));
    return `<a class="zone-tile" href="#${z.route}" data-region="${r}" style="--i:${i}">
      ${scene(ZONE_SCENE[r])}
      <span class="zt-name">${z.name}</span>
      <strong>${z.title}</strong>
      <span class="zt-meta">${plural(list.length, 'tour', 'tours')} · desde ${money(from)}</span>
      <span class="zt-go" aria-hidden="true">→</span>
    </a>`;
  }).join('');
  const teaser = ['patagonia-lux', 'atacama-lux', 'chile-grand'].map(byId);
  $('#premium-teaser').innerHTML = teaser.map(card).join('');
}

// ---------------------------------------------------------------------------
// Pestaña de zona
// ---------------------------------------------------------------------------
function renderZone(region) {
  const z = ZONES[region];
  const regular = TOURS.filter(t => t.region === region && !t.premium);
  const premium = TOURS.filter(t => t.region === region && t.premium);
  const idx = REGION_ORDER.indexOf(region);
  const prev = ZONES[REGION_ORDER[(idx + REGION_ORDER.length - 1) % REGION_ORDER.length]];
  const next = ZONES[REGION_ORDER[(idx + 1) % REGION_ORDER.length]];
  $('#view-zona').innerHTML = `
    <section class="zone-hero" data-region="${region}">
      <div class="hero-art" aria-hidden="true">${scene(ZONE_SCENE[region])}</div>
      <div class="container">
        <p class="eyebrow">Zona ${idx + 1} de 5 · ${z.name}</p>
        <h1>${z.title}</h1>
        <p class="lead">${z.tagline}</p>
        <dl class="zone-facts">${z.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="zone-block-head">
          <h2>Excursiones</h2>
          <span class="muted">${plural(regular.length, 'tour', 'tours')} · desde ${money(Math.min(...regular.map(t => t.price)))} por persona</span>
        </div>
        <div class="cards">${regular.map(card).join('')}</div>

        ${premium.length ? `
        <div class="zone-block-head premium-head">
          <h2>✦ All inclusive</h2>
          <span class="muted">Lodge de lujo, comidas, bebidas y excursiones privadas</span>
        </div>
        <div class="cards">${premium.map((t, i) => card(t, i + regular.length)).join('')}</div>` : ''}

        <div class="tips">
          <h3>Consejos para ${z.name}</h3>
          <ul>${z.tips.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>

        <nav class="zone-pager" aria-label="Otras zonas">
          <a href="#${prev.route}" data-region="${REGION_ORDER[(idx + 4) % 5]}">← ${prev.name}</a>
          <a href="#${next.route}" data-region="${REGION_ORDER[(idx + 1) % 5]}">${next.name} →</a>
        </nav>
      </div>
    </section>`;
}

// ---------------------------------------------------------------------------
// Pestaña premium
// ---------------------------------------------------------------------------
function renderPremium() {
  $('#premium-art').innerHTML = scene('lodge');
  const list = TOURS.filter(t => t.premium).sort((a, b) =>
    (a.region === 'multi') - (b.region === 'multi') || REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region));
  $('#premium-cards').innerHTML = list.map(card).join('');
}

// ---------------------------------------------------------------------------
// Navegación por pestañas (usa el #ancla de la URL)
// ---------------------------------------------------------------------------
let route = 'inicio';
function go(r) {
  if (location.hash === '#' + r) router(); else location.hash = r;
}
function router() {
  const hash = location.hash.slice(1) || 'inicio';
  let view, scrollTarget = null;
  if (ROUTE_TO_REGION[hash]) { view = 'zona'; route = hash; }
  else if (['inicio', 'premium', 'viaje'].includes(hash)) { view = hash; route = hash; }
  else {
    const el = document.getElementById(hash);
    if (!el) { view = 'inicio'; route = 'inicio'; }
    else {
      const owner = el.closest('.view');
      if (owner) { view = owner.dataset.view; route = view; }
      scrollTarget = el;
    }
  }
  if (view) {
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.dataset.view !== view; });
    if (view === 'zona') renderZone(ROUTE_TO_REGION[route]);
  }
  document.querySelectorAll('.tab').forEach(t => {
    const active = t.dataset.route === route;
    t.classList.toggle('is-active', active);
    if (active) { t.setAttribute('aria-current', 'page'); t.scrollIntoView({ block: 'nearest', inline: 'center' }); }
    else t.removeAttribute('aria-current');
  });
  if (scrollTarget) scrollTarget.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  else if (view) window.scrollTo({ top: 0 });
}
window.addEventListener('hashchange', router);

// ---------------------------------------------------------------------------
// Diálogo con el itinerario de un tour.
// ---------------------------------------------------------------------------
const dlg = $('#tour-dialog');
let dlgState = { id: null, day: 0, people: 2 };

function openTour(id, day = 0) {
  dlgState = { id, day, people: state.people };
  renderDialog();
  if (!dlg.open) dlg.showModal();
}

function payLine(t, total) {
  const { pct, due } = payPolicy(t);
  return pct >= 1 ? 'pago total al reservar' : `reservas con ${money(total * pct)} (${pct * 100}%), saldo ${due} días antes`;
}

function renderDialog() {
  if (!dlgState.id) return;
  const t = byId(dlgState.id);
  const d = t.itinerary[dlgState.day];
  dlg.dataset.region = t.region;
  dlg.classList.toggle('premium', !!t.premium);
  dlg.innerHTML = `
    <button class="dlg-close" data-close aria-label="Cerrar">✕</button>
    <div class="dlg-art" aria-hidden="true">${media(t)}</div>
    <div class="dlg-head">
      <span class="dlg-tag">${t.premium ? '✦ All inclusive · ' : ''}${REGIONS[t.region]} · desde ${t.base}</span>
      <h2 id="dlg-title">${t.title}</h2>
      <p>${t.desc}</p>
      <dl class="facts">
        <div><dt>Duración</dt><dd>${duration(t)}</dd></div>
        <div><dt>Nivel</dt><dd>${t.level}</dd></div>
        <div><dt>Altura máx.</dt><dd>${t.maxAlt}</dd></div>
        <div><dt>${t.premium ? 'Por persona (doble)' : 'Por persona'}</dt><dd>${money(t.price)}</dd></div>
      </dl>
    </div>
    <div class="dlg-body">
      ${t.days > 1 ? `<div class="day-tabs" role="tablist" aria-label="Días del itinerario">
        ${t.itinerary.map((x, i) => `<button class="day-tab ${i === dlgState.day ? 'is-active' : ''}" role="tab"
          aria-selected="${i === dlgState.day}" data-day="${i}"><small>Día ${i + 1}</small>${x.title}</button>`).join('')}
      </div>` : ''}
      <div class="day-title">
        <h3>${t.days > 1 ? `Día ${dlgState.day + 1}: ` : ''}${d.title}</h3>
        <span class="day-stat">${d.stat}</span>
      </div>
      <ol class="timeline">
        ${d.items.map(([time, what, note], i) => `
          <li style="--i:${i}"><time>${time}</time><div><strong>${what}</strong>${note ? `<span>${note}</span>` : ''}</div></li>`).join('')}
      </ol>
      <div class="lists">
        <div><h4>${t.premium ? 'Todo incluido' : 'Incluye'}</h4><ul>${t.includes.map(x => `<li>${x}</li>`).join('')}</ul></div>
        <div><h4>Qué llevar</h4><ul>${t.bring.map(x => `<li>${x}</li>`).join('')}</ul></div>
      </div>
    </div>
    <div class="dlg-foot">
      <span class="stepper" aria-label="Viajeros">
        <button type="button" data-people="-1" aria-label="Quitar viajero">−</button>
        <output>${dlgState.people}</output>
        <button type="button" data-people="1" aria-label="Agregar viajero">+</button>
      </span>
      <span class="dlg-total">${money(t.price * dlgState.people)}<small>${plural(dlgState.people, 'viajero', 'viajeros')} · ${payLine(t, t.price * dlgState.people)}</small></span>
      <button class="btn" data-toggle>${inTrip(t.id) ? '✓ En tu viaje · quitar' : '+ Agregar a mi viaje'}</button>
    </div>`;
}

dlg.addEventListener('click', e => {
  e.stopPropagation();
  if (e.target === dlg || e.target.closest('[data-close]')) { dlg.close(); return; }
  const tab = e.target.closest('[data-day]');
  if (tab) { dlgState.day = +tab.dataset.day; renderDialog(); dlg.querySelector('.day-tab.is-active')?.focus(); return; }
  const p = e.target.closest('[data-people]');
  if (p) { dlgState.people = Math.min(20, Math.max(1, dlgState.people + +p.dataset.people)); renderDialog(); return; }
  if (e.target.closest('[data-toggle]')) {
    state.people = dlgState.people;
    toggleTrip(dlgState.id);
  }
});
dlg.addEventListener('keydown', e => {
  const t = byId(dlgState.id);
  if (!t || t.days < 2 || !e.target.closest('.day-tab')) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    dlgState.day = (dlgState.day + (e.key === 'ArrowRight' ? 1 : -1) + t.days) % t.days;
    renderDialog();
    dlg.querySelector('.day-tab.is-active')?.focus();
  }
});
dlg.addEventListener('close', () => { dlgState.id = null; });

// ---------------------------------------------------------------------------
// Mi viaje: lista, resumen e itinerario combinado.
// ---------------------------------------------------------------------------
const fmtDay = new Intl.DateTimeFormat('es-CL', { weekday: 'short' });
const fmtNum = new Intl.DateTimeFormat('es-CL', { day: 'numeric' });
const fmtMon = new Intl.DateTimeFormat('es-CL', { month: 'short' });

function buildDays() {
  const rows = [];
  let prev = null;
  state.trip.map(byId).forEach(t => {
    if (prev && prev.region !== t.region && prev.region !== 'multi' && t.region !== 'multi') {
      rows.push({ transfer: true, from: prev, to: t });
    }
    t.itinerary.forEach((d, i) => rows.push({ tour: t, d, i }));
    prev = t;
  });
  return rows;
}

function renderTrip() {
  const tours = state.trip.map(byId);
  const rows = buildDays();
  const total = tours.reduce((s, t) => s + t.price, 0) * state.people;

  $('#trip-count').textContent = tours.length;
  $('#people').textContent = state.people;
  $('#trip-start').value = state.start || '';
  $('#example-note').hidden = !state.example || tours.length === 0;
  $('#trip-empty').hidden = tours.length > 0;
  $('#sum-days').textContent = rows.length;
  $('#sum-tours').textContent = tours.length;
  $('#sum-price').textContent = money(total);
  $('#request-trip').disabled = tours.length === 0;
  const now = tours.reduce((s, t) => s + t.price * payPolicy(t).pct, 0) * state.people;
  const firstDue = Math.max(0, ...tours.filter(t => payPolicy(t).pct < 1).map(t => payPolicy(t).due));
  $('#pay-plan').innerHTML = tours.length ? `
    <div><span>Para reservar hoy</span><strong>${money(now)}</strong></div>
    <div><span>Saldo</span><strong>${money(total - now)}</strong>${total - now > 0 ? `<small>hasta ${firstDue} días antes del viaje</small>` : ''}</div>` : '';

  $('#trip-list').innerHTML = tours.map((t, i) => `
    <li class="trip-item" data-region="${t.region}">
      <div><b>${t.premium ? '✦ ' : ''}${t.title}</b><small>${duration(t)} · ${money(t.price * state.people)}</small></div>
      <div class="ctrls">
        <button data-move="-1" data-idx="${i}" ${i === 0 ? 'disabled' : ''} aria-label="Subir">↑</button>
        <button data-move="1" data-idx="${i}" ${i === tours.length - 1 ? 'disabled' : ''} aria-label="Bajar">↓</button>
        <button data-remove="${t.id}" aria-label="Quitar ${t.title}">✕</button>
      </div>
    </li>`).join('');

  const start = state.start ? new Date(state.start + 'T12:00:00') : null;
  const timeline = $('#trip-timeline');
  if (!rows.length) {
    timeline.innerHTML = `<div class="empty-state">Aquí aparecerá tu itinerario día por día.<br>Agrega tours desde cualquier <a href="#zonas">zona</a>.</div>`;
    return;
  }
  timeline.innerHTML = rows.map((r, n) => {
    const date = start ? new Date(start.getTime() + n * 864e5) : null;
    const when = date
      ? `${fmtDay.format(date)}<b>${fmtNum.format(date)}</b>${fmtMon.format(date)}`
      : `Día<b>${n + 1}</b>`;
    if (r.transfer) {
      return `<div class="tday transfer" data-region="${r.to.region}" style="--i:${n}">
        <div class="tday-date">${when}</div>
        <div><span class="tour-name">Traslado</span><h4>${r.from.base} → ${r.to.base}</h4>
        <p>Día de viaje entre zonas. Te ayudamos a coordinar vuelos o buses.</p></div></div>`;
    }
    const first = r.d.items[0], last = r.d.items[r.d.items.length - 1];
    return `<div class="tday ${r.tour.premium ? 'premium' : ''}" data-region="${r.tour.region}" style="--i:${n}">
      <div class="tday-date">${when}</div>
      <div><span class="tour-name">${r.tour.premium ? '✦ ' : ''}${r.tour.title}${r.tour.days > 1 ? ` · día ${r.i + 1}/${r.tour.days}` : ''}</span>
      <h4>${r.d.title}</h4>
      <p>${first[0]} ${first[1]}${last !== first ? ` → ${last[0]} ${last[1]}` : ''} · ${r.d.stat}</p>
      <button class="link" data-open="${r.tour.id}" data-day="${r.i}">Ver horario completo</button></div></div>`;
  }).join('');
}

$('#trip-list').addEventListener('click', e => {
  const rm = e.target.closest('[data-remove]');
  if (rm) { toggleTrip(rm.dataset.remove); return; }
  const mv = e.target.closest('[data-move]');
  if (mv) {
    const i = +mv.dataset.idx, j = i + +mv.dataset.move;
    const trip = [...state.trip];
    [trip[i], trip[j]] = [trip[j], trip[i]];
    update({ trip });
  }
});
$('#trip-timeline').addEventListener('click', e => {
  const b = e.target.closest('[data-open]');
  if (b) openTour(b.dataset.open, +b.dataset.day);
});
const today = new Date();
$('#trip-start').min = new Date(today.getTime() - today.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
$('#trip-start').addEventListener('change', e => update({ start: e.target.value }));
$('#people-minus').addEventListener('click', () => update({ people: Math.max(1, state.people - 1) }));
$('#people-plus').addEventListener('click', () => update({ people: Math.min(20, state.people + 1) }));
$('#clear-trip').addEventListener('click', () => { update({ trip: [] }); toast('Viaje vaciado'); });

$('#request-trip').addEventListener('click', () => {
  const rows = buildDays();
  const start = state.start ? new Date(state.start + 'T12:00:00').toLocaleDateString('es-CL') : 'por definir';
  const lines = state.trip.map(byId).map(t => `• ${t.premium ? '[Premium] ' : ''}${t.title} (${duration(t)})`);
  $('#c-msg').value =
    `Hola, quiero solicitar este viaje:\n${lines.join('\n')}\n\n` +
    `Inicio: ${start} · ${rows.length} días · ${state.people} viajeros\n` +
    `Total estimado: ${$('#sum-price').textContent} · Reserva: ${$('#pay-plan strong').textContent}`;
  $('#contacto').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  setTimeout(() => $('#c-name').focus({ preventScroll: true }), 500);
});

// ---------------------------------------------------------------------------
// Moneda
// ---------------------------------------------------------------------------
document.querySelectorAll('[data-currency]').forEach(b => b.addEventListener('click', () => {
  update({ currency: b.dataset.currency }, { keepExample: true });
}));
function renderCurrency() {
  document.querySelectorAll('[data-currency]').forEach(b => b.setAttribute('aria-pressed', b.dataset.currency === state.currency));
  $('#fx-note').textContent = state.currency === 'USD'
    ? `Precios en USD referenciales (1 USD ≈ ${fmtCLP.format(USD_RATE)}). Se cobra en CLP.`
    : 'Precios en pesos chilenos, por persona.';
}

function renderAll() {
  renderCurrency();
  renderHome();
  renderPremium();
  renderTrip();
  if (route && ROUTE_TO_REGION[route]) renderZone(ROUTE_TO_REGION[route]);
  renderDialog();
}

// ---------------------------------------------------------------------------
// Contacto (sin servidor: valida y confirma en pantalla).
// ---------------------------------------------------------------------------
const form = $('#contact-form');
const status = $('#form-status');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Escribe tu nombre y un correo válido para poder responderte.';
    status.className = 'form-status is-error';
    form.reportValidity();
    return;
  }
  const name = form.nombre.value.trim().split(' ')[0];
  status.textContent = `¡Gracias, ${name}! Recibimos tu consulta y te responderemos en menos de 24 horas.`;
  status.className = 'form-status is-ok';
  form.reset();
});

// ---------------------------------------------------------------------------
// Portada: palabra rotativa, estrellas y paralaje.
// ---------------------------------------------------------------------------
const WORDS = [
  ['entre géiseres', 'norte'], ['entre cerros de colores', 'centro'], ['entre volcanes', 'sur'],
  ['entre glaciares', 'patagonia'], ['entre moáis', 'isla'],
];
const rot = $('#rotator');
let w = 0;
rot.style.setProperty('--rot', `var(--${WORDS[0][1]})`);
if (!reduceMotion) {
  setInterval(() => {
    if (rot.offsetParent === null) return;
    w = (w + 1) % WORDS.length;
    rot.textContent = WORDS[w][0];
    rot.style.setProperty('--rot', `var(--${WORDS[w][1]})`);
    rot.classList.remove('swap'); void rot.offsetWidth; rot.classList.add('swap');
  }, 2600);
}

const hero = $('#hero');
const canvas = $('#stars');
function drawStars() {
  const { width, height } = hero.getBoundingClientRect();
  if (!width) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * dpr; canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < width * height / 2600; i++) {
    const r = rnd() * 1.3 + .2;
    ctx.globalAlpha = rnd() * .7 + .2;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(rnd() * width, rnd() * height * .75, r, 0, Math.PI * 2); ctx.fill();
  }
}
window.addEventListener('resize', drawStars);
window.addEventListener('hashchange', drawStars);

document.querySelectorAll('.layer').forEach(l => l.style.setProperty('--d', l.dataset.depth));
if (!reduceMotion) {
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
  const tick = () => {
    cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    hero.style.setProperty('--px', cx.toFixed(3));
    hero.style.setProperty('--py', cy.toFixed(3));
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > .001 ? requestAnimationFrame(tick) : null;
  };
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width - .5;
    ty = (e.clientY - r.top) / r.height - .5;
    if (!raf) raf = requestAnimationFrame(tick);
  });
  window.addEventListener('scroll', () => {
    hero.style.setProperty('--sy', Math.min(window.scrollY, 900).toFixed(0));
  }, { passive: true });
}

// ---------------------------------------------------------------------------
let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

$('#year').textContent = new Date().getFullYear();
router();
renderAll();
drawStars();
