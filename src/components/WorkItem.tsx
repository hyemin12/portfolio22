import { data } from "../data";

const WorkItem = () => {
  return (
    <div>
      <ul>
        {data.works.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.img} width="400px" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkItem;
