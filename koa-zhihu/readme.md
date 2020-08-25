#### 仿知乎 RESTful API

##### 概念向
  路由
    1. 如果没有路由
      所有的请求都做了相同的事情，都会返回相同的结果
    2. 路由的意义
      处理不同的URL，处理不同的HTTP方法，解析URL上的参数
    3. 一些笔记
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
  
  错误处理
    1. 编程语言或计算机硬件里的一种机制
    2. 处理软件或信息系统中出现的异常状况

  异常情况有哪些
    1. 运行时错误，返回500
    2. 逻辑错误， 找不到（404），先决条件失败（412），无法处理的实体（参数格式不对 422）
  
  为什么要用错误处理
    1. 防止程序挂掉
    2. 告诉用户错误信息
    3. 便于开发者调试

#### NoSQL
  对不同于传统的关系型数据库的数据库管理系统的统称

  分类
    文档存储（MongoDB）
    列存储（HBase）
    key-Value存储（Redis）
    图存储（FlockDB）
    对象存储（db4o）
    XML存储（BaseX）

  为什么要用NoSQL
    1. 简单（没有原子性、一致性、隔离性等复杂规范）
    2. 便于横向拓展
    3. 适合超大规模的数据存储
    4. 很灵活地存储复杂结构的数据（Schema Free）

#### MongoDB
  1. 性能好（内存计算）
  2. 大规模数据存储（可拓展性）
  3. 安全可靠（本地复制、自动故障转移）
  4. 方便存储复杂结构的数据（Schema Free）

  MongoDB Altas
    1. 注册用户
    2. 创建集群
    3. 添加数据库用户
    4. 设置IP地址白名单
    5. 获取连接地址