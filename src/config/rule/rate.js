import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

const label = '评分';
const name = 'rate';

export default {
  icon: 'icon-rate',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.rate.name'),
      info: '',
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      {
        type: 'radio',
        field: 'size',
        value: 'medium',
        title: '图标尺寸',
        info: t('components.rate.props.sizeInfo'),
        options: [
          { value: 'large', label: 'large' },
          { value: 'medium', label: 'medium' },
          { value: 'small', label: 'small' },
        ]
      },
      {
        type: 'inputNumber',
        field: 'count',
        title: '图标个数',
        value: 5,
        props: {
          min: 1,
        }
      },
      {
        type: 'inputNumber',
        field: 'defaultValue',
        title: '默认已激活图标个数',
        value: 0,
        props: {
          min: 0,
        }
      },
      {
        type: 'switch',
        field: 'readonly',
        title: '只读，交互失效',
        props: {
          size: 'small',
        }
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '是否可清空',
        info: t('components.rate.props.clearableInfo'),
        props: {
          size: 'small',
        }
      },
      {
        type: 'switch',
        field: 'allowHalf',
        title: '允许只激活一半图标',
        props: {
          size: 'small',
        }
      },
      {
        type: 'ColorPicker',
        field: 'color',
        title: '已激活图标颜色',
        props: {
          defaultValue: '#FFCC33',
        }
      }
    ]);
  }
};
