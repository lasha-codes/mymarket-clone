'use client'

import { Messages, User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

  const ReturnSentMessageComponent = () => {
    if (sent_message && sent_message.type === 'Purchase') {
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
              className='text-sm text-blue-600 font-medium'
            >
              {showMessage ? 'hide' : 'show'}
            </button>
          </div>
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
              className='text-sm text-blue-600 font-medium'
            >
              {showMessage ? 'hide' : 'show'}
            </button>
          </div>
        </div>
      )
    }
  }

  {
    return type === 'sent' ? (
      <ReturnSentMessageComponent />
    ) : (
      <ReturnReceivedMessage />
    )
  }
}

export default Message
