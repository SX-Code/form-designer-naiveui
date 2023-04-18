import input from './rule/input'
import number from './rule/number'
import radio from './rule/radio';
import checkbox from './rule/checkbox';
import select from './rule/select';
import _switch from './rule/switch';
import time from './rule/time';
import date from './rule/date';
import slider from './rule/slider';
import rate from './rule/rate';
import color from './rule/color';
import cascader from './rule/cascader';
import upload from './rule/upload';
import transfter from './rule/transfter';
import tree from './rule/tree';
import editor from './rule/editor';
import alert from './rule/alert';
import button from './rule/button';
import span from './rule/span';
import divider from './rule/divider';
import row from './rule/row';
import tab from './rule/tab';
import space from './rule/space';

export default function createMenu({ t }) {
  return [
    {
      name: 'main',
      title: t('menu.main'),
      list: [
        input, number, radio, checkbox, select, _switch, time, date, slider, 
        rate, color, cascader, upload, transfter, tree, editor
      ]
    },
    {
      name: 'aide',
      title: t('menu.aide'),
      list: [
        alert, button, span, divider
      ]
    },
    {
      name: 'layout',
      title: t('menu.layout'),
      list: [
        row, tab, space
      ]
    },
  ]
}