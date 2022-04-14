import React, { createContext, useState } from "react";

export const OriginContext = createContext();
export const DestinationContext = createContext();
export const HistoryContext = createContext();

export const OriginContextProvider = (props) => {
  const [origin, setOrigin] = useState({
    latitude: 5.637037,
    longitude: -0.156298,
    name: "Market",
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
  const [from, setFrom] = useState('')
  const [drop, setDrop] = useState('');
  return (
    <HistoryContext.Provider value={{ from, drop, setFrom, setDrop }}>
      {props.children}
    </HistoryContext.Provider>
  );
};