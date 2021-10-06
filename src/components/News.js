import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=014475f3bfe84028bce67eebe6fbe653&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 5)) {

        }
        else {
            console.log("next");
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=014475f3bfe84028bce67eebe6fbe653&page = ${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=014475f3bfe84028bce67eebe6fbe653&page = ${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    }
    render() {
        return (
            <div className="container my-3">
                <h1>NewsMonkey - Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
                    <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
