import React, { useState, useEffect } from "react";
const city = ["Aliyaview", "Howemouth", "Gwenborough"];
const App = () => {
  const [data, setdata] = useState({});

  useEffect(() => {
    console.log("runp");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setdata(res))
      .catch(() => console.log("error"));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((value) => {
          return (
            <div>
              <div>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  ID
                </span>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  {value.id}
                </span>
                {value.id % 2 === 0 ? (
                  <>
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      username
                    </span>
                    <span>{value.username}</span>
                    <div>
                      {value.email.endsWith(".biz") ? (
                        <>
                          <span
                            style={{
                              fontWeight: "bold",
                              marginRight: "10px",
                              marginLeft: "42px",
                            }}
                          >
                            Email
                          </span>
                          <span>{value.email}</span>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      {city.includes(value.address.city) ? (
                        <>
                          <span
                            style={{
                              fontWeight: "bold",
                              marginRight: "10px",
                              marginLeft: "42px",
                            }}
                          >
                            Address
                          </span>{" "}
                          <span>{`The Zipcode and Geo of cityname${value.address.city} is:${value.address.zipcode} and ${value.address.geo.lat} ${value.address.geo.lng}`}</span>
                        </>
                      ) : (
                        <span>
                          <span
                            style={{
                              fontWeight: "bold",
                              marginRight: "10px",
                              marginLeft: "42px",
                            }}
                          >
                            Company CatchPhrase
                          </span>
                          <span>
                            {value.company.catchPhrase.substring(0, 15) + "..."}
                          </span>
                        </span>
                      )}
                    </div>
                    <div></div>
                  </>
                ) : (
                  <span>"I'm Odd"</span>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div>There is some error or there is no data</div>
      )}
    </div>
  );
};
export default App;
