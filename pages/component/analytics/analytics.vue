<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="track">track</button>
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
	</view>
</template>
<script>
	import sa from '../../../common/js/index.js'
	var testModule = uni.requireNativePlugin("Sensorsdata-UniPlugin-App");
	
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
			// Track
			track() {
				console.log("track");
				sa.track("testEvent", {
					"testKey": "testValue"
				});
			},
			trackAppInstall() {
				console.log("trackAppInstall");
				sa.trackAppInstall({
					"testInstall": "testInstallValue"
				});
			},
			identify() {
				console.log("identify");
				sa.identify("0000-00000000000000-11111-1111");
			},
			login() {
				console.log("login");
				sa.login("newLoginId");
			},
			logout() {
				console.log("logout");
				sa.logout();
			},
			flush() {
				console.log("flush");
				sa.flush();
			},
			
			// Super Properties
			registerSuperProperties() {
				console.log("registerSuperProperties");
				sa.register({
					"superKey1": "superValue1",
					"superKey2": "superValue2"
				});
			},
			unregisterSuperProperty() {
				console.log("unregisterSuperProperty");
				sa.unRegister("superKey2");
			},
			clearSuperProperties() {
				console.log("clearSuperProperties");
				sa.clearRegister();
			},
			
			// Profile_*
			profileSet() {
				console.log("profileSet");
				sa.setProfile({
					"setKey1": "setValue1",
					"setKey2": "setValue2"
				});
			},
			profileSetOnce() {
				console.log("profileSetOnce");
				sa.setOnceProfile({
					"setOnceKey1": "setOnceValue1",
					"setOnceKey2": "setOnceValue2"
				});
			},
			profileIncrement() {
				console.log("profileIncrement");
				sa.incrementProfile({
					"incrementKey1": 123,
					"incrementKey2": 234
				});
			},
			profileAppend() {
				console.log("profileAppend");
				sa.appendProfile("AppendEvent", ["13", "1213"]);
			},
			profileUnset() {
				console.log("profileUnset");
				sa.unsetProfile("setKey2");
			},
			profileDelete() {
				console.log("profileDelete");
				sa.deleteProfile();
			},
			
			// Set Properties
			setServerUrl() {
				console.log("setServerUrl");
				sa.setPara({
					server_url: 'http://newsdktest.datasink.sensorsdata.cn/sa?project=pengyuanyang&token=5a394d2405c147ca',
					show_log: true,
					app_flush_network_policy: 255,
					app_flush_interval: 87654888,
					app_flush_bulkSize: 45677777,
					app_session_interval_time: 44334443,
					app_data_collect: true
				});
			},
			enableLog() {
				console.log("enableLog");
				testModule.enableLog(true);
			},
			setFlushNetworkPolicy() {
				console.log("setFlushNetworkPolicy");
				testModule.setFlushNetworkPolicy(0);
			},
			setFlushInterval() {
				console.log("setFlushInterval");
				testModule.setFlushInterval(123456);
			},
			setFlushBulkSize() {
				console.log("setFlushBulkSize");
				testModule.setFlushBulkSize(3000);
			},
			
			// Get Properties
			getFlushInterval() {
				var result = sa.getFlushInterval();
				console.log("getFlushInterval" + result);
			},
			getFlushBulkSize() {
				var result = sa.getFlushBulkSize();
				console.log("getFlushBulkSize" + result);
			},
			getPresetProperties() {
				var result = sa.getPresetProperties();
				console.log(result);
			},
			getDistinctId() {
				var result = sa.getDistinctId();
				console.log("getDistinctId" + result);
			},
			getAnonymousId() {
				var result = sa.getAnonymousId();
				console.log("getAnonymousId" + result);
			},
			getLoginId() {
				var result = sa.getLoginId();
				console.log("getLoginId" + result);
			},
			
			// Android Only
			setSessionIntervalTime() {
				console.log("setSessionIntervalTime");
				sa.setSessionIntervalTime();
			},
			getSessionIntervalTime() {
				var result = sa.getSessionIntervalTime();
				console.log("getSessionIntervalTime" + result);
			},
			enableDataCollect() {
				console.log("enableDataCollect");
				sa.enableDataCollect();
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
