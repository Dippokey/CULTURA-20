import React, { Component } from 'react';

import "../App.css";


class Sponsors extends Component {
    render() {
      return (
        <section className="sponsor-section">
                <span className="float-text">Our Sponsors</span>
                <div className="auto-container">
                    <div className="sec-title light">
                        <h2>Our Sponsors</h2>
                    </div>

                    <div className="sponsors-area">
                        <div className="client-logo">
                            <figure className="image"><a href="#"><img src="http://sitetemplate.demo.ithemeslab.com/fizcon/images/clients/1.png" alt="" /></a></figure>
                        </div>
                        <div className="client-logo">
                            <figure className="image"><a href="#"><img src="http://sitetemplate.demo.ithemeslab.com/fizcon/images/clients/2.png" alt="" /></a></figure>
                        </div>
                        <div className="client-logo">
                            <figure className="image"><a href="#"><img src="http://sitetemplate.demo.ithemeslab.com/fizcon/images/clients/3.png" alt="" /></a></figure>
                        </div>
                        <div className="client-logo">
                            <figure className="image"><a href="#"><img src="http://sitetemplate.demo.ithemeslab.com/fizcon/images/clients/4.png" alt="" /></a></figure>
                        </div>
                        <div className="client-logo">
                            <figure className="image"><a href="#"><img src="http://sitetemplate.demo.ithemeslab.com/fizcon/images/clients/5.png" alt="" /></a></figure>
                        </div>
                        <div className="client-logo">
                            <figure className="image"><a href="#"><img src="http://sitetemplate.demo.ithemeslab.com/fizcon/images/clients/6.png" alt="" /></a></figure>
                        </div>
                        <div className="client-logo">
                            <figure className="image"><a href="#"><img src="http://sitetemplate.demo.ithemeslab.com/fizcon/images/clients/7.png" alt="" /></a></figure>
                        </div>
                    </div>
                </div>
            </section>
          );
    }
}

export default Sponsors;
