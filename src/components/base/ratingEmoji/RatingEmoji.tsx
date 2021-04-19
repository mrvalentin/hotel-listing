import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import {RatingEmojiProps} from './types';
const RatingEmoji = ({rate, color}: RatingEmojiProps) => {
    switch (true){
        case rate < 2.5:
            return <SentimentVeryDissatisfiedIcon style={{color}}/>
        case rate > 2.5 && rate < 5.0:
            return <SentimentDissatisfiedIcon style={{color}}/>
        case rate > 5.0 && rate < 7.5:
            return <SentimentSatisfiedIcon style={{color}}/>
        case rate > 7.5:
            return <InsertEmoticonIcon style={{color}}/>
        default:
            return <SentimentSatisfiedIcon style={{color}}/>
    }
}

export default RatingEmoji