import { localeProps } from '../../utils';
import tabname from '../../utils/tabname';

const label = '标签页';
const name = 'tab';

export default {
  icon: 'icon-tab',
  label,
  name,
  children: 'tab-pane',
  childrenLen: 2,
  mask: false,
  rule({ t }) {
    return {
      type: 'n-tabs',
      style: 'width:100%;',
      props: {
        type: 'line',
        defaultValue: String(tabname()),
      },
      children: []
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'input',
        field: 'defaultValue',
        title: '默认展示标签页的标识',
        info: t('components.tab.props.defaultValueInfo')
      },
      {
        type: 'radio',
        field: 'trigger',
        value: 'click',
        title: '触发 tab 的方式',
        options: [
          { value: 'click', label: 'click' },
          { value: 'hover', label: 'hover' },
        ]
      },
      {
        type: 'radio',
        field: 'size',
        value: 'medium',
        title: '标签页的尺寸',
        options: [
          { value: 'small', label: 'small' },
          { value: 'medium', label: 'medium' },
          { value: 'large', label: 'large' },
        ]
      },
      {
        type: 'select',
        field: 'type',
        title: '标签类型',
        value: 'bar',
        options: [
          { label: 'bar', value: 'bar' },
          { label: 'line', value: 'line' },
          { label: 'card', value: 'card' },
          { label: 'segment', value: 'segment' }
        ],
        control: [
          {
            handle(val) {
              return val === 'card';
            },
            rule: [{
              type: 'switch',
              field: 'closable',
              title: '标签是否可关闭',
              info: t('components.tab.props.closableInfo')
            }]
          },
          {
            handle(val) {
              return val === 'line' || val === 'bar';
            },
            rule: [{
              type: 'select',
              field: 'justifyContent',
              title: 'flex 布局下主轴的排列方式',
              info: t('components.tab.props.justifyContentInfo'),
              props: {
                clearable: true,
              },
              options: [
                { label: 'end', value: 'end' },
                { label: 'start', value: 'start' },
                { label: 'center', value: 'center' },
                { label: 'space-evenly', value: 'space-evenly' },
                { label: 'space-around', value: 'space-around' },
                { label: 'space-between', value: 'space-between' },
              ],
            }]
          }
        ]
      },
      {
        type: 'switch',
        field: 'animated',
        title: '标签页切换是否使用动画',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'inputNumber',
        field: 'barWidth',
        title: '标签条的宽度',
        props: {
          min: 0,
          clearable: true,
        }
      },
      {
        type: 'inputNumber',
        field: 'tabsPadding',
        title: '全部标签最左和最右的 padding',
        value: 0,
        props: {
          min: 0,
        }
      },
    ]);
  }
};
