import Link from "next/link";
import Image from "next/image";

function Navbar(){
    return (
      <>
        <nav className="my-container">
            <div className="mynavbar"></div>
          {/* <div className="container">
            <button className="navbar-toggler border-0 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <Image src={'/assets/icons/nav-icon.png'} alt='...' height={20} width={26} />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div> */}
        </nav>
      </>
    )
}

export default Navbar;