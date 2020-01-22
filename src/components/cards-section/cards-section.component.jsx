import React from 'react';
import './cards-section.styles.scss';

const CardsSection = props => {
    return(
        <section className="container py-3 my-5">
            <div className="row mb-4 mobile-heading">
                <h2 className="pb-2 px-0 border-bottom col">{props.sectionHeader}</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card h-100 rounded-0">
                        <img src="/img/placeholder-1.jpg" className="card-img-top rounded-0" alt="Placeholder" />
                        <div className="card-body">
                            <h4 className="card-title">Destination Name</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer mb-4 border-0 bg-white">
                            <a href="/detail-listing.html" className="btn btn-secondary btn-block">View Destination</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100 rounded-0">
                    <img src="/img/placeholder-2.jpg" className="card-img-top rounded-0" alt="Placeholder" />
                        <div className="card-body">
                            <h4 className="card-title">Destination Name</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer mb-4 border-0 bg-white">
                            <a href="/detail-listing.html" className="btn btn-secondary btn-block">View Destination</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100 rounded-0">
                        <img src="/img/placeholder-3.jpg" className="card-img-top rounded-0" alt="Placeholder" />
                        <div className="card-body">
                            <h4 className="card-title">Destination Name</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer mb-4 border-0 bg-white">
                            <a href="/detail-listing.html" className="btn btn-secondary btn-block">View Destination</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardsSection;