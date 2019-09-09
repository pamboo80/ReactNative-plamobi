import TravelScreen from '../tabs/Travel';
import BookingScreen from '../tabs/Booking';
import AboutScreen from '../tabs/About';
import CreditsScreen from '../tabs/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'My Profile', screen: TravelScreen, icon: 'null'},
  {name: 'Filters', screen: BookingScreen, icon: 'null'},
  {name: 'Settings', screen: AboutScreen, icon: 'null'},
  {name: 'About', screen: CreditsScreen, icon: 'null'},
];

