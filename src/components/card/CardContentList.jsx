import Button from "../Button";

const ContentList = ({ item }) => {
  const { name, age, gender, type, id } = item;

  return (
    <div className="card-content">
      <ul className="content-list">
        <li className="list-item">
          <p className="item-title">名字</p>
          <p className="item-data">{name}</p>
        </li>
        <li className="list-item">
          <p className="item-title">年齡</p>
          <p className="item-data">{age}</p>
        </li>
        <li className="list-item">
          <p className="item-title">性別</p>
          <p className="item-data">{gender}</p>
        </li>
        <li className="list-item">
          <p className="item-title">品種</p>
          <p className="item-data">{type}</p>
        </li>
      </ul>
      <div className="item-button text-end">
        <Button active to={`/adoptioninformations/${id}`}>
          瞭解更多
        </Button>
      </div>
    </div>
  );
};

export default ContentList;
