

import { Link } from "react-router";

function Ubicacion() {
  const coordenadas = "-26.8366,-65.2072";

  const abrirMapa = `https://www.bing.com/maps?cp=${coordenadas.replace(",", "~")}&lvl=17`;

  const detalles = ["Jueves 19/11", "18:00 hs", "Entrepiso"];

  return (
    <section
      id="ubicacion"
      className="border-b border-[var(--rc-border)] bg-[var(--rc-black)] px-5 py-16 text-[var(--rc-white)] sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Información de ubicación */}
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--rc-red)]">
            Cómo llegar
          </p>

          <h2 className="mb-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Te esperamos en
            <br />
            Rolling Code
            <br />
            School
          </h2>

          <div className="mb-7 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--rc-red)]/30 bg-[var(--rc-red)]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--rc-red)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <div>
              <p className="font-bold text-[var(--rc-white)]">
                Calle Gral. Paz 576, Entrepiso
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--rc-text-mute)]">
                4000 San Miguel de Tucumán, Tucumán
              </p>
            </div>
          </div>

          {/* Detalles del evento */}
          <div className="mb-8 flex flex-wrap gap-3">
            {detalles.map((detalle) => (
              <span
                key={detalle}
                className="rounded-full border border-[var(--rc-border)] bg-[var(--rc-surface)] px-4 py-2 text-sm font-medium text-[var(--rc-text-soft)]"
              >
                {detalle}
              </span>
            ))}
          </div>

          {/* Acciones */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={abrirMapa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--rc-red)] px-6 py-3 font-bold text-white transition-colors hover:bg-[var(--rc-red-dark)]"
            >
              Abrir en Bing Maps
            </a>

            <Link
              to="/#entradas"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--rc-border)] px-6 py-3 font-bold text-[var(--rc-white)] transition-colors hover:border-[var(--rc-red)] hover:text-[var(--rc-red)]"
            >
              Comprar entrada
            </Link>
          </div>
        </div>

        {/* Mapa ilustrativo */}
        <a
          href={abrirMapa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver ubicación en Bing Maps"
          className="group relative block min-h-[400px] overflow-hidden rounded-2xl border border-[var(--rc-border)] bg-[var(--rc-surface)] sm:min-h-[480px]"
        >
          {/* Cuadrícula de fondo */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(var(--rc-surface-2) 1px, transparent 1px),
                linear-gradient(90deg, var(--rc-surface-2) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Calles ilustrativas */}
          <div className="absolute left-0 top-[52%] h-10 w-full -rotate-6 bg-[#202023] sm:h-14" />
          <div className="absolute left-[60%] top-0 h-full w-10 rotate-6 bg-[#202023] sm:w-14" />

          <div className="absolute left-[20%] top-[20%] h-20 w-24 rounded-lg border border-[var(--rc-border)] bg-[var(--rc-surface-2)]/50" />
          <div className="absolute right-[12%] top-[18%] h-24 w-20 rounded-lg border border-[var(--rc-border)] bg-[var(--rc-surface-2)]/50" />
          <div className="absolute bottom-[30%] left-[12%] h-16 w-28 rounded-lg border border-[var(--rc-border)] bg-[var(--rc-surface-2)]/50" />

          {/* Marcador */}
          <div className="absolute left-[60%] top-[43%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 scale-150 rounded-full bg-[var(--rc-red)]/20 blur-xl" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 24 24"
              fill="var(--rc-red)"
              stroke="white"
              strokeWidth="1"
              aria-hidden="true"
              className="relative drop-shadow-lg"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" fill="white" stroke="none" />
            </svg>
          </div>

          {/* Tarjeta inferior */}
          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-[var(--rc-border)] bg-[var(--rc-black)]/95 p-4 backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--rc-gradient)]">
                <span className="text-lg font-black text-white">RC</span>
              </div>

              <div className="min-w-0">
                <p className="font-bold text-[var(--rc-white)]">
                  Rolling Code School
                </p>
                <p className="mt-1 text-xs text-[var(--rc-text-mute)] sm:text-sm">
                  Gral. Paz 576 · San Miguel de Tucumán
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-[var(--rc-border)] pt-3 text-xs text-[var(--rc-text-mute)]">
              Coordenadas: {coordenadas}
              <span className="float-right text-[var(--rc-red)]">
                Ver mapa ↗
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Ubicacion;
