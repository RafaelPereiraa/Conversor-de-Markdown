import styled, { createGlobalStyle } from 'styled-components'
import { SideBar } from 'sidebar'
import { EditorWindow } from 'editor_window'
import { useFiles } from 'resources/files/use-files'

function App () {
  const {
    handleChangeMarkDown,
    handleCreateFile,
    handleRemoveFile,
    handleSaveContent,
    handleSetActive,
    content,
    title,
    converted,
    files,
    inputRef,
  } = useFiles()

  const GlobalStyle = createGlobalStyle`
    code{
      display: block;
      white-space: pre-wrap;
      font-size: .65em;
    }
  `

  return (
    <Container>
      <SideBar
        files={files}
        handleCreateFile={handleCreateFile}
        handleRemoveFile={handleRemoveFile}
        handleSetActive={handleSetActive}
      />
      <EditorWindow
        converted={converted}
        content={content}
        handleSaveContent={handleSaveContent}
        handleChangeMarkDown={handleChangeMarkDown}
        title={title}
        inputRef={inputRef}
        files={files}
      />
      <GlobalStyle />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

export { App }
