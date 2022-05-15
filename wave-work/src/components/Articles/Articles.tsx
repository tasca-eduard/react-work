const Articles: React.FC = () => {
  return (
    <div className="container">
      <h2>Articles</h2>
      <br />
      <div className="grid">
        <div className="article-component">
          <div className="content">
            <h3>Article one</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis aliquid libero! Doloribus, soluta neque.
            </p>
            <br />
          </div>
          <a href="#" className="link">Read more</a>
        </div>
        <div className="article-component">
          <div className="content">
            <h3>Article maybe number two</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam quaerat repudiandae doloremque, nemo eos neque.
            </p>
            <br />
          </div>
          <a href="#" className="link">Read more</a>
        </div>
        <div className="article-component">
          <div className="content">
            <h3>How to write article three</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.
              <br />
              <br />
            </p>
            <hr />
            <br />
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos.
            </small>
            <br />
          </div>
          <a href="#" className="link">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default Articles;