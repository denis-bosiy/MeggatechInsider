import React, { createContext, useState } from "react";

const ModalSettingsContext = createContext({});

export interface IModalSettings {
  heading: string;
  isOpened: boolean;
}

export const ModalSettingsProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const modalSettingsInitialValue: IModalSettings = {
    heading: "Заголовок",
    isOpened: false
  };
  const [modalSettings, setModalSettings] = useState(modalSettingsInitialValue);

  const openModal = (heading: string, content?: React.Component) => {
    setModalSettings({ heading: heading, isOpened: true });
  };
  const closeModal = () => {
    setModalSettings({ ...modalSettings, isOpened: false });
  };

  return (
    <ModalSettingsContext.Provider value={{ modalSettings, openModal, closeModal }}>
      {children}
    </ModalSettingsContext.Provider>
  );
};

export default ModalSettingsContext;
