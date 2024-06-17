import { createContext, useContext, useMemo, useState } from 'react';

type LoaderContextType = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState = {
  isShow: false,
  setIsShow: () => {},
};

const LoaderContext = createContext<LoaderContextType>(initialState);
export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShow, setIsShow] = useState(false);
  const state = useMemo(
    () => ({
      isShow,
      setIsShow,
    }),
    [isShow, setIsShow]
  );
  return <LoaderContext.Provider value={state}>{children}</LoaderContext.Provider>;
};
