"use client";

export default function DeleteBtn({ data }) {
  const handleClickDeleteBtn = () =>
    fetch(`/api/board/delete/list?id=${data._id}&author=${data.author}`, {
      method: "Delete",
    });
  return (
    <span onClick={handleClickDeleteBtn} className="list-btn">
      ❌
    </span>
  );
}
