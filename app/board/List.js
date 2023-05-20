import Link from "next/link";
import DeleteBtn from './component/deleteBtn'

export default async function List({ a }) {
  const data = await JSON.parse(JSON.stringify(await a));
  return (
    <div className="list-item">
      <div className="list-item-left">
        <Link href={`board/detail/${data._id}`}>
          <h4>{data.title}</h4>
          <p className="list-date">{data.date}</p>
        </Link>
        <p>{data.writer}</p>
      </div>
      <div className="list-item-right">
        <Link href={`board/edit/${data._id}`}>
          <span className="list-btn">✏️</span>
        </Link>
        <DeleteBtn data={data}/>
      </div>
    </div>
  );
}
