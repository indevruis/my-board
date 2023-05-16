import Link from "next/link";

export default async function List({ a }) {
  const data = await JSON.parse(JSON.stringify(await a));
  return (
    <div className="list-item">
      <div className="list-item-left">
        <Link href={`board/Detail/${data._id}`}>
          <h4>{data.title}</h4>
          <p className="list-date">{data.date}</p>
        </Link>
        <p>{data.writer}</p>
      </div>
      <div className="list-item-right">
        <Link href={`board/edit/${data._id}`}>
          <span>✏️</span>
        </Link>
      </div>
    </div>
  );
}
