import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';
import { Info, Warning, Err } from '@recipher/icons';

const COLORS = {
  info: '#666'
, warning: '#bf9003'
, error: '#db2828'
};

const ICONS = {
  info: Info
, warning: Warning
, error: Err
};

@Radium
export default class FormInput extends Component {
  render() {
    const { children, name, kind = 'error', style } = this.props;

    const styles = {
      base: {
        paddingLeft: 15
      , opacity: 0
      , fontSize: '0.95em'
      , letterSpacing: '0.25px'
      , transition: 'all 250ms ease-in'
      , color: COLORS[kind]
      }
    , active: {
        opacity: 1
      }
    };

    const Icon = ICONS[kind];

    return (
      <span style={[ styles.base, children && styles.active, style ]} data-test={name}>
        <Icon colour={color(COLORS[kind]).darken(0.2).hexString()} style={{marginTop: -4, marginRight: 5}} />
        {children}
      </span>
    );
  }
};