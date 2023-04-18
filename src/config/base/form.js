export default function form({ t }) {
  return [
    {
      type: 'radio',
      field: 'labelPlacement',
      value: 'left',
      title: t('form.labelPlacement'),
      options: [
        { value: 'left', label: 'left' },
        { value: 'top', label: 'top' },
      ]
    },
    {
      type: 'radio',
      field: 'requireMarkPlacement',
      value: 'right',
      title: t('form.placementRequireMark'),
      options: [
        { value: 'left', label: 'left' },
        { value: 'right', label: 'right' },
        { value: 'right-hanging', label: 'right-hanging' },
      ]
    },
    {
      type: 'radio',
      field: 'showRequireMark',
      value: undefined,
      title: t('form.showRequireMark'),
      info: t('form.showRequireMarkInfo'),
      options: [
        { value: false, label: t('form.hideRequireMarkLabel') },
      ]
    },
    {
      type: 'select',
      field: 'size',
      value: 'small',
      title: t('form.size'),
      options: [
        { value: 'large', label: 'large' },
        { value: 'medium', label: 'medium' },
        { value: 'small', label: 'small' },
        { value: 'tiny', label: 'tiny' },
      ]
    },
    {
      type: 'input',
      field: 'labelWidth',
      value: 'auto',
      title: t('form.labelWidth'),
    },
    {
      type: 'switch',
      field: 'show-feedback',
      value: true,
      title: t('form.showFeedback'),
      props: {
        size: 'small',
      }
    },
    {
      type: 'switch',
      field: 'formCreateSubmitBtn',
      value: true,
      title: t('form.submitBtn'),
      props: {
        size: 'small',
      }
    },
    {
      type: 'switch',
      field: 'formCreateResetBtn',
      value: false,
      title: t('form.resetBtn'),
      props: {
        size: 'small',
      }
    },
  ];
}
