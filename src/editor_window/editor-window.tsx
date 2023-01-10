import { ChangeEvent, RefObject } from 'react'
import { marked } from 'marked'
import { File } from 'resources/files/types'
import * as S from 'editor_window/editor-window-styles'
import 'highlight.js/styles/github.css'

import('highlight.js').then(hljs => {
  const h = hljs.default
  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }
      return h.highlightAuto(code).value
    },
    gfm: true,
  })
})

type EditorWindowProps = {
  inputRef: RefObject<HTMLInputElement>,
  files: File[],
  title: string,
  content: string,
  converted: string,
  handleSaveContent: () => void,
  handleChangeMarkDown: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

function EditorWindow ({ inputRef, files, title, handleSaveContent, handleChangeMarkDown, content, converted }: EditorWindowProps) {
  return (
    <S.EditorWindow>
      <S.Header>
        {(files.filter(file => file.active).length > 0) && <S.Input ref={inputRef} type='text' value={title} onChange={handleSaveContent} />}
      </S.Header>
      <S.Main>
        {(files.filter(file => file.active).length > 0) && <S.MarkDownEditor placeholder='digite aqui seu markdown' value={content} onChange={handleChangeMarkDown} />}
        {(files.filter(file => file.active).length > 0) && <S.ConvertedMarkDown dangerouslySetInnerHTML={{ __html: marked.parse(converted) }} />}
      </S.Main>
    </S.EditorWindow>
  )
}

export { EditorWindow }
