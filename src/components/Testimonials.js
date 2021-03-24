import React from 'react'

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="inner">
            <h1 className="heading">Testimonials</h1>
            <div className="underline"></div>

            <div className="row">
            <div className="col">
            <div className="testimonial">
              <div className="name">Sandra</div>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>

              <p>
              Nick from Simflow plumbing was great to work with, i needed emergency work done at my home and he made me feel comfortable was fast, efficient and the job was well done. I highly recommend Simflow plumbing for any of your plumbing needs
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <div className="name">Daniel</div>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>

              <p>
              Needed a job done urgently. Nick gave me by far the best quote and completed the job the same day. Will definitely be coming back in the future. Extremely satisfied with the work done.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <div className="name">Anthony</div>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>

              <p>
              Nick was a delight to work with as he delivers on his promises and is always punctual. Would highly recommend.
              </p>
            </div>
          </div>
            </div>
            </div>
        </div>
    )
}

export default Testimonials
