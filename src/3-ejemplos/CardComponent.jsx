import PropTypes from 'prop-types'
export const CardComponent = ({pokemon}) => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "baseline",
    justifyContent: "space-between",
  };

  const { name, id, sprites, types, abilities } = pokemon;

  return (
    <div className="card mb-3" style={{ width: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={sprites?.front_default}
            className="img-fluid"
            alt={name}
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {id} - {name}
            </h5>
            <div style={styles}>
              <h6 className="card-text">habilities:</h6>
              {abilities?.map(({ ability }, i) => (
                <p className="card-text" key={i}>
                  {ability.name}
                </p>
              ))}
            </div>
            <p className="card-text" style={styles}>
              <small className="text-body-secondary">Types</small>
              {types?.map(({ type }, i) => (
                <small className="text-body-secondary" key={i}>
                  {type.name}
                </small>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
    pokemon:PropTypes.any.isRequired
}
