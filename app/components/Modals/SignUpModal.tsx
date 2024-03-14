"use client";

import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import useSignUpModal from '@/app/hooks/useSignUpModal';
import useLogInModal from '@/app/hooks/useLogInModal';
import UniversalModal from './UniversalModal';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';

const SignUpModal = () => {
  const signUpModal = useSignUpModal();
  const logInModal = useLogInModal();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' } });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        signUpModal.onClose();
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
      <Heading title="Bine ai venit în Cuib!" center subtitle="Creează-ți un cont pentru a beneficia de o experiență completă." />
      <Input id="email" label="Email" type="email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="name" label="Nume" disabled={isLoading} register={register} errors={errors} required />
      <Input id="password" label="Parol&#259;" type="password" disabled={isLoading} register={register} errors={errors}
        required />
      <Input id="confirmPassword" label="Confirm&#259; parola" type="password" disabled={isLoading} register={register} errors={errors} required />
      <section onClick={toggle}>
        <a className="text-blue-700 underline" href="">Ai deja un cont? Conectează-te!</a>
      </section>
    </div>
  );

  const footerContent = (
    <footer className="flex flex-col gap-4 mt-3">
      <hr />
      <Button label="Continu&#259; cu Google" outline bgColor='bg-gray-200' textColor='text-gray-500' small icon={FcGoogle} onClick={() => { }} />
      <Button label="Continu&#259; cu Facebook" outline bgColor='bg-gray-200' textColor='text-gray-500' small icon={FaFacebook}
        onClick={() => { }} />
    </footer>
  )

  return (
    <div>
      <UniversalModal disabled={isLoading} actionLabel="Continuă" title="Înscrie-te" onClose={signUpModal.onClose} isOpen={signUpModal.isOpen} onSubmit={handleSubmit((onSubmit))} body={bodyContent} footer={footerContent} />
    </div>
  );
}

export default SignUpModal;