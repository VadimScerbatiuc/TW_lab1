import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
function Map(){
    return(
        <GoogleMap 
            defaultZoom={12}
            defaultCenter={{ lat: 48.180252 , lng: 27.290925 }}
        />

    );
}

const WrappedMap= withScriptjs(withGoogleMap(Map));

export const About = () =>{

        return (
            <>
            <div style={{width: '100vw' , veight: '100vh'}} align='center' >
                <WrappedMap 
                    googleMapURL= "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places$key=AIzaSyDbFzYfCTxfra5bNFQ-EqnVu5C_EsJgASg"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={ <div style={{ height: `500px`, width: '500px' }} />}
                    mapElement= {<div style={{ height: `100%` }} />}
                />
            </div>
            <div>
                fdfdf
            </div>
            </>
        )
 
}
