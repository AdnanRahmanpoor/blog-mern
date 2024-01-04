import {format} from 'date-fns'

const Post = ({ title, summary, cover, content, createdAt }) => {
  return (
    <>
      <div className='post'>
        <div className='image'>
          <img
            src='https://techcrunch.com/wp-content/uploads/2023/12/ussf-52.jpeg?w=1390&crop=1'
            alt=''
          />
        </div>
        <div className='text'>
          <h2>{title}</h2>
          <p className='info'>
            <a href='' className='author'>
              Adnan
            </a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy HH:MM')}</time>
          </p>
          <p className='summary'>{summary}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
