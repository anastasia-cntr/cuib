"use client";

import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import useLogInModal from '@/app/features/authentication/useLogInModal';
import useSignUpModal from '@/app/features/authentication/useSignUpModal';
import UniversalModal from '../../ui/UniversalModal';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import { toast } from 'react-hot-toast';
import Button from '../../ui/Button';

const LogInModal = () => {
  const logInModal = useLogInModal();
  const signUpModal = useSignUpModal();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' } });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        logInModal.onClose();
      })
      .catch((error) => {
        toast.error("Error");
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const toggle = useCallback(() => {
    logInModal.onClose();
    signUpModal.onOpen();
  }, [logInModal, signUpModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Bine ai revenit în Cuib!" center subtitle="Conectează-te la contul tău pentru a beneficia de o experiență completă. " />
      <Input id="email" label="Email" type="email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="password" label="Parol&#259;" type="password" disabled={isLoading} register={register} errors={errors}
        required />
      <section onClick={toggle}>
        <a className="text-blue-700 underline" href="">Nu ai un cont? Înscrie-te!</a>
      </section>
    </div>
  );

  const footerContent = (
    <footer className="flex flex-col gap-4 mt-3">
      <hr />
      <Button label="Continu&#259; cu Google" outline bgColor='bg-gray-200' textColor='text-black' small icon={FcGoogle} onClick={() => { }} />
      <Button label="Continu&#259; cu Facebook" outline bgColor='bg-gray-200' textColor='text-black' small icon={FaFacebook}
        onClick={() => { }} />
    </footer>
  )

  return (
    <div>
      <UniversalModal disabled={isLoading} actionLabel="Continuă" title="Conectează-te" onClose={logInModal.onClose} isOpen={logInModal.isOpen} onSubmit={handleSubmit((onSubmit))} body={bodyContent} footer={footerContent} btnBgColor='bg-red-500' btnTextColor='text-white' />
    </div>
  );
}

export default LogInModal;