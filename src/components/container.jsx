import React from 'react'
import web3 from '../assets/images/image-web-3-desktop.jpg'
import SiteLogo from '../assets/images/logo.svg'
import GamingGrowth from '../assets/images/image-gaming-growth.jpg'
import GamingLogo1 from '../assets/images/image-gaming-growth.jpg'
import GamingLogo2 from '../assets/images/image-retro-pcs.jpg'
import GamingLogo3 from '../assets/images/image-top-laptops.jpg'
const container = () => {
    return (
        <div className='container'>
            <header className='header'>
                <div className='logo'>
                    <img src={SiteLogo} alt='Site Logo' />
                </div>
                <nav>
                    <a href="">Home</a>
                    <a href="">New</a>
                    <a href="">Popular</a>
                    <a href="">Trending</a>
                    <a href="">Categories</a>
                </nav>
            </header>
            <main>
                <section id="featured-new">
                    <div className='featured-new-image'>
                        <img src={web3} alt='The Bright Future of Web 3.0?' />

                    </div>
                    <div className="featured-new-body">
                        <h1>
                            The Bright Future of web 3.0?
                        </h1>
                        <div className="featured-new-description">
                            <p>
                                We dive into the next evolution of the web that claims to put
                                the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <button>Read More</button>
                        </div>
                    </div>
                </section>
                <section id="news-sidebar">
                    <h2>News</h2>
                    <div className="new-item">
                        <h4>New Hydrogen VS Electric</h4>
                        <p>Cars Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className="new-item">
                        <h4>The Downsides of AI Artistry</h4>
                        <p>
                            What are the possible adverse effects of on-demand AI image
                            generation?
                        </p>
                    </div>
                    <div className="new-item">
                        <h4>Is VC Funding Drying Up?</h4>
                        <p>
                            Private funding by VC firms is down 50% YOY. We take a look at
                            what that means.
                        </p>
                    </div>

                </section>
                <section id="news-bottom">
                    <div className='new-bottom-items'>
                        <div className='new-image'>
                            <img src={GamingLogo1} alt='' />
                        </div>
                        <div className='new-body'>
                            <p className='new-body-number'>01</p>
                            <h3 className='new-body-text'>Reviving Retro PCs</h3>
                            <p className='new-body-description'>
                                What happens when old PCs are given modern upgrades?
                            </p>

                        </div>
                    </div>
                    <div className='new-bottom-items'>
                        <div className='new-image'>
                            <img src={GamingLogo2} alt='' />
                        </div>
                        <div className='new-body'>
                            <p className='new-body-number'>02</p>
                            <h3 className='new-body-text'>Top 10 Laptops of 2022</h3>
                            <p className='new-body-description'>
                                Our best picks for various needs and budgets.
                            </p>

                        </div>
                    </div>
                    <div className='new-bottom-items'>
                        <div className='new-image'>
                            <img src={GamingLogo3} alt='' />
                        </div>
                        <div className='new-body'>
                            <p className='new-body-number'>03</p>
                            <h3 className='new-body-text'>The Growth of Gaming</h3>
                            <p className='new-body-description'>
                                How the pandemic has sparked fresh opportunities.
                            </p>

                        </div>
                    </div>
                </section>
            </main>

        </div >
    )
}

export default container