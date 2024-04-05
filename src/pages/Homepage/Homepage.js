
import "./Homepage.scss";
import Categories from "../../components/Categories/Categories";
import categoryList from "../../data/categories.json";
import Recommend from "../../components/Recommend/Recommend";


function Homepage() {
    return (
      <div className="container">
        <aside className="sidebar">
          <Categories categoryList={categoryList} />
        </aside>
        <main className="main">
          <h2 className="main__titleName">Recommended for IA</h2>
          <Recommend />
        </main>
      </div>
    );
}
export default Homepage;