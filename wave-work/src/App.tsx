import React, { useContext } from 'react';
import Header from './components/Header/Header';
import ThemeContext from './context/ThemeContext';
import "./scss/main.scss"

const App: React.FC = () => {
  const {
    theme,
    accent
  } = useContext(ThemeContext);

  return (
    <div className={[
      "App",
      theme,
      accent
    ].join(" ")}>
      <Header />
      <div className="container shape">
        <h1>Wave Work</h1>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sed sequi sapiente natus est corporis laborum repellat quaerat.
          <br />
          Tempore, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea non nam vel unde harum ullam blanditiis, ex eveniet pariatur reiciendis vero laudantium id fugiat, in soluta neque, consequuntur architecto eius!
          <br />
          <br />
        </p>
        <hr />
        <br />
        <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
      </div>
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
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos.
                </small>
              </p>
              <br />
            </div>
            <a href="#" className="link">Read more</a>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Table</h2>
      </div>
      <div className="container neutral">
        <div className="slidish">
          <div className="table-component">
            <table className="table">
              <thead className="table-head">
                <tr className="row">
                  <th className="data head">
                    <div className="content">
                      Student
                    </div>
                  </th>
                  <th className="data head">
                    <div className="content">
                      Algebra
                    </div>
                  </th>
                  <th className="data head">
                    <div className="content">
                      Calculus
                    </div>
                  </th>
                  <th className="data head">
                    <div className="content">
                      <strong>Final Grade</strong>
                    </div>
                  </th>
                  <th className="data head">
                    <div className="content">
                      Status
                    </div>
                  </th>
                  <th className="data head">
                    <div className="content">
                      Last updated
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="row">
                  <td className="data">
                    <div className="content">
                      Ed T.
                    </div>
                  </td>
                  <td className="data paid">
                    <div className="content">
                      <span className="amount">
                        77
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount">

                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">

                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="status pending">
                        <span className="dot"></span>
                        <span>Pending</span>
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      {new Date().toLocaleString()}
                    </div>
                  </td>
                </tr>
                <tr className="row">
                  <td className="data">
                    <div className="content">
                      John P.
                    </div>
                  </td>
                  <td className="data paid">
                    <div className="content">
                      <span className="amount">
                        94
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount">
                        60
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount">
                        77
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="status sent">
                        <span className="dot"></span>
                        <span>Sent</span>
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      {new Date().toLocaleString()}
                    </div>
                  </td>
                </tr>
                <tr className="row">
                  <td className="data">
                    <div className="content">
                      Alex G.
                    </div>
                  </td>
                  <td className="data paid">
                    <div className="content">
                      <span className="amount">
                        -
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount">
                        -
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount">
                        -
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="status unsent">
                        <span className="dot"></span>
                        <span>Unsent</span>
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      {new Date().toLocaleString()}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
