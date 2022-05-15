const Statistics: React.FC = () => {
  return (
    <>
      <div className="container">
        <h2>Statistics</h2>
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
    </>
  )
}

export default Statistics