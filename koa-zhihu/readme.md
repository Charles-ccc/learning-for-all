#### 仿知乎 RESTful API

##### 路由
  1. 如果没有路由
    所有的请求都做了相同的事情，都会返回相同的结果
  2. 路由的意义
    处理不同的URL，处理不同的HTTP方法，解析URL上的参数

  HTTP options方法
    1. 检测服务器所支持的请求方法
    2. CORS中的预检请求

  allowedMethods的作用
    1. 响应options方法，返回所支持的请求方法
    2. 相应的返回405（不允许）和501（未实现）
  
  控制器
    1. 获取HTTP请求参数 
      Query String -> ?q=keyword
      Router Params -> /users/:id
      Request Body -> {name: 'James'}
      Header -> Accept, Cookie
    2. 处理业务逻辑
    3. 发送HTTP响应
      发送Status
      发送Response Body
      发送Header -> Allow、Content-Type
      
  控制器最佳实践
    1. 每个资源的控制器放在不同的文件里
    2. 尽量使用类+类方法的形式编写控制器
    3. 严谨的错误处理
