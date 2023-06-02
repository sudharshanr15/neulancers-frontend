import Image from "next/image";

function SNA(){
    return (
        <>
            <section className="sna-hero-section">
                <div className="my-container h-100">
                    <div className="row m-100 align-items-center justify-content-center h-100">
                        <div className="col-12 col-lg-6">
                            <h1 className="hero-title">SNA ACADEMY WEBSITE</h1>
                            <h2 className="hero-text">
                                We believe that in a world where passengers have become is what numbers, is a software core comanna a personal approach is key to ensure you get the most out of your flying experience.
                            </h2>
                            <div className="hero-dev-list">
                                <span className="hero-dev-item">UI/UX Design</span>
                                <span className="hero-dev-item">Development</span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="img-wrapper">
                                <Image alt="Hero image" src="/assets/images/portfolio-sna-hero.png" className="img-contain" width="100" height="100" unoptimized />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sna-details-section">
                <div className="my-container">
                    <div className="details-container">
                        <div className="details-title text-center">
                            <span className="details-count">01</span>
                            <h2 className="details-name">Overview</h2>
                        </div>
                        <p className="details-text text-center">UnlistedKart is a technology-first unlisted equity market-making platform, enabling wealth managers & investors to generate wealth using opportunities yet to be discovered by broader markets. Unlistedkart wanted to be one of the first players in the unlisted market space to have an app that was state-of-the-art with top-notch user experience.</p>
                    </div>
                    <div className="details-container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="img-wrapper">
                                    <Image alt="Details image" src="/assets/images/sna-details-1.png" className="img-contain" width="100" height="100" unoptimized />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="details-title">
                                    <span className="details-count">02</span>
                                    <h2 className="details-name">Problem faced</h2>
                                </div>
                                <div className="details-text">UnlistedKart is a technology-first unlisted equity market-making platform, enabling wealth managers & investors to generate wealth using opportunities yet to be discovered be.UnlistedKart i a technology-first unlisted equity market-making platform, enabling wealth managers & investors to generate wealth using</div>
                            </div>
                        </div>
                    </div>
                    <div className="details-container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="details-title">
                                    <span className="details-count">03</span>
                                    <h2 className="details-name">Goal</h2>
                                </div>
                                <div className="details-text">UnlistedKart is a technology-first unlisted equity market-making platform, enabling wealth managers & investors to generate wealth using opportunities yet to be discovered be.UnlistedKart i a technology-first unlisted equity market-making platform, enabling wealth managers & investors to generate wealth using</div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="img-wrapper">
                                    <Image alt="Details image" src="/assets/images/sna-details-2.png" className="img-contain" width="100" height="100" unoptimized />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="img-wrapper">
                                    <Image alt="Details image" src="/assets/images/sna-details-3.png" className="img-contain" width="100" height="100" unoptimized />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="details-title">
                                    <span className="details-count">04</span>
                                    <h2 className="details-name">Solution</h2>
                                </div>
                                <div className="details-text">UnlistedKart is a technology-first unlisted equity market-making platform, enabling wealth managers & investors to generate wealth using opportunities yet to be discovered be.UnlistedKart i a technology-first unlisted equity market-making platform, enabling wealth managers & investors to generate wealth using</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sna-details-section details-technology">
                <div className="my-container">
                    <div className="details-container">
                        <div className="details-title text-center">
                            <span className="details-count">05</span>
                            <h2 className="details-name">Technology Used</h2>
                        </div>
                        <div className="technology-list">
                            <div className="technology-item">

                            </div>
                            <div className="technology-item"></div>
                            <div className="technology-item"></div>
                            <div className="technology-item"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SNA