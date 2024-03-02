import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 28.752602745407266,
    lng: 77.49713323879259,
  };

  return (
    <div className="flex flex-col p-10 bg-[#2b2a27] ">
      <div className="flex flex-col justify-center items-center mb-10">
        <span className="text-3xl text-blue-500 font-bold mb-2">Contact</span>
        <span className="text-lg text-gray-700">
          Feel free to reach out to me for any questions and opportunities
        </span>
      </div>

      <div className=" map_contact flex flex-col md:flex-row justify-evenly h-auto">
        <div className="contact flex flex-col w-full md:w-1/3 p-5 rounded shadow-xl mb-10 md:mb-0 bg-white h-[60vh]">
          <div className=" flex flex-col justify-evenly space-y-12 ">
          <span className="text-2xl font-bold mb-2 text-blue-500 ">
            Email Me
          </span>
          <input
            className="border p-2 rounded mb-2"
            type="text"
            placeholder="Your Email"
          />
          <input
            className="border p-2 rounded mb-2"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border p-2 rounded mb-2"
            type="text"
            placeholder="Subject"
          />
          <input
            className="border p-2 rounded mb-2"
            type="text"
            placeholder=" Message"
          />
          <button className="bg-red-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
          </div>
         
        </div>
      
      <div className="map bg-white p-5 rounded shadow-lg w-full md:w-1/3 h-64 md:h-auto">
        <LoadScript googleMapsApiKey="AIzaSyCUBkvAqK3_mWHzs-H040iBU-cmrT6uuqc">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
      </div>
    </div>
  );
};

export default Contact;
