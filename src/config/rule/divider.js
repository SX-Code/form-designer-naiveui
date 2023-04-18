import { localeProps } from '../../utils';

const label = '分割线';
const name = 'n-divider';

export default {
  icon: 'icon-divider',
  label,
  name,
  rule() {
    return {
      type: name,
      props: {},
      wrap: { show: false },
      native: false,
      children: [''],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'switch',
        field: 'vertical',
        title: '是否垂直分隔',
        props: {
          size: 'small'
        }
      },
      {
        type: 'input',
        field: 'formCreateChild',
        title: '设置分割线文案',
      },
      {
        type: 'select',
        field: 'titlePlacement',
        title: '标题的位置',
        value: 'center',
        options: [
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
          { label: 'center', value: 'center' }
        ]
      }
    ]);
  }
};
