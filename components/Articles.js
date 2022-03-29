import ArticleStyles from '../styles/articles.module.css';

const Articles = ({articles}) => {
  return (
    <div>
        {articles.map((one)=>(
            <h4>{one.title}</h4>
        ))}
    </div>
  )
}

export default Articles