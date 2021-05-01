import './components.css';
import Appbar from './appbar'
import Chips from './chips'
import {StaticCard} from './StaticCard'
import CustomizedButtons from './loadmore_btn'
import Footer from './footer'

function Past() {
  return (
    <>
    <Appbar/>
    <Chips/>
    <StaticCard/>
    <StaticCard/>
    <StaticCard/>
    <CustomizedButtons/>
    <Footer/>
    </>
  );
}

export default Past;