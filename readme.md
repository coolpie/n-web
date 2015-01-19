node-static
===========

> a simple, *rfc 2616 compliant* file streaming module for [node](http://nodejs.org)

node-static understands and supports *conditional GET* and *HEAD* requests.
node-static was inspired by some of the other static-file serving modules out there,
such as node-paperboy and antinode.

（我已经有点晕了w）

应该说现在在写的是static-file serving moudles，也就是说，应该是，当接收到请求的时候，根据预设的root路径，自动检索路径中的文件，根据文件是否存在等等，返回结果。

预设结果如下：

+ 检索文件成功 —— 200 OK
+ 文件不存在 —— 404 Not Found
+ 文件路径已改变 —— 301
+ 可以使用缓存 —— 304 
