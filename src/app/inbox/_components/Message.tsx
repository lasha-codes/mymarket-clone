'use client'

import { Messages, Product, User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaLink } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaLariSign } from 'react-icons/fa6'
import { FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
axios.defaults.baseURL = 'http://localhost:3000'

const getUsers = (users: User[], recipientId: string, senderId: string) => {
  const sender = users.find((user) => {
    return user.id === senderId
  })
  const recipient = users.find((user) => {
    return user.id === recipientId
  })

  return { sender, recipient }
}

const Message = ({
  sent_message,
  users,
  type,
  received_message,
}: {
  sent_message?: Messages
  users: User[]
  type: 'received' | 'sent'
  received_message?: Messages
}) => {
  const router = useRouter()
  const { sender, recipient } = getUsers(
    users,
    sent_message ? sent_message!.recipient : received_message!.recipient,
    sent_message ? sent_message!.userId : received_message!.userId
  )

  console.log(sender, recipient)

  const [showMessage, setShowMessage] = useState<boolean>(false)

  const truncateMessage = (message: string) => {
    if (message.length > 120) {
      return `${message.slice(0, 120)}...`
    } else {
      return message
    }
  }

  const { products } = useSelector((state: any) => state.product)

  const productById: Product = products.find((product: Product) => {
    return (
      product.id === sent_message?.offerProductId ||
      product.id === received_message?.offerProductId
    )
  })

  const AcceptOfferComponent = ({
    message,
    type,
  }: {
    message: Messages
    type?: string
  }) => {
    const acceptOffer = async () => {
      try {
        if (productById) {
          const response = await axios.post('/api/offers', {
            sellerId: productById.userId,
            price: message?.offerPrice,
            productId: productById.id,
            message_id: message.id,
          })
          console.log(response.data)
          router.refresh()
        }
      } catch (err: any) {
        toast.error(err.message)
      }
    }
    if (type === 'sent') return
    if (!productById?.availableForPurchase) {
      return <p className='text-red-500 text-[15px]'>! გაყიდულია</p>
    }
    if (message.acepted) {
      return (
        <Link
          href={`/products/offers/${productById.id}`}
          className='bg-transparent text-green-600 text-sm border mt-2 border-green-600 px-5 py-2.5 rounded-xl'
        >
          <span>დათანხმებულია</span>
        </Link>
      )
    } else {
      return (
        <button
          onClick={acceptOffer}
          className='bg-transparent text-white hover:bg-green-700 transition-all duration-200 ease-linear border-white bg-green-600 text-sm px-5 py-2.5 
     rounded-xl'
        >
          <span>დათანხმება</span>
        </button>
      )
    }
  }

  const ReturnSentMessageComponent = () => {
    if (sent_message && sent_message.type === 'Purchase') {
      return (
        <div className='bg-blue-200 shadow-md rounded-2xl transition-all duration-300 ease-linear px-5 py-3 flex flex-col gap-3 items-start max-w-[500px]'>
          <div className='flex items-center gap-3 transition-all duration-300 ease-linear'>
            <div className='relative rounded-full transition-all duration-300 ease-linear overflow-hidden w-[30px] h-[30px]'>
              <Image
                src={
                  'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yaFNsSkE2WktEVVVMOEpHUHBHUHo4UWlnT0oiLCJyaWQiOiJ1c2VyXzJoVzFDeXZhaWZ2ZmIwMUhmUU9Ud0dkWFdXNiJ9'
                }
                fill
                className='object-cover'
                alt='user profile'
              />
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-[15px]'>თქვენ</span>
              <span className='text-[12px] font-medium'>TO:</span>
              <span className='font-medium'>@{recipient?.email}</span>
            </div>
          </div>
          <div className='flex flex-col items-end transition-all duration-300 ease-linear'>
            <p className={`text-sm text-slate-500`}>
              {showMessage
                ? sent_message.message
                : truncateMessage(sent_message.message)}
            </p>

            <button
              onClick={() => setShowMessage(!showMessage)}
              className={`${
                sent_message?.message.length <= 120 && 'hidden'
              } text-sm text-white font-medium`}
            >
              {showMessage ? 'hide' : 'show'}
            </button>
          </div>
        </div>
      )
    } else if (sent_message && sent_message.type === 'Offer') {
      return (
        <div
          className='bg-blue-200 shadow-md rounded-2xl transition-all duration-300 
        ease-linear px-5 py-3 flex flex-col gap-3 items-start max-w-[500px]'
        >
          <div className='flex items-center gap-3 transition-all duration-300 ease-linear'>
            <div
              className='relative rounded-full transition-all duration-300 ease-linear 
        overflow-hidden w-[30px] h-[30px]'
            >
              <Image
                src={
                  'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yaFNsSkE2WktEVVVMOEpHUHBHUHo4UWlnT0oiLCJyaWQiOiJ1c2VyXzJoVzFDeXZhaWZ2ZmIwMUhmUU9Ud0dkWFdXNiJ9'
                }
                fill
                className='object-cover'
                alt='user profile'
              />
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-[15px]'>თქვენ</span>
              <span className='text-[12px] font-medium'>TO:</span>
              <span className='font-medium'>@{recipient?.email}</span>
            </div>
          </div>
          <div className='flex flex-col items-end transition-all duration-300 ease-linear'>
            <div className='self-start my-3 flex items-start justify-between gap-5'>
              <div className='w-[100px] h-[80px] relative rounded overflow-hidden self-start'>
                <Image
                  src={productById?.images[0]}
                  fill
                  className='object-cover'
                  alt=''
                />
              </div>
              <div className='flex flex-col gap-5'>
                {productById?.youtubeURL && (
                  <div className='flex items-start gap-2'>
                    <div className='flex items-center gap-2'>
                      <FaYoutube className='text-red-500 text-[15px]' />
                      <span className='text-[13px] font-medium'>ბმული: </span>
                    </div>
                    <a
                      href={productById.youtubeURL}
                      className='flex items-center gap-1 text-[13px] text-blue-600 hover:text-blue-700 transition-all'
                      target='_blank'
                    >
                      <FaLink />
                      {productById.youtubeURL}
                    </a>
                  </div>
                )}
                {productById && (
                  <div className='w-full flex items-center justify-between'>
                    <Link
                      href={`/products/${productById?.id}`}
                      className='text-[15px] text-black/90'
                    >
                      მონახულება
                    </Link>
                    <div className='flex items-center gap-1.5'>
                      <span className='text-black/70'>შემოთავაზება: </span>
                      <div className='flex items-center gap-0.5 font-semibold'>
                        {productById.bill === 'ლარი' ? (
                          <FaLariSign />
                        ) : (
                          <FiDollarSign />
                        )}
                        <span>{sent_message.offerPrice}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className={`text-sm text-slate-500`}>
              {showMessage
                ? sent_message.message
                : truncateMessage(sent_message.message)}
            </p>
            <button
              onClick={() => setShowMessage(!showMessage)}
              className={`${sent_message?.message.length <= 120 && 'hidden'}`}
            >
              {showMessage ? 'hide' : 'show'}
            </button>
          </div>
          <AcceptOfferComponent message={sent_message} type='sent' />
        </div>
      )
    }
  }

  const ReturnReceivedMessage = () => {
    if (received_message && received_message.type === 'Purchase') {
      return (
        <div className='bg-white shadow-md rounded-2xl transition-all duration-300 ease-linear px-5 py-3 flex flex-col gap-3 items-start max-w-[500px]'>
          <div className='flex items-center gap-3 transition-all duration-300 ease-linear'>
            <div className='relative rounded-full transition-all duration-300 ease-linear overflow-hidden w-[30px] h-[30px]'>
              <Image
                src={
                  'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yaFNsSkE2WktEVVVMOEpHUHBHUHo4UWlnT0oiLCJyaWQiOiJ1c2VyXzJoVzFDeXZhaWZ2ZmIwMUhmUU9Ud0dkWFdXNiJ9'
                }
                fill
                className='object-cover'
                alt='user profile'
              />
            </div>
            <div className='flex items-center gap-3 transition-all duration-300 ease-linear'>
              <Link href='' className='text-[15px]'>
                @{sender?.email}
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-end transition-all duration-300 ease-linear'>
            <p className={`text-sm text-slate-500`}>
              {showMessage
                ? received_message.message
                : truncateMessage(received_message.message)}
            </p>
            <button
              onClick={() => setShowMessage(!showMessage)}
              className={`text-sm text-blue-500 font-medium ${
                received_message?.message.length <= 120 && 'hidden'
              }`}
            >
              {showMessage ? 'hide' : 'show'}
            </button>
          </div>
        </div>
      )
    } else if (received_message?.type === 'Offer') {
      return (
        <div
          className='bg-white shadow-md rounded-2xl transition-all duration-300 
      ease-linear px-5 py-3 flex flex-col gap-3 items-start max-w-[500px]'
        >
          <div
            className='flex items-center gap-3 transition-all duration-300 
     ease-linear'
          >
            <div
              className='relative rounded-full transition-all duration-300 
     ease-linear 
      overflow-hidden w-[30px] h-[30px]'
            >
              <Image
                src={
                  'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yaFNsSkE2WktEVVVMOEpHUHBHUHo4UWlnT0oiLCJyaWQiOiJ1c2VyXzJoVzFDeXZhaWZ2ZmIwMUhmUU9Ud0dkWFdXNiJ9'
                }
                fill
                className='object-cover'
                alt='user profile'
              />
            </div>
            <div className='flex items-center gap-2'>
              <Link href='' className='text-[15px]'>
                @{sender?.email}
              </Link>
            </div>
          </div>
          <div
            className='flex flex-col items-end transition-all duration-300 
     ease-linear'
          >
            <div
              className='self-start my-3 flex items-start justify-between 
     gap-5'
            >
              <div
                className='w-[100px] h-[80px] relative rounded overflow-hidden 
     self-start'
              >
                <Image
                  src={productById?.images[0]}
                  fill
                  className='object-cover'
                  alt=''
                />
              </div>
              <div className='flex flex-col gap-5'>
                {productById?.youtubeURL && (
                  <div className='flex items-start gap-2'>
                    <div className='flex items-center gap-2'>
                      <FaYoutube className='text-red-500 text-[15px]' />
                      <span className='text-[13px] font-medium'>ბმული: </span>
                    </div>
                    <a
                      href={productById.youtubeURL}
                      className='flex items-center gap-1 text-[13px] text-blue-600 hover:text-blue-700 transition-all'
                      target='_blank'
                    >
                      <FaLink />
                      {productById.youtubeURL}
                    </a>
                  </div>
                )}
                {productById && (
                  <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <Link
                      href={`/products/${productById?.id}`}
                      className='text-[15px] text-black/90'
                    >
                      მონახულება
                    </Link>
                    <div className='flex items-center gap-1.5'>
                      <span className='text-black/70'>შემოთავაზება: </span>
                      <div className='flex items-center gap-0.5 font-semibold'>
                        {productById.bill === 'ლარი' ? (
                          <FaLariSign />
                        ) : (
                          <FiDollarSign />
                        )}
                        <span>{received_message.offerPrice}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className={`text-sm text-slate-500`}>
              {showMessage
                ? received_message.message
                : truncateMessage(received_message.message)}
            </p>
            <button
              onClick={() => setShowMessage(!showMessage)}
              className={`bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-linear ${
                received_message?.message.length <= 120 && 'hidden'
              }`}
            >
              {showMessage ? 'hide' : 'show'}
            </button>
            <AcceptOfferComponent message={received_message} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className='flex flex-col items-start gap-2'>
      <span className='text-sm capitalize font-medium text-gray-600'>
        {sent_message
          ? format(sent_message.createdAt, 'dd MMMM - HH.mm')
          : format(received_message!.createdAt, 'dd MMMM - HH.mm')}
      </span>
      {type === 'sent' ? (
        <ReturnSentMessageComponent />
      ) : (
        <ReturnReceivedMessage />
      )}
    </div>
  )
}

export default Message
