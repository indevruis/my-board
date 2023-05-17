"use client";

export default function DeleteBtn({data}) {
  return (
    <span
      onClick={() => {
        fetch(`/api/delete/list?id=${data._id}`, { method: "Delete" });
      }}
      className="list-btn"
    >
      ❌
    </span>
  );
}
