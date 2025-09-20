export default function LoadingVideos() {
  return (
    <div className="container py-5">
      <div className="placeholder-glow">
        <h1 className="placeholder col-6 mb-2"></h1>
        <p className="placeholder col-10"></p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="col" key={i}>
            <div className="card border-0 shadow-sm">
              <div className="ratio ratio-16x9 bg-light" />
              <div className="card-body">
                <div className="placeholder-glow">
                  <div className="placeholder col-9 mb-2" />
                  <div className="placeholder col-11 mb-2" />
                  <div className="placeholder col-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
