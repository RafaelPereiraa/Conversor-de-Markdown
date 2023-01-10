import localforage from 'localforage'
import { useState, useEffect, useRef, ChangeEvent } from 'react'
import { File } from 'resources/files/types'
import { v4 as uuid } from 'uuid'

export function useFiles () {
  const [converted, setConverted] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    async function storage () {
      const storedFiles = await localforage.getItem('files') as File[]
      setFiles(storedFiles)
    }

    storage()
  }, [])

  useEffect(() => {
    async function storage () {
      await localforage.setItem('files', [...files])
    }

    storage()
  }, [files])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function changeStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') return

      timer = setTimeout(() => {
        setFiles(files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }
          return file
        }))
        setTimeout(() => {
          setFiles(files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }
            return file
          }))
        }, 1000)
      }, 1000)
    }

    changeStatus()
    return () => clearTimeout(timer)
  }, [files, setFiles])

  const handleCreateFile = () => {
    inputRef.current?.focus()
    setFiles(files.map(file => ({
      ...file,
      active: false,
    })).concat({
      id: uuid(),
      name: 'asdfasd',
      content: '',
      active: true,
      status: 'saved',
    }))
  }

  const handleSetActive = (id: string) => {
    inputRef.current?.focus()
    setFiles(files.map(file => ({
      ...file,
      active: (file.id === id),
    })))
  }

  const handleRemoveFile = (id: string) => {
    const index = files.findIndex(file => file.id === id)
    setFiles(files.splice(index, 1))
    console.log((files.filter(file => file.active).length))
  }

  useEffect(() => {
    const index = files.findIndex(file => file.active)

    if (files.filter(file => file.active).length > 0) {
      setTitle(files[index].name)
      setContent(files[index].content)
      setConverted(files[index].content)
    }
  }, [files])

  const handleChangeMarkDown = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setConverted(e.target.value)
    setContent(e.target.value)
    handleSaveContent(null, e.target.value)
  }

  const handleSaveContent = (event?: ChangeEvent<HTMLInputElement> | null, content?: string) => {
    if (event) {
      setFiles(files.map((file) => {
        if (file.active) {
          const newFile = { ...file }

          newFile.name = event.currentTarget.value
          newFile.status = 'editing'

          return newFile
        }
        return file
      }).sort((a, b) => { return a.name.localeCompare(b.name) }))
    }

    if (content) {
      setFiles(files.map((file) => {
        if (file.active) {
          const newFile = file

          newFile.content = (content)
          newFile.status = 'editing'

          return newFile
        }
        return file
      }).sort((a, b) => { return a.name.localeCompare(b.name) }))
    }
  }

  return {
    files,
    handleCreateFile,
    handleSetActive,
    handleRemoveFile,
    title,
    content,
    converted,
    inputRef,
    handleSaveContent,
    handleChangeMarkDown,
  }
}
