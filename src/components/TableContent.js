import React from "react";


const TableContent = ({tableContent, hasLabel, screenIsSmall}) => {
  return(
    <div className="table-content"
      style={{
        borderTop: hasLabel && screenIsSmall?
          '0.2em solid rgba(61, 58, 46, 0.527)':"",
      }}
    >
        {
          tableContent.map((td, idx)=>{
            /* if there's desc on the data, print both*/
            if(td.desc !== ""){
              return(
                <div
                  className="table-content-paragraph"
                  key={idx}
                >
                  <div className="table-content-paragraph-title">
                    {td.title}
                  </div>
                  <div className="table-content-paragraph-desc">
                    {td.desc}
                  </div>
                </div>
              )
            }
            // if no desc, print title only
            else{
              return(
                <div
                  className="table-content-paragraph"
                  key={idx}
                >
                  <div className="table-content-paragraph-title">
                    {td.title}
                  </div>
                </div>
              )
            }
          })
        }
    </div>
  )
}

export default TableContent;