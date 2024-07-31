import List from "./list";
function Xyz({}) {
  return (
    <>
      <section className="section-center">
        {/* <!-- form --> */}
        <form className="grocery-form">
          <p className="alert"></p>
          <h3>grocery bud</h3>
          <div className="form-control">
            <input type="text" id="grocery" placeholder="e.g. eggs" />
            <button type="submit" className="submit-btn">
              submit
            </button>
          </div>
        </form>
        {/* <!-- list --> */}
        <div className="grocery-container">
          <List />
          <button className="clear-btn">clear items</button>
        </div>
      </section>
    </>
  );
}

export default Xyz;
