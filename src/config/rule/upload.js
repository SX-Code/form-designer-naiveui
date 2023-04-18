import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

const label = '上传';
const name = 'upload';

export default {
  icon: 'icon-upload',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.upload.name'),
      info: '',
      $required: false,
      props: {
        action: '',
        onSuccess(res, file) {
          file.url = res.data.url;
        },
        limit: 1,
      },
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      {
        type: 'input',
        field: 'action',
        title: '请求提交的地址(必填)'
      },
      {
        type: 'Struct',
        field: 'headers',
        title: 'HTTP 请求需要附加的 Headers',
        props: { defaultValue: {} }
      },
      {
        type: 'switch',
        field: 'multiple',
        title: '是否支持多个文件',
        props: {
          size: 'small'
        }
      },
      {
        type: 'Struct',
        field: 'data',
        title: '提交表单需要附加的数据',
        props: {
          defaultValue: {}
        }
      },
      {
        type: 'input',
        field: 'name',
        title: '文件在提交表单中的字段名'
      }, {
        type: 'switch',
        field: 'withCredentials',
        title: '是否携带 Cookie',
        props: {
          size: 'small'
        }
      },
      {
        type: 'input',
        field: 'accept',
        info: t('components.upload.props.acceptInfo'),
        title: '接受的文件类型（thumbnail-mode 模式下此参数无效）'
      }, 
      {
        type: 'switch',
        field: 'defaultUpload',
        title: '选择文件时候是否默认上传',
        value: true,
        props: {
          size: 'small'
        }
      }, 
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用',
        props: {
          size: 'small'
        }
      },
      {
        type: 'inputNumber',
        field: 'max',
        title: '限制上传文件数量',
        value: 1,
        props: { min: 1 },
      },
      {
        type: 'switch',
        field: 'showCancelButton',
        title: '是否显示取消按钮',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showDownloadButton',
        title: '是否显示下载按钮',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showRemoveButton',
        title: '是否显示删除按钮',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showRetryButton',
        title: '是否显示重新上传按钮',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showFileList',
        title: '是否显示文件列表',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showPreviewButton',
        title: '是否允许显示预览按钮',
        info: t('components.upload.props.showPreviewButtonInfo'),
        value: true,
        props: {
          size: 'small'
        }
      },
    ]);
  }
};
