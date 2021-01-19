// 原生SDK提供的API
import sensors from '../jssdk/sa-sdk-javascript/sensorsdata.es6.js';

// 提供各端一致的公共API

let sa = {
  // 提供扩展性
  instance: sensors,
  // 提供初始化和配置参数
  init: (para)=> {
	para = para || this.para;
	let defaultValue = {
		is_track_single_page: true
	};
	Object.assign(defaultValue,para);
	sensors.init.call(sensors,defaultValue);
  },
  setPara: (para)=> {
	if(typeof para === 'object'){
	  this.para = para;
	}

	  
  },

  // 各端通用的常用API
  getDistinctId: ()=> {
	  return sensors.store.getDistinctId;
  },
  getAnonymousId: ()=> {
	return sensors.quick('getAnonymousId');
  },
  
  register: sensors.registerPage.bind(sensors),
  clearRegister: ()=> {
	 console.log('web 中不支持此方法');
  }
};





export default sa;

