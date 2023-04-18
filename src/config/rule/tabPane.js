import { localeProps } from '../../utils';
import tabname from '../../utils/tabname';

const label = '标签页';
const name = 'tab-pane';

export default {
  label,
  name,
  inside: true,
  drag: true,
  dragBtn: false,
  mask: false,
  rule({ t }) {
    return {
      type: 'n-tab-pane',
      props: {
        tab: t('components.tab.name'),
        name: String(tabname()),
      },
      children: []
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'input',
        field: 'tab',
        title: '选项卡标题'
      },
      {
        type: 'switch',
        field: 'closable',
        title: '是否允许关闭标签',
        info: t('components.tab-pane.props.closableInfo'),
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      },
      {
        type: 'input',
        field: 'name',
        title: '标签页标识',
        info: t('components.tab-pane.props.nameInfo')
      },
      {
        type: 'select',
        field: 'displayDirective',
        title: '选择性渲染使用的指令',
        value: 'if',
        options: [
          { label: t('components.tab-pane.props.if'), value: 'if' },
          { label: t('components.tab-pane.props.show'), value: 'show' },
          { label: t('components.tab-pane.props.showLazy'), value: 'show:lazy' },
        ]
      }
    ]);
  }
};
