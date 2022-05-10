import React, {FunctionComponent} from 'react';
import { Link } from 'react-router-dom';

import Icons from '../Icons/index';

type Props = {
  title?: string,
  onClick?: () => void;
}

export const GameButton:FunctionComponent<Props> = (props: Props) => (

  <button className="game-button click-cursor undefined" onClick={props.onClick}>
    <div className="title">{props.title}</div>
    <img src="public/assets/bubble-arrow.c34d2c3a.png" alt=""/>
  </button>
)

