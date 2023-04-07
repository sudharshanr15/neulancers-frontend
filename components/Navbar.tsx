import Link from "next/link";
import Image from "next/image";

function Navbar(){
    return (
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid navbar-content">
            <Link className="navbar-brand" href="#">
              <div className="navbar-wrapper">
                <Image className="navbar-img" alt="Neulancers logo" src={'/assets/images/neulancers-logo.svg'} fill/>
              </div>
            </Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="nav-bar-grp">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" href="#">Home</Link>
                  </li>
                  <li className="navbar-item">
                    <Link className="nav-link active" href="#">Regarding Us</Link>
                  </li>
                  <li className="navbar-item">
                    <Link className="nav-link active" href="#">Our Works</Link>
                  </li>
                </ul>
                <Link href={'/'}>
                    <button className="nav-contact-btn btn rounded-pill" type="button"><span className="btn-txt">Contact Us</span></button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
}

export default Navbar;