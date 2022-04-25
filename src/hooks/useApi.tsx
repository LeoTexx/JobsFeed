import { ReactNode, useContext } from "react";
import { createContext } from "react";
import api from "../services/api";

import { ApiResponse } from "../types/api";

const ApiContext = createContext<ApiContextData>({} as ApiContextData);

interface ApiContextData {
  getJobs: () => Promise<Array<ApiResponse>>;
}
interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const getJobs = async () => {
    const response = await api.get("");
    return response.data as Array<ApiResponse>;
  };

  return (
    <ApiContext.Provider
      value={{
        getJobs,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  return context;
};
