<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="showAlert">showAlert</button>
			<button type="primary" @click="showAlert">trackIAppInstall</button>
			<button type="primary" @click="showAlert">identify</button>
		</view>
	</view>
</template>
<script>	
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
			showAlert() {
				const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
				dcRichAlert.show({
				        position: 'bottom',
				        title: "提示信息",
				        titleColor: '#FF0000',
				        content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
				        contentAlign: 'left',
				        checkBox: {
				            title: '不再提示',
				            isSelected: true
				        },
				        buttons: [{
				                title: '取消'
				            },
				            {
				                title: '否'
				            },
				            {
				                title: '确认',
				                titleColor: '#3F51B5'
				            }
				        ]
				    }, result => {
				        switch (result.type) {
				            case 'button':
				                console.log("callback---button--" + result.index);
				                break;
				            case 'checkBox':
				                console.log("callback---checkBox--" + result.isSelected);
				                break;
				            case 'a':
				                console.log("callback---a--" + JSON.stringify(result));
				                break;
				            case 'backCancel':
				                console.log("callback---backCancel--");
				                break;
				        }
				    });

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
