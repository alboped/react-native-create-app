import React from 'react';
import { WebView as RNWebView } from 'react-native';

function WebView(props) {
  return (
    <RNWebView
      {...props}
    />
  );
}

export default WebView;
