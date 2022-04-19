import react from "react";
import { Link } from "react-router-dom";



const Footer = () => {
    return <
        footer style={{ margin: "auto", bottom: 0, right: 0, left: 0, display: "flex", width: '100vw', backgroundColor: 'black', padding: '24px', justifyContent: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '80%'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>			
                    
                    {/* <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}}><Link style={{color:'white'}} to="/wishList">WishList</Link>  </a>
                    <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} ><Link style={{color:'white'}} to="/modelB">Model 2023</Link> </a>
                    <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} ><Link style={{color:'white'}} to="/modelC">Model 2022</Link> </a>
                    <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} ><Link style={{color:'white'}} to="/modelC">Model 2021</Link> </a> */}



                
            


                {/* {
                //    {fake number and address }} */} 
                </div>
                    
                <address>
                
                <h2 style={{color:'white'}}>Contact Us</h2>

                <p style={{color:'white', fontSize:'16px'}}>Phone:</p>  <a style={{color: 'White', fontSize: '24px', textDecoration: 'none'}} href="tel:512.459.2222">512-459-2222</a>
                <p style={{color:'white', fontSize:'16px'}}>Email:</p><a style={{color: 'White', fontSize: '24px', textDecoration: 'none'}}href="mailto:puckwheels@gmail.com">PuckWheels@gmail.com </a>
                
                </address>
            </div>
            <p style={{color:'white', fontSize:'16px'}}>© 2020 Puck-Wheels Inc.</p>
            
            </footer>
            
            
}
 
export default Footer ;