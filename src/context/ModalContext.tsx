import { createContext, useContext, useMemo, useState } from 'react';

type ModalContextType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    text?: string;
    btnText: string;
    JSXElement?: React.ReactNode;
  };
  setContent: React.Dispatch<React.SetStateAction<ModalContextType['content']>>;
};

const initialState = {
  show: false,
  setShow: () => {},
  content: {
    text: '',
    btnText: '',
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
    btnText: '',
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
