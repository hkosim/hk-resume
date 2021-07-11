import React from "react";
import TablePeriod from './TablePeriod';
import Table from './Table';
import {useMediaQuery} from './../hooks/MediaQuery';

const Box = ({boxDatum}) => {
    // const printContent = () => {
    //     Object.keys(boxDatum.content).forEach(function(key) {
    //         console.log('Key : ' + key + ', Value : ' + boxDatum.content[key])
    //       })
    // };

    //responsive: check the width 
    const screenIsSmall = useMediaQuery('(max-width: 1200px)');
    return(
        <div
            className="box justify-content-center"
            style={{
                width: screenIsSmall ? '100%':boxDatum.width,
            }}
        >
            <br />
            {/* print all of the contents */}
            {
                boxDatum.content.map((ctx, idx)=>{
                  switch(boxDatum.type){
                    case "img":
                      return(
                          <div
                              className="img-box"
                              key = {idx}
                          >
                              <img src={ctx} alt="chickun" />
                          </div>
                      );
                    case "table-period":
                      return(
                        <TablePeriod
                          key = {idx}
                          tableData = {ctx}
                          firstColumnWidth = {boxDatum.firstcolumnwidth}
                          screenIsSmall = {screenIsSmall}
                        />
                      );
                    case "table":
                      return(
                        <Table
                          key = {idx}
                          tableData = {ctx}
                          firstColumnWidth = {boxDatum.firstcolumnwidth}
                          screenIsSmall = {screenIsSmall}
                        />
                      );
                    default:
                      return(
                        <div className="small-box">
                          {ctx}
                        </div>
                      );
                  }

                })
            }
            {/* {boxDatum.content.length} */}
            <br />

            {/* <input onChange={boxTextHandler} value={boxText} type="text"/> */}
        </div>
    );
}

export default Box;