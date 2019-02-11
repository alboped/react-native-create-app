const { exec } = require('child_process');


const cleanShell = 'xcodebuild clean -project ./ios/rnc_app.xcodeproj -scheme rnc_app -configuration Release';
const archiveShell = 'xcodebuild archive -project ./ios/rnc_app.xcodeproj -scheme rnc_app -archivePath ./ios/archive/rnc_app.xcarchive';
const ipaShell = 'xcodebuild -exportArchive -exportOptionsPlist ./script/ExportOptions.plist -archivePath ./ios/archive/rnc_app.xcarchive -exportPath ./package/ios -allowProvisioningUpdates';
const thirdShell = 'cd ./node_modules/react-native/third-party/glog-0.3.4/ && ../../scripts/ios-configure-glog.sh';

if(process.platform !== 'darwin') {
	console.log('请使用mac系统！');
	process.exit();
}

/**
 * 清理xcode项目
 * @param  {Function} callback 清理完成后的回调
 * @return {undefined}
 */
function cleanXcode(callback) {
	console.log('🎲 开始清理xcode... 🚀');
	exec(cleanShell, function(err, stdout, stderr){
		if(err) {
			console.error(err);
		} else {
			console.log('xcode 清理完成！！');
			callback();
		}
	});
}

/**
 * 编译archive
 * @return {undefined}
 */
function buildArchive(callback) {
	console.log('🎲 开始编译archive... 🚀');
	exec(archiveShell, {
		maxBuffer: 1024 * 100000
	}, function(err, stdout, stderr){
		if(err) {
			console.error(err);
			const isThirdErr = err.toString().includes('node_modules/react-native/third-party/');
			if(isThirdErr) {
				thirdErr(callback);
			}
		} else {
			console.log('编译archive完成！👌');
			callback();
		}
	});
}

/**
 * 编译archive
 * @return {undefined}
 */
function thirdErr(callback) {
	console.log('🎲 third-party异常，开始处理该异常... 🚀');
	exec(thirdShell, {
		maxBuffer: 1024 * 10000
	}, function(err, stdout, stderr){
		if(err) {
			console.error(err);
		} else {
			console.log('third-party异常处理完成！👌');
			callback();
		}
	});
}

/**
 * 打包ipa文件
 * @return {undefined}
 */
function buildIpa() {
	console.log('🎲 开始打包ipa文件... 🚀');
	exec(ipaShell, function(err, stdout, stderr){
		if(err) {
			console.error(err);
		} else {
			console.log('🍀 打包ipa文件完成！🍀');
		}
	});
}

// cleanXcode(function() {
	buildArchive(buildIpa);
// });