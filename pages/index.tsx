import Link from "next/link"

export default function Home(){
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-container">
          <div className="row">
            <div className="col-6">
              <div className="hero-title-container">
                <h1 className="hero-title">Best Software developers in Chennai.</h1>
                <p className="hero-title-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim harum sapiente totam consequuntur accusamus perspiciatis saepe laborum ea eveniet atque?</p>
              </div>
              <Link href="" className="btn get-started-btn">
                <span className="btn-text">Get Started</span>
                <span className="arrow-span"><i className="bi bi-arrow-right-short fs-3"></i></span>
              </Link>
            </div>
            <div className="col-6">
              <p>Hello</p>
            </div>
          </div>
          <div className="intro-container">
            <h3 className="intro-title">WE ARE NEULANCERS</h3>
            <p className="intro-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quam quidem perferendis molestias a ut ullam recusandae fuga delectus commodi?</p>
          </div>
        </div>
      </section>
      <section className="about-us-section">
        <div className="about-us-section-container">
          <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6 about-us-content-container">
              <h2 className="about-us-title">About Us</h2>
              <h3 className="about-us-title-text">Innovating with a Digitial Mindset</h3>
              <p className="about-us-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab, eligendi fugiat architecto officia obcaecati qui dicta dolorem. Quo cum recusandae perspiciatis debitis modi ut officia reiciendis dolor repellat numquam?</p>
              <Link href="" className="contact-us-link">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}