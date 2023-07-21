import "./propertyDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaBath,
  FaBed,
  FaCheck,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SimilarHome from "../similarHome/SimilarHome";

export const PropertyDetail = ({ propertyDetail }) => {
  const {
    create_date,
    photos,
    list_price,
    location,
    description,
    status,
    source,
    price_per_sqft,
    branding,
    last_sold_price,
    last_sold_date,
    schools,
    details,
    advertisers,
    property_id,
  } = propertyDetail;

  // IMAGES GALLERY
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <section className="detail">
      <div className="detail-left">
        <Slider {...settings}>
          {photos?.map((photo, index) => (
            <div className="detail-images" key={property_id}>
              <img src={photo.href} alt="" loading="lazy" />
            </div>
          ))}
        </Slider>
        <div className="detail-titles">
          <small>
            Date: {create_date ? create_date.slice(0, 10) : "No specific Date"}
          </small>
          <h1>{location?.address.city}</h1>
          <h2>USD {list_price?.toLocaleString("en-US")}</h2>
          <div className="apartment-details">
            <p>
              <span>{<FaMapMarkerAlt />}</span>
              {location?.address.state}
            </p>
            <p>{description?.type}</p>
            <p>
              <span>{<FaBed />}</span>
              {description?.beds}
            </p>
            <p>
              <span>{<FaBath />}</span>
              {description?.baths}
            </p>
          </div>
        </div>
        <div className="detail-features">
          <h2>FEATURES & AMENITIES</h2>
          <table className="feature">
            <tbody>
              <tr>
                {details?.map((detail, index) => (
                  <td className="table-details" key={index}>
                    <span>{<FaCheck />}</span>{" "}
                    {detail.text?.flat(Infinity).slice(0, 1)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-desc">
          <h2>DESCRIPTION</h2>
          <p>{description?.text}</p>
        </div>
        <div className="detail-listing-details">
          <h2>LISTING DETAILS</h2>
          <table className="table-listing">
            <tbody>
              <tr>
                <td>Location:</td>
                <td>{location?.address.city}</td>
              </tr>
              <tr>
                <td>Price Per sq.ft</td>
                <td>USD {price_per_sqft?.toLocaleString("en-US")}</td>
              </tr>
              <tr>
                <td>status:</td>
                <td>{status?.replace("_", " ")}</td>
              </tr>
              <tr>
                <td>Reference No:</td>
                <td>{location?.address.line}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Source:</td>
                <td>{source?.name || ""}</td>
              </tr>
              <tr>
                <td>Property Type:</td>
                <td>{description?.type}</td>
              </tr>
              <tr>
                <td>Branding From:</td>
                {/* <td>{branding && branding?.[0].name}</td> */}
              </tr>
              <tr>
                {last_sold_price ? <td>last sold price:</td> : null}

                {last_sold_price ? (
                  <td>{last_sold_price.toLocaleString("en-US")}</td>
                ) : null}
              </tr>
              <tr>
                {last_sold_date ? <td>last sold date:</td> : null}
                {last_sold_date ? <td>{last_sold_date}</td> : null}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-location">
          <h2>LOCATION</h2>
          <div className="map">
            <iframe
              src={`https://maps.google.com/maps?q=${location?.address.coordinate.lat},${location?.address.coordinate.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="property-location"
              id="iframe"
            />
          </div>
        </div>
        <div className="detail-schools">
          <h2>SCHOOL NEARBY</h2>
          <div className="school">
            {schools?.schools.map((school) => (
              <div className="schoolDetails">
                <small>{school.name ? school.name : "SCHOOL"}</small>
                <p>
                  Distance:{" "}
                  {school.distance_in_miles
                    ? school.distance_in_miles
                    : "short Distance"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="detail-right">
        {advertisers?.map((advertiser) => (
          <div className="right-content" key={advertiser.fulfillment_id}>
            <p>{advertiser.name}</p>
            <p>{advertiser.type}</p>
            <div className="advertiser-mail">
              <a
                href={`mailto: ${advertiser.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {<FaEnvelope />}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
      <aside>
        <SimilarHome property_id={property_id} status={status} />
      </aside>
      </>
  );
};
