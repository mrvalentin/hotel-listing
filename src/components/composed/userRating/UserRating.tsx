import { RatingEmoji } from "../../index";
import "./user-rating.scss"

type Props = {
    rate: number,
    amountReviews: number
}

const UserRating = ({rate, amountReviews}:Props) => {
    return (
        <div className="wrapper">
            <div className="score">{rate}</div>
            <RatingEmoji rate={rate} color={"#0000ff"}/>
            <p className="reviews">(based on {amountReviews} review{amountReviews > 1 ? "s" : ""})</p>
        </div>
    )
}

export default UserRating;