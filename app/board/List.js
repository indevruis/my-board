export default function List({data}) {
  return (
    <div className="list-item">
      <div className="list-item-left">
        <h4>{data.title}</h4>
        <p>{data.writer}</p>
      </div>
      <div className="list-item-right">
        <p>{data.date}</p>
      </div>
    </div>
  );
}
