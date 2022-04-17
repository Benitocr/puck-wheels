import { useQuery } from "@apollo/client";
import { QUERY_ALL_CARS } from "../utils/queries";

const ModelC = () => {
  const { data, loading } = useQuery(QUERY_ALL_CARS, {
    variables: { category: null, year: 2021 },
  });
  console.log(data);
  const carData = data?.cars || [];
  console.log(carData);
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="model-container">
              {carData.map((el) => (
                <div className="inner" key={el._id}>
                  <div className="image-bg">
                    <div>
                      <img
                        className="image"
                        src={require(`../assets/img/${el.image}`).default}
                        alt="ModelA-1"
                      />
                    </div>
                    <div className="image-txt">
                      <h1>{el.name}</h1>
                      <h1>{el.model}</h1>
                      <h4>UNRIVALED. UNCOMPROMISED.</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 ">
                      <div class="row text">
                        <div class="col-lg-6 align-flex">
                          <div class="fuel">
                            <p>FUEL CONSUMPTION</p>
                            <h1>22/28</h1>
                            <p class="text-small">Lorem costam</p>
                          </div>
                          <div class="horse">
                            <p>HORSEPOWER</p>
                            <h1>300</h1>
                          </div>
                          <div class="price">
                            <p>STARTING AT</p>
                            <span class="dollar">$</span>
                            <h1>{el.price}</h1>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <p>{el.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelC;
