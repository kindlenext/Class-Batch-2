function Card(props) {
  return (
    <div className="card w-25">
      <img src={props.img} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 classNameName="card-title text-uppercase">{props.title}</h5>
        <p className="card-text">{props.para}</p>
        <a href={props.url} className="btn btn-primary">
          {props.linktext}
        </a>
      </div>
    </div>
  );
}

export default Card;
