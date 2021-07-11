import React from "react";
import Box from './Box';

const Body = ({boxData, subtitle}) => {
    
    return(
        <div
            className="justify-content-md-center box-container"
            style={{
                padding:'0 0.5em 0.9em 0.5em',
            }}
        >
            <div className="sub-title-container">
                <div className="sub-title">
                    <span>{subtitle}</span>
                </div>
            </div>
            {
                boxData.map((boxDatum, idx)=>{
                    return(
                        <Box 
                            key={idx}
                            boxDatum = {boxDatum}
                        />
                    );
                })
            }
        </div>
    );
}

export default Body;