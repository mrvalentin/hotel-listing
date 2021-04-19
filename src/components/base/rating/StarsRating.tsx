import StarRateIcon from '@material-ui/icons/StarRate';
import {StarsRatingProps} from './types';

const StarsRating = ({rating}: StarsRatingProps) => {
    let domArray=[];
    for(let i=0; i<rating; i++){
        domArray.push(<StarRateIcon style={{color: '#FFD700'}} key={i}/>)
    }
    return <>{domArray}</>
}

export default StarsRating;