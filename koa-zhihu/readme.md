#### 仿知乎 RESTful API

##### 概念向
  REST
    Representational State Transfer

    Representational：数据的表现形式
    State：当前状态或者数据
    Transfer：数据传输

    REST的六个限制
    1. 客服端-服务器（Client-Server）
        关注点分离，提升服务端简单性和客户端移植性
    2. 无状态（Stateless）
        用户会话信息保存在客户端，每次请求必须包括所有信息
    3. 缓存（Cache）
        所有服务端响应都要标记，减少前后端交互提升性能，提升可靠性和可见性
    4. 统一接口（Uniform Inteface）
        接口设计要统一通用，提升了简单性和可见性，接口与实现解耦
    5. 分层系统（Layered System）
        每层只知道相邻一层，客户端不知道是和代理还是真是服务器通信
        其他层：安全层、负载均衡、缓存层等
    6. 按需代码（Code-On-Demand 可选）
        客户端可以下载运行服务端传来的代码，简化客户端

    统一接口的限制
      1. 资源的标识
      2. 通过表述来操作资源
      3. 自描述信息
        媒体类型（application/json、application/xml）
        HTTP方法
        是否缓存（Cache Control）
      4. 超媒体作为应用状态引擎
        点击链接跳转到另一个网页

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

#### session
  工作原理
    1. 客户端发送用户名和密码到服务端，服务端生成身份认证的session数据，然后保存在内存或内存数据库中。
    2. 服务端返回sessionId，然后通过设置响应头Set-Cookie: session[sessionId]。客户端将sessionId存在cookie中。
    3. 之后客户端发送的所有请求都会附带该sessionId，并设置请求头Cookie: session=[sessionId]。服务端就会通过sessionId来查询并解析session数据，这样服务端就知道是否登录，是否有权限等。
    4. 如果解析session数据后通过了校验，就会正常返回接口数据了。否则就需要提示重新登录或没权限等。

  客户端可以通过清除cookie来退出登录，服务端可以清除session来强制退出登录
  JWT 将token保存在客户端，只要未过期，就可以长期使用

  优势
    1. 相比JWT，最大优势在于可以主动清除session
    2. session保存在服务端，相对更安全
    3. 结合cookie使用，较为灵活，兼容性较好

  劣势
    1. cookie + session 在跨域场景表现并不好。cookie具有不可跨域性，设置cookie时，除了设置sessionId，还会设置cookie生效的域名
    2. 如果是分布式部署，需要做多机共享session机制
    3. 基于cookie的机制很容易被CSRF
    4. 查询session信息可能会有数据库查询操作
    
#### JWT (JSON Web Token)
  定义了一种紧凑且独立的方式，可以将各方之间的信息作为JSON对象进行安全传输
  该信息可以验证和信任，因为是经过数字签名的

  工作原理
    与session类似，不同的是服务端响应头返回token: [JWT]给客户端，客户端发送请求时，在请求头设置Authorization: Bearer[JWT]。
    
  由三部分构成，使用Base64编码 - 头部(header).有效载荷(payload).签名(signature)
  Header
    1. typ： token的类型，固定为JWT
    2. alg： 使用的hash算法，例如：HMAC SHA256、RSA
  Payload
    1. 存储需要传递的信息，如用户ID，用户名等
    2. 包含元数据，如过期时间，发布人等
    3. 可以加密
  Signature
    1. 对Header 和 Payload部分进行签名
    2. 保证Token在传输过程中没有被篡改或者损坏