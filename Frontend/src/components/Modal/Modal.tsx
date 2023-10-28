import React, { useRef, useLayoutEffect, useContext } from "react";
import "./Modal.scss";
import IconButton from "../IconButton/IconButton";
import { CrossIcon } from "../../icons";
import { IModalSettings } from "../../utils/ModalSettingsContext";

const Modal = ({modalSettings, isOpened}: {modalSettings: IModalSettings, isOpened: boolean}) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  const closeModal = () => ModalManager.Close(modalSettings);

  useLayoutEffect(() => {
    if (overlayRef && overlayRef.current && modalRef && modalRef.current) {
      if (isOpened) {
        const OVERLAY_Z_INDEX = 1000;

        // TODO: Заменить на модификаторы
        document.body.style.overflow = "hidden";
        (overlayRef.current as any).style.display = "block";
        (modalRef.current as any).style.display = "block";
        (overlayRef.current as any).style.zIndex = OVERLAY_Z_INDEX;
        (modalRef.current as any).style.zIndex = OVERLAY_Z_INDEX + 1;
      } else {
        // TODO: Заменить на модификаторы
        document.body.style.overflow = "auto";
        (overlayRef.current as any).style.display = "none";
        (modalRef.current as any).style.display = "none";
        (overlayRef.current as any).style.zIndex = -3;
        (modalRef.current as any).style.zIndex = -3;
      }
    }
  }, [isOpened]);
  useLayoutEffect(() => {
    const KEY_DOWN_EVENT = "keydown";
    const keyboardListener = (e: KeyboardEvent) => e.code === "27" && closeModal();
    window.addEventListener(KEY_DOWN_EVENT, keyboardListener);

    return () => {
      window.removeEventListener(KEY_DOWN_EVENT, keyboardListener);
    };
  }, []);

  return (
    <div className="overlay" ref={overlayRef}>
      <div className="modal" ref={modalRef}>
        <div className="modal__header">
          <h2 className="h2">{modalSettings.heading}</h2>

          <IconButton className="modal__close-button" icon={<CrossIcon />} onClick={() => closeModal()}></IconButton>
        </div>

        <div className="modal__content">shit</div>
      </div>
    </div>
  );
};

export default Modal;
