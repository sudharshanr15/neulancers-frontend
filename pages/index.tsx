import Image from "next/image"
import Link from "next/link"

export default function Home(){
  return (
    <>
      <div className="home my-container auto-my">
          <div className="home-content">
            <div className="row gx-1">
              <div className="col-12 col-lg-6 hero-head-wrapper">
                  <div className="hero-head">Best Software developers in Chennai</div>
                  <p className="text-secondary hero-text">Finely processed farm produce, safe guaranteed and secured investment platform</p>
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
      </div>
      <div className="home-intro my-container auto-my">
        <div className="home-intro-title">We are neulancers</div>
        <div className="home-intro-text mt-4">We are an agency focused on <span className="text-primary">web</span> developement providing best solution to grow up your business is the prime motto we put into our work everyday</div>
        <hr className="mt-5 d-none d-lg-block" />
      </div>
      <div className="home-about my-container auto-my">
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <div className="home-about-title text-muted">About Us</div>
            <div className="home-about-header mt-2">Innovating with a Digital Mindset</div>
            <div className="home-about-text mt-3">Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solution</div>
            <Link className="home-about-link btn mt-3 ps-0" href={'/'}>Contact Us <span><i className="bi bi-arrow-right"></i></span></Link>
          </div>
          <div className="col">
            <div className="home-about-img-wrapper">
              <Image className="home-about-img" alt='girl with laptop' src={'/assets/images/girllaptop.png'} fill/>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container auto-my expertise">
        <div className="row g-0 justify-content-center">
          <div className="col-3 col-lg-3">
            <div className="expertise-side-grp">
              <div className="expertise-side-c">
                <div className="expertise-side-dec">our</div>
                <div className="expertise-side-header">expertise</div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="expertise-card-grp">
              <div className="expertise-card">
                    <div className="expertise-card-icon-wrapper">
                      <Image className="expertise-card-icon" src={'/assets/icons/blub.png'} alt='blub' fill />
                    </div>
                    <div className="expertise-card-title">
                      Technology Consulting
                    </div>
                    <div className="expertise-card-text">
                      Build a secure, future-proof application through the latest technologies and enhance your user experience
                    </div>
                    <Link className="expertise-link" href={'/'}>Explore Now</Link>
              </div>
              <div className="expertise-card">
                    <div className="expertise-card-icon-wrapper">
                      <Image className="expertise-card-icon" src={'/assets/icons/desktop.png'} alt='Desktop' fill />
                    </div>
                    <div className="expertise-card-title">
                      Technology Consulting
                    </div>
                    <div className="expertise-card-text">
                      Build a secure, future-proof application through the latest technologies and enhance your user experience
                    </div>
                    <Link className="expertise-link" href={'/'}>Explore Now</Link>
              </div>
              <div className="expertise-card">
                    <div className="expertise-card-icon-wrapper">
                      <Image className="expertise-card-icon" src={'/assets/icons/telescope.png'} alt='telescope' fill />
                    </div>
                    <div className="expertise-card-title">
                      Technology Consulting
                    </div>
                    <div className="expertise-card-text">
                      Build a secure, future-proof application through the latest technologies and enhance your user experience
                    </div>
                    <Link className="expertise-link" href={'/'}>Explore Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-container auto-my specialization">
          <div className="special-header">
            <div className="special-title d-lg-none">
                Our Other <span className="fw-semibold">Specialization</span>
            </div>
            <div className="special-lg-title d-none d-lg-block">
              Unlock
              <div className="fw-semibold">Cutting Edge Technologies </div>
            </div>
            <div className="special-card-grp">
              <div className="special-card">
                  <div className="special-card-header">
                      <div className="special-card-icon-wrapper">
                          <Image className="special-card-icon" src={'/assets/icons/iot.png'} alt='IOT' fill />
                      </div>
                          <span className="special-card-tittle">Internet of Things</span>
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
                          <span className="special-card-tittle">Artificial Intelligence</span>
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
                          <span className="special-card-tittle">Machine Learning</span>
                      </div>
                      <div className="special-card-text">
                        Build a secure, future-proof application through the latest technologies and enhance your user experience
                      </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}