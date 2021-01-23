import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));
  
  

 function UserCards (props) {
    function userdetailarr (val) {
        return props.paymentDets(val)
      }

     const {firstname,lastname,gender,latitude,longitude,creditcardnumber,
             creditcardtype,email,domainname,phonenumber,macaddress,
             url,username,lastlogin,paymentmethod} = props
    const classes = useStyles();
    const [openPanel, setOpenPanel] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
    setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
            return (                    
                <div className= 'tc dib br3 ba b--light-gray pa3 ma2 bw2 pointer w8' style={{width:"300px"}}
                    onClick={() => userdetailarr([firstname,lastname,gender,latitude,longitude,creditcardnumber
                    ,creditcardtype,email,domainname,phonenumber,macaddress,url,username,lastlogin,paymentmethod,true])}
                >                    
                    <img alt='robots' src= {`https://avatars.dicebear.com/4.5/api/male/${username}.svg`} style={{width:"220px",height:"220px"}}/>
                    <div>
                        <p style={{paddingTop:'30px', fontFamily: 'Muli', fontSize: '15px', fontWeight:'bold',
                        textAlignLast:'center', lineHeight: '12px', letterSpacing: '0.2px',color: 'black',}}>
                            {username}
                        </p>
                    </div>
                    <div style={{paddingTop: '20px', borderTop: '0.5vh solid ', padding:0 , left:0, marginTop: '10px', opacity: 0.06}}></div>
                    <div>
                        <p style={{paddingTop:'30px', fontFamily: 'Muli', fontSize: '20px', fontWeight:'bold',
                            textAlignLast:'center', lineHeight: '12px', letterSpacing: '0.2px',color: 'black',}}>
                            {firstname} {lastname}
                        </p>
                    </div>
                </div>                       
            )
    }

export default UserCards;
