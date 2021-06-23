var express = require('express');
var bodyParser = require("body-parser"); 
var app = express();
    app.use(bodyParser.urlencoded({extended: false}));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

function get_banner() {
    return {
        status: 1,
        msg: '',
        data:'https://img.isheji5.com/ips_user_preview/2020-04-15/3a/3a830fc1-ae2e-4ac4-a89a-d054a89b9150.jpg!l1000_b?auth_key=1612800000-0-0-a3cb789f7b50058bbfbfee8418831050'
    };
}

function get_notice_lsit(){
    return {
        status: 1,
        msg: '',
        data:[
            {
                id:1,
                title:'我是公告，公告'
            }
        ]
    };
}

function get_lsit(){
    return {
        status: 1,
        msg: '',
        data:[
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            },
            {
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天'
                
            }
            
        ]
    };
}

function get_detail(){
    return {
        status: 1,
        msg: '',
        data:{
                id:1,
                title:'[快判]手势采集-需要漏脸哦',
                num:10,
                time:'1 小时',
                surplus:'10 天',
                desc: "1.兼职工作,在《劳动合同法》上属于非全日制用工。非全日制用工的用工时间每天不能超过4小时,每周累计不能超过24小时。超过上述标准的,用人单位应当依法与劳动者建议正式劳动关系,不得订立非全日制用工劳动合同。\n\r2.非全日制用工,是指以小时计酬为主,劳动者在同一用人单位一般平均每日工作时间不超过四小时,每周工作时间累计不超过二十四小时的用工形式。"
                
            }
    };
}

function add_task(){
    return {
        status: 1,
        msg: '',
    };
}

//写个接口123
app.get('/api/banner/get', function(req, res) {
    console.log(req.body)
    res.status(200),
    res.json(get_banner())
});
app.get('/api/notice/list', function(req, res) {
    console.log(req.body)
    res.status(200),
    res.json(get_notice_lsit())
});
app.get('/api/list', function(req, res) {
    console.log(req.body)
    res.status(200),
    res.json(get_lsit())
});

app.get('/api/detail', function(req, res) {
    console.log(req.body)
    res.status(200),
    res.json(get_detail())
});

app.get('/api/add/task', function(req, res) {
    console.log(req.body)
    res.status(200),
    res.json(add_task())
});


//配置服务端口
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})