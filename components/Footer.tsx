import Image from 'next/image'
import Link from 'next/link'

export default function footer(){
    return(
        <>
            <footer className="footer">
                <div className="footer-bg-svg">
                <svg width="1082" height="314" viewBox="0 0 1082 314" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_101_14)">
                        <rect width="1082" height="314" fill="white"/>
                        <path d="M1281.02 -166L1250.51 -123.702C1220 -82.9844 1159.15 3.98437 1097.77 2.79844C1037.01 3.98437 965.515 147.296 905.022 169.829C843.64 190.78 828.287 141.562 742.976 143.649C633.29 162.428 601.691 173.683 538.951 157.641C423.686 128.17 441.612 131.092 380.23 129.906C319.648 131.092 243.75 170.016 183.258 234.452C121.964 296.516 61.3825 130.484 30.2465 44.7016L-7.689e-06 -39.5V846H30.5134C61.0267 846 121.875 846 183.258 846C244.017 846 305.133 846 365.626 846C427.008 846 488.39 846 548.883 846C609.999 846 670.758 846 732.141 846C792.99 846 854.016 846 915.399 846C975.98 846 1037.27 846 1097.77 846C1159.06 846 1219.64 846 1250.78 846H1281.02V-166Z" fill="#232323"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_101_14">
                    <rect width="1082" height="314" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

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
            </footer>
        </>
    )
}