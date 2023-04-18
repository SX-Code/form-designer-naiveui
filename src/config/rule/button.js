import { localeProps } from '../../utils';

const label = '按钮';
const name = 'n-button';

export default {
  icon: 'icon-button',
  label,
  name,
  mask: false,
  rule({ t }) {
    return {
      type: name,
      props: {},
      children: [t('components.n-button.name')],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'input',
        field: 'formCreateChild',
        title: '按钮的内容',
      },
      {
        type: 'select',
        field: 'size',
        title: '按钮的尺寸',
        value: 'medium',
        options: [
          { label: 'large', value: 'large' },
          { label: 'medium', value: 'medium' },
          { label: 'small', value: 'small' },
          { label: 'tiny', value: 'tiny' },
        ]
      },
      {
        type: 'select',
        field: 'tag',
        title: '按钮需要被渲染成什么标签',
        value: 'button',
        options: [
          { label: 'button', value: 'button' },
          { label: 'a', value: 'a' }
        ]
      }, 
      {
        type: 'select',
        field: 'type',
        title: '按钮的类型',
        value: 'default',
        options: [
          { label: 'default', value: 'default' },
          { label: 'tertiary', value: 'tertiary' },
          { label: 'primary', value: 'primary' },
          { label: 'success', value: 'success' },
          { label: 'info', value: 'info' },
          { label: 'warning', value: 'warning' },
          { label: 'error', value: 'error' }
        ]
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用状态',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'secondary',
        title: '是否是次要按钮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'tertiary',
        title: '是否是三级按钮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'quaternary',
        title: '是否是四级按钮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'text',
        title: '是否显示为文本按钮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'dashed',
        title: '按钮边框是否为虚线',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'ghost',
        title: '按钮是否透明',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'round',
        title: '是否圆角按钮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'circle',
        title: '是否圆形按钮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'strong',
        title: '按钮文字是否加粗',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'loading',
        title: '是否加载中状态',
        props: {
          size: 'small'
        }
      },
      {
        type: 'ColorPicker',
        field: 'color',
        title: '按钮颜色',
        props: {
          actions: ['clear']
        }
      },
      {
        type: 'ColorPicker',
        field: 'textColor',
        title: '按钮文字颜色',
        props: {
          actions: ['clear']
        }
      }
    ]);
  }
};
