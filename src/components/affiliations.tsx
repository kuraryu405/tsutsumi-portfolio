export default function affiliations() {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 w-full h-full px-4">
        <a href="https://tekunotes.com">
          <div className="card glassmorphism w-full h-full">
            <div className="card-body">
              <img src="src/assets/img/tekunotes.jpg" alt="tekunotes" className="w-full h-full object-cover border-radius-lg" />
              <h3 className="card-title text-center text-lg font-bold">TEKUNOTES</h3>
            </div>
          </div>
        </a>
        <a href="https://tgrgroup.jp"> 
          <div className="card glassmorphism w-full h-full">
            <div className="card-body">
              <img src="src/assets/img/tgr-color.min.svg" alt="tgrgroup" className="w-full h-full object-cover border-radius-lg" />
              <h3 className="card-title text-center text-lg font-bold">TGR</h3>
            </div>
          </div>
        </a>
        <a href="https://tgrgroup.jp"> 
          <div className="card glassmorphism w-full h-full">
            <div className="card-body">
              <img src="src/assets/img/tgr-color.min.svg" alt="tgrgroup" className="w-full h-full object-cover border-radius-lg" />
              <h3 className="card-title text-center text-lg font-bold">TGR</h3>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
