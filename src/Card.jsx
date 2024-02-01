function Card( {card} ) {
  return (
    <>
      <div  className="col-sm-10 col-md-5 col-lg-4 mb-3">
        <div style={{height:"500px"}} className="card">
          <img src={card.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">
              {card.description}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
