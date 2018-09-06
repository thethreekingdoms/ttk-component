export default {
  documents: {
    'quick-start': require('./quick-start'),
    'i18n': require('./i18n'),
    // 'custom-theme': require('./custom-theme')
  },
  components: {
    'Basic': {
      'layout': require('./layout'),
      'color': require('./color'),
      'typography': require('./typography'),
      'icon': require('./icon'),
      'button': require('./button')
    },
    'Form': {
      'AutoComplete': require('./auto-complete'),
      'radio': require('./radio'),
      'checkbox': require('./checkbox'),
      'input': require('./input'),
      'input-number': require('./input-number'),
      'select': require('./select'),
      'cascader': require('./cascader'),
      'switch': require('./switch'),
      'slider': require('./slider'),
      'timePicker': require('./time-picker'),
      'date-picker': require('./date-picker'),
      'datetime-picker': require('./datetime-picker'),
      'upload': require('./upload'),
      'rate': require('./rate'),
      'color-picker': require('./color-picker'),
      'transfer': require('./transfer'),
      'form': require('./form'),
      'attachment': require('./attachment')
    },
    'Data': {
      'table': require('./table'),
      'tag': require('./tag'),
      'progress': require('./progress'),
      'timeline': require('./timeline'),
      'tree': require('./tree'),
      'pagination': require('./pagination'),
      'badge': require('./badge'),
      'list': require('./list')
    },
    'Notice': {
      'alert': require('./alert'),
      'loading': require('./loading'),
      'message': require('./message'),
      'Modal': require('./modal'),
      'notification': require('./notification')
    },
    'Nav': {
      'menu': require('./menu'),
      'tabs': require('./tabs'),
      'affix': require('./affix'),
      'breadcrumb': require('./breadcrumb'),
      'dropdown': require('./dropdown'),
      'steps': require('./steps')
    },
    'Charts': {
      'echarts': require('./echarts')
    },
    'Composite': {
      'alert1': require('./alert'),
      'loading1': require('./loading'),
      'messag1e': require('./message'),
      'notification1': require('./notification'),
      'activeLabelSelect': require('./activelabelselect')
    },
    'Others': {
      'Anchor': require('./anchor'),
      'BackTop': require('./BackTop'),
      'dialog': require('./dialog'),
      'tooltip': require('./tooltip'),
      'popover': require('./popover'),
      'card': require('./card'),
      'carousel': require('./carousel'),
      'collapse': require('./collapse'),
      'spin': require('./spin')
    }
  }
}
