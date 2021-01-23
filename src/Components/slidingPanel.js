import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

 function SlidingCards (props) {
     const {panelData} = props
     const [openPanel, setOpenPanel] = useState(false)
     useEffect(() => {
         setOpenPanel(panelData[15])
     },[panelData[1]])
        return (                    
                <div> 
                    <div>
                        <SlidingPane
                        className="some-custom-class"
                        overlayClassName="some-custom-overlay-class"
                        isOpen={openPanel}
                        title="Contact Details"
                        onRequestClose={() => {
                            // triggered on "<" on left top click or on outside click
                            setOpenPanel(false);
                        }}
                        >
                         <div style={{marginRight:'30px',marginTop:'30px'}}>
                            <h2 style={{textAlign:'center',fontFamily:'Muli',fontWeight:'bold'}}>Payment Details</h2>
                            <div style={{paddingTop: '20px', borderTop: '0.5vh solid ', padding:10 , left:0, opacity: 0.06}}></div>
                            <div>
                            <Table striped hover>
                                <tbody>
                                    <tr>
                                    <td>First Name</td>
                                    <td>{panelData[0]}</td>
                                    </tr>
                                    <tr>
                                    <td>Last Name</td>
                                    <td>{panelData[1]}</td>
                                    </tr>
                                    <tr>
                                    <td>Gender</td>
                                    <td>{panelData[2]}</td>
                                    </tr>                                       
                                    <tr>
                                    <td>Latitude</td>
                                    <td>{panelData[3]}</td>
                                    </tr>                                       
                                    <tr>
                                    <td>Longitude</td>
                                    <td>{panelData[4]}</td>
                                    </tr>                                       
                                    <tr>
                                    <td>Credit Card Number</td>
                                    <td>{panelData[5]}</td>
                                    </tr>
                                    <tr>
                                    <td>Credit Card Type</td>
                                    <td>{panelData[6]}</td>
                                    </tr>                                       
                                    <tr>
                                    <td>Email</td>
                                    <td>{panelData[7]}</td>
                                    </tr>
                                    <tr>
                                    <td>Domain Name</td>
                                    <td>{panelData[8]}</td>
                                    </tr>
                                    <tr>
                                    <td>Phone Number</td>
                                    <td>{panelData[9]}</td>
                                    </tr>
                                    <tr>
                                    <td>Mac Address</td>
                                    <td>{panelData[10]}</td>
                                    </tr>
                                    <tr>
                                    <td>URL</td>
                                    <td>{panelData[11]}</td>
                                    </tr>
                                    <tr>
                                    <td>Username</td>
                                    <td>{panelData[12]}</td>
                                    </tr>
                                    <tr>
                                    <td>Last Login</td>
                                    <td>{panelData[13]}</td>
                                    </tr>
                                    <tr>
                                    <td>Payment Method</td>
                                    <td>{panelData[14]}</td>
                                    </tr>
                                </tbody>
                                </Table>                      
                            </div>
                            </div>        
                            </SlidingPane>
                        </div>                      
                    </div>                
        )
    }

export default SlidingCards;
