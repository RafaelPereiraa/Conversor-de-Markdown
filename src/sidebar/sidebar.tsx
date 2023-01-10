import logo from 'assets/logo192.png'
import * as S from './sidebar-styles'
import * as icon from 'icons'
import { File } from 'resources/files/types'

type SideBarProps = {
  files: File[],
  handleCreateFile: () => void,
  handleRemoveFile: (id: string) => void,
  handleSetActive: (id: string) => void,
}

function SideBar ({ files, handleCreateFile, handleRemoveFile, handleSetActive }: SideBarProps) {
  return (
    <S.Aside>
      <header>
        <S.Span><S.Logo src={logo} />notsono.</S.Span>
      </header>

      <S.H2>
        <span>Arquivos</span>
      </S.H2>

      <S.Button onClick={handleCreateFile}>
        <icon.Plus />
        <span>Adicionar Arquivo</span>
      </S.Button>

      <S.List>
        {files.map((file) => (
          <S.ListItem key={file.id} active={file.active} onClick={() => handleSetActive(file.id)}>
            <S.ItemLink
              href={`/file/${file.id}`}
              active={file.active}
              onClick={(e) => {
                e.preventDefault()
                window.history.replaceState(null, '', `${file.id}`)
              }}
            >
              <span>{file.name}</span>
            </S.ItemLink>

            {file.active && <S.StatusIconStyle status={file.status} />}

            {!file.active && <S.DeleteButton onClick={() => handleRemoveFile(file.id)}><icon.Remove /></S.DeleteButton>}

          </S.ListItem>
        ))}
      </S.List>

    </S.Aside>
  )
}

export { SideBar }
