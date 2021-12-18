import "./style.scss";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div>
          <header className="header justify-content-end">
            <div className="dropdown">
              <text className="header-text">Year Ending</text>
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                VASY
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </header>
        </div>
        <div className="col-3">
          <div className="details-card blue-card">
            <div className="details-card__title">
              activity card
            </div>
            <div className="details-card__body">
              <div className="count-no">
                100
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="details-card blue-card">
            <div className="details-card__title">
              activity card
            </div>
            <div className="details-card__body">
              <div className="count-no">
                200
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="details-card blue-card">
            <div className="details-card__title">
              activity card
            </div>
            <div className="details-card__body">
              <div className="count-no">
                300
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="details-card blue-card"  >
            <div className="details-card__title">

            </div>
            <div className="details-card__body">
              <div className="count-no">

              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="details-card blue-card">
            <div className="details-card__title">
              activity card
            </div>
            <div className="details-card__body">
              <div className="count-no">
                500
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="details-card blue-card">
            <div className="details-card__title">
              activity card
            </div>
            <div className="details-card__body">
              <div className="count-no">
                600
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="details-card blue-card">
            <div className="details-card__title">
              activity card
            </div>
            <div className="details-card__body">
              <div className="count-no">
                700
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="details-card blue-card">
            <div className="details-card__title">
              activity card
            </div>
            <div className="details-card__body">
              <div className="count-no">
                800
              </div>
            </div>
          </div>
        </div>
      </div>
      hello
    </div>
  );
}

export default App;
