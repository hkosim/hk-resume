import React from "react";
import TableContent from "./TableContent";

const TablePeriod = ({tableData, firstColumnWidth, screenIsSmall}) => {
    // if screen is small
    const SmallScreenPeriod = ({from, to}) => {
      if(from === "")
        return(
          <div className="table-label">
            <div
              className="table-period-period"
            > {to} </div>
          </div>
        )
      else
        return(
          <div className="table-label">
            <div className="table-period-period"> {from} </div>
            <div className="table-period-strip">-</div>
            <div className="table-period-period"> {to} </div>
          </div>
        )
    }

    const Period = ({from, to}) => (
      // applies custom width
      <div
        className="table-label"
        style={{
            flexBasis: firstColumnWidth,
            flexGrow: 0,
            flexShrink: 0,
        }}
    >
        <div className="table-period-period"> {from} </div>
        <div className="table-period-strip">
            {from !== "" ? "-" : ""}
        </div>
        <div className="table-period-period"> {to} </div>
      </div>
    )

    return(
        <div className="table-container">
            {/* 4 divs here: from, strip, to, content*/}
            {/* if screen is small: show responsive-d style */}
            { screenIsSmall ?
              <SmallScreenPeriod from={tableData.from} to={tableData.to}/>
              : <Period  from={tableData.from} to={tableData.to}/>}
            
              {/* show contents (title, desc) */}
              <TableContent 
                tableContent={tableData.data}
                hasLabel={true}
                screenIsSmall = {screenIsSmall}
              />
        </div>
    );
}

export default TablePeriod;