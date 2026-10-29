
function Error404() {
  return (
    <>
      <div className="error-main container-fluid d-flex align-items-center justify-content-center text-center py-5">
        <section className="container py-4 py-lg-5">
          <div className="mb-4">
            <span className="error-badge rounded-pill px-4 py-2 fw-bold small">
              ERROR
              <span className="d-block">404</span>
            </span>
          </div>

          <h1 className="error-number fw-bold lh-1 mb-3">404</h1>

          <h2 className="text-white fw-bold display-6 mb-3">
            Página no encontrada
          </h2>

          <p className="error-description fs-5 mx-auto mb-5">
            Lo sentimos, la página que estás buscando no existe, ha sido
            eliminada o su dirección cambió.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-stretch gap-3">
            <a
              href="/"
              className="btn error-button-primary rounded-pill fw-bold px-5 py-2"
            >
              Volver al inicio
            </a>

            <a
              href="/#agenda"
              className="btn error-button-secondary rounded-pill fw-bold px-5 py-2"
            >
              Ver el workshop
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Error404;
