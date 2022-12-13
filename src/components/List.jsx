function List(props) {

  const listItem = [];
  for (let i in props.list) {
    listItem.push(
      <li className={`list-group-item ${props.list[i][0]}`}>
        {props.list[i][1]}
      </li>
    )
  }
  return (
    <div>
      <ul className={`list-group ${props.listtype}`}>
        {listItem}
      </ul>
    </div>
  );
}
export default List;

/*arrays
const list =[["shoaib",24],
["Sharjeel", 25],
["Shahid", 26],
["Shahzad", 27],
["Shahbaz", 28],
]*/