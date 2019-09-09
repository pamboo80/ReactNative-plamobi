import Home from '../tabs/Home';
import MyProfile from '../tabs/MyProfile';
import Filters from '../tabs/Filters';
import Settings from '../tabs/Settings';
import About from '../tabs/About';
import Credits from '../tabs/Credits';

export default [
  {name: 'plaMobi', screen: Home, image:'null'},
  {name: 'My Profile', screen: MyProfile, image: require('../assets/images/ic_profile.png')},
  {name: 'Filters', screen: Filters, image: require('../assets/images/ic_filters.png')},
  {name: 'Settings', screen: Settings, image: require('../assets/images/ic_settings.png')},
  {name: 'About', screen: About, image: 'null'},
  {name: 'Credits', screen: Credits, image: 'null'}
];
