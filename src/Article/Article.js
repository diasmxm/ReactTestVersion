import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './Article.sass';
import ReactMarkdown from 'react-markdown'

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
        <div className="article_wrapper">
            
            <ReactMarkdown children={`${articleInfo.title} ${articleInfo.content}`}/>
            <div> ❤️ {articleInfo.likes}</div>
        </div>
    );
}

export default Article;