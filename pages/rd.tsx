import Image from 'next/image'
import Link from 'next/link'

export default function rd(){
    return(
        <>
            <section className="rd-hero">
                <div className="my-container">
                    <div className="rd-content">
                        <div className="row">
                            <div className="col-12 col-lg-6 order-lg-2">
                                <div className="rd-img-wrapper">
                                    <Image className="rd-img" src={'/assets/images/robothero.png'} alt='hero img' fill />
                                </div>
                            </div>
                            <div className="col">
                                <div className="rd-body">
                                    <div className="rd-hero-title">
                                        <span className='fw-semibold'>The thoughtful agency</span> product leaders and their
                                    </div>
                                    <div className="rd-sub-hero-txt text-muted">
                                        Lorrem ipsum is a simple dummy text to define you
                                    </div>
                                    <Link href={'/'}>
                                        <button className='btn rd-contact-btn rounded-pill' type='button'>Contact Us</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rd-1 my-container">
                <div className="rd-1-content">
                    <div className="rd-1-tittle">
                        Research & Devlopment
                    </div>
                    <div>
                        <div className="rd-1-sub-tittle">
                            Scale Starts With Modern Technology
                        </div>
                        <p className="rd-1-text">
                            We evaluate and deploy modern ecommerce and y so you can optimize back-office operations and multiply your traffic, AOV, conversion rates, and repeat customers.
                        </p>
                    </div>
                    <div className="rd-1-icon-grp">
                        <div className="rd-1-icon-wrapper">
                            <Image className="rd-1-icon" src={'/assets/icons/zoomgl.png'} alt='' fill/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rd2">
                <div className="my-container">
                    <div className="rd2-content">
                        <div className="rd2-item rd2-item-1">
                            <div className="rd2-img-grp">
                                <div className="rd2-img-wrapper">
                                    <Image className="rd2-img" src={'/assets/images/rd1-team.png'} alt='team' fill/>
                                </div>
                            </div>
                        </div>
                        <div className="rd2-item rd2-item-2">
                            <div className="rd2-tittle">Lorrem Ipsum <br/> Simple</div>
                            <div className="rd2-img-grp">
                                <div className="rd2-img-wrapper">
                                    <Image className="rd2-img" src={'/assets/images/rd2-team.png'} alt='team' fill/>
                                </div>
                            </div>
                        </div>
                        <div className="rd2-item rd2-item-3">
                            <div className="rd2-quote-card d-none d-lg-block">
                                <div className="rd2-quote-icon"><i className="bi bi-quote"></i></div>
                                <div className="rd2-quote-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dolorum, iste itaque autem odit blanditiis nulla porro soluta deserunt mollitia fuga est 
                                </div>
                            </div>
                            <div className="rd2-img-grp">
                                <div className="rd2-img-wrapper">
                                    <Image className="rd2-img" src={'/assets/images/rd3-team.png'} alt='team' fill/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rd2-sm-quote-card-wrapper my-container d-lg-none">
                <div className="rd2-sm-quote-card">
                    <div className="rd2-sm-quote-icon"><i className="bi bi-quote"></i></div>
                    <div className="rd2-sm-text">
                        Loreem iopsumTed ut perspiciatis unde omnis iste is a simple dummy natus error voluptatem accusan tium
                    </div>
                </div>
            </section>

            <section className="why-rd my-container">
                <div className="row g-0">
                    <div className="col-12 col-lg-6 order-lg-2">
                        <div className="why-rd-title">
                            Why <span className="fw-semibold">R&D</span> is Important
                        </div>
                        <div className="why-rd-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </div>
                    </div>
                    <div className="col">
                        <div className="why-rd-img-wrapper">
                            <Image className="why-rd-img" src={'/assets/images/rd-3d.png'} alt='delopment vector' fill/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-rd">
                <div className="our-rd-wrapper">
                    <div className="our-rd-title">Our <span className='fw-semibold'>R&D</span> Process</div>
                    <div className="our-rd-img-wrapper">
                        <Image className="our-rd-img" src={'/assets/images/rd-process-blub.png'} alt='blub' fill/>
                    </div>
                </div>
            </section>

            <section className="rd3 my-container">
                <div className="row g-0">
                    <div className="col-12 col-lg-6">
                        <div className="rd3-l">
                            <div className="rd3-tittle">
                                We provide best research Services For Your company
                            </div>
                            <div className="rd3-txt">
                                MacAppStudio’s success is based on our ability to create new experiences for our users and systematically invest in research and innovation. We invest in a range of emerging technologies and breakthroughs, which we believe will create significant 
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="rd3-img-wrapper">
                            <Image className="rd3-img" alt='' src={'/assets/images/rd-ser.png'} fill/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rd-whyus my-container">
                <div className="rd-whyus-head">Why Us?</div>
                <div className="rd-whyus-title">We provide brilliant ideas & adding the world called success to our customers</div>
                <div className="rd-whyus-main-grp">
                    <div className="rd-whyus-img-wrapper">
                        <Image className="rd-whyus-img" alt='team planing' src={'/assets/images/rd-y.png'} fill />
                    </div>
                    <div className="rd-why-sec-grp">
                        <div className="rd-whyus-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </div>
                        <div className="rd-whyus-card">
                            <div className="rd-whyus-card-grp">
                                <div className="rd-whyus-card-title">
                                    Loreem iopsumTed ut perspiciatis unde omnis iste is a simple dummy
                                </div>
                                <div className="rd-whyus-card-footer">
                                    <div className="rd-whyus-name">
                                        Naveen raj
                                    </div>
                                    <div className="rd-whyus-role">
                                        Founder, CEO
                                    </div>
                                </div>
                            </div>
                            <div className="rd-whyus-card-quote-grp">
                                <div className="rd-whyus-card-icon-wrapper">
                                    <Image className='rd-whyus-card-img' alt='' src={'/assets/images/quote-1.png'} fill/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}