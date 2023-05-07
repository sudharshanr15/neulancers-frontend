import Image from 'next/image'
import Link from 'next/link'

export default function wedo(){
    return(
        <>
            <section className="wedo-hero my-container">
                <div className="wedo-content">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-lg-2">
                            <div className="wedo-img-wrapper">
                                <Image className="wedo-img" src={'/assets/images/wedohero.png'} alt='hero img' fill />
                                <div className="wedo-rocket-wrapper">
                                    <Image className="wedo-rocket" src={'/assets/icons/paperplane.png'} alt='' fill />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="wedo-body">
                                <div className="wedo-hero-title">
                                    <span className='fw-semibold'>App Development Done With </span> Latest Technology
                                </div>
                                <div className="wedo-sub-hero-txt text-muted">
                                    Lorrem ipsum is a simple dummy text to define you
                                </div>
                                <Link href={'/'}>
                                    <button className='btn wedo-contact-btn rounded-pill' type='button'>Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="we-offer-container my-container">
                <div className="we-offer-header">
                    <div className="we-offer-header-tittle">
                        Our <span className='fw-semibold'>Application</span> Devlopment Services
                    </div>
                    <div className="we-offer-header-text">
                        App transforms the app development process so you can ship more, faster. Deploy to six targets from a single codebase.
                    </div>
                </div>
                
                <div className="we-offer-grp">
                    <div className="we-offer-grp-head">What we <span className='fw-semibold'>Offer</span></div>
                    <div className="we-offer-card-grp">
                        <div className="we-offer-card">
                            <div className="we-offer-card-count">1</div>
                            <div className="we-offer-card-content">
                                <div className="we-offer-card-tittle">
                                    Android App Devlopment
                                </div>
                                <div className="we-offer-card-text">
                                Loreem iopsumTed ut perspiciatis voluptatem accusan tium
                                </div>
                            </div>
                            <div className="we-offer-icon-container">

                                <div className="we-offer-card-icon-wrapper">
                                    <Image className="we-offer-icon" src={'/assets/icons/androiddev.png'} alt='icon' fill />
                                </div>
                            </div>
                        </div>
                        <div className="we-offer-card">
                            <div className="we-offer-card-count">2</div>
                            <div className="we-offer-card-content">
                                <div className="we-offer-card-tittle">
                                    Android App Devlopment
                                </div>
                                <div className="we-offer-card-text">
                                Loreem iopsumTed ut perspiciatis voluptatem accusan tium
                                </div>
                            </div>
                            <div className="we-offer-icon-container">

                                <div className="we-offer-card-icon-wrapper">
                                    <Image className="we-offer-icon" src={'/assets/icons/webdev.png'} alt='icon' fill />
                                </div>
                            </div>
                        </div>
                        <div className="we-offer-card">
                            <div className="we-offer-card-count">3</div>
                            <div className="we-offer-card-content">
                                <div className="we-offer-card-tittle">
                                    Android App Devlopment
                                </div>
                                <div className="we-offer-card-text">
                                Loreem iopsumTed ut perspiciatis voluptatem accusan tium
                                </div>
                            </div>
                            <div className="we-offer-icon-container">

                                <div className="we-offer-card-icon-wrapper">
                                    <Image className="we-offer-icon" src={'/assets/icons/mlwhite.png'} alt='icon' fill />
                                </div>
                            </div>
                        </div>
                        <div className="we-offer-card">
                            <div className="we-offer-card-count">4</div>
                            <div className="we-offer-card-content">
                                <div className="we-offer-card-tittle">
                                    Android App Devlopment
                                </div>
                                <div className="we-offer-card-text">
                                Loreem iopsumTed ut perspiciatis voluptatem accusan tium
                                </div>
                            </div>
                            <div className="we-offer-icon-container">

                                <div className="we-offer-card-icon-wrapper">
                                    <Image className="we-offer-icon" src={'/assets/icons/chat.png'} alt='icon' fill />
                                </div>
                            </div>
                        </div>
                        <div className="we-offer-card">
                            <div className="we-offer-card-count">5</div>
                            <div className="we-offer-card-content">
                                <div className="we-offer-card-tittle">
                                    Android App Devlopment
                                </div>
                                <div className="we-offer-card-text">
                                Loreem iopsumTed ut perspiciatis voluptatem accusan tium
                                </div>
                            </div>
                            <div className="we-offer-icon-container">

                                <div className="we-offer-card-icon-wrapper">
                                    <Image className="we-offer-icon" src={'/assets/icons/aiwhite.png'} alt='icon' fill />
                                </div>
                            </div>
                        </div>
                        <div className="we-offer-card">
                            <div className="we-offer-card-count">6</div>
                            <div className="we-offer-card-content">
                                <div className="we-offer-card-tittle">
                                    Android App Devlopment
                                </div>
                                <div className="we-offer-card-text">
                                Loreem iopsumTed ut perspiciatis voluptatem accusan tium
                                </div>
                            </div>
                            <div className="we-offer-icon-container">

                                <div className="we-offer-card-icon-wrapper">
                                    <Image className="we-offer-icon" src={'/assets/icons/iotwhite.png'} alt='icon' fill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp my-container">
                <div className="sp-head"><span className="fw-semibold">Secured</span> App Devlopment</div>
                <p className='sp-text'>Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solution</p>
            </section>

            <section className="hw my-container">
                <div className="hw-head">How we do it?</div>
                <p className="hw-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </section>

            <section className="we-m my-container">
                <div className="we-m-grp">
                    <div className="we-m-img-wrapper">
                        <Image className="we-m-img" src={'/assets/images/appdevc.png'} alt='secure' fill/>
                    </div>
                    <div className="we-m-side-grp">
                        <div className="we-m-item">
                            <div className="we-m-item-head">Secure data transmission</div>
                            <div className="we-m-item-text">Lorem ipsum dolor sit ame</div>
                        </div>
                        <div className="we-m-item">
                            <div className="we-m-item-head">Encrypted source code</div>
                            <div className="we-m-item-text">Lorem ipsum dolor sit ame</div>
                        </div>
                        <div className="we-m-item">
                            <div className="we-m-item-head">Integrate DevSecOps</div>
                            <div className="we-m-item-text">Lorem ipsum dolor sit ame</div>
                        </div>
                        <div className="we-m-item">
                            <div className="we-m-item-head">High-level Authentication</div>
                            <div className="we-m-item-text">Lorem ipsum dolor sit ame</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose-container my-container">
                <div className="why-choose-header">
                    <p className="why-choose-tittle">
                        Why <span className='fw-semibold'>Choose</span> Us
                    </p>
                    <div className="why-choose-txt text-muted">Lorrem ipsum is a simple dummy text to define you</div>
                </div>
                <div className="why-choose-wrapper">
                    <div className="why-choose-img-wrapper">
                        <Image className="why-choose-img" src={'/assets/images/ip.png'} alt='iphone img' fill/>
                    </div>
                    <div className="why-choose-card-grp why-choose-grp-1">
                        <div className="why-choose-card">
                            <div className="why-choose-card-icon-wrapper">
                                <Image className="why-choose-card-icon" src={'/assets/icons/dimond.png'} alt='dimond' fill />
                            </div>
                            <div className="why-choose-card-title">Transparent Process</div>
                            <div className="why-choose-card-txt">We involve you in every stage of the app development journey so that you can take better decisions.</div>
                        </div>
                        <div className="why-choose-card">
                            <div className="why-choose-card-icon-wrapper">
                                <Image className="why-choose-card-icon" src={'/assets/icons/moneybag.png'} alt='money  bag' fill />
                            </div>
                            <div className="why-choose-card-title">Reliable Quality</div>
                            <div className="why-choose-card-txt">We deliver 100% qualified products which pass several quality checks and rigorous testing</div>
                        </div>
                    </div>
                    <div className='why-choose-card-grp why-choose-grp-2'>
                        <div className="why-choose-card">
                            <div className="why-choose-card-icon-wrapper">
                                <Image className="why-choose-card-icon" src={'/assets/icons/layers.png'} alt='layers' fill />
                            </div>
                            <div className="why-choose-card-title">Milestone Payments</div>
                            <div className="why-choose-card-txt">A flexible milestone payment system enables you to pay at the time of each release, which we deliver every 15 days.</div>
                        </div>
                        <div className="why-choose-card">
                            <div className="why-choose-card-icon-wrapper">
                                <Image className="why-choose-card-icon" src={'/assets/icons/manlap.png'} alt='man experts' fill />
                            </div>
                            <div className="why-choose-card-title">Built by experts</div>
                            <div className="why-choose-card-txt">Your product will be crafted by experts who are veterans in their specific domains</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}