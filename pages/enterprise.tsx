import Link from "next/link";
import Image from "next/image";
import ProposalCard from "@/components/ProposalCard";

function Enterprise(){
    return (
        <>
            <section className="enterprise-hero-banner">
                <div className="my-container h-100">
                    <div className="content-container m-0 row w-100 h-100">
                        <div className="col-12 col-lg-6">
                            <h1 className="content-title"><span className="fw-500">Developing enterprises</span> to digitally transform your business</h1>
                            <Link href="#" className="btn btn__contact">Contact Us</Link>
                        </div>
                        <div className="col-12 col-lg-6">
                            <Image alt="Hero Image" src="/assets/images/enterprise-hero-banner.png" unoptimized height={100} width={100} className="hero-image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="enterprise-content-section">
                <div className="my-container content-container">
                    <h2 className="content-title">We Provide Brilliant Ideas & adding The World Called Sucess To Your Brand</h2>
                    <p className="content-text">Deep-tech integrations. Wherever you are in the waste management value chain, we’ve got you covered.</p>
                </div>
            </section>
            <section className="enterprise-software-section">
                <div className="my-container">
                    <h2 className="container-title">Softwares We Provide</h2>
                    <div className="row align-items-center w-100 m-0">
                        <div className="col-12 col-lg-6">
                            <Image className="img-contain" src="/assets/images/enterprise-software.png" alt="Enterprise Software" width="100" height="100" unoptimized />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="content-container">
                                <p className="content-text">Human Resource Management Systems</p>
                                <hr />
                                <p className="content-text">Customer Relationship Management (CRM)</p>
                                <hr />
                                <p className="content-text">Enterprise Resource Planning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="enterprise-industries-section">
                <div className="my-container">
                    <h2 className="container-title">Industries we serve</h2>
                    <p className="container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <div className="row m-0 w-100 industries-list">
                        <div className="col-12 col-md-4 col-xl-3 p-0">
                            <div className="industries-item">
                                <i className="bi bi-bank fs-4"></i>
                                <h3 className="item-name">Manufacturing</h3>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-3 p-0">
                            <div className="industries-item">
                                <span>logo</span>
                                <h3 className="item-name">Manufacturing</h3>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                            <div className="industries-item">
                                <span>logo</span>
                                <h3 className="item-name">Manufacturing</h3>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-3 p-0">
                            <div className="industries-item">
                                <span>logo</span>
                                <h3 className="item-name">Manufacturing</h3>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                            <div className="industries-item">
                                <span>logo</span>
                                <h3 className="item-name">Manufacturing</h3>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                            <div className="industries-item">
                                <span>logo</span>
                                <h3 className="item-name">Manufacturing</h3>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
            <section className="enterprise-erp-section">
                <div className="erp-container my-container">
                    <div className="erp-list erp-list__start">
                        <div className="erp-item">
                            <span className="item-count">01</span>
                            <div className="item-content">
                                <h3 className="item-title">Project Management</h3>
                            </div>
                        </div>
                        <div className="erp-item">
                            <span className="item-count">02</span>
                            <div className="item-content">
                                <h3 className="item-title">EDI</h3>
                                <p className="item-text">(Electronic Data Interchange)</p>
                            </div>
                        </div>
                        <div className="erp-item">
                            <span className="item-count">03</span>
                            <div className="item-content">
                                <h3 className="item-title">EAM ERP</h3>
                                <p className="item-text">(Enterprise Asset Management ERP)</p>
                            </div>
                        </div>
                    </div>
                    <div className="erp-content-wrapper">
                        <div className="erp-content-container">
                            <h2 className="content-title">How can you integrate<span className="content-title-narrow">ERP SYSTEMS</span></h2>
                        </div>
                    </div>
                    <div className="erp-list erp-list__end">
                        <div className="erp-item">
                            <span className="item-count">04</span>
                            <div className="item-content">
                                <h3 className="item-title">E-Commerce</h3>
                            </div>
                        </div>
                        <div className="erp-item">
                            <span className="item-count">05</span>
                            <div className="item-content">
                                <h3 className="item-title">Business Intelligence</h3>
                            </div>
                        </div>
                        <div className="erp-item">
                            <span className="item-count">06</span>
                            <div className="item-content">
                                <h3 className="item-title">CRM</h3>
                                <p className="item-text">(Customer Relationship Software)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="enterprise-unique-section">
                <div className="my-container">
                    <h2 className="container-title">What makes us<br /><span className="title-bold">different</span></h2>
                    <div className="row align-items-center w-100 content-container">
                        <div className="col-12 col-lg-6">
                            <h3 className="content-title">
                                A Professional team
                            </h3>
                            <p className="content-text">
                                Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solution
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            <Image className="container-img container-img__1" src="/assets/images/unique-section-1.png" alt="Enterprise Software" width="100" height="100" unoptimized />
                        </div>
                    </div>
                    <h4 className="watermark-text">NEULANCERS</h4>
                    <div className="row align-items-center w-100 content-container">
                        <div className="col-12 col-lg-6 text-center order-1 order-lg-0">
                            <Image className="container-img container-img__2" src="/assets/images/unique-section-2.png" alt="Enterprise Software" width="100" height="100" unoptimized />
                        </div>
                        <div className="col-12 col-lg-6 order-0 order-lg-1">
                            <h3 className="content-title">Cost efficient</h3>
                            <p className="content-text">
                                Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solution
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-container">
                <ProposalCard />
            </section>
        </>
    )
}

export default Enterprise