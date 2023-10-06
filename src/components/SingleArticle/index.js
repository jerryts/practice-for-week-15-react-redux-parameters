import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./SingleArticle.css";

const SingleArticle = () => {
  const { id: articleId } = useParams();
  const articles = useSelector(
    (entireReduxState) => entireReduxState.articleState.entries
  );
  const { id, title, imageUrl, body } = articles.find(
    (article) => article.id === articleId
  );

  return (
    <div className="singleArticle">
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <p>{body}</p>
    </div>
  );
};

export default SingleArticle;
