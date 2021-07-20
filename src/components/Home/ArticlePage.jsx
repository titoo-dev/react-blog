import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import data_provider from "../../data/articles.json"
import "../../styles/article.css"

import img1 from '../../assets/images/01.png'
import img2 from '../../assets/images/02.png'
import img3 from '../../assets/images/03.png'
import img4 from '../../assets/images/04.png'
import img5 from '../../assets/images/05.png'
import img6 from '../../assets/images/06.png'
import img7 from '../../assets/images/07.png'
import img8 from '../../assets/images/08.png'
import img9 from '../../assets/images/09.png'
import img10 from '../../assets/images/10.png'

const images = [img10, img2, img3, img4, img5, img6, img7, img1, img9, img8]

function RecentArticle ({id, subtitle , title, description}) {
    return (<article className="recent-article">
        <img className="recent-article-img" src={img8} alt="image8" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700"/>
        <Link className="recent-article-content" to={`/product/${id}`}>
            <p className="recent-article-subtitle" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1700">{subtitle}</p>
            <h2 className="recent-article-title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">{title}</h2>
            <p className="recent-article-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300">{description}</p>
        </Link>
    </article>)
}

function ArticleForListing ({id, subtitle , title, description, image}) {
    return (<article className="article-card" data-aos="zoom-in" data-aos-duration="1000">
        <img className="article-card-img" src={image} alt={title}></img>
        
        <Link className="article-card-content" to={`/product/${id}`}>
            <p className="article-card-subtitle">{subtitle}</p>
            <h3 className="article-card-title">{title}</h3>
            <p className="article-card-description">{description}</p>
        </Link>
    </article>)
}

export function ArticlePage () {
    const [articles, setArticles] = useState([])
    const [recentArticle, setRecentArticle] = useState({})

    const getData = async function () {
        let data = []
        data_provider.data.forEach((article) => {
            data.push(article)
        })
        return data
    }

    useEffect(() => {
        setTimeout(() => {
            getData().then(data => {
                setRecentArticle(data[data.length - 1])
                setArticles(data)
            })  
        }, 2000)
    }, [])

    return (<main>
        <div className="article-page-container">
            <h1 className="article-page-welcome" data-aos="fade-right" data-aos-duration="1000">Bienvenue</h1>
            <RecentArticle  
                            id={recentArticle.id}
                            title={recentArticle.title} 
                            subtitle={recentArticle.date} 
                            description={recentArticle.description}></RecentArticle>
            {   articles
                ? (<section className="lg:grid lg:grid-cols-2 xl:grid-cols-3 py-12">
                    {
                        articles.map((article, index) => (
                                
                        <ArticleForListing 
                            key={article.id + index.toString()} 
                            id={article.id}
                            title={article.title}
                            description={article.description}
                            subtitle={article.date}
                            image={images[index]}></ArticleForListing>))
                    }
                </section>) 
                : (<section className="h-screen flex justify-center items-center">
                        <div className="py-4 px-8 bg-gray-400 font-semibold text-2xl">Loading...</div>
                    </section>)  }
        </div>
    </main>)
}