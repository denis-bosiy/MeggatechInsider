import React, { useContext } from "react";
import Button, { ButtonType } from "../Button/Button";
import ModalSettingsContext from "../../utils/ModalSettingsContext";
import "./AgreementModalView.scss";

interface IAgreementModalViewProps {
  proceedAction: () => void;
}

const AgreementModalView = (props: IAgreementModalViewProps) => {
  const { closeModal } = useContext(ModalSettingsContext);

  const onProceedButtonClick = () => {
    props.proceedAction();
    closeModal();
  };

  return (
    <div className="x-amv">
      <h3 className="h3 x-amv__heading">Вы действительно хотите удалить выбранный объект?</h3>
      <div className="x-amv__options">
        <Button label="Да" type={ButtonType.Primary} onClick={onProceedButtonClick} />
        <Button label="Нет" type={ButtonType.Default} onClick={() => closeModal()} />
      </div>
    </div>
  );
};

export default AgreementModalView;
