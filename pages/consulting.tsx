import Image from 'next/image'
import Link from 'next/link'

export default function consulting(){
    return(
        <>
        
            <section className='consulting-hero my-container'>
                <div className="consulting-main">
                <div className="hero-tittle">
                <div className="col-5 col-lg-6 order-lg-2 hero-tittle-one">
                        <span className='fw-semibold'>Developing enterprises </span> to 
                                                        digitally transform your business
                    </div> 
                <Image className="bgimg1" src={'/assets/images/Ellipse 120.png'} alt='hro img' height={200}width={200} />
                <Image className="bgimg4" src={'/assets/images/blur (1).png'} alt='hro img'  height={200}width={200} />

                       
                                            
                                 <Link href={'/'}>
                                    <button className='btn consulting-contact-btn rounded-pill' type='button'>Contact Us</button>
                                </Link>
                                <Image className="bgimg2" src={'/assets/images/blur.png'} alt='hero img' height={200}width={200} />
                                <Image className="bgimg3" src={'/assets/images/Ellipse 121.png'} alt='hero img' height={200}width={200} />
                </div>
                </div>
            </section>

            <section className='overview my-container'>
                <div className="overview-table">
                    <h5 className='overview-table-tittle'>OVERVIEW</h5>
                    <h1 className='overview-table-head'>Technology consulting</h1>
                    <p className='overview-table-text'>Modern businesses require modern, open technologies that unite and align your strategy and process to meaningful automation, AI insights and outcomes</p>
                </div>
            </section>

            <section className='scale my-container'>
                <div className="scale-div">
                    <div className='scale-div-tittle'>Scale up your 
                                                    Business</div>
                    <div className="scale-div-table">
                        <div className='scale-div-table-column'>
                            <div className="scale-div-table-column-main">
                                <h1 className='scale-div-table-column-main-item'>67</h1>
                                <p className='scale-div-table-column-main-para'>faster speed to outcomes</p>
                            </div>
                            <div className='scale-div-table-column-main-line'></div>
                            <div className="scale-div-table-column-main">
                                <h1 className='scale-div-table-column-main-item'>10x</h1>
                                <p className='scale-div-table-column-main-para'>More innovative</p>
                            </div>
                            <div className='scale-div-table-column-main-line'></div>
                            <div className="scale-div-table-column-main">
                                <h1 className='scale-div-table-column-main-item'>100%</h1>
                                <p className='scale-div-table-column-main-para'>ROI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='fourthpart my-container'>
                <div className="fourthpart-head">
                    <h1 className='fourthpart-head-text'>We believe that in a world where passengers have become is what numbers, is a software core com
                                                        anna a personal approach is key to ensure you get the most out of your flying experience.</h1>
                </div>
            </section>

            <section className='path my-container'>
                <h1 className='path-head'>Shoot up your <span className='fw-semibold'>Digitalization</span> path</h1>
                <div className="path-div">
                    <div className="path-div-main">
                    <h1 className='path-div-main-names'>Blockchain</h1>
                    <div className='path-div-main-line'></div>
                    <h1 className='path-div-main-names'>Artigicial</h1>
                    <div className='path-div-main-line'></div>
                    <h1 className='path-div-main-names'>Cyber security</h1>
                    <div className='path-div-main-line'></div>
                    <h1 className='path-div-main-names'>Internet of things</h1>
                    <div className='path-div-main-line'></div>
                    <h1 className='path-div-main-names'>Augmented Reality</h1>
                    <div className='path-div-main-line'></div>
                    
                    <h1 className='path-div-main-names'>Cloud Computing</h1>
                    <div className='path-div-main-line'></div>
                    </div>
                    
                    <div className="path-div-main2">
                        <h1 className='path-div-main2-head'>Blockchain</h1>
                        <p className='path-div-main2-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum iure quisquam, laboriosam molestias quod id cumque veniam enim similique! Exercitationem voluptatibus non architecto quo? Iste quia porro iure quod.</p>
                    </div>
                </div>
            </section>


            <section className='help my-container'>
                <h1 className='help-tittle'>How <span className='fw-semibold'>Helpful</span> we are?</h1>
                <p className='help-text'>Modern businesses require modern, open technologies that unite and align your strategy and process to meaningful automation, AI insights and outcomes</p>
                <div className="help-div">
                    <div className="help-div-container">
                        <img className='help-div-img' src='/assets/images/help.png'></img>
                        <h4 className='help-div-tittle'>Clients Growth</h4>
                        <p className='help-div-text'>Loreem iopsumTed ut perspicia voluptatem accusan is asimple dummy text to minimivijay j

</p>
                    </div>
                    <div className="help-div-container">
                        <img className='help-div-img' src='/assets/images/help1.png'></img>
                        <h4 className='help-div-tittle'>Clients Growth</h4>
                        <p className='help-div-text'>Loreem iopsumTed ut perspicia voluptatem accusan is asimple dummy text to minimivijay j

</p>
                    </div>
                    <div className="help-div-container">
                        <img className='help-div-img' src='/assets/images/help2.png'></img>
                        <h4 className='help-div-tittle'>Clients Growth</h4>
                        <p className='help-div-text'>Loreem iopsumTed ut perspicia voluptatem accusan is asimple dummy text to minimivijay j

</p>
                    </div>
                </div>
            </section>


            <section className='values my-container'>
                <div className="values-div">
                    <div className="values-div-one">
                    <img src='/assets/images/values.png' className='values-div-one'></img>
                    </div>
                        <div className="values-div-two">
                        <div className="values-div-two-one">
                                <h1 className='values-div-two-one-first-alpha '>01</h1>
                                <p className='values-div-two-one-secound-beta'>Loreem iopsumTed ut perspiciatis voluptatem accusan is asimple dummy text to minimi</p>

                    
                        </div>
                        <div className="values-div-two-one">
                                <h1 className='values-div-two-one-first-alpha '>02</h1>
                                <p className='values-div-two-one-secound-beta'>Loreem iopsumTed ut perspiciatis voluptatem accusan is asimple dummy text to minimi</p>

                    
                        </div>
                        <div className="values-div-two-one">
                                <h1 className='values-div-two-one-first-alpha '>03</h1>
                                <p className='values-div-two-one-secound-beta'>Loreem iopsumTed ut perspiciatis voluptatem accusan is asimple dummy text to minimi</p>

                    
                        </div>
                        <div className="values-div-two-one">
                                <h1 className='values-div-two-one-first-alpha '>04</h1>
                                <p className='values-div-two-one-secound-beta'>Loreem iopsumTed ut perspiciatis voluptatem accusan is asimple dummy text to minimi</p>

                    
                        </div>
                        
                    </div>
                </div>
            </section>


            <section className='offer my-container'>

            </section>
        </>
    )}