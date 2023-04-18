import input from './input';
import number from './number';
import radio from './radio';
import checkbox from './checkbox';
import select from './select';
import _switch from './switch';
import time from './time';
import date from './date';
import slider from './slider';
import rate from './rate';
import color from './color';
import cascader from './cascader';
import upload from './upload';
import transfter from './transfter';
import tree from './tree';
import editor from './editor';
import alert from './alert';
import button from './button';
import span from './span';
import divider from './divider';
import row from './row';
import col from './col';
import tab from './tab';
import tabPane from './tabPane';
import space from './space';

const ruleList = {
  [input.name]: input,
  [number.name]: number,
  [radio.name]: radio,
  [checkbox.name]: checkbox,
  [select.name]: select,
  [_switch.name]: _switch,
  [time.name]: time,
  [date.name]: date,
  [slider.name]: slider,
  [rate.name]: rate,
  [color.name]: color,
  [cascader.name]: cascader,
  [upload.name]: upload,
  [transfter.name]: transfter,
  [tree.name]: tree,
  [editor.name]: editor,
  [alert.name]: alert,
  [button.name]: button,
  [span.name]: span,
  [divider.name]: divider,
  [row.name]: row,
  [col.name]: col,
  [tab.name]: tab,
  [tabPane.name]: tabPane,
  [space.name]: space
};

export default ruleList;