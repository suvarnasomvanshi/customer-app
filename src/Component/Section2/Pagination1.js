import React from "react";
import "./Pagination1.css";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";

const objectArrs = JSON.parse(localStorage.getItem("key"));
console.log(objectArrs);

{/* function detele(item) {
    const indexOfDetele = objectArrs.findIndex(
      (objectArrs) => objectArrs.userName === item.userName
    );
    objectArrs.splice(indexOfDetele, 1);
    setObjectArrs([...objectArrs]);
  }*/}
function Pagination1(){

  const [currentPage, setCurrentPage] = useState(1);
  const renderPage = (pageNum) => {
    const startIndex = (pageNum - 1) * 3;
    const endIndex = startIndex + 3;
    const objToRender = objectArrs.slice(startIndex, endIndex);
    return (
      <div>
        {objToRender.map((objectArr, index) => (
          <div className="profile" key={index}>
            {<CgProfile color="black" fontSize="1.5em" />}
            <span>
              {" "}
              &nbsp;{objectArr.firstName} {objectArr.lastName}
            </span>
            <span>{objectArr.userName}</span>
            <button className="delete" >
              {<AiFillDelete />}
            </button>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      {renderPage(currentPage)}
      <button className="btn3" onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <button className="btn4"onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
}
export default Pagination1;
