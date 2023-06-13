const Projects = () => {
    return (
        <section className="projects-section">
            <div className="my-container">
                <div className="projects-header">
                    <h2 className="header-title">
                        Our Company Portfolio
                    </h2>
                    <p className="header-text">bring your ideas to life through great expertise and consulations.</p>
                </div>
                <div className="projects-list">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 order-1 order-md-0">
                            <div className="content-container">
                                <div className="container-logo">
                                    <img src="/assets/images/projects/sna-logo.png" alt="logo" />
                                </div>
                                <h3 className="content-project-name">Selfmade Ninja Academy Website</h3>
                                <p className="content-project-desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias repudiandae optio accusantium eaque quis laudantium facere labore, ipsum eveniet? Atque distinctio, nisi animi earum modi ipsum veritatis saepe repellendus tenetur error fuga quibusdam facere iure harum doloribus nihil. Neque provident earum ex unde quidem blanditiis nihil laudantium reprehenderit magni.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-0 order-md-1">
                            <div className="content-images">
                                <img src="/assets/images/projects/sna-site.png" alt="Project image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default Projects