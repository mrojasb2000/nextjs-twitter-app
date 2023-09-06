'use client'

import { addPost } from '../actions/add-post-action'
import { useRef } from 'react'

export function ComponentPost({
  userAvatarUrl,
  userName,
}: {
  userAvatarUrl: string
  userName: string
}) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData)
        formRef.current?.reset()
      }}
      className="flex flex-1 flex-col gap-y-4"
    >
      <div className="flex flex-1 flex-col gap-y-4 p-4 border-b border-white/20">
        <div className="flex flex-row space-x-4">
          <img
            className="rounded-full w-12 h-12 object-contain"
            src={userAvatarUrl}
          />
          <p className="p-2">{userName}</p>
        </div>
        <textarea
          name="content"
          rows={4}
          className="w-full text-2xl bg-black placeholder-gray-500"
          placeholder="!¿Que está pasando?"
        ></textarea>
        <button
          type="submit"
          className="bg-sky-300 text-sm font-bold rounded-full px-6 py-2 self-end"
        >
          Add new post
        </button>
      </div>
    </form>
  )
}
