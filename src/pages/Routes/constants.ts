export const HTTP_METHOD_OPTION_LIST = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'];

export const FORM_ITEM_LAYOUT = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

export const DEFAULT_STEP_1_DATA: RouteModule.Step1Data = {
  name: '',
  protocols: ['HTTP', 'HTTPS'],
  hosts: [],
  paths: [],
  httpMethods: [],
  advancedMatchingRules: [],
};

export const DEFAULT_STEP_2_DATA: RouteModule.Step2Data = {
  backendProtocol: 'originalRequest',
  backendAddressList: [{ host: '', port: 0, weight: 0 }],
  upstream_header: [],
  timeout: {
    connect: 30000,
    send: 30000,
    read: 30000,
  },
};

export const DEFAULT_STEP_3_DATA: RouteModule.Step3Data = {
  plugins: {
    'limit-count': {
      count: 2,
      time_window: 60,
      rejected_code: 503,
      key: 'remote_addr',
    },
  },
};