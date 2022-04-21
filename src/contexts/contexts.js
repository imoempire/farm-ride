import React, { createContext, useState } from "react";

export const OriginContext = createContext();
export const DestinationContext = createContext();
export const HistoryContext = createContext();

export const OriginContextProvider = (props) => {
  const [origin, setOrigin] = useState({
    latitude: null,
    longitude: null,
    name: "",
  });
  return (
    <OriginContext.Provider value={{ origin, setOrigin }}>
      {props.children}
    </OriginContext.Provider>
  );
};

export const DestinationContextProvider = (props) => {
  const [destination, setDestination] = useState({
    latitude: null,
    longitude: null,
    name: "",
  });
  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {props.children}
    </DestinationContext.Provider>
  );
};

export const HistoryContextProvider = (props) => {
  const [city, setCity]= useState('');
  const [history, setHistory] = useState('')
  return (
    <HistoryContext.Provider value={{ history, setHistory, city, setCity }}>
      {props.children}
    </HistoryContext.Provider>
  );
};