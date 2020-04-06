import React from 'react';

function TechHeader({ author, date }) {
  return (
    <div className="tech-header">
      <img className="avatar" src={author.avatar} />
      <div className="detail">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function TechComments({ comments }) {
  return (
    <div className="tech-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function TechItem({ author, date, content, comments }) {
  return (
    <div className="tech">
      <TechHeader author={author} date={date} />
      <p className="tech-content">{content}</p>
      <TechComments comments={comments} />
    </div>
  );
}

export default TechItem;