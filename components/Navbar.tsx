import Link from "next/link";
import Image from "next/image";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-container">
                <div className="w-100 d-flex justify-content-between">
                    <Link href="/">
                        <Image src="/assets/images/neulancers-logo.svg" alt="neulancers-logo" width={172} height={51} />
                    </Link>
                    <div className="navbar-nav-container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" className="nav-link">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="" className="nav-link">REGARDING US</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="" className="nav-link">YOUR GREAT WORKS</Link>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-contact-btn">Contact Us</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;