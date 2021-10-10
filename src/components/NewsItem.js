import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}> {source}
                    </span>
                    <img className="card-img-top" src={!imageUrl ? "https://images.livemint.com/img/2021/10/05/600x338/telecom-kBSC--621x414@LiveMint_1633425521178.JPG" : imageUrl} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">News Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
