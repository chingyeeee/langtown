import Button from "../Button";

const ContentList = ({ item }) => {
  const { name, age, gender, type, ligation, medical, notes } = item;

  return (
    <div className="profile-card-content">
      <ul className="content-list">
        <li className="list-item">
          <p className="item-title">名字</p>
          <p className="item-data">{name}</p>
        </li>
        <li className="list-item">
          <p className="item-title">性別</p>
          <p className="item-data">{gender}</p>
        </li>
        <li className="list-item">
          <p className="item-title">年齡</p>
          <p className="item-data">{age}</p>
        </li>
        <li className="list-item">
          <p className="item-title">品種</p>
          <p className="item-data">{type}</p>
        </li>
        <li className="list-item">
          <p className="item-title">結紮狀況</p>
          <p className="item-data">{ligation === true ? "已結紮" : "未結紮"}</p>
        </li>
        <li className="list-item">
          <p className="item-title">醫療狀況</p>
          <p className="item-data">{medical}</p>
        </li>
        <li className="list-item">
          <p className="item-title">備註</p>
          <p className="item-data">{notes}</p>
        </li>
      </ul>
      <div className="item-button">
        <Button active={true} text={"查看其他"} to={"/adoptioninformations"} />
        <Button active={true} text={"預約認養"} to={"/reservation"} />
      </div>
    </div>
  );
};

export default ContentList;
