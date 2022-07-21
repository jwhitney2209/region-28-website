const SongList = (props) => {
  const song = props.song;
  return (
    <div>
      {song.map((song) => (
      <blockquote key={song.id}>
        <strong>Title:</strong> {song.title}
        <br />
        <strong>Composer/Arranger:</strong> {song.composer}
        <br />
        <strong>Publisher:</strong> {song.publisher}
        <br />
        <strong>Links to purchase:</strong>
        <br />
        <a href={song.penders} target='_blank' rel='noreferrer' className="button is-success is-outlined m-1">Pender's</a>
        <a href={song.pepper} target='_blank' rel='noreferrer' className="button is-link is-outlined m-1">JW Pepper</a>
      </blockquote>
      ))}
    </div>
  );
};

export default SongList;
