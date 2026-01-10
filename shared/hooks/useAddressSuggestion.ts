import { useEffect, useState } from "react";
import { DaDataAddress, DaDataSuggestion } from "react-dadata";

export const useAddressSuggestion = (
  value?: DaDataSuggestion<DaDataAddress> | string | undefined
) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >(undefined);

  useEffect(() => {
    if (typeof value === "object" && value !== null) {
      setSelectedSuggestion(value);
    } else if (value === undefined || value === "") {
      setSelectedSuggestion(undefined);
    }
  }, [value]);

  return { selectedSuggestion, setSelectedSuggestion };
};
