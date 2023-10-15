const RestaurentCard = (props) => {
    const {resInfo} = props;
    const {name, cuisines, avgRating, cloudinaryImageId} = resInfo?.info;
    // const {cuisines,avgRating} = resInfo?.info;
  return (
    <div className="res-card">
      <img
        src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}
        className="res-image"
      />
      <div className="res-description">
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating}</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;