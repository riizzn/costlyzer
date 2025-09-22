"use client"
import { Dialog, Transition } from '@headlessui/react'
import { FormEvent, Fragment, useState } from 'react'
import Image from 'next/image'
import { addUserEmailToProduct } from '@/lib/actions'

interface Props {
  productId: string
}

const Modal = ({ productId }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await addUserEmailToProduct(productId, email);

    setIsSubmitting(false)
    setEmail('')
    closeModal()
  }

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="dialog-content">
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="p-3 border border-gray-200 rounded-10">
                        <Image
                          src="/assets/icons/price-tag.svg"
                          alt="logo"
                          width={28}
                          height={28}
                        />
                      </div>
                      <Image
                        src="/assets/icons/x-close.svg"
                        alt="close"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={closeModal}
                      />
                    </div>

                    <Dialog.Title as="h4" className="dialog-head_text">
                      Stay updated with product pricing alerts right in your inbox!
                    </Dialog.Title>

                    <Dialog.Description as="p" className="text-sm text-gray-600 mt-2">
                      Never miss a bargain again with our timely alerts!
                    </Dialog.Description>
                  </div>

                  <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="dialog-input_container">
                      <Image
                        src="/assets/icons/mail.svg"
                        alt='mail'
                        width={18}
                        height={18}
                      />
                      <input
                        required
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className='dialog-input'
                      />
                    </div>
                    <button type="submit" className="dialog-btn">
                      {isSubmitting ? 'Submitting...' : 'Track'}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal