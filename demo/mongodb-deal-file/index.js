const fs = require('fs');
const { MongoClient } = require('mongodb');

// 创建连接
const url = 'mongodb://root:123@192.168.239.138:27017';
const dbName = 'company_users';

// 读取文件内容
fs.readFile('users.json', 'utf8', async (err, data) => {
    if (err) {
        console.error('读取文件出错:', err);
        return;
    }

    // 假设文件内容是一个JSON格式的二维数组对象
    let array;
    try {
        array = JSON.parse(data);
    } catch (e) {
        console.error('解析JSON出错:', e);
        return;
    }

    array = array.flat()

    // // 处理文件内容 (这里简单示例一下，例如对每个元素进行加1操作)
    // const processedArray = array.map(row => row.map(item => item + 1));

    // // // 转换为字符串
    // const outputData = JSON.stringify(array);

    // // 输出到新文件
    // fs.writeFile('output.json', outputData, 'utf8', err => {
    //     if (err) {
    //         console.error('写入文件出错:', err);
    //     } else {
    //         console.log('文件已成功写入 output.txt');
    //     }
    // });
    const client = new MongoClient(url);
    await client.connect();
    console.log("成功连接到数据库");
    // 选择数据库
    const db = client.db(dbName);
    const collection = db.collection('rawUsers');

    console.log(array.length)

    /* // 插入数据
    collection.insertMany(array, function(err, result) {
        console.log("成功插入" + result.insertedCount + "条数据");
        client.close();
    }); */

    const insertResult = await collection.insertMany(array);
    console.log('Inserted documents =>', insertResult);
    client.close();

    // 创建一个可写流
    // const writeStream = fs.createWriteStream('web.json');

    /* let array1 = []
    for(let o of array) {
      // if (o.position=='前端研发工程师') {
      // if (o.position=='JAVA研发工程师') {
      // if (o.position=='技术经理') {
      // if (o.position=='大数据工程师') {
      if (o.position=='AIOT算法工程师') {
        array1.push({
          // ...o, 
          // allPositions: null,
          // avatar: null,
          // userTagModels: null,
          // infoValues: null,
          name: o.name,
          departmentPath: o.departmentPath ? o.departmentPath.substring(22) : '',
        })
      }
    }
    console.log(array1.length)

    fs.writeFile('AI.json', JSON.stringify(array1), 'utf8', err => {
      if (err) {
          console.error('写入文件出错:', err);
      } else {
          console.log('文件已成功写入 web.txt');
      }
    }); */
});