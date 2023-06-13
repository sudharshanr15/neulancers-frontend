import ProposalCard from '@/components/ProposalCard'
import Image from 'next/image'

export default function about(){
    return(
        <>
            <section className="my-container about-company-hero">
                <div className="about-company-wrapper">
                    <div className="about-company-header rounded-pill">about our company</div>
                    <div className="about-company-text"><span className='fw-semibold'>Neulancers</span> is a <br/> Next Gen Technology & IT <br/> Solution Agency </div>
                    <div className="about-company-img-wrapper">
                        <Image className='about-company-img' src={'/assets/images/meeting.png'} alt='meeting image' fill/>
                    </div>
                    <div className="about-company-overlay"></div>
                </div>
            </section>

            <section className="top-reasons my-container">
                <div className="top-reasons-head">
                    <p className='top-reasons-tittle'>Top <span className='fw-semibold'>Reasons</span></p>
                    <p className='top-reasons-text px-2'>Lorrem ipsum is a simple dummy text to define you</p>
                </div>
                <div className="top-reasons-grp-wrapper">
                    <div className="top-reasons-grp row">
                        <div className="top-reasons-item col-4">
                            <div className="item-container">
                                <div className="top-reasons-icon-wrapper">
                                    <Image className="top-reasons-icon" src={'/assets/icons/lowcost.png'} alt='low cost' fill/>
                                </div>
                                <div className="top-reasons-text">Affordable Price</div>
                            </div>
                        </div>
                        <div className="top-reasons-item col-4">
                            <div className="item-container">
                                <div className="top-reasons-icon-wrapper">
                                    <Image className="top-reasons-icon" src={'/assets/icons/pencil.png'} alt='pencil' fill/>
                                </div>
                                <div className="top-reasons-text">Highly Skilled</div>
                            </div>
                        </div>
                        <div className="top-reasons-item col-4">
                            <div className="item-container">
                                <div className="top-reasons-icon-wrapper">
                                    <Image className="top-reasons-icon" src={'/assets/icons/notepad.png'} alt='notepad' fill/>
                                </div>
                                <div className="top-reasons-text">Result Oriented</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-container help-msg-container">
                <div className="row g-0">
                    <div className="col-12 col-lg-6">
                        <p className="help-msg-head">
                            We are here to help the customers to get their success.
                        </p>
                    </div>
                    <div className="col">
                        <div className="help-msg-item">
                            <div className="cricle-span"></div>
                            <div className="help-msg">
                                We share common trends and strategies for improving your rental income and making sure you stay in high demand of service
                            </div>
                        </div>
                        <div className="help-msg-item">
                            <div className="cricle-span"></div>
                            <div className="help-msg">
                                With lots of unique blocks, you can easily build a page without coding.
                            </div>
                        </div>
                        <div className="help-msg-item">
                            <div className="cricle-span"></div>
                            <div className="help-msg">
                                Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-coders-container">
                <div className="my-container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="our-coders-img-grp">
                                <div className="our-coders-img-col">
                                    <div className="our-coders-img-wrapper">
                                        <Image className='our-coders-img' src={'/assets/images/coder1.png'} alt='coders img' width="100" height="100" unoptimized />
                                    </div>
                                    <div className="our-coders-img-wrapper">
                                        <Image className='our-coders-img' src={'/assets/images/coder3.png'} alt='coders img' width="100" height="100" unoptimized />
                                    </div>
                                </div>
                                <div className="our-coders-img-col">
                                    <div className="our-coders-img-wrapper">
                                        <Image className='our-coders-img' src={'/assets/images/coder2.png'} alt='coders img' width="100" height="100" unoptimized />
                                    </div>
                                    <div className="our-coders-img-wrapper">
                                        <Image className='our-coders-img' src={'/assets/images/coder4.png'} alt='coders img' width="100" height="100" unoptimized />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="our-coders-content-grp">
                                <div className="our-coders-title">
                                    High <span className='fw-semibold'>skilled</span> coders at Your Service
                                </div>
                                <div className="our-coders-text-grp">
                                    <div className="our-coders-check">
                                        <i className="bi bi-check"></i>
                                    </div>
                                    <div className="our-coders-text">
                                        We share common trends and strategies for improving your rental income and making sure you stay in high demand of service.
                                    </div>
                                </div>
                                <div className="our-coders-text-grp">
                                    <div className="our-coders-check">
                                        <i className="bi bi-check"></i>                               </div>
                                    <div className="our-coders-text">
                                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-team my-container">
                <div className="our-team-header">
                    <div className="our-team-tittle">Meet Our <span className='fw-semibold'>Team</span></div>
                    <div className="our-team-subtext">Lorrem ipsum is a dummy text to define you</div>
                </div>

                <div className="our-team-grp">
                    <div className="our-team-item">
                        <div className="our-team-img-wrapper">
                            <Image className="our-team-img" src={'/assets/images/teamimage.png'} alt='team member img' fill />
                        </div>
                        <div className="our-team-name">Naveen Raj</div>
                        <div className="our-team-role text-muted">Founder, CEO</div>
                    </div>
                    <div className="our-team-item">
                        <div className="our-team-img-wrapper">
                            <Image className="our-team-img" src={'/assets/images/teamimage.png'} alt='team member img' fill />
                        </div>
                        <div className="our-team-name">Naveen Raj</div>
                        <div className="our-team-role text-muted">Founder, CEO</div>
                    </div>
                    <div className="our-team-item">
                        <div className="our-team-img-wrapper">
                            <Image className="our-team-img" src={'/assets/images/teamimage.png'} alt='team member img' fill />
                        </div>
                        <div className="our-team-name">Naveen Raj</div>
                        <div className="our-team-role text-muted">Founder, CEO</div>
                    </div>
                </div>
            </section>

            <section className="our-vision my-container">
                <div className="our-vision-grp">
                    <div className="our-vision-img-wrapper">
                        <Image className="our-vision-img" src={'/assets/images/bullseye.png'} alt='bullseye' fill />
                    </div>
                    <div className="our-vision-tittle">Vision</div>
                </div>
                    <div className="our-vision-text">To be the world's best and most <br className='d-none d-lg-inline'/> trusted Software Development <br className='d-none d-lg-inline'/> company</div>
            </section>

            <section className="our-mission my-container">
                <div className="our-mission-grp">
                    <div className="our-mission-img-wrapper">
                        <Image className="our-mission-img" src={'/assets/images/maninhill.png'} alt='img' fill/>
                    </div>
                    <div className="our-mission-tittle">Mission</div>
                    <div className="our-mission-text">To be the world's best and most trusted Software Development company</div>
                </div>
            </section>
            
            <section className="my-container">
                <ProposalCard />
            </section>
        </>
    )
}