import { createContext, useContext, useMemo, useState } from 'react';

type ModalContextType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    text: string;
  };
  setContent: React.Dispatch<React.SetStateAction<ModalContextType['content']>>;
};

const initialState = {
  show: false,
  setShow: () => {},
  content: {
    text: '',
  },
  setContent: () => {},
};

const ModalContext = createContext<ModalContextType>(initialState);

export const useBSModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({
    text: '',
  });
  const state = useMemo(
    () => ({
      show,
      setShow,
      content,
      setContent,
    }),
    [show, setShow, content, setContent]
  );

  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>;
};
