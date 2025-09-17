function Article({ title, date, content, author }) {
  return (
    <main>
      <article>
        <h2>{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <figure>
          <img src="/img.png" alt="Sede da Nestlé" width="500" height="400" />
          <figcaption>Sede da Nestlé</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Article;
