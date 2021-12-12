# 前端路由基础

##  hash 路由
    hash路由是链接中添加#，通过监听hash的更改，出发浏览器的hashChange事件，通过获取location.hash获取当前路由信息，再进行一些路由跳转
```javascript
class HashRouter {
    constructor() {
        this.routes = {}
        this.currentRoute = ''
        document.addEventLinsterer('load', this.render)
        document.addEventLinstener('hashChange', this.render);
    }

    init() {
        window.Router = new HashRouter();
    }

    // 注册路由切换的回调
    route(path, cb) {
        this.routes[path] = cb || function(){}
    }

    render() {
        this.currentRoute = location.hash.slice(1) || ''
        this.routes[this.this.currentRoute]()
    }
}

```

## history 路由
    相关API
        history.go(n)：路由跳转n 表示前进或者后退n个页面，0表示刷新页面
        history.back()后退
        history.forward()前进
        history.pushState()添加一条路由记录，禁止跨域
        history.replaceState()替换当前历史记录信息
        popstate事件：当活动的历史记录发生变化，会触发该事件，go/back/forward 会触发
```javascript
class HistoryRouter {
    constructor(path) {
        this.routes = {}
        history.replaceState({path}, null, path)
        this.routes[path] && this.routes[path]();

        window.addEventLinster('popstate', e => {
            const path = e.state && e.state.path;
            this.routes[path] && this.routes[path]()
        });

    }

    static init() {
        window.Router = new HistoryRouter(location.pathname);
    }

    route(path, cb) {
        this.routes[path] = cb || function() {}
    }

    go(path) {
        history.pushState({ path }, null, path)
        this.routes[path] && this.routes[path]()
    }
}
```