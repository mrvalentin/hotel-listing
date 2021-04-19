import {connect} from 'react-redux';
import {getData} from '../../utils/network';
import {storeHotels} from './actions';
import {Card, NetworkView} from '../../components/index';
import {HotelCardType} from '../../components/elements/types';

const HotelListing = (props:any) => {
    return (<NetworkView
                api={{
                    path:"/hotels",
                    call:getData,
                    localStorage: storeHotels
                }}
            >
                {({data}: {data:HotelCardType}) =>
                    {
                        if(data){
                            // return data.map((card:HotelCardType,index:number) => <Card key={index}/>)
                            return props.hotels.list.map((card:HotelCardType,index:number) => <Card key={index} data={card}/>)
                        } else {
                            return null;
                        }
                    }
                }
            </NetworkView>
    )
}

const mapStateToProps  = (state:any) => (state.hotels)
export default connect(mapStateToProps)(HotelListing);