/**
 * uni-app sdk 公共方法
 * 需要做类型检查，每个方法必须返回 true false，用来作为参数检查的结果
 */

let sa = {
  // 提供扩展性
  instance: null,
  // 提供初始化和配置参数
  init: ()=> {
	  console.log('common-api,当前平台不支持此方法');
  },
  setPara: ()=> {
	  /*
	  server_url:'setServerUrl'   字符串
	  show_log:'enableLog' 布尔
	  
	  app_flush_network_policy:'setFlushNetworkPolicy'数字
	  app_flush_interval:'setFlushInterval'数字
	  app_flush_bulkSize:'setFlushBulkSize'数字
	  app_session_interval_time:'setSessionIntervalTime'数字
	  app_data_collect:'enableDataCollect'布尔
	  
	  mp_auto_track: object
	  */
	  	  console.log('common-api,当前平台不支持此方法');
  },
  // app专用的方法
  getFlushInterval: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  getFlushBulkSize: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  getSessionIntervalTime: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  trackAppInstall: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  flush: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  // 各端通用的常用API
  getDistinctId: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  getAnonymousId: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  
  register: (para)=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  unRegister: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  clearRegister: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  
  //各端通用的标准API
  identify:()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  login: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  logout: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  track: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  setProfile: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  setOnceProfile: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },  
  incrementProfile: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  appendProfile: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  unsetProfile: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
  deleteProfile: ()=> {
	  	  console.log('common-api,当前平台不支持此方法');
  },
	
};

export default sa;