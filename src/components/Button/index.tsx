import React, {FunctionComponent} from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title?: string,
  onClick?: () => void;
}

export const GameButton:FunctionComponent<Props> = (props: Props) => (
  <button className="game-button click-cursor undefined" onClick={props.onClick}>
    <div className="title">{props.title}</div>
    <img src={ `${process.env.PUBLIC_URL}/assets/bubble-arrow.png`} alt=""/>
  </button>
)
