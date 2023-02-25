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
      <section className="our-expertise-section">
        <div className="our-expertise-section-container">
          <div className="row">
            <div className="col-5">
              <h2 className="our-expertise-title"><span className="first">OUR</span><span className="second">EXPERTISE</span></h2>
            </div>
            <div className="col-7">
              <div className="expertise-list">
                <div className="card expertise-item">
                  <div className="card-body">
                    <div className="card-title">Technology Consulting</div>
                    <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam fugiat labore, aut repellat explicabo itaque corporis facere commodi aliquam!</div>
                  </div>
                </div>
                <div className="card expertise-item">
                  <div className="card-body">
                    <div className="card-title">App Development</div>
                    <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam fugiat labore, aut repellat explicabo itaque corporis facere commodi aliquam!</div>
                  </div>
                </div>
                <div className="card expertise-item">
                  <div className="card-body">
                    <div className="card-title">Research and development</div>
                    <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam fugiat labore, aut repellat explicabo itaque corporis facere commodi aliquam!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="specialization-section">
        <div className="specialization-section-container">
          <h2 className="specialization-title">
            <span className="first">Our other</span>
            <span className="second">Specialization</span>
          </h2>
          <div className="row specialization-list">
            <div className="col-4 specialization-item specialization-item__first">
               <div className="specialization-item-container">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      Internet of Things
                    </div>
                    <div className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid doloremque hic quaerat eos natus, a ratione fuga velit quas!
                    </div>
                  </div>
                </div>
               </div>
            </div>
            <div className="col-4 specialization-item specialization-item__second">
               <div className="specialization-item-container">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      Internet of Things
                    </div>
                    <div className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid doloremque hic quaerat eos natus, a ratione fuga velit quas!
                    </div>
                  </div>
                </div>
               </div>
            </div>
            <div className="col-4 specialization-item specialization-item__third">
               <div className="specialization-item-container">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      Internet of Things
                    </div>
                    <div className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid doloremque hic quaerat eos natus, a ratione fuga velit quas!
                    </div>
                  </div>
                </div>
               </div>
            </div>

          </div>
        </div>
      </section>
      <section className="disparate-section">
        <div className="disparate-section-container">
          <h1>sdf</h1>
        </div>
      </section>
    </>
  )
}