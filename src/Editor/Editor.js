import { useState, useEffect } from "react";
import 'react-notifications/lib/notifications.css';
import "./Editor.sass";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Editor() {
  const [valueName, setValueName] = useState("");
  const [valueAuthor, setValueAuthor] = useState("");
  const [valueContent, setValueContent] = useState("");
  function createArticle() {
    alert("статья создана");
  }
  const postData = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:5000/posts",
      data: {
        title: `# ${valueName}`,
        content: valueContent,
        author: valueAuthor,
      },
    });
  };

  async function createArticle() {
      if(valueName == '' || valueContent === '') {
        NotificationManager.warning('У вас пустые поля', 'Проблемы');
        return;
      }
    try{
    await postData();
    setValueName('');
    setValueAuthor('');
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
    }
  }
  return (
    <div className="editor_wrapper">
      <label htmlFor="title">Заголовок</label>
      <input
        type="text"
        placeholder='Статья про Скандинавию'
        name="title"
        value={valueName}
        onChange={handleChange}
      />
      <label htmlFor="nameAuthor">Имя автора</label>
      <input
        type="text"
        name="nameAuthor"
        value={valueAuthor}
        onChange={handleChange}
      />
      <label htmlFor="content">Контент</label>
      <textarea
        name="content"
        id="content"
        cols="15"
        rows="15"
        value={valueContent}
        onChange={handleChange}
      ></textarea>
      <button onClick={createArticle}>Опубликовать</button>

      <NotificationContainer/>
    </div>
  );
}

export default Editor;
