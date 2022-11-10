import { useState } from "react";

export default function useCounter() {
  const [adharValue, setadharValue] = useState("");
    const tabInitDetails = {
        currentTab: "",
        
      };
      const [tabDetails, setTabDetails] = useState(tabInitDetails);

  return {
    setTabDetails,tabDetails,
    setadharValue,
    adharValue,

  };
}
