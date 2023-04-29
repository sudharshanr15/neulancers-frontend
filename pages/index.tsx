import Image from "next/image"
import Link from "next/link"

export default function Home(){
  return (
    <>
      <section className="home my-container">
          <div className="home-content">
            <div className="row gx-1">
              <div className="col-12 col-lg-6 hero-head-wrapper">
                  <h1 className="hero-head">Best Software developers in Chennai</h1>
                  <p className="hero-text">Finely processed farm produce, safe guaranteed and secured investment platform</p>
                  <button className="mt-5 btn hero-btn rounded-pill ps-5 d-none d-lg-flex" type="button"><span>Get Started</span> <span className="btn-inner-arrow"><i className="bi bi-arrow-right-circle-fill"></i></span></button>
              </div>
              <div className="col">
                <div className="hero-img-content">
                  <div className="hero-img-wrapper">
                    <Image className="hero-img" src={'/assets/images/hero-banner.png'} alt='hero banner' fill/>
                  </div>
                  <button className="btn hero-btn rounded-pill d-lg-none" type="button"><span>Get Started</span><span className="btn-inner-arrow"><i className="bi bi-arrow-right-circle-fill"></i></span></button>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section className="home-intro my-container">
        <h2 className="home-intro-title">We are neulancers</h2>
        <p className="home-intro-text">We are an agency focused on <span className="text-primary">web</span> developement providing best solution to grow up your business is the prime motto we put into our work everyday</p>
      </section>
      <hr className="mt-5 d-none d-lg-block" />
      <section className="home-about my-container">
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <h2 className="home-about-title">About Us</h2>
            <h3 className="home-about-header">Innovating with a Digital Mindset</h3>
            <div className="home-about-text mt-3">Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solution</div>
            <Link className="home-about-link btn mt-3 ps-0" href={'/'}>Contact Us <span><i className="bi bi-arrow-right"></i></span></Link>
          </div>
          <div className="col">
            <div className="home-about-img-wrapper">
              <Image className="home-about-img" alt='girl with laptop' priority unoptimized src='/assets/images/girllaptop.png' width={200} height={200}/>
            </div>
          </div>
        </div>
      </section>
      <section className="my-container expertise">
        <div className="row g-0 justify-content-between">
          <div className="col-3 col-lg-4">
            <div className="expertise-side-grp">
              <h2 className="expertise-side-c">
                <div className="expertise-side-dec">our</div>
                <div className="expertise-side-header">expertise</div>
              </h2>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="expertise-card-grp">
              <div className="expertise-card">
                    <div className="expertise-card-icon-wrapper">
                      <Image className="expertise-card-icon" src={'/assets/icons/blub.png'} alt='blub' fill />
                    </div>
                    <h3 className="expertise-card-title">
                      Technology Consulting
                    </h3>
                    <p className="expertise-card-text">
                      Build a secure, future-proof application through the latest technologies and enhance your user experience
                    </p>
                    <Link className="expertise-link" href={'/'}>Explore Now</Link>
              </div>
              <div className="expertise-card">
                    <div className="expertise-card-icon-wrapper">
                      <Image className="expertise-card-icon" src={'/assets/icons/desktop.png'} alt='Desktop' fill />
                    </div>
                    <h3 className="expertise-card-title">
                      Technology Consulting
                    </h3>
                    <p className="expertise-card-text">
                      Build a secure, future-proof application through the latest technologies and enhance your user experience
                    </p>
                    <Link className="expertise-link" href={'/'}>Explore Now</Link>
              </div>
              <div className="expertise-card">
                    <div className="expertise-card-icon-wrapper">
                      <Image className="expertise-card-icon" src={'/assets/icons/telescope.png'} alt='telescope' fill />
                    </div>
                    <h3 className="expertise-card-title">
                      Technology Consulting
                    </h3>
                    <p className="expertise-card-text">
                      Build a secure, future-proof application through the latest technologies and enhance your user experience
                    </p>
                    <Link className="expertise-link" href={'/'}>Explore Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-container specialization">
          <div className="special-header">
            <h2 className="special-title d-lg-none">
                Our Other <span className="fw-semibold">Specialization</span>
            </h2>
            <h2 className="special-title d-none d-lg-block">
              Unlock
              <div className="fw-semibold">Cutting Edge Technologies </div>
            </h2>
            <div className="special-card-grp">
              <div className="special-card">
                  <div className="special-card-header">
                      <div className="special-card-icon-wrapper">
                          <Image className="special-card-icon" src={'/assets/icons/iot.png'} alt='IOT' fill />
                      </div>
                          <span className="special-card-title">Internet of Things</span>
                      </div>
                      <div className="special-card-text">
                        Build a secure, future-proof application through the latest technologies and enhance your user experience
                      </div>
              </div>
              <div className="special-card">
                  <div className="special-card-header">
                      <div className="special-card-icon-wrapper">
                          <Image className="special-card-icon" src={'/assets/icons/ai.png'} alt='AI' fill />
                      </div>
                          <span className="special-card-title">Artificial Intelligence</span>
                      </div>
                      <div className="special-card-text">
                        Build a secure, future-proof application through the latest technologies and enhance your user experience
                      </div>
              </div>
              <div className="special-card">
                  <div className="special-card-header">
                      <div className="special-card-icon-wrapper">
                          <Image className="special-card-icon" src={'/assets/icons/ml.png'} alt='ML' fill />
                      </div>
                          <span className="special-card-title">Machine Learning</span>
                      </div>
                      <div className="special-card-text">
                        Build a secure, future-proof application through the latest technologies and enhance your user experience
                      </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}