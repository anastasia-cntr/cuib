"use client";

import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const UniversalModal: React.FC<ModalProps> = ({
  isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/*MODAL CONTENT*/}
          <div className={`translate duration-300 h-full
          ${showModal ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*HEADER*/}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b">
                <button className="p-1 border-0 hover:opacity-70 transition absolute right-5"
                  onClick={handleClose}>
                  <IoClose size={24} />
                </button>
                {/* TITLE CONTAINER */}
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/*BODY*/}
              <main className="relative p-6">
                {body}
              </main>
              {/*FOOTER*/}
              <footer className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full
                ${displayColumn ? 'flex-column' : 'flex-row}">
                  {secondaryAction && secondaryLabel && (
                    <Button disabled={disabled} label={secondaryLabel} onClick={handleSecondaryAction} />
                  )}
                  <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                </div>
                {footer}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniversalModal;