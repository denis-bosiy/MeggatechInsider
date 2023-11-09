import React, { useRef, useLayoutEffect, useContext } from "react";
import "./Modal.scss";
import IconButton from "../IconButton/IconButton";
import { CrossIcon } from "../../icons";
import ModalSettingsContext from "../../utils/ModalSettingsContext";
import { classNames } from "../../utils/classNames";

const Modal = () => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const { modalSettings, closeModal } = useContext(ModalSettingsContext);

  useLayoutEffect(() => {
    document.body.style.overflow = modalSettings.isOpened ? "hidden" : "auto";
  }, [modalSettings.isOpened]);
  useLayoutEffect(() => {
    const KEY_DOWN_EVENT = "keydown";
    const keyboardListener = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener(KEY_DOWN_EVENT, keyboardListener);

    return () => {
      window.removeEventListener(KEY_DOWN_EVENT, keyboardListener);
    };
  }, []);

  const onOverlayCLick = (): void => {
    closeModal();
  };
  const onModalClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };
  const onCloseButtonClick = (): void => {
    closeModal();
  };

  return (
    <div
      className={classNames("overlay", modalSettings.isOpened ? "" : " -hidden")}
      ref={overlayRef}
      onClick={onOverlayCLick}
    >
      <div className="modal" ref={modalRef} onClick={onModalClick}>
        <div className="modal__header">
          <h2 className="h2">{modalSettings.heading}</h2>

          <IconButton className="modal__close-button" icon={<CrossIcon />} onClick={onCloseButtonClick}></IconButton>
        </div>

        <div className="modal__content">{modalSettings.content}</div>
      </div>
    </div>
  );
};

export default Modal;
