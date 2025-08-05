import React from 'react'

export default function NewsLetters() {
    return (
        <div>
            <div className="bg-dark text-light py-5">
                <div className="container text-center mb-5">
                    <h6 className="text-uppercase text-primary">Our Newsletters</h6>
                    <h2 className="fw-bold">Stay Updated with Our Latest News</h2>
                    <p className="text-light">
                        Subscribe to our newsletters for the latest updates and insights.
                    </p>
                </div>
                <div className="container">
                    <form className="d-flex justify-content-center">
                        <input
                            type="email"
                            className="form-control w-50 me-2"
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" className="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}






