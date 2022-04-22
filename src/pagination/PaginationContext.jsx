import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export default function PaginationProvider({ children }) {

  const obj = {
    numberPerPage :10,
    currentPage :1,
    numberOfPages : 0,
    paginatedData : [],
    begin: 0,
    end: 1,
  }
  
  const [pageObj, setPageObj] = useState(obj)

  return (
    <PaginationContext.Provider value={{ pageObj, setPageObj }}>
      {children}
    </PaginationContext.Provider>
  );
}

export const usePaginationContext= ()=> useContext(PaginationContext)
