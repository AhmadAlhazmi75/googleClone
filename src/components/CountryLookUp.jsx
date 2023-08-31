"use client";
import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("Saudi Arabia");
  useEffect(() => {
    const getIP = async () => {
      const ip = await fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => data.ip);
      return ip;
    };

    const getLocation = async () => {
      const ipAddress = await getIP();
      const url = `https://freeipapi.com/api/json/${ipAddress}`;

      const location = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.countryName);

      return location;
    };

    setCountry(getLocation());
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
