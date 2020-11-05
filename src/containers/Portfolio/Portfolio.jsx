import React from 'react';

const Portfolio = () => {
    return (
        <div className="container mt-3 mb-2">
            <div className="row">
                <div className="col-sm-6 bg-light mx-auto">
                    <h1 className="text-center">Portfolio</h1>
                    <hr />
                    <div className="card text-center">
                        <div className="card-header text-center">
                            Weather Dashboard Application
                        </div>
                        <div className="card-body">
                            <p>Screenshot</p>
                        </div>
                        <div className="card-footer sticky text-center">
                            <p>Github Link</p>
                            <p>Deployed Application Link</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;