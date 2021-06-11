



class Chart {

  constructor(){
    this.el = document.getElementById('canvas');
    if(this.el.getContext){
      this.ctx = this.el.getContext('2d');
    }

    //因为canvas是基于状态绘制的，也就是设置了缩放值，再绘制的元素才会根据缩放倍数绘制，
    //因此需要把每个绘制的对象保存起来。
    this.data = [];
    this.scale = 1;

    //缩放具体实现用到的数据
    this.maxScale = 3;
    this.minScale = 1;
    this.step = 0.1 //缩放率
    this.offsetX = 0;//画布X轴偏移值
    this.offsetY = 0;//画布Y轴偏移值

    //添加滚轮判断事件
    this.addScaleFunc();

    //添加拖拽事件
    this.addDragFunc();
  }

  //绘制圆形
  drawCircle(data){
    this.ctx.beginPath();
    this.ctx.fillStyle = data.fillStyle;
    this.ctx.arc(data.x, data.y, data.r, 0, 2 * Math.PI);
    this.ctx.fill()
  }

  //绘制线条
  drawLine(data){
    var arr = data.data.concat();

    this.ctx.beginPath();
    this.ctx.moveTo(arr.shift(), arr.shift());
    this.ctx.lineWidth = data.lineWidth || 1;
    do{
      this.ctx.lineTo(arr.shift(), arr.shift())
    }while(arr.length)

    this.ctx.stroke()
  }

  drawRect(data){
    this.ctx.beginPath();
    this.ctx.fillStyle = data.fillStyle;
    this.ctx.fillRect(...data.data)
  }

  //draw
  draw(item){
    this.ctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY)
    switch(item.type){
      case 'line':
        this.drawLine(item);
        break;
      case 'rect':
        this.drawRect(item);
        break;
      case 'circle':
        this.drawCircle(item);
        break;
    }
  }

  //渲染整个 图形画布
  render(){
    this.el.width = 500;

    this.data.forEach(item => {
      this.draw(item);
    })
  }

  //添加形状
  push(data){
    //push方法中添加保存数据操作
    this.data.push(data);

    this.draw(data);
  }

  addScaleFunc(){
    this.el.addEventListener('mouseenter', this.addMouseWhell)
    this.el.addEventListener('mouseleave', this.removeMouseWhell)
  }

  //添加mousewhell滚动事件
  addMouseWhell = () => {
    // window.onmousewheel = document.onmousewheel = this.scrollFunc;
    document.addEventListener('mousewheel', this.scrollFunc, {passive: false});
    //document.addEventListener('DOMMouseScroll', this.scrollFunc, false)
  }
  
  //移除mousewhell事件
  removeMouseWhell = () => {
    // window.onmousewheel = document.onmousewheel = null;
    document.removeEventListener('mousewheel', this.scrollFunc, {passive: false});
    //document.removeEventListener('DOMMouseScroll', this.scrollFunc, false)
  }
  
  scrollFunc = e => {
    //缩放时外部容器禁止滚动
    e.preventDefault();

    if(e.wheelDelta){
      var x = e.offsetX - this.offsetX;
      var y = e.offsetY - this.offsetY;

      var offsetX = (x / this.scale) * this.step;
      var offsetY = (y / this.scale) * this.step;

      if(e.wheelDelta > 0){
        this.offsetX -= this.scale >= this.maxScale ? 0 : offsetX;
        this.offsetY -= this.scale >= this.maxScale ? 0 : offsetY;

        this.scale += this.step;
      }else{
        this.offsetX += this.scale <= this.minScale ? 0 : offsetX;
        this.offsetY += this.scale <= this.minScale ? 0 : offsetY;

        this.scale -= this.step;
      }

      this.scale = Math.min(this.maxScale, Math.max(this.scale, this.minScale));

      this.render();
    }
    
  }

  //添加拖拽功能，判断时机注册移除拖拽功能
  addDragFunc(){
    this.el.addEventListener('mousedown', this.addMouseMove);
    document.addEventListener('mouseup', this.removeMouseMove)
  }

  //添加鼠标移动
  addMouseMove = e => {
    this.targetX = e.offsetX;
    this.targetY = e.offsetY;

    this.mousedownOriginX = this.offsetX;
    this.mousedownOriginY = this.offsetY;

    var x = (this.targetX - this.offsetX) / this.scale;
    var y = (this.targetY - this.offsetY) / this.scale;

    this.activeShape = null;

    this.data.forEach(item => {
      switch(item.type){
        case 'rect':
          this.isInnerRect(...item.data, x, y) && (this.activeShape = item);
          break;
        case 'circle':
          this.isInnerCircle(item.x, item.y, item.r, x, y) && (this.activeShape = item);
          break;
        case 'line':
          var lineNumber = item.data.length / 2 - 1;
          var flag = false;
          for(let i = 0; i < lineNumber; i++){
            let index = i * 2;
            flag = this.isInnerPath(item.data[index], item.data[index+1], item.data[index+2], item.data[index+3], x, y, item.lineWidth || 1)
            if(flag){
              this.activeShape = item;
              break;
            }
          }
      }
    })

    if(!this.activeShape){
      this.el.style.cursor = 'grabbing'
      this.el.addEventListener('mousemove', this.moveCanvasFunc, false);
    }else{
      this.el.style.cursor = 'all-scroll'
      this.shapeOldX = null;
      this.shapeOldY = null;
      this.el.addEventListener('mousemove', this.moveShapeFunc, false)
    }

  }

  //移除鼠标移动
  removeMouseMove = e => {
    this.el.style.cursor = ''
    this.el.removeEventListener('mousemove', this.moveCanvasFunc, false);
    this.el.removeEventListener('mousemove', this.moveShapeFunc, false);
  }

  moveCanvasFunc = e => {
    var maxMoveX = this.el.width / 2;
    var maxMoveY = this.el.height / 2;

    var offsetX = this.mousedownOriginX + (e.offsetX - this.targetX);
    var offsetY = this.mousedownOriginY + (e.offsetY - this.targetY);

    this.offsetX = Math.abs(offsetX) > maxMoveX ? this.offsetX : offsetX;
    this.offsetY = Math.abs(offsetY) > maxMoveY ? this.offsetY : offsetY;

    this.render();
  }

  moveShapeFunc = e => {
    var moveX = e.offsetX - (this.shapeOldX || this.targetX)
    var moveY = e.offsetY - (this.shapeOldY || this.targetY)

    moveX /= this.scale;
    moveY /= this.scale;

    switch(this.activeShape.type){
      case 'rect':
        let x = this.activeShape.data[0]
        let y = this.activeShape.data[1]
        let width = this.activeShape.data[2]
        let height = this.activeShape.data[3]
        this.activeShape.data = [x + moveX, y + moveY, width, height]
        break;
      case 'circle':
        this.activeShape.x += moveX;
        this.activeShape.y += moveY;
        break;
      case 'line':
        var item = this.activeShape;
        var lineNumber = item.data.length / 2
        for(let i = 0; i < lineNumber; i++){
          let index = i*2;
          item.data[index] += moveX
          item.data[index + 1] += moveY
        }
        break;
    }

    this.shapeOldX = e.offsetX;
    this.shapeOldY = e.offsetY;

    this.render();
  }

  //判断是否在矩形框内
  isInnerRect(x0, y0, width, height, x, y){
    return x0 <= x && y0 <= y && (x0 + width) >= x && (y0 + height) >= y;
  }

  //判断是否在圆形内
  isInnerCircle(x0, y0, r, x, y){
    return Math.pow(x0 - x, 2) + Math.pow(y0 - y, 2) <= Math.pow(r, 2)
  }

  // 判断是否在路径上
  isInnerPath(x0, y0, x1, y1, x, y, lineWidth) {
    var a1pow = Math.pow(x0 - x, 2) + Math.pow(y0 - y, 2);
    var a1 = Math.sqrt(a1pow, 2)
    var a2pow = Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)
    var a2 = Math.sqrt(a2pow, 2)

    var a3pow = Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)
    var a3 = Math.sqrt(a3pow, 2)

    var r = lineWidth / 2
    var ab = (a1pow - a2pow + a3pow) / (2 * a3)
    var ab = (a1pow - a2pow + a3pow) / (2 * a3)
    var h = Math.sqrt(a1pow - Math.pow(ab, 2), 2)

    var ad = Math.sqrt(Math.pow(a3, 2) + Math.pow(r, 2))

    return h <= r && a1 <= ad && a2 <= ad
  }

}

let charObj = new Chart();

charObj.push({
  type: 'circle',
  fillStyle: 'pink',
  x: 400,
  y: 300,
  r: 50
})
charObj.push({
  type: 'line',
  lineWidth: 4,
  data: [100, 90, 200, 90, 250, 200, 400, 200]
})

charObj.push({
  type: 'rect',
  fillStyle: '#0f00ff',
  data: [350, 400, 100, 100]
})
