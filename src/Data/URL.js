/**
 * @description:接口地址配置
 * @author：xingwu.chen@partner.midea.com
 * @update:2017-08-16
 * @version
 */
 const URL = {
    //本地开发的路径配置
    deBug: {
        tokenName:"mideatest_sso_token",
        testBaseUrl:'http://10.16.64.77/SN_InterFace/page/system/Login',  
        GITbaseUrl:'http://10.24.64.224:80/SN_InterFace_Midea/page/task/json', //海外开发 
        CNbaseUrl: 'http://10.24.64.224:80/SN_InterFace_Midea/page/task/json',//国内开发
        headerUrl:"http://newimtest.midea.com:8888/muc-api/api/emp/getUserHeadPhoto",//工程师头像
        getPdfUrl:'https://newimtest.midea.com/mas-api/proxy', //获取pdf文件
        resolveDocUrl: "http://10.24.64.224:80/SN_InterFace_Midea/attach",//获取文档路径（本项目包括图片）
        GITResolveDocUrl:"http://10.24.64.224:80/SN_InterFace_Midea/attach",//获取文档路径（本项目包括图片）
        appKey:'e21c13e0-b57a-49f1-985b-01af30232e1a', //美信appkey
        sourceId:"e21c13e0-b57a-49f1-985b-88888888888" // 头像来源ID
    },
      //测试服务器环境的路径配置
    serviceTest: {
        tokenName:"mideatest_sso_token",
        // baseUrl: 'http://10.24.64.230:8888/SN_InterFace_Midea/page/task/json',//项目基本请求地址
        GITbaseUrl:'https://newimtest.midea.com/mas-api/restful/mxGIT5000Common', //配置mas后调用地址海外测试 
        CNbaseUrl:'https://newimtest.midea.com/mas-api/restful/mxIT5000Common',//配置mas后调用地址国内测试
        //CNbaseUrl:'http://itsmtest.midea.com:8888/SN_InterFace_Midea/page/task/json',//国内测试
        //GITbaseUrl:'http://10.16.85.39:8888/SN_InterFace_Midea/page/task/json',//海外测试
        //http://gitsmtest.midea.com:8888/SN_InterFace_Midea/ //海外域名
        headerUrl:"http://newimtest.midea.com:8888/muc-api/api/emp/getUserHeadPhoto",//工程师头像
        getPdfUrl:'https://newimtest.midea.com/mas-api/proxy', //获取pdf文件
        resolveDocUrl: "https://newimtest.midea.com/mas-api/restful/mxIT5000Attach",//获取文档路径（本项目包括图片）
        GITResolveDocUrl:"https://newimtest.midea.com/mas-api/restful/mxGIT5000Attach",//获取文档路径（本项目包括图片）
        appKey:'e21c13e0-b57a-49f1-985b-01af30232e1a',//美信appkey
        sourceId:"e21c13e0-b57a-49f1-985b-88888888888" // 头像来源ID
    },
    //服务器环境的路径配置
    service: {
        tokenName:"midea_sso_token",
        //CNbaseUrl:'http://itsm.midea.com:8888/SN_InterFace_Midea/page/task/json',//国内测试
        //GITbaseUrl:'http://gitsm.midea.com:8888/SN_InterFace_Midea/ //海外域名',//海外测试
        GITbaseUrl:'https://mapnew.midea.com/mas-api/restful/mxGIT5000Common', //配置mas后调用地址海外测试 
        CNbaseUrl:'https://mapnew.midea.com/mas-api/restful/mxIT5000Common',//配置mas后调用地址国内测试
        resolveDocUrl: "https://mapnew.midea.com/mas-api/restful/mxIT5000Attach",//获取文档路径（本项目包括图片）
        GITResolveDocUrl:"https://mapnew.midea.com/mas-api/restful/mxGIT5000Attach",//获取文档路径（本项目包括图片）
        headerUrl:'https://mapnew.midea.com/muc-api/api/emp/getUserHeadPhoto',//工程师头像
        getPdfUrl:'https://mapnew.midea.com/mas-api/proxy',//获取pdf文件   
        appKey:'58031799-ea11-4bb7-b3db-68a9b438766c', //美信appkey
        sourceId:"e21c13e0-b57a-49f1-985b-88888888888" // 头像来源ID
    },
    // 生产环境
    // accesstoken： b73df76b-727f-4235-bc3d-9e886094b11a
    // 美信appkey:	58031799-ea11-4bb7-b3db-68a9b438766c
    suffix: {
        logout: "logout",
        select: "select",
        update: "update",
        save: "save",
        delete: "delete",
        detail: "detail",
    },
    resourceUrl: {//资源路径
        playSuccess: "assets/images/scan-play/ico_zfcg.png",
        playError: "assets/images/scan-play/ico_zfsb.png",
        downloadUserAvatar: "appUser/downLoadHeadPicture"
    },
}
export default URL