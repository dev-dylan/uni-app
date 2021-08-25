<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="testLog"> 测试打印功能</button>
			<button type="primary" @click="track">track</button>
			<button type="primary" @click="trackViewScreen">trackViewScreen</button>
			<button type="primary" @click="trackAppInstall">trackIAppInstall</button>
			<button type="primary" @click="identify">identify</button>
			<button type="primary" @click="login">login</button>
			<button type="primary" @click="logout">logout</button>
			<button type="primary" @click="flush">flush</button>
			<button type="primary" @click="registerSuperProperties">registerSuperProperties</button>
			<button type="primary" @click="unregisterSuperProperty">unregisterSuperProperty</button>
			<button type="primary" @click="clearSuperProperties">clearSuperProperties</button>
			<button type="primary" @click="profileSet">profileSet</button>
			<button type="primary" @click="profileSetOnce">profileSetOnce</button>
			<button type="primary" @click="profileIncrement">profileIncrement</button>
			<button type="primary" @click="profileAppend">profileAppend</button>
			<button type="primary" @click="profileUnset">profileUnset</button>
			<button type="primary" @click="profileDelete">profileDelete</button>
			<button type="primary" @click="setServerUrl">setServerUrl</button>
			<button type="primary" @click="enableLog">enableLog</button>
			<button type="primary" @click="setFlushNetworkPolicy">setFlushNetworkPolicy</button>
			<button type="primary" @click="setFlushInterval">setFlushInterval</button>
			<button type="primary" @click="setFlushBulkSize">setFlushBulkSize</button>
			<button type="primary" @click="getFlushInterval">getFlushInterval</button>
			<button type="primary" @click="getFlushBulkSize">getFlushBulkSize</button>
			<button type="primary" @click="getPresetProperties">getPresetProperties</button>
			<button type="primary" @click="getDistinctId">getDistinctId</button>
			<button type="primary" @click="getAnonymousId">getAnonymousId</button>
			<button type="primary" @click="getLoginId">getLoginId</button>
			<button type="primary" @click="setSessionIntervalTime">setSessionIntervalTime</button>
			<button type="primary" @click="getSessionIntervalTime">getSessionIntervalTime</button>
			<button type="primary" @click="enableDataCollect">enableDataCollect</button>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="jsSetPara">JS  设置参数</button>
			<button type="primary" @click="jsTrack">JS 桥自定义事件</button>
			<button type="primary" @click="jsLogin">JS 桥登录事件</button>
			<button type="primary" @click="jsLogout">JS 桥退出</button>
			<button type="primary" @click="jsIdentify">JS 桥 identify</button>
			<button type="primary" @click="jsTrackAppInstall">JS 桥 trackAppInstall</button>
			<button type="primary" @click="jsRegister">JS 桥 register</button>
			<button type="primary" @click="jsUnRegister">JS 桥 unRegister</button>
			<button type="primary" @click="jsSetProfile">JS 桥 setProfile</button>
			<button type="primary" @click="jsSetOnceProfile">JS 桥 setOnceProfile</button>
			<button type="primary" @click="jsIncrementProfile">JS 桥 incrementProfile</button>
			<button type="primary" @click="jsAppendProfile">JS 桥 appendProfile</button>
			<button type="primary" @click="jsUnsetProfile">JS 桥 unsetProfile</button>
			<button type="primary" @click="jsDeleteProfile">JS 桥 deleteProfile</button>	
			<button type="primary" @click="jsGetDistinctId">JS 桥获取 DistinctId</button>
			<button type="primary" @click="jsGetAnonymousId">JS 桥 GetAnonymousId</button>
			<button type="primary" @click="jsGetAppFlushInterval">JS 桥 getAppFlushInterval</button>
			<button type="primary" @click="jsGetAppFlushBulkSize">JS 桥 getAppFlushBulkSize</button>
			<button type="primary" @click="jsGetAppSessionIntervalTime">JS 桥 getAppSessionIntervalTime</button>
			<button type="primary" @click="jsAppFlush">JS 桥 appFlush</button>
		</view>
	</view>
</template>
<script>
	import sensors from '../../../common/js/index.js'
	var nativeModule = uni.requireNativePlugin("Sensorsdata-UniPlugin-App");
	
	export default {
		data() {
			return {
				title: 'button',
				loading: false
			}
		},
		onLoad() {
			this._timer = null;
		},
		onShow() {
			this.clearTimer();
			this._timer = setTimeout(() => {
				this.loading = true;
			}, 300)
		},
		onUnload() {
			this.clearTimer();
			this.loading = false;
		},
		methods: {
			// js 桥
			jsSetPara() {
				console.log("jsSetPara");
				sensors.setPara({
					server_url:"http://newsdktest.datasink.sensorsdata.cn/sa?project=pengyuanyang&token=5a394d2405c147ca",       
					show_log:true,  
					name:'sensors',           
					app_flush_interval:2000,         
					app_flush_bulkSize:1231,            
					app_flush_n8twork_policy:28,      
					app_session_interval_time:20000,  
					app_data_collect:true             
				});			
			},
			jsTrack() {
				console.log("jsTrack");
				sensors.track('event1231', {"testInstall": "testInstallValue"});
			},
			jsLogin() {
				console.log("login");
				sensors.login("asdas1123");
				sensors.appFlush();
				sensors.login("asdas1123");
				sensors.appFlush();
			},
			jsIdentify() {
				console.log("identify");
				sensors.identify("0000-00000000000000-11111-1111");
			},
			jsLogout() {
				console.log("logout");
				sensors.logout();
			},		
			jsTrackAppInstall() {
				console.log("jsTrackAppInstall");
				sensors.trackAppInstall({"installKey": "installValue"});
			},				
			jsRegister() {
				console.log("jsRegister");
				sensors.register({
					"registerKey1": "superValue1",
					"registerKey2": "superValue2"
				});
			},
			jsUnRegister() {
				console.log("jsUnRegister");
				sensors.unRegister("registerKey2");
			},
			jsClearRegister() {
				console.log("jsClearRegister");
				sensors.clearRegister();
			},
			jsSetProfile() {
				console.log("jsSetProfile");
				sensors.setProfile({
					"setKey1": "setValue1",
					"setKey2": "setValue2"
				});
			},
			jsSetOnceProfile() {
				console.log("jsSetOnceProfile");
				sensors.setOnceProfile({
					"setOnceKey1": "setOnceValue1",
					"setOnceKey2": "setOnceValue2"
				});
			},
			jsIncrementProfile() {
				console.log("jsIncrementProfile");
				sensors.incrementProfile({
					"incrementKey1": 123,
					"incrementKey2": 234
				});
			},
			jsAppendProfile() {
				console.log("jsAppendProfile");
				sensors.appendProfile({"AppendEventKey1": ["1231", "1231"], "ket2": "", ker:["123", "1231", "123"], kere:["123", "123we1", "123"]});
			},
			jsUnsetProfile() {
				console.log("jsUnsetProfile");
				sensors.unsetProfile("setKey2");
			},
			jsDeleteProfile() {
				console.log("jsDeleteProfile");
				sensors.deleteProfile();
			},
			jsGetAppFlushInterval() {
				var result = sensors.getAppFlushInterval();
				console.log("jsGetAppFlushInterval" + result);
			},
			jsGetAppFlushBulkSize() {
				var result = sensors.getAppFlushBulkSize();
				console.log("getAppFlushBulkSize" + result);
			},
			jsGetAppSessionIntervalTime() {
				var result = sensors.getAppSessionIntervalTime();
				console.log("jsGetAppSessionIntervalTime" + result);
			},
			jsGetDistinctId() {
				var result = sensors.getDistinctID();
				console.log("getDistinctId" + result);
			},
			jsGetAnonymousId() {
				var result = sensors.getAnonymousID();
				console.log("getAnonymousId" + result);
			},
			jsAppFlush() {
				console.log("jsAppFlush");
				sensors.appFlush();
			},
			// 原生插件
			testLog() {
				console.log("track");
				var logHermit = uni.requireNativePlugin("Sensorsdata-LogHermit");
				logHermit.testConsoleLog(" 这是一段测试的话术 ");
			},
			trackViewScreen() {
				console.log("trackViewScreen");
				nativeModule.trackViewScreen("eve131", {
					"testKey": "testValue",
					"nullKey": new Date()
				});
			},
			track() {
				console.log("track");
				nativeModule.track("eve131", {
					"testKey": "testValue",
					"nullKey": new Date()
				});
			},
			trackAppInstall() {
				console.log("trackAppInstall");
				nativeModule.trackAppInstall({
					"testInstall": null
				});
			},
			identify() {
				console.log("identify");
				nativeModule.identify(null);
			},
			login() {
				console.log("login");
				nativeModule.login("newLoginId");
				nativeModule.flush();
				nativeModule.login("newLoginId");
				nativeModule.flush();
			},
			logout() {
				console.log("logout");
				nativeModule.logout();
			},
			flush() {
				console.log("flush");
				nativeModule.flush();
			},

			// Super Properties
			registerSuperProperties() {
				console.log("registerSuperProperties");
				nativeModule.registerSuperProperties({"111Key":"sdfsdvalue"});
			},
			unregisterSuperProperty() {
				console.log("unregisterSuperProperty");
				nativeModule.unregisterSuperProperty("superKey2");
			},
			clearSuperProperties() {
				console.log("clearSuperProperties");
				nativeModule.clearSuperProperties();
			},
			
			// Profile_*
			profileSet() {
				console.log("profileSet");
				nativeModule.profileSet("123131");
			},
			profileSetOnce() {
				console.log("profileSetOnce");
				nativeModule.profileSetOnce({
					"setOnceKey1": "setOnceValue1",
					"setOnceKey2": "setOnceValue2"
				});
			},
			profileIncrement() {
				console.log("profileIncrement");
				nativeModule.profileIncrement({
					"incrementKey1": 123,
					"incrementKey2": 234
				});
			},
			profileAppend() {
				console.log("profileAppend");
				nativeModule.profileAppend({"AppendEventKey1": ["1231", "1231"], "ket2": "", ker:["123", "1231", "123"], kere:["123", "123we1", "123"]});
			},
			profileUnset() {
				console.log("profileUnset");
				nativeModule.profileUnset("setKey2");
			},
			profileDelete() {
				console.log("profileDelete");
				nativeModule.profileDelete();
			},
			
			// Set Properties
			setServerUrl() {
				console.log("setServerUrl");
				nativeModule.setServerUrl('http://newsdktest.datasink.sensorsdata.cn/sa?project=pengyuanyang&token=5a394d2405c147ca')
			},
			enableLog() {
				console.log("enableLog");
				nativeModule.enableLog(true);
			},
			setFlushNetworkPolicy() {
				console.log("setFlushNetworkPolicy");
				nativeModule.setFlushNetworkPolicy('abc');
			},
			setFlushInterval() {
				console.log("setFlushInterval");
				nativeModule.setFlushInterval(null);
			},
			setFlushBulkSize() {
				console.log("setFlushBulkSize");
				nativeModule.setFlushBulkSize(null);
			},
			getFlushInterval() {
				var result = nativeModule.getFlushInterval();
				console.log("getFlushInterval" + result);
			},
			getFlushBulkSize() {
				var result = nativeModule.getFlushBulkSize();
				uni.showToast({
					title: result.toString()
				});
				console.log("getFlushBulkSize" + result);
			},
			getPresetProperties() {
				var result = nativeModule.getPresetProperties();
				uni.showToast({
					title: result["$os"]
				})
				console.log(result);
			},
			getDistinctId() {
				var result = nativeModule.getDistinctID();   
				console.log("getDistinctId" + result);
			},
			getAnonymousId() {
				var result = nativeModule.getAnonymousID();
				console.log("getAnonymousId" + result);
			},
			getLoginId() {
				var result = nativeModule.getLoginID();
				console.log("getLoginId" + result);
			},
			// Android Only
			setSessionIntervalTime() {
				console.log("setSessionIntervalTime");
				nativeModule.setSessionIntervalTime(1234);
			},
			getSessionIntervalTime() {
				var result = nativeModule.getSessionIntervalTime();
				console.log("getSessionIntervalTime" + result);
			},
			enableDataCollect() {
				console.log("enableDataCollect");
				nativeModule.enableDataCollect();
			},
			openTypeError(error) {
				console.error('open-type error:', error);
			},
			clearTimer() {
				if (this._timer != null) {
					clearTimeout(this._timer);
				}
			}
		}
	}
</script>

<style>
	button {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.button-sp-area {
		margin: 0 auto;
		width: 60%;
	}

	.mini-btn {
		margin-right: 10rpx;
	}
</style>
