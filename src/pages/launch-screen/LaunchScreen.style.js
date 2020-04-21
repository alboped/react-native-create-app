import {Style} from '@utils';

export default Style.create({
  container: {
    flex: 1,
    padding: '100rpx 50rpx 200rpx 50rpx',
  },
  header: {
    width: '200rpx',
    height: '100rpx',
    margin: '10rpx 50rpx 200rpx',
    boxShadow: '100rpx 200rpx 300rpx 0.8 #333',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foot: {
    boxShadow: '10rpx 20rpx 30rpx #333',
    border: '1rpx solid #333',
  },
  box: {
    width: '200rpx',
    height: '200rpx',
    borderRadius: '10rpx 20rpx 30rpx 40rpx',
    boxShadow: '50rpx 50rpx 40rpx 0.9 #333',
    backgroundColor: '#eee',
  },
  text: {
    textShadow: '10rpx 20rpx 30rpx red',
  },
});
