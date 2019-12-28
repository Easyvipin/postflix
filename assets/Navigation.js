class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">
            POST
            <span
              style={{
                color: "#8e0e00"
              }}
            >
              FLIX
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navlist"
            aria-controls="navlist"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navlist">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <a className="nav-link">
                  Movies <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Marvel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  GITHUB
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
ReactDOM.render(<Navigation />, document.getElementById("Header"));
