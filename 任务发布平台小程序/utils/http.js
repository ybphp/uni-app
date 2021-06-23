// const path = 'http://127.0.0.1:3000/api/';
const path = 'http://192.168.1.104:3000/api/';

const GET_BANNER = 'banner/get' //获取banner数据
const GET_NOTICE_LIST = 'notice/list'//获取公告
const GET_LIST = 'list' //获取详情数据
const GET_DETAIL = 'detail'//获取详情
const GET_ADD_TASK = 'add/task'//参加任务

module.exports = {
    GET_BANNER,
    GET_NOTICE_LIST,
    GET_LIST,
    GET_DETAIL,
    GET_ADD_TASK,
    get(apiUrl, yes, error) {
        uni.request({
            url: path + apiUrl,
            header: { 'Content-Type': 'json' },
            success: yes,
            fail: error
        })
    },
    post(apiUrl, params, yes, error) {
        uni.request({
            url: path + apiUrl,
            method: "POST",
            data: params,
            header: { 'Content-Type': 'json' },
            success: yes,
            fail: error
        })
    }
}