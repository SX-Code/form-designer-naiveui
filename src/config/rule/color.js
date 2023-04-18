import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

const label = '颜色选择器';
const name = 'colorPicker';

export default {
  icon: 'icon-color',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.colorPicker.name'),
      info: '',
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showAlpha',
        title: '是否可调节 alpha 通道',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'ColorPicker',
        field: 'defaultValue',
        title: '默认的颜色值',
        props: {
          defaultValue: '#000000'
        }
      },
      {
        type: 'select',
        field: 'actions',
        title: '显示按钮',
        props: {
          multiple: true
        },
        options: [
          { label: t('components.colorPicker.props.confirm'), value: 'confirm' },
          { label: t('components.colorPicker.props.clear'), value: 'clear' },
        ]
      },
      {
        type: 'select',
        field: 'modes',
        title: '颜色选择器支持颜色的格式',
        info: t('components.colorPicker.props.modesInfo'),
        value: ['rgb','hex','hsl'],
        props: {
          multiple: true,
        },
        options: [
          { label: 'hsl', value: 'hsl' },
          { label: 'hsv', value: 'hsv' },
          { label: 'hex', value: 'hex' },
          { label: 'rgb', value: "rgb", disabled: true }
        ]
      }
    ]);
  }
};
