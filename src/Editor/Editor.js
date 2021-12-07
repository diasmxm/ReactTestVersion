import {useState, useEffect} from 'react';
import './Editor.sass';
import axios from 'axios';

function Editor(){
    const [valueName, setValueName] = useState(
        'пример')
    const [valueAuthor, setValueAuthor] = useState(
        'Иван')
    const [valueContent, setValueContent] = useState(
        'содержимое')
    function createArticle(){
        alert ('статья создана')
    }
    const postData = async()=>{
        await axios({
            method: 'POST',
            url: 'http://localhost:5000/posts',
            data:{
                title: valueName,
                content: valueContent,
                author: valueAuthor
            }
        })
    }

    async function createArticle(){
        await postData();
        alert('статья создана')
    }
    function handleChange(e){
        if(e.target.name == 'title'){
        setValueName(e.target.value);
        } else if (e.target.name == 'nameAuthor'){
            setValueAuthor(e.target.value);
        } else if (e.target.name == 'content'){
            setValueContent(e.target.value);
        }
    }
    return(
        <div className="editor_wrapper">
            <label htmlFor="title">title</label>
            <input type="text" name='title' value={valueName} onChange={handleChange}/>
            <label htmlFor="nameAuthor">author</label>
            <input type="text" name='nameAuthor' value={valueAuthor} onChange={handleChange} />
            <label htmlFor="content">Контент</label>
            <textarea name="content" id="content" cols="20" rows="20"
            value={valueContent} onChange={handleChange}></textarea>
            <button onClick={createArticle}>Создать статью</button>
        </div>
    )
}

export default Editor;