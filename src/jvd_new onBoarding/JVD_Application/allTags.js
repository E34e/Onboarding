import { useState } from "react";

export default function useCounter() {

    const tabInitDetails = {
        currentTab: "",
        
      };
      const [tabDetails, setTabDetails] = useState(tabInitDetails);

  return {
    setTabDetails,tabDetails

  };
}
