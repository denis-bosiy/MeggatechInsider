import React, { createContext, useState } from "react";

const modalSettingsInitialValue: IModalSettings = {
  heading: "Заголовок",
  isOpened: false,
  content: <div></div>
};
const initialContextValue = {
  modalSettings: modalSettingsInitialValue,
  openModal(heading: string, content: React.ReactNode) {
    console.log("opened modal", heading, content);
  },
  closeModal() {
    console.log("closed modal");
  }
};
const ModalSettingsContext = createContext(initialContextValue);

export interface IModalSettings {
  heading: string;
  isOpened: boolean;
  content: React.ReactNode;
}

export const ModalSettingsProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const [modalSettings, setModalSettings] = useState(modalSettingsInitialValue);

  const openModal = (heading: string, content: React.ReactNode) => {
    setModalSettings({ heading: heading, isOpened: true, content: content });
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
