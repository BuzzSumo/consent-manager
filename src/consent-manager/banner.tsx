import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import fontStyles from './font-styles'

const Root = styled<{ backgroundColor: string; textColor: string }, 'div'>('div')`
  ${fontStyles};
  position: relative;
  padding: 8px;
  padding-right: 40px;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  text-align: left;
  font-size: 12px;
  line-height: 1.3;
`

const Content = styled('div')`
  a,
  button {
    display: inline;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;
  }
  z-index: 1000;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 37.5em) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 75em) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    max-width: 80rem;
  }

  @media (min-width: 115.625em) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`

const Heading = styled('h2')`
  font-weight: 600;
  font-size: 33px;
  letter-spacing: -0.03em;
  color: #303138;
  line-height: 33px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-color: rgba(0, 0, 0, 0.07);
`

const Overlay = styled('div')`
  width: 200vw;
  opacity: 0.7;
  position: absolute;
  background: black;
  top: 0;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  left: 0;
  height: 200vh;
`

const AgreeButton = styled('button')`
  background-color: #239edb !important;
  color: #f8f8f8 !important;
  width: auto !important;
  font-size: 0.625rem;
  text-transform: uppercase;
  text-decoration: none !important;
  letter-spacing: 0.07em;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 1.5rem;
  font-style: normal;
  align-items: center;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  cursor: default;
  display: inline-flex;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-feature-settings: 'liga', 'clig';
  font-size: 12px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: common-ligatures;
  font-variant-numeric: normal;
  font-weight: 700;
  height: 32px;
  justify-content: center;
  letter-spacing: 0.03px;
  line-height: 16px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline-color: rgb(248, 248, 248);
  outline-style: none;
  outline-width: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 7px !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
  padding-top: 7px !important;
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: uppercase;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  vertical-align: middle;
  white-space: nowrap;
  width: 73.2812px;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  -webkit-border-image: none;
`

const SettingsButton = styled('button')`
  color: #303138;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 600;
  line-height: 1.5;
  font-style: normal;
`

const ButtonGroup = styled('div')`
  margin-top: 16px;
`

const P = styled('p')`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`

interface Props {
  innerRef: (node: HTMLElement | null) => void
  onAgree: () => void
  onClose: () => void
  onChangePreferences: () => void
  content: React.ReactNode
  subContent: React.ReactNode
  backgroundColor: string
  textColor: string
}

export default class Banner extends PureComponent<Props> {
  static displayName = 'Banner'

  render() {
    const {
      innerRef,
      onAgree,
      onChangePreferences,
      content,
      subContent,
      backgroundColor,
      textColor
    } = this.props

    return (
      <div>
        <Overlay />
        <Root innerRef={innerRef} backgroundColor={backgroundColor} textColor={textColor}>
          <Content>
            <Heading>We value your privacy</Heading>
            <P>{content}</P>
            <ButtonGroup>
              <SettingsButton onClick={onChangePreferences}>{subContent}</SettingsButton>
              <AgreeButton onClick={onAgree}>Yes, I Agree</AgreeButton>
            </ButtonGroup>
          </Content>
        </Root>
      </div>
    )
  }
}
