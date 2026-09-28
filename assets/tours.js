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

  // ---------- NUEVAS EXCURSIONES ----------
  {
    id: 'elqui', region: 'norte', title: 'Valle del Elqui: pisco y estrellas', days: 2, nights: 1, price: 180000,
    level: 'Fácil', maxAlt: '1.300 m', pin: [124, 140], base: 'La Serena',
    desc: 'El valle de Gabriela Mistral: destilerías de pisco, pueblos de adobe y un observatorio.',
    includes: ['1 noche en cabaña en Pisco Elqui', 'Desayuno y cena', 'Cata en destilería', 'Observatorio turístico', 'Traslados'],
    bring: ['Chaqueta para la noche', 'Traje de baño (piscina)', 'Bloqueador'],
    itinerary: [
      { title: 'Vicuña y Pisco Elqui', stat: '110 km', items: [
        ['09:00', 'Salida desde La Serena', 'Por el valle, entre parronales.'],
        ['10:30', 'Vicuña', 'Museo Gabriela Mistral y la torre Bauer.'],
        ['13:00', 'Almuerzo en cocina solar', 'Comida cocinada con el sol en Villaseca.'],
        ['15:30', 'Destilería de pisco', 'Recorrido y cata en Pisco Elqui.'],
        ['21:30', 'Observatorio', 'Telescopios bajo uno de los cielos más limpios del mundo.'],
      ] },
      { title: 'Alto Elqui y regreso', stat: '120 km', items: [
        ['09:30', 'Paseo por Montegrande', 'Pueblo natal de Gabriela Mistral.'],
        ['11:30', 'Cochiguaz', 'Río cordillerano entre cerros.'],
        ['16:00', 'Regreso a La Serena', ''],
      ] },
    ],
  },
  {
    id: 'lauca', region: 'norte', title: 'Parque Nacional Lauca y lago Chungará', days: 1, price: 85000,
    level: 'Moderado', maxAlt: '4.570 m', pin: [133, 14], base: 'Arica',
    desc: 'Uno de los lagos más altos del mundo, al pie del volcán Parinacota.',
    includes: ['Traslados', 'Desayuno y almuerzo', 'Oxígeno a bordo', 'Guía'],
    bring: ['Abrigo', 'Bloqueador y lentes', 'Hojas de coca o pastillas para la altura'],
    itinerary: [{
      title: 'De la costa al altiplano', stat: '380 km · 4.570 m',
      items: [
        ['06:30', 'Salida desde Arica', 'Por el valle de Lluta y sus geoglifos.'],
        ['09:30', 'Desayuno en Putre', 'Pueblo aymara a 3.500 m para aclimatarse.'],
        ['11:00', 'Bofedales de Parinacota', 'Llamas, alpacas y vicuñas.'],
        ['12:00', 'Lago Chungará', '4.570 m, con los volcanes Parinacota y Pomerape.'],
        ['13:30', 'Iglesia de Parinacota', 'Templo del siglo XVII con pinturas murales.'],
        ['19:30', 'Regreso a Arica', ''],
      ],
    }],
  },
  {
    id: 'tara', region: 'norte', title: 'Salar de Tara y monjes de Pacana', days: 1, price: 95000,
    level: 'Moderado', maxAlt: '4.800 m', pin: [138, 72], base: 'San Pedro de Atacama',
    desc: 'La ruta más alta desde San Pedro: salar, flamencos y torres de roca en la frontera.',
    includes: ['Traslado en 4×4', 'Desayuno y almuerzo', 'Entrada a la Reserva Los Flamencos', 'Guía'],
    bring: ['Mucho abrigo', 'Agua', 'Haber pasado 2 noches en San Pedro antes'],
    itinerary: [{
      title: 'Camino al paso de Jama', stat: '240 km · 4.800 m',
      items: [
        ['07:30', 'Salida en 4×4', 'Por el camino internacional a Argentina.'],
        ['09:30', 'Monjes de Pacana', 'Torres de roca volcánica en medio de la pampa.'],
        ['11:00', 'Catedrales de Tara', 'Formaciones rocosas gigantes.'],
        ['12:30', 'Salar de Tara', 'Almuerzo junto a la laguna con flamencos.'],
        ['17:30', 'Regreso a San Pedro', ''],
      ],
    }],
  },
  {
    id: 'santiago', region: 'centro', title: 'Santiago a pie: mercados y barrios', days: 1, price: 45000,
    level: 'Fácil', maxAlt: '860 m', pin: [126, 175], base: 'Santiago',
    desc: 'Mercado Central, La Vega, Lastarria y el cerro San Cristóbal con vista a los Andes.',
    includes: ['Guía local', 'Degustaciones en mercados', 'Funicular', 'Metro'],
    bring: ['Zapatos cómodos', 'Agua', 'Bloqueador'],
    itinerary: [{
      title: 'Una mañana en Santiago', stat: '7 km a pie',
      items: [
        ['09:00', 'Plaza de Armas', 'Catedral y Correo Central.'],
        ['10:00', 'Mercado Central y La Vega', 'Frutas, mariscos y sopaipillas.'],
        ['11:30', 'Barrio Lastarria', 'Cafés, librerías y el cerro Santa Lucía.'],
        ['13:00', 'Almuerzo chileno', 'Pastel de choclo o cazuela.'],
        ['14:30', 'Cerro San Cristóbal', 'Funicular y vista a la cordillera.'],
        ['16:00', 'Fin del recorrido', ''],
      ],
    }],
  },
  {
    id: 'colchagua', region: 'centro', title: 'Valle de Colchagua: carmenere y museo', days: 1, price: 115000,
    level: 'Fácil', maxAlt: '400 m', pin: [120, 190], base: 'Santiago',
    desc: 'Dos viñas del valle del carmenere, almuerzo campestre y el museo de Santa Cruz.',
    includes: ['Traslado desde Santiago', 'Catas en 2 viñas', 'Almuerzo con vino', 'Entrada al museo'],
    bring: ['Ropa cómoda', 'Sombrero', 'Espacio en la maleta para vinos'],
    itinerary: [{
      title: 'Ruta del vino de Colchagua', stat: '380 km',
      items: [
        ['07:30', 'Salida desde Santiago', ''],
        ['10:00', 'Primera viña', 'Recorrido por la bodega y cata de carmenere.'],
        ['13:00', 'Almuerzo campestre', 'Empanadas y asado con vino de la casa.'],
        ['15:00', 'Segunda viña', 'Cata de ensamblajes premium.'],
        ['16:30', 'Museo de Colchagua', 'Arqueología, huasos y el rescate de los 33 mineros.'],
        ['20:00', 'Regreso a Santiago', ''],
      ],
    }],
  },
  {
    id: 'huilo', region: 'sur', title: 'Selva de Huilo Huilo', days: 2, nights: 1, price: 260000,
    level: 'Fácil', maxAlt: '900 m', pin: [117, 244], base: 'Pucón',
    desc: 'Reserva biológica con cascadas, bosque valdiviano y hoteles con forma de árbol.',
    includes: ['1 noche en la reserva', 'Desayuno y cena', 'Entrada a la reserva', 'Caminatas guiadas', 'Traslados'],
    bring: ['Impermeable', 'Zapatos de caminata', 'Traje de baño (tinajas)'],
    itinerary: [
      { title: 'Bosque y cascadas', stat: '160 km · 6 km a pie', items: [
        ['08:30', 'Salida desde Pucón', 'Bordeando los lagos Calafquén y Panguipulli.'],
        ['12:00', 'Salto del Huilo Huilo', 'Cascada de 37 m en un cañón de roca volcánica.'],
        ['15:00', 'Sendero de los Espíritus', 'Pasarelas entre árboles milenarios.'],
        ['20:00', 'Cena y tinaja caliente', ''],
      ] },
      { title: 'Lago Pirehueico y regreso', stat: 'Navegación', items: [
        ['09:30', 'Navegación por el lago Pirehueico', 'Fiordo lacustre entre montañas.'],
        ['13:00', 'Almuerzo libre', ''],
        ['18:00', 'Regreso a Pucón', ''],
      ] },
    ],
  },
  {
    id: 'geometricas', region: 'sur', title: 'Termas Geométricas y Huerquehue', days: 1, price: 88000,
    level: 'Moderado', maxAlt: '1.300 m', pin: [122, 224], base: 'Pucón',
    desc: 'Caminata entre araucarias y lagunas, y de premio 17 pozones termales en una quebrada.',
    includes: ['Traslados', 'Entrada al parque', 'Entrada a las termas', 'Guía'],
    bring: ['Traje de baño y toalla', 'Almuerzo', 'Zapatos de caminata'],
    itinerary: [{
      title: 'Araucarias y aguas termales', stat: '12 km a pie · +600 m',
      items: [
        ['08:30', 'Salida desde Pucón', ''],
        ['09:30', 'Parque Nacional Huerquehue', 'Sendero Los Lagos entre araucarias milenarias.'],
        ['12:30', 'Laguna Chico', 'Almuerzo junto al agua.'],
        ['15:30', 'Termas Geométricas', 'Pozones de piedra unidos por pasarelas rojas.'],
        ['19:00', 'Regreso a Pucón', ''],
      ],
    }],
  },
  {
    id: 'cochamo', region: 'sur', title: 'Cabalgata en el valle de Cochamó', days: 1, price: 110000,
    level: 'Moderado', maxAlt: '400 m', pin: [115, 280], base: 'Puerto Varas',
    desc: 'El “Yosemite chileno”: paredes de granito y bosque de alerces, a caballo con arrieros.',
    includes: ['Traslados', 'Cabalgata de 5 h', 'Almuerzo de campo', 'Guía y arrieros'],
    bring: ['Pantalón largo', 'Impermeable', 'Repelente (tábanos en verano)'],
    itinerary: [{
      title: 'Granito y alerces', stat: '5 h a caballo',
      items: [
        ['08:00', 'Salida desde Puerto Varas', 'Por el estuario de Reloncaví.'],
        ['10:00', 'Encuentro con los arrieros', 'Caballos criollos y aperos.'],
        ['10:30', 'Cabalgata por el valle', 'Antiguo camino de arrieros hacia Argentina.'],
        ['13:30', 'Almuerzo de campo', 'Cordero, papas y pan amasado.'],
        ['18:30', 'Regreso a Puerto Varas', ''],
      ],
    }],
  },
  {
    id: 'pinguinos', region: 'patagonia', title: 'Pingüinos de Isla Magdalena', days: 1, price: 95000,
    level: 'Fácil', maxAlt: '50 m', pin: [101, 400], base: 'Punta Arenas',
    desc: 'Navegación por el Estrecho de Magallanes hasta una colonia de 60.000 pingüinos.',
    includes: ['Traslados', 'Navegación ida y vuelta', 'Entrada al Monumento Natural', 'Guía'],
    bring: ['Parka cortaviento', 'Gorro y guantes', 'Cámara'],
    itinerary: [{
      title: 'Estrecho de Magallanes', stat: 'Navegación 2 h · noviembre a marzo',
      items: [
        ['15:00', 'Recogida en Punta Arenas', ''],
        ['16:00', 'Zarpe desde el muelle', 'Toninas y cormoranes en el estrecho.'],
        ['17:00', 'Isla Magdalena', 'Una hora entre pingüinos de Magallanes.'],
        ['19:30', 'Regreso a Punta Arenas', ''],
      ],
    }],
  },
  {
    id: 'marmol', region: 'patagonia', title: 'Capillas de Mármol', days: 1, price: 75000,
    level: 'Fácil', maxAlt: '200 m', pin: [104, 322], base: 'Puerto Río Tranquilo',
    desc: 'Cuevas de mármol pulidas por el lago General Carrera, en bote o kayak.',
    includes: ['Navegación o kayak', 'Chaleco y traje seco', 'Guía', 'Snack'],
    bring: ['Ropa abrigada', 'Cámara', 'Bolsa estanca'],
    itinerary: [{
      title: 'Lago General Carrera', stat: 'Navegación 2 h',
      items: [
        ['09:00', 'Encuentro en Puerto Río Tranquilo', ''],
        ['09:30', 'Navegación a las Capillas', 'Catedral, Capilla y Cuevas de mármol.'],
        ['12:00', 'Almuerzo en el pueblo', ''],
        ['14:00', 'Mirador del lago', 'Agua turquesa entre cumbres nevadas.'],
        ['16:00', 'Fin del tour', ''],
      ],
    }],
  },
  {
    id: 'austral', region: 'patagonia', title: 'Carretera Austral: glaciares y mármol', days: 5, nights: 4, price: 1290000,
    level: 'Moderado', maxAlt: '1.100 m', pin: [110, 312], base: 'Balmaceda',
    desc: 'La ruta más salvaje de Chile: glaciar Exploradores, Capillas de Mármol y valle Chacabuco.',
    includes: ['4 noches en lodges', 'Pensión completa', 'Vehículo 4×4 y guía', 'Caminata en glaciar con equipo', 'Navegación a las Capillas'],
    bring: ['Botas impermeables', 'Capas térmicas', 'Guantes'],
    itinerary: [
      { title: 'Coyhaique y cerro Castillo', stat: '180 km', items: [
        ['11:00', 'Recepción en el aeropuerto de Balmaceda', ''],
        ['13:00', 'Almuerzo en Coyhaique', ''],
        ['16:00', 'Mirador del cerro Castillo', 'Agujas de basalto sobre la estepa.'],
      ] },
      { title: 'Capillas de Mármol', stat: '200 km · navegación', items: [
        ['08:30', 'Ruta al lago General Carrera', ''],
        ['13:00', 'Navegación a las Capillas de Mármol', ''],
        ['19:00', 'Lodge en Puerto Río Tranquilo', ''],
      ] },
      { title: 'Glaciar Exploradores', stat: 'Caminata sobre hielo', items: [
        ['08:00', 'Valle Exploradores', 'Bosque lluvioso hasta el glaciar.'],
        ['10:30', 'Caminata sobre el glaciar', 'Con crampones, entre grietas y cuevas azules.'],
        ['17:00', 'Regreso al lodge', ''],
      ] },
      { title: 'Valle Chacabuco', stat: '150 km', items: [
        ['09:00', 'Confluencia de los ríos Baker y Neff', ''],
        ['13:00', 'Parque Nacional Patagonia', 'Guanacos, huemules y cóndores.'],
        ['19:00', 'Lodge en Cochrane', ''],
      ] },
      { title: 'Regreso', stat: '330 km', items: [
        ['08:00', 'Ruta de regreso por la Carretera Austral', ''],
        ['15:00', 'Traslado al aeropuerto de Balmaceda', ''],
      ] },
    ],
  },
  {
    id: 'navarino', region: 'patagonia', title: 'Dientes de Navarino', days: 5, nights: 4, price: 1450000,
    level: 'Exigente', maxAlt: '900 m', pin: [100, 410], base: 'Puerto Williams',
    desc: 'El trekking más austral del planeta, en la isla frente al Cabo de Hornos.',
    includes: ['Vuelo Punta Arenas–Puerto Williams', '2 noches de hostal y 3 de campamento', 'Pensión completa', 'Equipo de camping', 'Guía de montaña'],
    bring: ['Botas de trekking', 'Saco de dormir −5 °C', 'Ropa impermeable completa'],
    itinerary: [
      { title: 'Puerto Williams', stat: 'Vuelo 1 h 15', items: [
        ['10:00', 'Vuelo desde Punta Arenas', 'Sobre la Tierra del Fuego y el canal Beagle.'],
        ['14:00', 'Museo Martín Gusinde', 'Historia del pueblo yagán.'],
        ['20:00', 'Cena y charla de seguridad', ''],
      ] },
      { title: 'Cerro Bandera y laguna El Salto', stat: '12 km · +750 m', items: [
        ['08:30', 'Subida al cerro Bandera', 'Vista al canal Beagle y Ushuaia.'],
        ['16:00', 'Campamento en laguna El Salto', ''],
      ] },
      { title: 'Paso Australia', stat: '10 km', items: [
        ['09:00', 'Travesía entre lagunas', 'Bajo las agujas de los Dientes.'],
        ['16:00', 'Campamento en laguna Escondida', ''],
      ] },
      { title: 'Paso Virginia', stat: '11 km · +500 m', items: [
        ['08:30', 'Cruce del paso Virginia', 'El tramo más duro y espectacular.'],
        ['16:30', 'Campamento en laguna Los Guanacos', ''],
      ] },
      { title: 'Regreso a Puerto Williams', stat: '9 km', items: [
        ['09:00', 'Descenso a la costa', ''],
        ['15:00', 'Llegada a Puerto Williams', 'Cena de centolla para celebrar.'],
      ] },
    ],
  },
  {
    id: 'terevaka', region: 'isla', title: 'A caballo al volcán Terevaka', days: 1, price: 95000,
    level: 'Moderado', maxAlt: '507 m', pin: [32, 182], base: 'Hanga Roa',
    desc: 'Cabalgata al punto más alto de la isla, con el Pacífico en 360°.',
    includes: ['Caballo y equipo', 'Guía rapanui', 'Almuerzo', 'Traslados'],
    bring: ['Pantalón largo', 'Bloqueador', 'Agua'],
    itinerary: [{
      title: 'Cumbre del Terevaka', stat: '4 h a caballo',
      items: [
        ['09:00', 'Encuentro en el rancho', 'Entrega de caballos y casco.'],
        ['09:30', 'Ahu Akivi', 'Los siete moáis que miran al mar.'],
        ['11:30', 'Cumbre del Terevaka', '507 m: la isla entera y el océano alrededor.'],
        ['13:30', 'Almuerzo en el rancho', ''],
        ['14:30', 'Fin del tour', ''],
      ],
    }],
  },
  {
    id: 'buceo', region: 'isla', title: 'Buceo en Motu Nui', days: 1, price: 110000,
    level: 'Moderado', maxAlt: '0 m', pin: [24, 194], base: 'Hanga Roa',
    desc: 'Dos inmersiones con visibilidad de hasta 40 m frente a los islotes del Hombre Pájaro.',
    includes: ['2 inmersiones', 'Equipo completo', 'Instructor PADI', 'Traslado en bote'],
    bring: ['Certificación de buceo (o bautizo)', 'Traje de baño', 'Toalla'],
    itinerary: [{
      title: 'Islotes del Hombre Pájaro', stat: '2 inmersiones · hasta 40 m de visibilidad',
      items: [
        ['08:30', 'Centro de buceo en Hanga Roa', 'Charla y ajuste de equipo.'],
        ['09:30', 'Primera inmersión en Motu Nui', 'Cuevas y arcos de lava.'],
        ['11:00', 'Intervalo en el bote', 'Vista a los acantilados de Orongo.'],
        ['11:45', 'Segunda inmersión', 'Tortugas y peces endémicos.'],
        ['13:30', 'Regreso a puerto', ''],
      ],
    }],
  },

  // ---------- CIRCUITOS LARGOS (pestaña Circuitos) ----------
  {
    id: 'circ-lagos', circuit: true, region: 'multi', title: 'Lagos, volcanes y Chiloé', days: 10, nights: 9, price: 2600000,
    level: 'Moderado', maxAlt: '2.847 m', pin: null, base: 'Temuco',
    desc: 'Diez días por el sur: Pucón, termas, Puerto Varas, los Saltos del Petrohué y Chiloé.',
    includes: ['9 noches en hoteles 4★', 'Desayunos y 5 cenas', 'Todas las excursiones con guía bilingüe', 'Transporte privado', 'Entradas a parques y termas'],
    bring: ['Impermeable', 'Botas de caminata', 'Traje de baño'],
    itinerary: [
      { title: 'Llegada a Pucón', stat: 'Traslado 1 h 30', items: [['12:00', 'Recepción en el aeropuerto de Temuco', ''], ['15:00', 'Paseo por Pucón y el lago Villarrica', '']] },
      { title: 'Huerquehue y termas', stat: '12 km a pie', items: [['09:00', 'Sendero Los Lagos entre araucarias', ''], ['16:00', 'Termas Geométricas', '']] },
      { title: 'Volcán Villarrica', stat: 'Ascenso o alternativa', items: [['06:00', 'Ascenso al volcán (según alerta)', 'Alternativa: canopy y rafting.'], ['19:00', 'Cena en Pucón', '']] },
      { title: 'Huilo Huilo', stat: '160 km', items: [['09:00', 'Ruta de los siete lagos', ''], ['14:00', 'Salto del Huilo Huilo', '']] },
      { title: 'Rumbo a Puerto Varas', stat: '330 km', items: [['09:00', 'Viaje al lago Llanquihue', ''], ['17:00', 'Frutillar y kuchen', '']] },
      { title: 'Petrohué y Osorno', stat: '180 km', items: [['09:30', 'Saltos del Petrohué', ''], ['15:00', 'Telesilla del volcán Osorno', '']] },
      { title: 'Cochamó a caballo', stat: '5 h a caballo', items: [['08:00', 'Cabalgata con arrieros', ''], ['13:30', 'Almuerzo de campo', '']] },
      { title: 'Cruce a Chiloé', stat: 'Ferry', items: [['09:00', 'Canal de Chacao', ''], ['15:00', 'Palafitos de Castro', '']] },
      { title: 'Islas de Chiloé', stat: 'Lancha', items: [['09:00', 'Dalcahue y Achao', ''], ['13:30', 'Curanto al hoyo', '']] },
      { title: 'Regreso', stat: 'Traslado', items: [['09:00', 'Parque Nacional Chiloé', ''], ['16:00', 'Traslado al aeropuerto de Puerto Montt', '']] },
    ],
  },
  {
    id: 'circ-esencial', circuit: true, region: 'multi', title: 'Chile esencial', days: 12, nights: 11, price: 3900000,
    level: 'Moderado', maxAlt: '4.320 m', pin: null, base: 'Santiago',
    desc: 'Lo imprescindible en 12 días: Santiago, Valparaíso, Atacama y Torres del Paine.',
    includes: ['11 noches en hoteles 4★', 'Desayunos y 6 cenas', '3 vuelos internos', 'Excursiones con guía bilingüe', 'Traslados y entradas'],
    bring: ['Ropa para desierto y frío', 'Botas de trekking', 'Bloqueador'],
    itinerary: [
      { title: 'Santiago', stat: 'Llegada', items: [['10:00', 'Recepción en el aeropuerto', ''], ['15:00', 'Santiago a pie', 'Mercado Central, Lastarria y San Cristóbal.']] },
      { title: 'Valparaíso y Casablanca', stat: '260 km', items: [['09:30', 'Cata en Casablanca', ''], ['12:30', 'Cerros de Valparaíso', '']] },
      { title: 'Vuelo a Atacama', stat: 'Vuelo SCL–CJC', items: [['09:00', 'Vuelo a Calama y traslado a San Pedro', ''], ['17:00', 'Valle de la Luna al atardecer', '']] },
      { title: 'Lagunas altiplánicas', stat: '4.200 m', items: [['07:00', 'Laguna Chaxa y Miscanti', ''], ['13:30', 'Almuerzo en Socaire', '']] },
      { title: 'Géiseres del Tatio', stat: '4.320 m', items: [['04:30', 'Tatio al amanecer', ''], ['21:30', 'Tour astronómico', '']] },
      { title: 'Día libre en San Pedro', stat: 'Opcional', items: [['10:00', 'Bicicleta o Lagunas de Baltinache', '']] },
      { title: 'Vuelo a Patagonia', stat: 'CJC–SCL–PNT', items: [['08:00', 'Vuelos a Puerto Natales', ''], ['19:00', 'Cena de cordero magallánico', '']] },
      { title: 'Base de las Torres', stat: '19 km · +900 m', items: [['07:00', 'Caminata a las Torres', '']] },
      { title: 'Glaciar Grey', stat: 'Navegación', items: [['08:00', 'Cueva del Milodón', ''], ['13:00', 'Navegación al glaciar Grey', '']] },
      { title: 'Lago Pehoé y Salto Grande', stat: '8 km a pie', items: [['09:00', 'Mirador Cuernos', ''], ['15:00', 'Catamarán por el Pehoé', '']] },
      { title: 'Vuelo a Santiago', stat: 'PNT–SCL', items: [['11:00', 'Vuelo a Santiago', ''], ['20:00', 'Cena de despedida', '']] },
      { title: 'Regreso', stat: 'Traslado', items: [['10:00', 'Traslado al aeropuerto', '']] },
    ],
  },
  {
    id: 'circ-patagonia', circuit: true, region: 'multi', title: 'Patagonia completa', days: 14, nights: 13, price: 5400000,
    level: 'Exigente', maxAlt: '1.100 m', pin: null, base: 'Balmaceda',
    desc: 'Carretera Austral, Torres del Paine y Tierra del Fuego: la Patagonia chilena de punta a punta.',
    includes: ['13 noches en lodges y refugios', 'Pensión completa', '2 vuelos internos', 'Guía bilingüe todo el viaje', 'Caminata en glaciar y navegaciones', 'Entradas a parques'],
    bring: ['Botas de trekking impermeables', 'Capas térmicas', 'Bastones'],
    itinerary: [
      { title: 'Coyhaique', stat: 'Llegada', items: [['11:00', 'Recepción en Balmaceda', ''], ['16:00', 'Reserva Coyhaique', '']] },
      { title: 'Cerro Castillo', stat: '14 km', items: [['08:30', 'Caminata a la laguna del cerro Castillo', '']] },
      { title: 'Capillas de Mármol', stat: 'Navegación', items: [['13:00', 'Navegación a las Capillas de Mármol', '']] },
      { title: 'Glaciar Exploradores', stat: 'Caminata sobre hielo', items: [['10:00', 'Caminata sobre el glaciar', '']] },
      { title: 'Valle Chacabuco', stat: '150 km', items: [['13:00', 'Parque Nacional Patagonia', '']] },
      { title: 'Caleta Tortel', stat: '130 km', items: [['14:00', 'Pueblo de pasarelas de ciprés', '']] },
      { title: 'Vuelo a Punta Arenas', stat: 'Vuelo', items: [['12:00', 'Vuelo Balmaceda–Punta Arenas', ''], ['17:00', 'Pingüinos de Isla Magdalena (nov–mar)', '']] },
      { title: 'Tierra del Fuego', stat: 'Ferry + 4×4', items: [['08:00', 'Cruce del Estrecho de Magallanes', ''], ['14:00', 'Pingüinos rey en Bahía Inútil', '']] },
      { title: 'Rumbo a Torres del Paine', stat: '400 km', items: [['09:00', 'Ruta a Puerto Natales', ''], ['17:00', 'Llegada al parque', '']] },
      { title: 'Base de las Torres', stat: '19 km · +900 m', items: [['07:30', 'Caminata a las Torres', '']] },
      { title: 'Los Cuernos', stat: '12 km', items: [['08:30', 'Orilla del lago Nordenskjöld', '']] },
      { title: 'Valle del Francés', stat: '22 km', items: [['08:00', 'Mirador Francés y Británico', '']] },
      { title: 'Glaciar Grey', stat: 'Navegación', items: [['09:00', 'Navegación al glaciar Grey', ''], ['20:00', 'Cena de despedida', '']] },
      { title: 'Regreso', stat: 'Traslado', items: [['09:00', 'Traslado al aeropuerto de Punta Arenas', '']] },
    ],
  },
  {
    id: 'circ-grand', circuit: true, region: 'multi', title: 'Chile de punta a punta', days: 20, nights: 19, price: 7900000,
    level: 'Moderado', maxAlt: '4.320 m', pin: null, base: 'Santiago',
    desc: 'Veinte días del desierto a la Patagonia y Rapa Nui. El viaje de una vida.',
    includes: ['19 noches en hoteles 4★ y lodges', 'Desayunos y 12 cenas', '6 vuelos internos', 'Guía bilingüe en cada zona', 'Todas las excursiones y entradas', 'Seguro de asistencia'],
    bring: ['Ropa para desierto, lluvia, frío y playa', 'Botas de trekking', 'Traje de baño'],
    itinerary: [
      { title: 'Santiago', stat: 'Llegada', items: [['10:00', 'Recepción en el aeropuerto', ''], ['15:00', 'Santiago a pie', '']] },
      { title: 'Valparaíso', stat: '260 km', items: [['09:30', 'Viñas de Casablanca y cerros de Valparaíso', '']] },
      { title: 'Vuelo a La Serena', stat: 'Vuelo', items: [['10:00', 'Vuelo y traslado al Valle del Elqui', ''], ['21:30', 'Observatorio', '']] },
      { title: 'Valle del Elqui', stat: '120 km', items: [['10:00', 'Destilería de pisco y Montegrande', '']] },
      { title: 'Vuelo a Atacama', stat: 'Vuelo', items: [['10:00', 'Vuelo a Calama', ''], ['17:00', 'Valle de la Luna', '']] },
      { title: 'Lagunas altiplánicas', stat: '4.200 m', items: [['07:00', 'Salar y lagunas Miscanti y Miñiques', '']] },
      { title: 'Géiseres del Tatio', stat: '4.320 m', items: [['04:30', 'Tatio al amanecer', ''], ['21:30', 'Astroturismo', '']] },
      { title: 'Vuelo al sur', stat: 'CJC–SCL–ZCO', items: [['09:00', 'Vuelos a Temuco y traslado a Pucón', '']] },
      { title: 'Huerquehue y termas', stat: '12 km', items: [['09:00', 'Araucarias y Termas Geométricas', '']] },
      { title: 'Volcán Villarrica', stat: 'Opcional', items: [['06:00', 'Ascenso o día libre en Pucón', '']] },
      { title: 'Puerto Varas', stat: '330 km', items: [['09:00', 'Ruta al lago Llanquihue', ''], ['17:00', 'Frutillar', '']] },
      { title: 'Petrohué y Osorno', stat: '180 km', items: [['09:30', 'Saltos del Petrohué y volcán Osorno', '']] },
      { title: 'Chiloé', stat: 'Ferry', items: [['09:00', 'Castro, palafitos y curanto', '']] },
      { title: 'Vuelo a Patagonia', stat: 'PMC–PUQ', items: [['10:00', 'Vuelo a Punta Arenas y ruta a Torres del Paine', '']] },
      { title: 'Base de las Torres', stat: '19 km', items: [['07:30', 'Caminata a las Torres', '']] },
      { title: 'Glaciar Grey', stat: 'Navegación', items: [['09:00', 'Navegación al glaciar Grey', '']] },
      { title: 'Vuelo a Rapa Nui', stat: 'PUQ–SCL–IPC', items: [['08:00', 'Vuelos a Hanga Roa vía Santiago', '']] },
      { title: 'Ruta de los moáis', stat: '70 km', items: [['06:00', 'Amanecer en Tongariki', ''], ['12:30', 'Anakena', '']] },
      { title: 'Orongo', stat: '6 km', items: [['09:00', 'Rano Kau y Orongo', ''], ['19:00', 'Atardecer en Tahai', '']] },
      { title: 'Regreso', stat: 'Vuelo IPC–SCL', items: [['13:00', 'Vuelo a Santiago y conexión internacional', '']] },
    ],
  },
];

// Traducciones: assets/tours-en.js y assets/tours-de.js rellenan este objeto.
const TOURS_TR = {};
