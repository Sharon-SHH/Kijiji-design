import React from "react";
import "./MenuBar.scss";
import categoryList from "../../data/categories.json";

function MenuBar() {
  return (
    <div className="menu">
      {categoryList && categoryList.length > 0 ? (
        categoryList.slice(0,5).map((category, index) => (
          <React.Fragment key={index}>
            {index % 5 === 0 && index !== 0}{<br />}
            {
              <>
                {" "}
                <img src={category.image} alt="video" />
                <p>{category.title}</p>
              </>
            }{" "}
            {/* Render the current item */}
          </React.Fragment>
        ))
      ) : (
        <>No Categories</>
      )}
    </div>
  );
}

export default MenuBar;
