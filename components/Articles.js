import ArticleStyles from '../styles/Articles.module.css';
import ArticleItem from './ArticleItem';

const Articles = ({articles}) => {
  return (
    <div className={ArticleStyles.grid}>
        {articles.map((article)=>(
            <ArticleItem article={article}/>
        ))}
    </div>
  )
}

export default Articles