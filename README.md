<svg width="100%" height="620" viewBox="0 0 1200 620" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#12151f"/>
      <stop offset="100%" stop-color="#181c2a"/>
    </linearGradient>
    <filter id="cardGlow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="620" fill="#0b0e14"/>

  <!-- ============ CARD 1 ============ -->
  <g transform="translate(40,30)">
    <rect width="360" height="260" rx="10" fill="url(#cardBg)" stroke="#00f0ff" stroke-width="1.5" opacity="0.9">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
    </rect>
    <!-- window dots -->
    <circle cx="24" cy="24" r="6" fill="#ff5f56"/>
    <circle cx="46" cy="24" r="6" fill="#ffbd2e"/>
    <circle cx="68" cy="24" r="6" fill="#27c93f"/>
    <line x1="0" y1="42" x2="360" y2="42" stroke="#2a2f42" stroke-width="1"/>

    <text x="24" y="76" font-family="Consolas, monospace" font-size="19" font-weight="700" fill="#00f0ff">Two Number Calculator</text>
    <text x="24" y="102" font-family="Consolas, monospace" font-size="13" fill="#8b93a7">A clean, minimal calculator app</text>
    <text x="24" y="120" font-family="Consolas, monospace" font-size="13" fill="#8b93a7">built for learning core logic flow.</text>

    <rect x="24" y="140" width="118" height="24" rx="12" fill="#1e2436" stroke="#f97316" stroke-width="1"/>
    <text x="83" y="156" font-family="Consolas, monospace" font-size="12" fill="#f97316" text-anchor="middle">Jupyter Notebook</text>

    <rect x="152" y="140" width="70" height="24" rx="12" fill="#1e2436" stroke="#a78bfa" stroke-width="1"/>
    <text x="187" y="156" font-family="Consolas, monospace" font-size="12" fill="#a78bfa" text-anchor="middle">HTML</text>

    <circle cx="30" cy="200" r="5" fill="#c6ff4d" filter="url(#cardGlow)">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="44" y="205" font-family="Consolas, monospace" font-size="12" fill="#c6ff4d">status: complete</text>

    <text x="24" y="235" font-family="Consolas, monospace" font-size="12" fill="#5b6478">→ click banner below to open repo</text>
  </g>

  <!-- ============ CARD 2 (template / placeholder for next project) ============ -->
  <g transform="translate(420,30)">
    <rect width="360" height="260" rx="10" fill="url(#cardBg)" stroke="#a78bfa" stroke-width="1.5" opacity="0.9">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3.4s" repeatCount="indefinite"/>
    </rect>
    <circle cx="24" cy="24" r="6" fill="#ff5f56"/>
    <circle cx="46" cy="24" r="6" fill="#ffbd2e"/>
    <circle cx="68" cy="24" r="6" fill="#27c93f"/>
    <line x1="0" y1="42" x2="360" y2="42" stroke="#2a2f42" stroke-width="1"/>

    <text x="24" y="76" font-family="Consolas, monospace" font-size="19" font-weight="700" fill="#a78bfa">Next Build</text>
    <text x="24" y="102" font-family="Consolas, monospace" font-size="13" fill="#8b93a7">Slot reserved — swap in your</text>
    <text x="24" y="120" font-family="Consolas, monospace" font-size="13" fill="#8b93a7">next project's name + repo link.</text>

    <rect x="24" y="140" width="90" height="24" rx="12" fill="#1e2436" stroke="#5b6478" stroke-width="1" stroke-dasharray="4,3"/>
    <text x="69" y="156" font-family="Consolas, monospace" font-size="12" fill="#5b6478" text-anchor="middle">tbd</text>

    <circle cx="30" cy="200" r="5" fill="#ffbd2e" filter="url(#cardGlow)">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/>
    </circle>
    <text x="44" y="205" font-family="Consolas, monospace" font-size="12" fill="#ffbd2e">status: planned</text>

    <text x="24" y="235" font-family="Consolas, monospace" font-size="12" fill="#5b6478">→ duplicate this card per repo</text>
  </g>

  <!-- ============ CARD 3 (template) ============ -->
  <g transform="translate(800,30)">
    <rect width="360" height="260" rx="10" fill="url(#cardBg)" stroke="#c6ff4d" stroke-width="1.5" opacity="0.9">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.7s" repeatCount="indefinite"/>
    </rect>
    <circle cx="24" cy="24" r="6" fill="#ff5f56"/>
    <circle cx="46" cy="24" r="6" fill="#ffbd2e"/>
    <circle cx="68" cy="24" r="6" fill="#27c93f"/>
    <line x1="0" y1="42" x2="360" y2="42" stroke="#2a2f42" stroke-width="1"/>

    <text x="24" y="76" font-family="Consolas, monospace" font-size="19" font-weight="700" fill="#c6ff4d">+ Add Project</text>
    <text x="24" y="102" font-family="Consolas, monospace" font-size="13" fill="#8b93a7">Copy Card 2's markup, update</text>
    <text x="24" y="120" font-family="Consolas, monospace" font-size="13" fill="#8b93a7">the title, tags, and repo link.</text>

    <circle cx="180" cy="180" r="26" fill="none" stroke="#c6ff4d" stroke-width="2" stroke-dasharray="6,4">
      <animateTransform attributeName="transform" type="rotate" from="0 180 180" to="360 180 180" dur="10s" repeatCount="indefinite"/>
    </circle>
    <text x="180" y="187" font-family="Consolas, monospace" font-size="24" fill="#c6ff4d" text-anchor="middle">+</text>
  </g>

  <!-- ============ ROW 2: stat strip ============ -->
  <g transform="translate(40,320)">
    <rect width="1120" height="130" rx="10" fill="url(#cardBg)" stroke="#2a2f42" stroke-width="1.5"/>
    <line x1="280" y1="20" x2="280" y2="110" stroke="#2a2f42"/>
    <line x1="560" y1="20" x2="560" y2="110" stroke="#2a2f42"/>
    <line x1="840" y1="20" x2="840" y2="110" stroke="#2a2f42"/>

    <text x="140" y="55" font-family="Consolas, monospace" font-size="34" font-weight="800" fill="#00f0ff" text-anchor="middle">
      <tspan>1</tspan>
    </text>
    <text x="140" y="85" font-family="Consolas, monospace" font-size="13" fill="#8b93a7" text-anchor="middle">projects shipped</text>

    <text x="420" y="55" font-family="Consolas, monospace" font-size="28" font-weight="800" fill="#a78bfa" text-anchor="middle">Data Sci</text>
    <text x="420" y="85" font-family="Consolas, monospace" font-size="13" fill="#8b93a7" text-anchor="middle">primary focus</text>

    <text x="700" y="55" font-family="Consolas, monospace" font-size="28" font-weight="800" fill="#c6ff4d" text-anchor="middle">Py / Java</text>
    <text x="700" y="85" font-family="Consolas, monospace" font-size="13" fill="#8b93a7" text-anchor="middle">core stack</text>

    <text x="980" y="55" font-family="Consolas, monospace" font-size="34" font-weight="800" fill="#f97316" text-anchor="middle">
      <tspan>∞</tspan>
      <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
    </text>
    <text x="980" y="85" font-family="Consolas, monospace" font-size="13" fill="#8b93a7" text-anchor="middle">more incoming</text>
  </g>

  <!-- ============ progress / build bar ============ -->
  <g transform="translate(40,480)">
    <text x="0" y="0" font-family="Consolas, monospace" font-size="13" fill="#5b6478">repo_index.log</text>
    <rect x="0" y="14" width="1120" height="10" rx="5" fill="#1e2436"/>
    <rect x="0" y="14" width="1120" height="10" rx="5" fill="#0b0e14" opacity="0">
    </rect>
    <rect x="0" y="14" height="10" rx="5" fill="#00f0ff">
      <animate attributeName="width" values="0;1120;0" dur="5s" repeatCount="indefinite"/>
    </rect>
  </g>

  <!-- footer strip -->
  <g transform="translate(40,530)">
    <text x="0" y="0" font-family="Consolas, monospace" font-size="12" fill="#4b5468">
      last_sync: auto &#160;&#160;//&#160;&#160; source: github.com/HARISUDHAAN2006 &#160;&#160;//&#160;&#160; scaling: true
    </text>
  </g>
</svg>
