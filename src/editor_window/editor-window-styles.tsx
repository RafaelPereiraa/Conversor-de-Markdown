import styled, { css } from 'styled-components/macro'
import * as icon from 'icons'

export const EditorWindow = styled.div`${({ theme }) => css`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 80%;
  width: 80%;
`}`

export const Header = styled.header`${() => css`
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    background: #18181813;
    content: '';
    height: 1px;
    position: fixed;
    top: 60px;
    width: 90%;
    z-index: 0;
  }
`}`

export const Input = styled.input`
  all: unset;
  background: url(${icon.DocumentActive}) 24px no-repeat;
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
  padding-left: 82px;
  font-size: 2.7rem;
  overflow: hidden;
  font-weight: 700;
`

export const Main = styled.main`
  display:flex;
  justify-content: center;
  height:inherit;
`

export const MarkDownEditor = styled.textarea`
  background: transparent;
  resize: none;
  border: 0;
  width: 50%;
  height: 100%;
  font-size: 2.5rem;
  padding: 22px 30px;

  &:focus{
    outline: none;
  }
`

export const ConvertedMarkDown = styled.article`
  background: transparent;
  word-break: break-all;
  resize: none;
  width: 50%;
  height: 100%;
  font-size: 2.5rem;
  padding: 22px 30px;
  &::before {
    background: #18181826;
    content: '';
    max-width: 1px;
    width: 1px;
    height: 90%;
    position: absolute;
    top: 82px;
    right: 40%;
    z-index: 0;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
  }
`
