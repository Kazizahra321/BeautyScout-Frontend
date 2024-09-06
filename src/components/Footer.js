import React from 'react'
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div>
      <footer>
        <ul className='locals'>
          <li><PinDropIcon/> Address : 231, Vikash Nagar, Rewari, Haryana, 123401 </li>
          <li><PhoneIcon/>Phone : 9911819161</li>
          <li><MailOutlineIcon/>Email : BeautyScout@gmail.com</li>
        </ul>
      
          <ul>
            <li><a href="#"><i class="fa fa-twitter-square fa-2x"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook-square fa-2x"></i></a></li>
            <li><a href="#"><i class="fa fa-snapchat-square fa-2x"></i></a></li>
          </ul>
          
        </footer>
<footer>

<p className='copyr'>Copyright @ {new Date().getFullYear()} BeautyScout.</p>
</footer>
    </div>
  )
}

export default Footer
