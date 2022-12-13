export default function Listt(props) {
  const listItem = [];
  for (let i in props.list) {
    listItem.push(
      <li className={`list-group-item list-group-item-${props.list[i][0]}`}>
        {props.list[i][1]}</li>
    )
  }
  return (
    <ul class="list-group w-25">
      {listItem}
    </ul>
  );
}