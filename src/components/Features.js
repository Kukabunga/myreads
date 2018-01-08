import React from 'react';

const Features = () => (
    <section className="section-features">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Some features</h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-composition u-margin-bottom-small">
                    Lorem, ipsum dolor
                </h3>
                <p className="composition-paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis et ipsum earum laboriosam aspernatur, provident aliquid expedita omnis ipsa! Recusandae veritatis quibusdam quisquam totam eos impedit est nam, perferendis placeat.
                </p>
                <h3 className="heading-composition u-margin-bottom-small">
                    Lorem, ipsum dolor
                </h3>
                <p className="composition-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti earum nam odio delectus libero id laboriosam nisi doloribus, quidem consectetur optio, modi repellendus est dolorum perspiciatis facere ex blanditiis.
                </p>
                <a href="#" className="btn-text btn-text--green">Learn some more!</a>
            </div>
            <div className="col-1-of-2">
                <div className="composition">
                    <img className="composition__photo composition__photo--p1" src="resources/img/img-comp-1.jpeg" alt="" />
                    <img className="composition__photo composition__photo--p2" src="resources/img/img-comp-2.jpg" alt="" />
                    <img className="composition__photo composition__photo--p3" src="resources/img/img-comp-3.jpeg" alt="" />
                </div>
            </div>
        </div>
    </section>
);

export default Features;