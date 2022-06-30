const DirectoryList = (props) => {
  const info = props.info;
  return (
    <section className="content mx-4">
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone#</th>
              <th>Address</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>School</th>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone#</th>
              <th>Address</th>
            </tr>
          </tfoot>
          <tbody>
            {info.map((info) => (
            <tr>
              <th>{info.school}</th>
              <td>{info.name}</td>
              <td>{info.position}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td>{info.address}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </section>
  )
}

export default DirectoryList