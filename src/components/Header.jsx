import "./Header.css";
export default function Header(props) {
  let nav = props.nav;
  let navItem = [];
  for (let x in nav) {
    navItem.push(
      <a href="#"><li>{nav[x]}</li></a>
    )
  }

  return (
    <header className="py-2 d-flex align-item-center bg-light">
      <div className="col-4">
        <a href="#" className="fw-bolder fs-4 color">{props.title}</a>
      </div>
      <div className="col-8">
        <ul className="sec-link fw-bolder text-decoration-none mt-2">
          {navItem}
        </ul>
      </div>
    </header>
  );
}