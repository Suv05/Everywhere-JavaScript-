import { useEffect, useState } from "react";
import { MdEditNote, MdDeleteSweep } from "react-icons/md";

function Xyz({}) {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [del, setDel] = useState(false);

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("groceryList"));
    if (storedItem) {
      setListItem(storedItem);
    }
  }, []);

  // Update localStorage whenever listItem changes
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(listItem));
  }, [listItem]);

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      const updatedList = listItem.map((item, index) =>
        index === editIndex ? value : item
      );
      setListItem(updatedList);
      setEdit(false);
      setEditIndex(null);
    } else {
      setListItem((prevItem) => {
        let newItem = [value, ...prevItem];
        return newItem;
      });
    }
    setValue("");
    setSubmit(true);
    setDel(false);
  };

  const handelDeleteBtn = (getIndex) => {
    const filteredList = listItem.filter((_, index) => index !== getIndex);
    setListItem(filteredList);
    setDel(true);
    setSubmit(false);
  };

  const handelEditBtn = (getIndex) => {
    setEdit(true);
    setEditIndex(getIndex);
    setValue(listItem[getIndex]);
  };

  const handelClearBtn = () => {
    setListItem([]);
    setSubmit(false);
    localStorage.removeItem("groceryList");
  };

  return (
    <>
      <section className="section-center">
        {/* <!-- form --> */}
        <form className="grocery-form" onSubmit={handelSubmit}>
          <p
            className={`alert ${
              submit ? "alert-success" : del ? "alert-danger" : ""
            }`}
          >
            {submit
              ? "Item added successfully"
              : del
              ? "Item removed successfully"
              : ""}
          </p>
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              id="grocery"
              placeholder="e.g. eggs"
              onChange={handelChange}
              value={value}
            />
            <button type="submit" className="submit-btn">
              {edit ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {/* <!-- list --> */}
        <div className="grocery-container">
          <div
            className={
              listItem && listItem.length > 0
                ? "grocery-list show-container"
                : "grocery-list"
            }
          >
            {listItem && listItem.length > 0
              ? listItem.map((i, index) => (
                  <article className="grocery-item" key={index}>
                    <p className="title">{i}</p>
                    <div className="btn-container">
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={() => handelEditBtn(index)}
                      >
                        <MdEditNote size={25} />
                      </button>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handelDeleteBtn(index)}
                      >
                        <MdDeleteSweep size={25} />
                      </button>
                    </div>
                  </article>
                ))
              : null}
          </div>
          <button className="clear-btn" onClick={handelClearBtn}>
            clear items
          </button>
        </div>
      </section>
    </>
  );
}

export default Xyz;
