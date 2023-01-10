import styled, { keyframes } from 'styled-components/macro'
import * as icon from 'icons'
import { Status } from 'resources/files/types'

export type StatusIconProps = {
  status: Status
  className?: string;
}

export function StatusIcon ({ status = 'saved', className }: StatusIconProps) {
  const FinalStatus = {
    saving: Saving,
    saved: icon.Saved,
    editing: Edit,
  }[status]

  return <FinalStatus className={className} />
}

const Edit = styled(icon.Editing)``

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(359deg)
  }
`

const Saving = styled(icon.Saving)`
  animation: ${rotation} 1s infinite linear;
`
