import { useState } from "react";

export default function HSDirectoryList ({ directors }) {
  const [dropdown, setDropdown] = useState(false)

  let sortedDirectors = [...directors];
  sortedDirectors.sort((a, b) => {
    if (a.school < b.school) {
      return -1;
    }
    if (a.school > b.school) {
      return 1;
    } 
    return 0
  })

  return (
    <section className="content mx-4">
      <div className="card my-2">
        <header className="card-header">
          <button className="button is-info is-outlined card-header-title" onClick={() => {setDropdown(!dropdown)}}>
            High School Directory
          </button>
        </header>
        <div className={`card-content ${dropdown ? "is-hidden" : ""}`}>
          {sortedDirectors.map(info => (
          <div className="content" key={info.id}>
            <strong>{info.school}</strong> - {info.district}<br />
            {info.name}, {info.position}<br />
            Office: {info.phone}<br />
            Email: <a href={`mailto:${info.email}`}>{info.email}</a>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
