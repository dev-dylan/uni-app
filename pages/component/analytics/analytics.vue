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
			track() {
				console.log("track");
				testModule.track("testEvent", {
					"testKey": "testValue"
				});
			},
			trackAppInstall() {
				console.log("trackAppInstall");
				testModule.trackAppInstall({
					"testInstall": "testInstallValue"
				});
			},
			identify() {
				console.log("identify");
				testModule.identify("0000-00000000000000-11111-1111");
			},
			login() {
				console.log("login");
				testModule.login("newLoginId");
			},
			logout() {
				console.log("logout");
				testModule.logout();
			},
			flush() {
				console.log("flush");
				testModule.flush();
			},
			registerSuperProperties() {
				console.log("registerSuperProperties");
				testModule.registerSuperProperties({
					"superKey1": "superValue1",
					"superKey2": "superValue2"
				});
			},
			unregisterSuperProperty() {
				console.log("unregisterSuperProperty");
				testModule.unregisterSuperProperty("superKey2");
			},
			clearSuperProperties() {
				console.log("clearSuperProperties");
				testModule.clearSuperProperties();
			},
			profileSet() {
				console.log("profileSet");
				testModule.profileSet({
					"setKey1": "setValue1",
					"setKey2": "setValue2"
				});
			},
			profileSetOnce() {
				console.log("profileSetOnce");
				testModule.profileSetOnce({
					"setOnceKey1": "setOnceValue1",
					"setOnceKey2": "setOnceValue2"
				});
			},
			profileIncrement() {
				console.log("profileIncrement");
				testModule.profileIncrement({
					"incrementKey1": 123,
					"incrementKey2": 234
				});
			},
			profileAppend() {
				console.log("profileAppend");
				testModule.profileAppend("AppendEvent", ["13", "1213"]);
			},
			profileUnset() {
				console.log("profileUnset");
				testModule.profileUnset("setKey2");
			},
			profileDelete() {
				console.log("profileDelete");
				testModule.profileDelete();
			},
			setServerUrl() {
				console.log("setServerUrl");
				testModule.setServerUrl("http://newsdktest.datasink.sensorsdata.cn/sa?project=pengyuanyang&token=5a394d2405c147ca");
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
			getFlushInterval() {
				var result = testModule.getFlushInterval();
				console.log("getFlushInterval" + result);
			},
			getFlushBulkSize() {
				var result = testModule.getFlushBulkSize();
				console.log("getFlushBulkSize" + result);
			},
			getPresetProperties() {
				var result = testModule.getPresetProperties();
				console.log(result);
			},
			getDistinctId() {
				var result = testModule.getDistinctId();
				console.log("getDistinctId" + result);
			},
			getAnonymousId() {
				var result = testModule.getAnonymousId();
				console.log("getAnonymousId" + result);
			},
			getLoginId() {
				var result = testModule.getLoginId();
				console.log("getLoginId" + result);
			},
			setSessionIntervalTime() {
				console.log("setSessionIntervalTime");
				testModule.setSessionIntervalTime();
			},
			getSessionIntervalTime() {
				var result = testModule.getSessionIntervalTime();
				console.log("getSessionIntervalTime" + result);
			},
			enableDataCollect() {
				console.log("enableDataCollect");
				testModule.enableDataCollect();
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
