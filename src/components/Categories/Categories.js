import "./Categories.scss";

function Categories({ categoryList }) {
  return (
    <>
      {categoryList && categoryList.length > 0 ? (
        categoryList.map((category) => (
          <div className="category__videos">
            <img src={category.image} alt="video" />
            <h5 className="category__names">{category.title}</h5>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </>
  );
}

export default Categories;
