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
    </>
  )
}