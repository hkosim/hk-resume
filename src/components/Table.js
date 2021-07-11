import React from "react";
import TableContent from "./TableContent";

const Table = ({tableData, firstColumnWidth, screenIsSmall}) => {
    return(
        <div className="table-container">
            {/* 2 divs here: label and content */}
            <div
                className="table-label"
                style={{
                    flexBasis: firstColumnWidth,
                    flexGrow: 0,
                    flexShrink: 0,
                }}
            >
                {tableData.label}
            </div>
            <TableContent 
                tableContent={tableData.data}
                hasLabel={tableData.label !== ""? true:false}
                screenIsSmall={screenIsSmall}
              />
        </div>
    );
}

export default Table;