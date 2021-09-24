/**
 * 全局变量
 * 
 * required(id)
 * ·内建模块直接从内存加载
 * ·文件模块通过文件查找定位到文件
 * ·包通过package.json里面的main字段查找入口文件
 * 
 * module.exports
 * 
 * (function (exports, require, module, __filename, __dirname) {
 *    
 * })
 * 
 * JSON文件
 * ·通过fs.readFileSync()加载
 * ·通过JSON.parse()解析
 * 
 * 加载大文件
 * ·require成功后会缓存文件
 * ·大量使用会导致大量数据驻留在内存中，导致GC频分和内存泄漏
 * 
 * module.exports 和 exports
 * 执行时
 * (function(exports, require, module, __filename, __dirname){
 *    console.log('hello world')
 *  });
 * 
 * exports
 * ·exports是module的属性，默认情况下是空对象
 * ·require一个模块实际得到的是该模块的exports属性
 * ·exports.xxx导出具有多个属性的对象
 * ·module.exports = xxx导出一个对象
 * 
 * 路径变量
 * console.log("__dirname", __dirname)
 * console.log("__filename", __filename)
 * 
 * path.join(__dirname, 'views', 'view.html')
 * 
 * 
 * process
 * 
 * 查看PATH
 * 
 * console.log(process.env.PATH.split(';').join('\n'))
 * 
 * 获取信息
 * //获取平台信息
 * process.arch     //x64
 * process.platform //win32
 * 
 * //获取内存使用情况
 * process.memoryUsage()
 * 
 * //获取命令行参数
 * process.argv
 * 
 * nextTick
 * 
 * process.nextTick方法允许你把一个回调放在下一次时间轮询队列的头上，这意味着可以用来延迟执行，
 * 结果是比setTimeout更有效率
 * 
 *  const EventEmitter = require('events').EventEmitter;

    function complexOperations() {
      const events = new EventEmitter()

      process.nextTick(function() {
        events.emit('success')
      })

      return events;
    }

    complexOperations().on('success', function() {
      console.log('success~~')
    })
 * 
 * 
 * Buffer
 * 如果没有提供编码格式，文件操作以及很多网络操作就会将数据作为buffer类型返回
 * 
 * toString
 * 默认转换为UTF-8格式，还支持ascii、base64等
 * 
 * data URI
 * //生成data URI
    const fs = require('fs')
    const mime = 'image/png'
    const encoding = 'base64'
    const base64Data = fs.readFileSync(`${__dirname}/mokey.png`).toString(encoding)
    const uri = `data:${mime};${encoding},${base64Data}`
 * 
 * 
 * //data URI 转文件
    const fs = require('fs');
    const uri = `data:image/png;base64,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`
    const base64Data = uri.split(',')[1];
    const buf = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(`${__dirname}/secondmonkey.png`, buf)
 * 
 * 
 * events
 * 
 *  const EventEmitter = require('events').EventEmitter;

    const AudioDevice = {
      play: function(track) {
        console.log('play', track)
      },
      stop: function() {
        console.log('stop')
      }
    }

    class MusicPlayer extends EventEmitter {
      constructor() {
        super();
        this.playing = false;
      }
    }

    const musicPlayer = new MusicPlayer();
    musicPlayer.on('play', function(track) {
      this.playing = true;
      AudioDevice.play(track);
    })
    musicPlayer.on('stop', function() {
      this.playing = false;
      AudioDevice.stop();
    })

    musicPlayer.emit('play', 'The Roots - The Fire');
    setTimeout(function() {
      musicPlayer.emit('stop')
    }, 1000)

    //处理异常
    //EventEmitter实例发生错误会发出一个error事件
    //如果没有监听器，默认动作是打印一个堆栈并退出程序
    musicPlayer.on('error', function(err) {
      console.err('Error', err)
    })
 */

/* 
//util
//promisify
const util = require('util')
const fs = require('fs')
const readAsync = util.promisify(fs.readFile)

async function init() {
  try{
    let data = await readAsync('./package.json')

    data = JSON.parse(data)
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}
init()
*/

/**
 * 流
 * 理解流
 * 流是基于事件的API，用于管理和处理数据
 * ·流是能够读写的
 * ·是基于事件实现的一个实例
 * 
 * 理解流的最好方式就是想象一下没有流的时候怎么处理数据：
 * ·fs.readFileSync同步读取文件，程序会阻塞，所有数据被读到内存
 * ·fs.readFile阻止程序阻塞，但仍然会将文件所有数据读取到内存中
 * ·希望少内存读取大文件，读取一个数据块到内存处理完再去索取更多的数据
 * 
 * 流的类型
 * ·内置：许多核心模块都实现了流接口，如fs.createReadStream
 * ·http：处理网络技术的流
 * ·解释器：第三方模块XML、JSON解释器
 * ·浏览器：Node流可以被拓展使用在浏览器
 * ·Audio：流接口的声音模块
 * ·RPC（远程调用）：通过网络发送流是进程建通信的有效方式
 * ·测试：使用流的测试库
 */


/**
 * 使用内建流API
 * 
 * 静态web服务器
 * 想要通过网络高效且支持大文件发送一个文件到一个客户端
 * 
 * 不使用流
 * 
 */
/* 
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if(err) {
      res.statusCode = 500;
      res.end(String(err))
      return;
    }

    res.end(data)
  })
}).listen(8000)
 */
/* 
//使用流
//·更少代码，更加高效
//·提供一个缓冲区发送到客户端
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.createReadStream(`${__dirname}/index.html`).pipe(res);
}).listen(8000) */

/* 
//使用流+gzip
const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-encoding': 'gzip'
  })
  fs.createReadStream(`${__dirname}/index.html`)
    .pipe(zlib.createGzip())
    .pipe(res)
}).listen(8000) 
*/

/* 
//流的错误处理
const fs = require('fs')
const stream = fs.createReadStream('not-found')

stream.on('error', err => {
  console.trace();
  console.error('Stack:', err.stack)
  console.error('The error raised was:', err)
}) 
*/

/* 
//使用流基类


//可读流-JSON行解析器
//可读流被用来为i/o源提供灵活的API，也可以被用作解析器：
//·继承自steam.Readable类
//·并实现一个_read(size)方法

const stream = require('stream')
const fs = require('fs')
const util = require('util')

class JSONLineReader extends stream.Readable {
  constructor(source) {
    super();
    this._source = source;
    this._foundLineEnd = false;
    this._buffer = '';

    source.on('readable', () => {
      this.read()
    })
  }

  //所有定制stream.Readable类都需要实现_read方法
  _read(size) {
    let chunk;
    let line;
    let result;

    if(this._buffer.length === 0) {
      chunk = this._source.read()
      this._buffer += chunk;
    }

    const lineIndex = this._buffer.indexOf('\n');

    if(lineIndex !== -1) {
      line = this._buffer.slice(0, lineIndex);
      if(line) {
        result = JSON.parse(line)
        this._buffer = this._buffer.slice(lineIndex + 1);
        this.emit('object', result)
        this.push(util.inspect(result))
      } else {
        this._buffer = this._buffer.slice(1)
      }
    }
  }
}

const input = fs.createReadStream(`${__dirname}/json-lines.txt`, {
  encoding: 'utf8'
})

const jsonLineReader = new JSONLineReader(input)

jsonLineReader.on('object', obj => {
  console.log('post:', obj.position, '-letter:', obj.letter)
}) 
*/

//可写流 - 文字变色

//可写的流可用于输出数据到底层i/o
//·继承自stream.Writable
//·实现一个_write方法向底层数据源发送数据

/* 
const stream = require('stream')

class GreenStream extends stream.Writable {
  constructor(options) {
    super(options)
  }

  _write(chunk, encoding, cb) {
    process.stdout.write(`\u001b[32m${chunk}\u001b[39m`)
    cb();
  }
}

process.stdin.pipe(new GreenStream()) 
*/

/**
 * 双工流 - 接受和转换数据
 * 双工流允许发送和接收数据
 * ·继承自stream.Duplex
 * ·实现_read和_write方法
 * 
 * 
 * 转换流 - 解析数据
 * 使用流改变数据为另一种格式，并且高效地管理内存：
 * ·继承自stream.transform
 * ·实现_transform方法
 * 
 * 
 */
/* 
const stream = require('stream')
const fs = require('fs')
const util = require('util')

class sgStream extends stream.Duplex {
  constructor(source) {
    super()
    this._source = source;
    this._buffer = '';
    this._foundLineEnd = false;

    source.on('readable', () => {
      this.read()
    })
  }

  _read(size) {
    let chunk;
    let line;
    let result;

    if(this._buffer.length === 0) {
      chunk = this._source.read()
      this._buffer += chunk;
    }

    const lineIndex = this._buffer.indexOf('\n');

    if(lineIndex !== -1) {
      line = this._buffer.slice(0, lineIndex);
      if(line) {
        result = JSON.parse(line)
        this._buffer = this._buffer.slice(lineIndex + 1);
        this.write(`post:, ${result.position}, -letter:, ${result.letter}`)
        this.push(Math.random()+'')
      } else {
        this._buffer = this._buffer.slice(1)
      }
    }
  }

  _write(chunk, encoding, cb) {
    process.stdout.write(`\u001b[32m${chunk}\u001b[39m`)
    cb();
  }
}

const input = fs.createReadStream(`${__dirname}/json-lines.txt`, {
  encoding: 'utf8'
})

let sg = new sgStream(input) 
*/

/**
 * 测试流
 * 使用Node内置的断言模块测试
 */
/* 
const assert = require('assert')
const fs = require('fs')
const csvPlarser = require('./csvparser')

const parser = new csvPlarser()
const actual = []

fs.createReadStream(`${__dirname}/sample.csv`)
  .pipe(parser)

process.on('exit', function() {
  actual.push(parser.read())
  actual.push(parser.read())
  actual.push(parser.read())

  const expected = [
    { name: 'Alex', location: 'UK', role: 'admin' },
    { name: 'Sam', location: 'France', role: 'user' },
    { name: 'John', location: 'Canada', role: 'user' },
  ];

  assert.deepEqual(expected, actual)
})

*/
/* 
const fs = require('fs')
const assert = require('assert')

const fd = fs.openSync('./file.txt', 'w+')
const writeBuf = Buffer.from('some data to write')
fs.writeSync(fd, writeBuf, 0, writeBuf.length, 0);

const readBuf = Buffer.alloc(writeBuf.length);
fs.readSync(fd, readBuf, 0, readBuf.length, 0);
assert.equal(writeBuf.toString(), readBuf.toString())
console.log(readBuf.toString())

fs.closeSync(fd) 
*/

/* 
//读写流
const fs = require('fs')
const readable = fs.createReadStream('./json-lines.txt')
const writeable = fs.createWriteStream('./copy.txt')//没有文件自动创建文件
readable.pipe(writeable) 
*/
/* 
//文件监控
//fs.watchFile比fs.watch低效，但更好用
const fs = require('fs')
fs.watchFile('./copy.txt', (eventType, filename) => {
  console.log(eventType, filename)
}) */

/* 
//同步读取与require
//同步fs的方法应该在第一次初始化应用的时候使用
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./package.json').toString())
console.log(config) 
*/
/* 
const config = require('./package.json')
console.log(config)
 */
//模块会被全局缓冲，其他文件也加载并修改，会影响到整个系统加载了此文件的模块
//可以通过object.freeze来冻结一个对象

/**
 * 文件描述
 * 
 * 文件描述是在操作系统中管理的在进程中打开文件所关联的一些数字或者索引。操作系统通过指派唯一的
 * 整数给每个打开的文件用来查看关于这个文件。
 * 
 * stream        文件描述         描述
 * 
 * stdin            0           标准输入
 * stdout           1           标准输出
 * stderr           2           标准错误
 * 
 * console.log('Log') 是 process.stdout.write('log')的语法糖
 * 
 */
/* 
const fs = require('fs');
const fd = fs.openSync('myfile', 'a')
console.log(fd)
console.log(typeof fd == 'number')
 */

/**
 * 文件锁
 * 
 * 协同多个进程同时访问一个文件，保证文件的完整性以及数据不能丢失
 * ·强制锁（在内核级别执行）
 * ·咨询锁（非强制，只在涉及到进程订阅了相同的锁机制）
 *  ·node-fs-ext通过flock锁住一个文件
 * ·使用锁文件
 *  ·进程A尝试创建一个锁文件，并且成功了
 *  ·进程A已经获得了这个锁，可以修改共享的资源
 *  ·进程B尝试创建一个锁文件，但失败了，无法修改共享的资源
 * 
 * Node实现锁文件
 * ·使用独占标记创建锁文件
 * ·使用mkdir创建锁文件
 * 
 * 独占标记
 * 
 * 所有需要打开文件的方法，fs.writeFile、fs.createWriteStream、fs.open都有一个x标记
 * 这个文件应该已独占打开，若这个文件存在，文件不能被打开
 * 
 */
/* 
const fs = require('fs')
fs.open('config.lock', 'wx', err => {
  if(err) {
    return console.error(err, 'open')
  }
})

//最好将当前进程号写进文件锁中
//当有异常的时候就知道最后这个锁的进程
fs.writeFile('config.lock', process.pid, { flogs: 'wx' }, err => {
  if(err) {
    return console.error(err, 'writeFile')
  }
})
*/

/**
 * mkdir文件锁
 * 独占标记有个问题，可能有些系统不能识别0_EXCL标记，另一个方案是把锁文件换成一个目录，PID可以
 * 写入目录中的一个文件
 * 
 */
/* 
const fs = require('fs')
fs.mkdir('config.lock', err => {
  if(err) {return console.error(err)}

  fs.writeFile(`./config.lock/${process.pid}`, `${process.pid}`, err => {
    if(err) {return console.error(err)}
  })
}) 
*/

//递归文件操作

//recursion/index.js

/**
 * 监视文件和文件夹
 * 想要监听一个文件或目录，并在文件更改后执行一个动作
 * 
 * const fs = require('fs')
 * fs.watch('./watchdir', console.log)
 * fs.watchFile('./watchdir', console.log)
 * 
 */

/**
 * 逐行地读取文件流
 * 
 */
/* 
const fs = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
  input: fs.createReadStream('./json-lines.txt'),
  crlfDelay: Infinity
})
let count = 0;
r1.on('line', line => {
  console.log(`cc ${line} - ${count++}`)
  //const extract = line.match()
}) */

//网络
//获取本地IP
/* 
function get_local_ip() {
  const interfaces = require('os').networkInterfaces();
  let IPAdress = '';
  for(let devName in interfaces) {
    const iface = interfaces[devName]
    for(let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if(alias.family == 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        IPAdress = alias.address;
      }
    }
  }
  return IPAdress;
}
console.log(get_local_ip()) 
*/
/* 
//TCP客户端
//nodejs使用net模块创建TCP连接和服务
//启动与测试TCP
const assert = require('assert')
const net = require('net')
let clients = 0;
let expectedAssertions = 2;

const server = net.createServer(function(client) {
  clients++;
  const clientId = clients;
  console.log('Client connected:', clientId);

  client.on('end', function(){
    console.log('Client disconnected:', clientId)
  })

  client.write('Welcome client:'+ clientId)
  client.pipe(client);
})

function runTest(expectedId, done) {
  const client = net.connect(8000)

  client.on('data', function(data) {
    const expected = 'Welcome client:' + expectedId;
    assert.equal(data.toString(), expected)
    expectedAssertions--;
    client.end()
  })

  client.on('end', done)
}

server.listen(8000, function(){
  console.log('Server started on port 8000')

  runTest(1, function() {
    runTest(2, function() {
      console.log('Tests finished');
      assert.equal(0, expectedAssertions);
      server.close()
    })
  })
}) */

//UDP客户端
//利用dgram模块创建数据报socket,然后利用socket.send发送数据
//文件发送服务
/* 
const dgram = require('dgram')
const fs = require('fs')
const port = 41230
const defaultSize = 16;

function Client(remoteIP) {
  const inStream = fs.createReadStream(`${__dirname}/json-lines.txt`)
  const socket = dgram.createSocket('udp4')

  inStream.on('readable', function() {
    sendData();
  })

  function sendData() {
    const message = inStream.read(defaultSize)

    if(!message) {
      return socket.unref();
    }

    socket.send(message, 0, message.length, port, remoteIP, function(){
      sendData();
    })
  }
}

function Server(){
  const socket = dgram.createSocket('udp4')

  socket.on('message', function(msg) {
    process.stdout.write(msg.toString())
  })

  socket.on('listening', function() {
    console.log('Server ready:', socket.address())
  })

  socket.bind(port)
}

if(process.argv[2] === 'client') {
  new Client(process.argv[3])
} else {
  new Server()
} */

//HTTP客户端
//使用http.createServer和http.createClient运行HTTP服务
//启动和测试HTTP
/* 
const assert = require('assert')
const http = require('http')

let server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hello, world.')
  res.end()
})
server.listen(8000, function(){
  console.log('Listen on port 8000')

  const req = http.request({port: 8000}, function(res){
    console.log('HTTP headers:' + res.headers)
    res.on('data', function(data){
      console.log('Body:', data.toString())
      assert.equal('Hello, world.', data.toString())
      assert.equal(200, res.statusCode)
      server.unref()
      console.log('测试完成')
    })
  })
  req.end()
})
*/

//重定向
//http标准定义了标识重定向发生时的状态码，它也之处了客户端应该检查无限循环
//·300：多重选择
//·301：永久移动到新位置
//·302：找到重定向跳转
//·303：参见其他信息
//·304：没有改动
//·305：使用代理
//·307：临时重定向
/* 
const http = require('http')
const https = require('https')
const url = require('url')

//构造函数被用来创建一个对象来构成请求对象的声明周期
function Request() {
  this.maxRedirects = 10;
  this.redirects = 0;
}

Request.prototype.get = function(href, callback) {
  const uri = url.parse(href) //解析URLs成为Node http模块使用的格式，确定是否使用https
  const options = { host: uri.host, path: uri.path }
  const httpGet = uri.protocol === 'http:' ? http.get : https.get;

  console.log('GET:', href)

  function processResponse(response) {
    if(response.statusCode >= 300 && response.statusCode < 400) {
      if(this.redirects >= this.maxRedirects) {
        this.error = new Error('Too many redirects for: ' + href);
      } else {
        this.redirects++;
        href = url.resolve(options.host, response.headers.location)
        return this.get(href, callback)
      }
    }

    response.url = href;
    response.redirects = this.redirects;

    console.log('Redirected:', href)

    function end() {
      console.log('Connection ended')
      callback(this.error, response)
    }

    response.on('data', function(data) {
      console.log('Got data, length: ', data.length)
    })

    response.on('end', end.bind(this))
  }

  httpGet(options, processResponse.bind(this))
    .on('error', function(err){
      callback(err)
    })
}

const request = new Request()

request.get('http://www.baidu.com', function(err, res) {
  if(err) {
    console.error(err)
  } else {
    console.log(`
      Fetched URL: ${res.url} with ${res.redirects} redirects
    `)
    process.exit()
  }
})
*/

//http代理
//·ISP使用透明代理使网络更加高效
//·使用缓存代理服务器减少宽带
//·web应用程序的DevOps利用他们提升应用程序性能
/* 
const http = require('http')
const url = require('url')

http.createServer(function(req, res) {
  console.log(`start request: `, req.url)
  const options = url.parse(req.url)
  console.log(options)

  options.headers = req.headers;
  //创建请求来复制原始请求
  const proxyRequest = http.request(options, function(proxyResponse) {
    proxyResponse.on('data', function(chunk) {
      console.log('proxyResponse length:', chunk.length)
      res.write(chunk, 'binary')
    })

    proxyResponse.on('end', function() {
      console.log('proxied request ended')
      res.end();
    })

    //发送头部信息给服务器
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers)
  })

  req.on('data', function(chunk) {
    console.log('in request length: ', chunk.length)
    proxyRequest.write(chunk, 'binary')
  })

  req.on('end', function() {
    console.log('original request ended')
    proxyRequest.end()
  })
}).listen(8888)

 */

//封装request-promise
//node8 提供了util.promisify()这个方法，方便我们快捷的把原来的异步回调方法改成返回promise实例
//的方法
/* 
const https = require('https')
const promisify = require('util').promisify;

https.get[promisify.custom] = function getAsync(options) {
  return new Promise((resolve, reject) => {
    https.get(options, response => {
      response.end = new Promise(resolve => response.on('end', resolve))
      resolve(response)
    }).on('error', reject)
  })
}
console.log(https.get)
const rp = promisify(https.get)

(async () => {
  const res = await rp('https://jsonmock.hackerrank.com/api/movies/search/?Title=Spiderman&page=1')
  let body = '';
  res.on('data', chunk => body += chunk)
  await res.end;

  console.log(body)
})(); */

/**
 * DNS请求
 * 使用dns模块创建DNS请求
 * ·A：dns.resolve， A记录存储IP地址
 * ·TXT：dns.resolveTxt，文本值可以用在dns上构建其他服务
 * ·SRV：dns.resolveSrv，服务记录定义服务的定位数据，通常包含主机名和端口号
 * ·NS：dns.resolveNs，指定域名服务器
 * ·CNAME: dns.resolveCname，相关的域名记录，设置为域名而不是ip地址
 * 
 */
/* 
const dns = require('dns')

dns.resolve('www.ctnma.cn', function(err, addresses) {
  if(err) {
    console.error(err)
  }
  console.log('Addresses', addresses)
}) */
/* 
//crypto 库加密解密
const crypto = require('crypto')

function aesEncrypt(data, key = 'key') {
  const cipher = crypto.createCipher('aes192', key)
  let crypted = cipher.update(data, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted;
}

function aesDecrypt(encrypted, key = 'key') {
  const decipher = crypto.createDecipher('aes192', key)
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

let txt = aesEncrypt('1231223')
console.log('txt:', txt)    //txt: b04c68695d91058c527a141a4709de8f
let rTxt = aesDecrypt(txt)
console.log('rTxt:', rTxt)  //rTxt: 1231223

 */

/**
 * 发起HTTP请求的方法
 * ·http标准库
 *    ·无须安装外部依赖
 *    ·需要以块为单位接收数据，自己监听end事件
 *    ·HTTP和HTTPS时两个模块，需要区分使用
 * ·Request库
 *    ·使用方便
 *    ·有promise版本request-promise
 * ·Axios
 *    ·既可以用在浏览器又可以用在Nodejs
 *    ·可以使用axios.all并发多个请求
 * ·SuperAgent
 *    ·可以链式使用
 * ·node-fetch
 *    ·浏览器的fetch移植过来的
 */

/**
 * 子进程
 * 
 * 执行外部应用
 * 
 * 基本概念
 * ·4个异步方法exec、execFile、fork、spawn
 *    ·Node
 *        ·fork：想将一个Node进程作为一个独立的进程来运行的时候使用，使得计算处理和文件描述器
 *               脱离Node主进程
 *    ·非Node
 *        ·spawn：处理一些会有很多子进程I/O时，进程会有大量输出时使用
 *        ·execFile：只需只需一个外部程序的时候使用，执行速度块，处理用户输入相对安全
 *        ·exec：想直接访问线程的shell命令时使用，一定要注意用户输入
 * ·3个同步方法：execSync、execFileSync、spawnSync
 * ·通过API创建出来的子进程和父进程没有任何必然联系
 * 
 */
/* 
//execFile
//·会把输出结果缓存好，通过回调返回最后结果或者异常信息
const { execFile } = require('child_process')
console.log(process.env.PATH)
execFile('node', ['hello', '+', 'world'], (err, stdout, stderr) => {
  if(err) { console.error(err) }
  console.log('stdout:', stdout)
  console.log('stderr:', stderr)
})
 */

/**
 * spawn
 * ·通过流可以使用有大量数据输出的外部应用，节约内存
 * ·使用流提高数据响应效率
 * ·spawn方法返回一个i/o的流接口
 * 
 * 单一任务
 */
/* 
const cp = require('child_process')

const child = cp.spawn('node', ['--version'])
child.on('error', console.error)
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
 */

/**
 * exec
 * ·只有一个字符串命令
 * ·和shell一模一样
 */
/* 
const cp = require('child_process')

cp.exec(`node --NODE_PATH`, (err, stdout, stderr) => {
  console.log(stdout)
}) */

/**
 * fork
 * ·fork方法会开发一个IPC通道，不同的Node进程进行消息传送
 * ·一个子进程消耗30ms启动时间和10mb内存
 * ·子进程：process.on('message')、process.send()
 * ·父进程：child.on('message')、child.send()
 */

/**
 * Node线程
 * 
 * ·node进程占用了7个线程
 * ·node中最核心的是v8引擎，在node启动后，会创建v8的实例，这个实例时多线程的
 *    ·主线程：编译、执行代码
 *    ·编译/优化线程：在主线程执行的时候，可以优化代码
 *    ·分析器线程：记录分析代码运行时间，为Crankshaft优化代码执行提供依据
 *    ·垃圾回收的几个线程
 * ·js的执行时单线程的，但js的宿主环境，物料node还是浏览器都是多线程的
 * 
 */

/**
 * 异步IO
 * 
 * ·Node中有一些IO操作（DNS, FS）和一些CPU密集计算(Zlib, Crypto)会启用Node的线程池
 * ·线程池默认大小为4，可以手动更改线程池默认大小
 * 
 */
/* 
//cluster 多进程
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`)
  for(let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`)
  })
} else {
  //工作进程可以共享任何TCP连接
  //在本例子中，共享的是HTTP服务器
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end('hello world')
  }).listen(8888)
  console.log(`工作进程${process.pid}已启动`)
}
 */
/**
 * ·一共有9个进程，其中一个主进程，cpu个数*cpu核数 = 2 x 4 = 8个子进程
 * ·无论child_process还是cluster，都不是多线程模型，而是多进程模型
 * ·应对单线程问题，通常使用多进程的方式来模拟多线程
 */

/**
 * 真Node多线程
 * ·
 * 
 * 
 */

//进程是资源分配的最小单位，线程是CPU调度的最小单位

