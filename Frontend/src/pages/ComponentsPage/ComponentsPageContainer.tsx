import React from "react";
import { ModalSettingsContext, IModalSettings } from "../../utils/ModalManager";
import ComponentsPage from "./ComponentsPage";

const ComponentsPageContainer = () => {
  return <ModalSettingsContext.Consumer>{(modalSettings: IModalSettings) => <ComponentsPage modalSettings={modalSettings}/>}</ModalSettingsContext.Consumer>;
};

export default ComponentsPageContainer;
