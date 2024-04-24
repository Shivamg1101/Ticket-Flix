import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    console.log(id);
    const response = await fetch("https://api.tvmaze.com/shows/" + id);
    const json = await response.json();
    setData(json);
    console.log(json.summary);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <div
            className="booking-page"
            style={{
              border: "4px solid #2B124C ",
              display: "flex-column",
              borderRadius: "8px",
              textAlign: "center",
              justifyContent: "center",
              marginBottom: "20px",

              margin: "10px",
            }}
          >
            <div
              style={{
                
                padding: "8px",
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>{data.name}</h1>
              {data.image && data.image.original ? (
                <img
                  src={data.image.original}
                  alt={data.name}
                  style={{ height: "200px" }}
                />
              ) : (
                <div style={{ padding: "32px" }}>No Image Available</div>
              )}
              <button
                onClick={handleToggleForm}
                style={{
                  cursor: "pointer",
                  background: "#2B124C",
                  color: "white",
                  borderRadius: "10px",
                  margin: "8px",
                  width: "100px",
                  padding: "6px",
                }}
              >
                Book Ticket
              </button>
              {showForm && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                    
                  }}
                >
                  <form
                    
                    style={{
                      border: "1px solid #2B124C",
                      padding: "20px",
                      borderRadius: "8px",
                      width: "80%",
                    }}
                  >
                    <label style={{ marginBottom: "10px" }}>
                      Movie Name:
                      <input
                        className="input"
                        type="text"
                        name="name"
                        value={data.name}
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Email:
                      <input
                        className="input"
                        type="email"
                        name="email"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Name:
                      <input
                        type="text"
                        className="input"
                        name="movieName"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Date:
                      <input
                        type="date"
                        className="input"
                        name="date"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <label style={{ marginBottom: "10px" }}>
                      Price:
                      <input
                        type="text"
                        className="input"
                        name="price"
                        style={{
                          margin: "5px",
                          width: "100%",
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                    <button
                      type="submit"
                      style={{
                        margin: "10px",
                        cursor: "pointer",
                        background: "#2B124C",
                        color: "white",
                        borderRadius: "10px",
                        padding: "8px",
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="summary">
              <h1 >Summary</h1>
              <p style={{ marginTop: "20px", marginBottom: "20px"}}>{data.summary}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Movies;
