"use client";

import MenuItem from "./MenuItem";
import useSignUpModal from "@features/authentication/useSignUpModal";
import useLogInModal from "@features/authentication/useLogInModal";

const UserMenuModal = () => {
  const signUpModal = useSignUpModal();
  const logInModal = useLogInModal();

  return (
    <div className="flex flex-col border rounded-xl absolute right-6 shadow-lg text-[0.825rem] px-10 py-10 mt-3">
      <MenuItem onClick={signUpModal.onOpen} label="Înscrie-te" fontBold largePadding />
      <MenuItem onClick={logInModal.onOpen} label="Conectează-te" largePadding />
      <MenuItem onClick={logInModal.onOpen} label="Blog" largePadding border borderType="border-t-2" />
    </div>
  );
}

export default UserMenuModal;
