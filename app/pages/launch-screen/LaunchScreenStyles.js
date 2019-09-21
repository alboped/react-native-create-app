import {Style} from '@/utils';

export default Style.createStyle({
  container: {
    flex: 1,
    absoluteFill: true,
    padding: '100rpx 50rpx 200rpx 16rpx',
    margin: '10rpx 50rpx 200rpx 1rpx',
    borderRadius: '10rpx 20rpx 30rpx 40rpx',
  },
  header: {
    height: '100rpx',
    shadowColor: '#000',
    shadowOffset: {
      width: '100rpx',
      height: 0,
    },
    shadowRadius: '28rpx',
    shadowOpacity: '28rpx',
  },
  body: {
    boxShadow: '10rpx 20rpx 30rpx 0.2 #333',
  },
  foot: {
    boxShadow: '10rpx 20rpx 30rpx #333',
    border: '1rpx solid #333',
  },
});
