const VacancyList = (props) => {
  const info = props.info;
  return (
    <div>
      {info.map((info) => (
        <div key={info.id} className="box">
          <strong>District:</strong> {info.district}
          <br />
          <strong>School:</strong> {info.school}
          <br />
          <strong>Position:</strong> {info.position}
          <br />
          <strong>Point of Contact:</strong> {info.contactName}
          <br />
          <strong>Phone:</strong>
          <br />
          <br />
          <a
            href={"mailto:" + info.contactEmail}
            className="button is-link is-outlined"
          >Email</a>
        </div>
      ))}
    </div>
  );
};

export default VacancyList;
