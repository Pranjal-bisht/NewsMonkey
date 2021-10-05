import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "PTI",
            "title": "COVID-19: Global aviation industry to lose $201 bn during 2020-22 period, says IATA",
            "description": "&quot;We are past the deepest point of the crisis. While serious issues remain, the path to recovery is coming into view,&quot; Willie Walsh, Director General of global airlines body IATA, said",
            "url": "https://www.businesstoday.in/industry/aviation/story/covid-19-global-aviation-industry-to-lose-201-bn-during-2020-22-period-says-iata-308513-2021-10-05",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202110/plane-sixteen_nine.jpg",
            "publishedAt": "2021-10-05T09:35:48Z",
            "content": "The global aviation industry will lose USD 201 billion between 2020 and 2022 due to the COVID-19 crisis before returning to profitability in 2023, said Willie Walsh, Director General of global airlin… [+1966 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Pawan Nahar",
            "title": "Shiba Inu coin surges 55% after Musk's tweet, volumes zoom 770%",
            "description": "The market cap of Shiba Inu has raced past the $5.22 billion mark. The token had hit a high of $0.00001482, but later on gave up some gains.",
            "url": "https://economictimes.indiatimes.com/markets/cryptocurrency/shiba-inu-coin-surges-55-after-musks-tweet-volumes-zoom-770/articleshow/86778355.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-86778595,width-1070,height-580,imgsize-29500,overlay-etmarkets/photo.jpg",
            "publishedAt": "2021-10-05T09:25:09Z",
            "content": "New Delhi: Elon Musk has once again created a buzz in meme token world, which has now gone crazy for Shiba Inu (SHIB) coin. The made-for-fun digital token has soared a whopping 55 per cent to $0.0000… [+1947 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "BusinessToday.In",
            "title": "Tesla ordered to pay $130 mn to ex-employee over racism allegations",
            "description": "The trial lasted just over a week, and Owen Diaz called the decision weight off his shoulders",
            "url": "https://www.businesstoday.in/auto/story/tesla-ordered-to-pay-130-mn-to-ex-employee-over-racism-allegations-308506-2021-10-05",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202110/teslap1200-sixteen_nine-sixteen_nine.jpg",
            "publishedAt": "2021-10-05T09:07:43Z",
            "content": "Electric carmaker Tesla was ordered by a federal jury to pay over $130 million in damages to a Black former employee after it was found that he was subject to a racially hostile work environment, The… [+2212 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TweakTown"
            },
            "author": "Jak Connor",
            "title": "Elon Musk posts wild video of SpaceX's rocket caught in lighting storm",
            "description": "SpaceX and Tesla CEO Elon Musk has shared a video to his Twitter account that showcases Starship caught in a crazy lightning storm. Continue reading at TweakTown >",
            "url": "https://www.tweaktown.com/news/81990/elon-musk-posts-wild-video-of-spacexs-rocket-caught-in-lighting-storm/index.html",
            "urlToImage": "https://static.tweaktown.com/news/8/1/81990_01_elon-musk-posts-wild-video-of-spacexs-rocket-caught-in-lighting-storm_full.jpg",
            "publishedAt": "2021-10-05T09:06:02Z",
            "content": "SpaceX CEO Elon Musk has taken to his personal Twitter account to share a crazy video of the rocket Starship caught in a lightning storm.\r\nThe video showcases SpaceX's Starship rocket that will be tr… [+822 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Colin Ryan",
            "title": "Kelley Blue Book: The 2021 Kia Niro EV: A city driver with a crossover vibe",
            "description": "This all-electric small car with a crossover vibe can travel a respectable 239 miles on a single charge. The catch: It's only available in nine states right now.",
            "url": "https://www.marketwatch.com/story/the-2021-kia-niro-ev-a-city-driver-with-a-crossover-vibe-11633034203",
            "urlToImage": "https://images.mktw.net/im-409781/social",
            "publishedAt": "2021-10-05T09:05:00Z",
            "content": "Price: The 2021 Kia Niro EV starts at $39,090.The 2021 Kia Niro EV is an all-electric small car with a crossover vibe, able to travel for 239 miles on a single charge. Thats not class-leading, but it… [+8114 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Steven Pedigo",
            "title": "Texas Is the Future of America",
            "description": "The idea of the Lone Star state as a herald of the national future is not just terrifying to liberals.",
            "url": "https://www.nytimes.com/2021/10/05/opinion/texas-census-united-states.html",
            "urlToImage": "https://static01.nyt.com/images/2021/10/05/reader-center/05pedigo_5/05pedigo_5-facebookJumbo.jpg",
            "publishedAt": "2021-10-05T09:00:16Z",
            "content": "Six of the 10 fastest-growing suburban counties in the United States are in Texas. Fort Worth is Americas fastest-growing city with at least 500,000 residents; Austin is in second place. Each has a u… [+3304 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "bdnews24.com"
            },
            "author": null,
            "title": "Jury orders Tesla to pay $137m over racist treatment",
            "description": "A jury ordered Tesla to pay $137 million to Owen Diaz, a Black former employee who accused the carmaker of ignoring racial abuse he faced while working there, his lawyer, Lawrence Organ, said late Monday.",
            "url": "https://bdnews24.com/business/2021/10/05/jury-orders-tesla-to-pay-137m-over-racist-treatment",
            "urlToImage": "https://d30fl32nd2baj9.cloudfront.net/media/2021/06/23/tesla-logo-230621-01.jpg/ALTERNATES/w640/tesla-logo-230621-01.jpg",
            "publishedAt": "2021-10-05T08:37:27Z",
            "content": "Its a great thing when one of the richest corporations in America has to have a reckoning of the abhorrent conditions at its factory for Black people, Organ, of the California Civil Rights Law Group,… [+2819 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Xplore"
            },
            "author": "Science X staff",
            "title": "US jury orders Tesla to pay ex-employee $137 million over racism",
            "description": "A jury in California on Monday ordered Tesla to pay a Black former employee $137 million in damages for turning a blind eye to racism the man encountered at the firm's auto plant in Fremont, US media reported.",
            "url": "https://techxplore.com/news/2021-10-jury-tesla-ex-employee-million-racism.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/2021/a-us-jury-awarded-a-fo.jpg",
            "publishedAt": "2021-10-05T08:20:55Z",
            "content": "A jury in California on Monday ordered Tesla to pay a Black former employee $137 million in damages for turning a blind eye to racism the man encountered at the firm's auto plant in Fremont, US media… [+3727 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "James Vincent",
            "title": "Tesla ordered to pay $137 million to former worker over racism and hostile workplace",
            "description": "Automaker Tesla has been ordered to pay $137 million in damages in a case in which a former worker, Owen Diaz, said he was subjected to racial harassment and discrimination at the company’s Fremont plant.",
            "url": "https://www.theverge.com/2021/10/5/22710279/tesla-racism-fremont-plant-137-million-judgement-owen-diaz",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/128cL-seKC77E-A4S7p9iBXEl8A=/0x230:3200x1905/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22901944/1009397468.jpg",
            "publishedAt": "2021-10-05T08:14:38Z",
            "content": "The latest case involving racism at Teslas factories\r\nPhoto by Mason Trinca for The Washington Post via Getty Images\r\nA jury in California has ordered Tesla to pay $137 million in damages to a Black … [+2839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla must pay $137 million in discrimination lawsuit",
            "description": "Tesla has been ordered to pay $137 million in damages to a former Black worker who accused the company of turning a blind eye to discrimination and racial abuse at the company's EV plant in Fremont California, the Washington Post has reported. A San Francisco…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=153241629",
            "urlToImage": null,
            "publishedAt": "2021-10-05T08:12:07Z",
            "content": "Tesla has been ordered to pay $137 million in damages to a former Black worker who accused the company of turning a blind eye to discrimination and racial abuse at the company's EV plant in Fremont C… [+2052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sankakucomplex.com"
            },
            "author": "Rift",
            "title": "3D CG Tesla Note Reminiscent of the EX-ARM Travesty",
            "description": "Tesla Note, a series about various spies searching for Nikola Tesla’s legendary artifacts, the “Shards of Tesla”, awkwardly combines both 2D art and poor 3D CG together in a way that may remind some of the disaster that was EX-ARM, the show also possessing ot…",
            "url": "https://www.sankakucomplex.com/2021/10/05/3d-cg-tesla-note-reminiscent-of-the-ex-arm-travesty/",
            "urlToImage": "https://www.sankakucomplex.com/wp-content/uploads/2021/10/TeslaNote-Episode1-Omake-Thumb.gif",
            "publishedAt": "2021-10-05T08:06:47Z",
            "content": "Tesla Note, a series about various spies searching for Nikola Tesla’s legendary artifacts, the “Shards of Tesla”, awkwardly combines both 2D art and poor 3D CG together in a way that may remind some … [+131 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Tesla must pay $137 million in discrimination lawsuit",
            "description": "Tesla has been ordered to pay $137 million in damages to a former Black worker who accused the company of ignoring discrimination and racial abuse.",
            "url": "https://www.engadget.com/tesla-must-pay-ex-worker-137-million-in-discrimination-lawsuit-075729021.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/rzSv_t3ZrM1DmkaYJZk8Mg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/7b835fe0-25ad-11ec-b7dc-3e918115a876",
            "publishedAt": "2021-10-05T07:57:29Z",
            "content": "Tesla has been ordered to pay $137 million in damages to a former Black worker who accused the company of turning a blind eye to discrimination and racial abuse at the company's EV plant in Fremont C… [+2041 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla must pay $137 million to ex-worker over hostile work environment, racism - CNBC",
            "description": "Tesla must pay $137 million to ex-worker over hostile work environment, racismCNBC Black Former Tesla Worker Awarded More Than $130 Million in DamagesThe Wall Street Journal Jury orders Tesla to pay $137 million to former employee over racist treatment.The Ne…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=153240579",
            "urlToImage": null,
            "publishedAt": "2021-10-05T07:52:36Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "David Aaro",
            "title": "DOJ launching effort to combat threats of violence against school officials across US",
            "description": "",
            "url": "https://www.foxnews.com/us/doj-launching-effort-combat-threats-violence-against-school-officials",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/AP21111511787535.jpg",
            "publishedAt": "2021-10-05T07:52:19Z",
            "content": "Good morning and welcome to Fox News First. Here's what you need to know as you start your day \r\nDOJ launching effort to combat threats of violence against school officialsThe Department of Justice i… [+7541 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "Reuters",
            "title": "Tesla Ordered to Pay Over $130 Million to Black Former Worker: Report",
            "description": "Tesla has been ordered by a federal jury to pay more than $130 million (roughly Rs. 970 crores) in damages to a Black former worker named Owen Diaz, finding he was subjected to a racially hostile work environment, the Wall Street Journal reported.",
            "url": "https://gadgets.ndtv.com/transportation/news/tesla-racism-lawsuit-pay-over-usd-150-million-black-former-worker-owen-diaz-elon-musk-2564327",
            "urlToImage": "https://i.gadgets360cdn.com/large/tesla_reuters_full_1558076556945.JPG",
            "publishedAt": "2021-10-05T07:33:20Z",
            "content": "Tesla has been ordered by a federal jury to pay more than $130 million (roughly Rs. 970 crores) in damages to a Black former worker named Owen Diaz, finding he was subjected to a racially hostile wor… [+1274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Jury orders Tesla to pay $137 million to former employee over racist treatment. - The New York Times",
            "description": "Jury orders Tesla to pay $137 million to former employee over racist treatment.The New York Times Tesla must pay $137 million to ex-worker over hostile work environment, racismCNBC Black Former Tesla Worker Awarded More Than $130 Million in DamagesThe Wall St…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=153239655",
            "urlToImage": null,
            "publishedAt": "2021-10-05T07:32:24Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Associated Press",
            "title": "US equity futures edging higher hours before Tuesday's opening bell - Fox Business",
            "description": "U.S. equity futures are mostly higher ahead of the Tuesday session on Wall Street.",
            "url": "https://www.foxbusiness.com/markets/us-equity-futures-searching-for-direction-hours-before-tuesdays-opening-bell",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/12/0/0/nyse-trader140418.jpg?ve=1&tl=1",
            "publishedAt": "2021-10-05T07:29:18Z",
            "content": "U.S. equity futures\r\n are edging higher ahead of the Tuesday session on Wall Street.\r\nStocks in this Article\r\nA selloff in Facebook stock and shares of other big technology companies rippled through … [+3929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "newsBTC"
            },
            "author": "NewsBTC",
            "title": "Is An Energy-Efficient PoW-Based Blockchain Possible?",
            "description": "The emergence of cryptocurrency has disrupted the traditional financial industry and captivated the world while doing so. The decentralization movement does not only prevent fraud, but for those living under authoritarian governments, it can provide a medium …",
            "url": "https://www.newsbtc.com/news/company/is-an-energy-efficient-pow-based-blockchain-possible/",
            "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2021/10/Picture15.jpg",
            "publishedAt": "2021-10-05T07:22:45Z",
            "content": "The emergence of cryptocurrency has disrupted the traditional financial industry and captivated the world while doing so. The decentralization movement does not only prevent fraud, but for those livi… [+3789 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Via AP news wire",
            "title": "AP News Digest 3:20 am",
            "description": "Here are the AP’s latest coverage plans, top stories and promotable content. All times EDT. For up-to-the minute information on AP’s coverage, visit Coverage Plan at https://newsroom.ap.org.",
            "url": "https://www.independent.co.uk/news/world/europe/joe-biden-democrats-london-execution-california-b1932445.html",
            "urlToImage": "https://static.independent.co.uk/2021/10/05/08/Facebook_Whistleblower_87027.jpg?width=1200&auto=webp&quality=75",
            "publishedAt": "2021-10-05T07:22:02Z",
            "content": "Here are the APs latest coverage plans, top stories and promotable content. All times EDT. For up-to-the minute information on APs coverage, visit Coverage Plan at https://newsroom.ap.org. \r\nNEW/DEVE… [+7489 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "Reuters",
            "title": "South Korea's battery giants face skills gap that could jam electric highway",
            "description": "The companies are facing growing demands from big automakers and can't find enough technicians with the training needed to keep advancing cutting-edge tech such as solid-state batteries",
            "url": "https://www.businesstoday.in/latest/world/story/south-koreas-battery-giants-face-skills-gap-that-could-jam-electric-highway-308488-2021-10-05",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202110/fuel-sixteen_nine.jpg",
            "publishedAt": "2021-10-05T07:05:41Z",
            "content": "The South Korean battery giants powering many of the world's electric vehicles face a skills shortage that could drag on the global race towards zero-emissions transport.\r\nThe country's three major p… [+5895 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hi! I am from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>

            </div>
        )
    }
}

export default News
