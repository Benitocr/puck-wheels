import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_CARS } from "../utils/queries";
import { ADD_WISH_LIST} from "../utils/mutations";
import { Link } from "react-router-dom";

const WishList = () => {
  const { data } = useQuery(QUERY_ALL_CARS, {
    variables: { category: null, year: 2023 },
  });

  const wishListData = data?.wishList || [];

  const [addWishList] = useMutation(ADD_WISH_LIST);

  async function removeFromWishList(id) {
    console.log(id);
    const { data } = await addWishList({
      variables: { id: id },
    });
    console.log(data);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="model-container">
             {/* {wishListData.map((el) => ( */}
                <div className="inner">
                  <div className="image-bg">
                    <div>
                      <img
                        className="image"
                        src="../assets/img/1-f.png"
                        alt="ModelA-1"
                      />
                    </div>
                    <div className="image-txt">
                      <h1>name</h1>
                      <h1>model</h1>
                      <h4>UNRIVALED. UNCOMPROMISED.</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="row text">
                        <div className="col-lg-6 align-flex">
                          <div className="fuel">
                            <p>FUEL CONSUMPTION</p>
                            <h1>22/28</h1>
                            <p className="text-small">Lorem costam</p>
                          </div>
                          <div className="horse">
                            <p>HORSEPOWER</p>
                            <h1>300</h1>
                          </div>
                          <div className="price">
                            <p>STARTING AT</p>
                            <span className="dollar">$</span>
                            <h1>price</h1>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <p>description</p>
                        </div>
                        <button
                          className="wish-list"
                          onClick={() => removeFromWishList()}
                        >
                          Remove from Wish List
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              {/* ))} */}
              <footer style={{ display: "flex", width: '100vw', backgroundColor: 'black', padding: '24px', justifyContent: 'center' }}>
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

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
