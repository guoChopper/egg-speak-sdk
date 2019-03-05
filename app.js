'use strict'

const assert=require('assert');
const ApiSpeechClient=require('baidu-aip-sdk').speech;

module.exports=app=>{
    const {appId,apiKey,secretKey}=app.config.baiduSpeak||{};
    assert(appId&&apiKey&&secretKey,'[egg-speak-sdk] must set `appId` and `apiKey` and `secretKey` in config files.')
    app.coreLogger.info('[egg-speak] begin');
     //新建一个对象
    app.baiduSpeak=new ApiSpeechClient(appId,apiKey,secretKey)
};