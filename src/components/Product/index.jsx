import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import forest from '../../assets/images/forest.png'
import data_provider from "../../data/articles.json"

function Avatar() {
    return <div className="flex mt-8">
        <img src={forest} alt="forest" className="transform object-cover w-20 h-20 rounded-full border-2 border-yellow-500" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000"/>
        <div className="flex flex-col justify-center space-y-1 px-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            <h4 className="text-lg text-transparent bg-clip-text font-bold bg-gradient-to-br from-red-500 to-yellow-500 ">Titosy Manankasina</h4>
            <p className="font-medium text-sm text-gray-500">fevrier 23, 2021</p>
        </div>
    </div>
}

function ArticleDescription () {
    return <p className="text-lg sm:text-xl text-gray-800 lg:text-gray-900 font-medium" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illo. Nihil quam dignissimos laboriosam perferendis harum quia? Accusamus, adipisci sint excepturi officia, amet doloremque quae aliquid exercitationem incidunt, numquam vitae.</p>
}

function Paragraph () {
    return <p className="text-base sm:text-lg font-normal text-gray-600 py-4" data-aos="zoom-in" data-aos-duration="1000">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora pariatur excepturi assumenda incidunt asperiores, voluptatibus cumque ipsa explicabo officiis! Autem reiciendis officiis fugit adipisci. Aperiam aspernatur delectus error libero fuga!</p> 
}

function Image () {
    return <div className="flex flex-col my-4 space-y-4 divide-y-2 divide-dashed" data-aos="zoom-in" data-aos-duration="1000">
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <p className="text-center text-gray-400">pic by titosy</p>
    </div>
}

function ArticleContent () {
    return <div className="mt-8">
        <Paragraph></Paragraph>        
        <Paragraph></Paragraph>
        <Image></Image>        
        <Paragraph></Paragraph>        
        <Paragraph></Paragraph>        
    </div>
}


export function ProductPage () {
    const { articleId } = useParams();
    
    const [article, setArticle] = useState({})
    
    const getData = async function (id) {
        let data = data_provider.data
        return data[articleId - 1]
    }
    
    useEffect(() => {
        getData(articleId).then(data => {
            setArticle(data)
        })  
    })

    return <div className="max-w-xs mx-auto sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl">
        <h1 className="lg:text-7xl text-gray-900 font-bold text-5xl sm:text-6xl lg:max-w-xl mt-10" data-aos="fade-right" data-aos-duration="1000">{article && article.title}</h1>
        <Avatar></Avatar>
        <div className="max-w-xs sm:max-w-md md:max-w-lg mx-auto my-10 lg:my-16">
            <ArticleDescription></ArticleDescription>
            <ArticleContent></ArticleContent>
        </div>
    </div>
}

