import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './Article.sass';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Article(){
    let {id} = useParams()
        const [ articleInfo, setarticleInfo ] = useState({});
        useEffect(()=>{
            const getInfo = async()=> {
                const articleInfo = await axios({
                    method: "GET",
                    url: `http://localhost:5000/posts/${id}`
                });
                setarticleInfo(articleInfo.data)
            }
            getInfo();
        }, [])
    return(
        <div className="min-h-screen w-1/2 mx-auto pt-20 arcticle_wrapper">
            <h1 className='text-lg text-center font-medium pb-6'>{articleInfo.title}</h1>
            <ReactMarkdown children={articleInfo.content}  remarkPlugins={[remarkGfm]} className='container border-2 border-solid border-black p-6'/>
            <div> ❤️ {articleInfo.likes} {articleInfo.author}</div>
        </div>
    );
}

export default Article;