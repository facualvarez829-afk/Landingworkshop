
function actualizarContador() {
  const ahora = new Date();

  // Fecha límite: 31 de octubre a las 23:59:59
  let fechaLimite = new Date(
    ahora.getFullYear(),
    9,
    31,
    23,
    59,
    59
  );

  // Si la fecha ya pasó, usar el próximo año.
  if (ahora >= fechaLimite) {
    fechaLimite = new Date(
      ahora.getFullYear() + 1,
      9,
      31,
      23,
      59,
      59
    );
  }

  const diferencia = fechaLimite.getTime() - ahora.getTime();

  const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferencia / (1000 * 60 * 60)) % 24
  );

  const minutos = Math.floor(
    (diferencia / (1000 * 60)) % 60
  );


  document.getElementById("countdown-days").textContent =
    String(dias).padStart(2, "0");

  document.getElementById("countdown-hours").textContent =
    String(horas).padStart(2, "0");

  document.getElementById("countdown-minutes").textContent =
    String(minutos).padStart(2, "0");
}

// Mostrar el contador inmediatamente.
actualizarContador();

// Actualizar cada segundo.
setInterval(actualizarContador, 1000);
