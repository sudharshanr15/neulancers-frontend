import Image from 'next/image'
import Link from 'next/link'

export default function footer(){
    return(
        <>
            <footer className="footer">
                <div className="my-container">
                    <div className="footer-bg-svg">
                    </div>
                    <div className="footer-main">
                        <div className="footer-txt-img-wrapper">
                            <Image className='footer-txt-img' alt='' src={'/assets/images/footer-txt.png'} fill />
                        </div>
                        <div className="footer-logo-grp">
                            <div className="footer-brand-wrapper">
                                <Image className="footer-logo-img" alt='Neulancers logo' src={'/assets/images/neulancers-footer.png'} fill />
                            </div>
                            <div className="footer-logo-txt">
                                Build a secure, future-proof application through the latest technologies and enhance your user experience
                            </div>
                        </div>
                        <div className="quick-link-grp">
                            <div className="quick-link-header">Quick links</div>
                            <div className="quick-link-nav">
                                <Link className='quick-link' href='/'>Home</Link>
                                <Link className='quick-link' href='/'>Regarding Us</Link>
                                <Link className='quick-link' href='/'>For Enterprises</Link>
                            </div>
                        </div>
                        <div className="connect-with-us-grp">
                            <div className="connect-header">Connect with Us</div>
                            <div className="connect-item-grp">
                                <div className="connect-item">
                                    <Link href={'/'} className="connect-img-wrapper">
                                        <Image className="connect-img" alt='instagram' src={'/assets/icons/insta.png'} fill/>
                                    </Link>
                                </div>
                                <div className="connect-item">
                                    <Link href={'/'} className="connect-img-wrapper">
                                        <Image className="connect-img" alt='twiiter' src={'/assets/icons/twitter.png'} fill/>
                                    </Link>
                                </div>
                                <div className="connect-item">
                                    <Link href={'/'} className="connect-img-wrapper">
                                        <Image className="connect-img" alt='facebook' src={'/assets/icons/fb.png'} fill/>
                                    </Link>
                                </div>
                                <div className="connect-item">
                                    <Link href={'/'} className="connect-img-wrapper">
                                        <Image className="connect-img" alt='youtube' src={'/assets/icons/yt.png'} fill/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-last-brand">
                        <div className="footer-last-brand-wrapper">
                            <Image className='footer-last-img' alt=' ' src={'/assets/images/neulancers-footer.png'} fill/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}