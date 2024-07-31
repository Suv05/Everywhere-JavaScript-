import { MdEditNote, MdDeleteSweep } from "react-icons/md";

function List({}) {
  return (
    <>
      <div className="grocery-list">
        <article className="grocery-item">
          <p className="title">item</p>
          <div className="btn-container">
            <button type="button" className="edit-btn">
              <MdEditNote />
            </button>
            <button type="button" className="delete-btn">
              <MdDeleteSweep />
            </button>
          </div>
        </article>
      </div>
    </>
  );
}

export default List;
