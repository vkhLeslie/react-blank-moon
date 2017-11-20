/**
 * @description:前端开发配置文件 可配置化项目*
 * @author：912751280@qq.com
 * @update:2017-08-16
 * @version
 */
const CONFIG = {
    serviceType: "serviceTest", //"deBug"：本地开发，"service"：在线服务，"serviceTest"：测试服务
    "transferProtocol": "https://",
    "version": "1.0.1",
    "channel": 1, //1.美信 2.美+ 3.美的通
    "platform": 1, //平台号
    "ok": 1,
    // 支持的所有多语言, 用逗号分隔, 如zh,en
    LANGUAGES: 'zh,cn,zh_cn,en,ja,jp', //zh,zh_cn不要用，切换中文用cn
    // 默认使用的语言
    DEFAULT_LANGUAGE: 'cn',
    MODULES_PATH: '',
    PROJECT_NAME: 'moon' // 应用模块标识
}
export default CONFIG