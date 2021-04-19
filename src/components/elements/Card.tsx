import { Image, StarsRating, UserRating } from '../index';
import './card.scss';
import {HotelCardType, AmenitiesType} from './types';

const Card = ({data}: {data:HotelCardType}) => {
    return (
        <div className="card-wrapper">
            <Image
                url={data.photo.src}
                alt={"Hotel main image"}
                isResponsive={data.photo.isResponsive}
            />
            <div>
                <div>
                    <h1 className="title">{data.title}</h1>
                    <StarsRating rating={data.rating}/>
                    <p className="description">{data.description}</p>
                    <UserRating rate={data.userRating} amountReviews={data.reviewersNo}/>
                </div>
                <hr></hr>
                <div>
                    <div>
                        <p className="price-title"><i>Price includes:</i></p>
                        {data.amenities.map((amenity: AmenitiesType, index:number)=>{
                            return (
                                <div className="amenity" key={index}>
                                    <img src={amenity.icon}/>
                                    <p className="amenity-option">{amenity.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div>
                    <p>Totel price from</p>
                    <p className="hotel-price">£815</p>
                    <p>(Per Person <strong>£204</strong>)</p>
                </div>
                <div className="card-action">
                    View More
                </div>
            </div>
        </div>
    );
};

export default Card;