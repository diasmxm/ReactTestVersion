import { useState, useEffect } from "react";
import 'react-notifications/lib/notifications.css';
import "./Editor.sass";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Editor() {
  const [valueName, setValueName] = useState("");
  const [valueAuthor, setValueAuthor] = useState("");
  const [descriptionContent, setDescriptionContent] = useState(""); // краткое описание статьи
  const [valueContent, setValueContent] = useState("");
  function createArticle() {
    alert("статья создана");
  }
  const postData = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:5000/posts",
      data: {
        title: valueName,
        content: valueContent,
        description: descriptionContent,
        likes: 0,
        author: valueAuthor,
      },
    });
  };

  async function createArticle() {
      if(valueName === '' || valueAuthor === '' || valueContent === '' ||  descriptionContent === '') {
        NotificationManager.warning('У вас пустые поля', 'Проблемы');
        return;
      }
    try{
    await postData();
    setValueName('');
    setValueAuthor('');
    setDescriptionContent('');
    setValueContent('');
    NotificationManager.success('Статья создана', 'Успех');
    } catch{
        NotificationManager.error('Произошла ошибка', 'Failed');
    }
  }
  function handleChange(e) {
    if (e.target.name == "title") {
      setValueName(e.target.value);
    } else if (e.target.name == "nameAuthor") {
      setValueAuthor(e.target.value);
    } else if (e.target.name == "content") {
      setValueContent(e.target.value);
    } else if (e.target.name == "description") {
      setDescriptionContent(e.target.value);
    }
  }
  return (
    <div className="min-h-screen pb-20">
    <div className="pt-16 flex flex-1 flex-col align-center w-1/2 mx-auto">
      <label htmlFor="title" className="mb-4 text-lg font-medium ">Заголовок</label>
      <input
        type="text"
        placeholder='Статья про Скандинавию'
        className="p-2 mb-4 focus:outline-none border-solid border-2 border-primary rounded"
        name="title"
        value={valueName}
        onChange={handleChange}
      />
      <label htmlFor="description" className="mb-4 text-lg font-medium ">Краткое описание</label>
      <textarea
        name="description"
        className="p-2 mb-4 focus:outline-none border-solid border-2 border-primary rounded"
        id="content"
        cols="15"
        rows="7"
        value={descriptionContent}
        onChange={handleChange}
      ></textarea>
      
      <label htmlFor="content" className="mb-4 text-lg font-medium ">Контент</label>
      <textarea
        name="content"
        className="p-2 mb-4 focus:outline-none border-solid border-2 border-primary rounded"
        id="content"
        cols="15"
        rows="15"
        value={valueContent}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="nameAuthor" className="mb-4 text-lg font-medium ">Имя автора</label>
      <input
        type="text"
        name="nameAuthor"
        className="p-2 mb-4 focus:outline-none border-solid border-2 border-primary rounded"
        value={valueAuthor}
        onChange={handleChange}
      />
      <button onClick={createArticle} className="bg-primary text-white hover:bg-lightRed w-32 rounded p-1 self-end">Опубликовать</button>
    </div>

      <NotificationContainer/>
    </div>
  );
}

export default Editor;
