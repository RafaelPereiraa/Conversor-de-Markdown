import styled, { css } from 'styled-components'
import * as icon from 'icons'
import { StatusIcon, StatusIconProps } from './status-icon'

export const Aside = styled.aside`${({ theme }) => css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`}`

export const Button = styled.button`${({ theme }) => css`
    align-items: center;
  background: ${theme.colors.primary};
  border: 0;
  border-radius: 4px;
  color: ${theme.colors.lightBlack};
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  padding: 5px 0;
  transition: background 0.15s ease-in-out;
  width: 90%;
  & svg {
    margin-right: 4px;
    padding: 0px 0 0 2px;
  }
  &:hover {
    background: ${theme.colors.primaryDark};
  }

  & span{
    padding-top: 1px;
  }
`}`

export const Logo = styled.img`
  width: 40px;
  vertical-align: middle;
`

export const Span = styled.span`
  display: block;
  padding-top: 32px;
  font-size: 3rem;
  font-weight:700;
`

export const H2 = styled.h2` ${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  position: relative;
  width: 100%;
  margin: 32px 0 32px;
  display: flex;
  justify-content: center;
  span {
    background-color: ${theme.colors.black};
    position: relative;
    right: 20%;
    padding: 0 5px;
    z-index: 1;
  }
  &::before {
    background: ${theme.colors.primary};
    content: '';
    height: 2px;
    position: absolute;
    top: 50%;
    width: 90%;
    z-index: 0;
  }
`}`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

type ListItemProps = { active: boolean }

export const ListItem = styled.li<ListItemProps>` ${(props) => css`
  width: 90%;
  font-size: 1.5rem;
  padding: 0px 10px 0px 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: ${props.active ? props.theme.colors.lightBlack : props.theme.colors.black};
  opacity: ${props.active ? 1 : 0.5};

  &:hover{
    opacity: 1;
    background-color: ${props.theme.colors.lightBlack};
    ${DeleteButton}{
      display: flex;
    }
  }

`}`

export const ItemLink = styled.a<ListItemProps>` ${props => css`
  width: 100%;
  min-height: 20.25px;
  padding: 5px 0px 6px 35px;
  background: url(${props.active ? icon.DocumentActive : icon.Document}) 0px 3px no-repeat;

  & span{
    height: 100%;
    vertical-align: sub;
  }
`}`

const DefaultButton = styled.button`
  cursor: pointer;
`

export const DeleteButton = styled(DefaultButton)`
  all: unset;
  display: none;

  &:hover{
    transform: scale(1.5);
  }
`

export const StatusIconStyle = styled(StatusIcon)<StatusIconProps>``
