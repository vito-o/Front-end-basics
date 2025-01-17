<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  var width = window.innerWidth;
  var height = window.innerHeight;

  var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
  });

  var layer = new Konva.Layer();

  // complex dashed and dotted line
  var blueLine = new Konva.Line({
    points: [10, 100, 140, 100, 140, 50, 300, 50, 300, 150],
    stroke: 'blue',
    strokeWidth: 10,
    lineJoin: 'round',
    /*
     * line segments with a length of 29px with a gap
     * of 20px followed by a line segment of 0.001px (a dot)
     * followed by a gap of 20px
     */
    dash: [10, 10],
  });

  blueLine.move({
    x: 0,
    y: 105,
  });

  layer.add(blueLine);

  // add the layer to the stage
  stage.add(layer);
  // console.log(blueLine['dashOffset'])

  var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;
    // update stuff
    blueLine['dashOffset'](frame.time)
  }, layer);

  anim.start()

  // -------------------------------------------------------------

  var group = new Konva.Group({
    x: 120,
    y: 40,
  });

  let rect = new Konva.Rect({
    x: Math.random() * 50,
    y: Math.random() * 50,
    width: 100,
    height: 50,
    fill: Konva.Util.getRandomColor(),
    draggable: true,
    name: 'object',
    rotation: 180,
  })
  group.add(rect);

  let simpleText = new Konva.Text({
    x: rect.attrs.x - rect.width() + 10,
    y: rect.attrs.y - rect.height() * 2 / 3,
    text: '水位：'+ rect.height() + 'm',
    fontSize: 14,
    fontFamily: 'Calibri',
    fill: 'red',
  });
  group.add(simpleText);

  layer.add(group);

  const tran = () => {
    let val = Math.random() * 50;

    var tween = new Konva.Tween({
      node: rect,
      duration: 0.5,
      height: val,
      onFinish:  () => {
        tween.destroy()
      }
    });
    tween.play();
    // console.log(tween)
    simpleText.text('水位：'+ val.toFixed(2) + 'm')
  }

  setInterval(function () {
    tran()
  }, 500);



  initWebsocket()

})


const initWebsocket = () => {
  var socket = new WebSocket("ws://localhost:8080/websocket");

  socket.onopen = function() {
      console.log("Connected to WebSocket server");
      socket.send("Hello Server!");
  };

  socket.onmessage = function(event) {
      console.log("Received message from server: " + event.data);
  };

  socket.onclose = function() {
      console.log("Disconnected from WebSocket server");
  };

  socket.onerror = function(error) {
      console.log("WebSocket error: " + error);
  };
}

</script>

<template>
  <div id="container"></div>
</template>

<style >
* {
  margin: 0;
  padding: 0;
}

#pipeCanvas {
  width: 100vw;
  height: 100vh;
}
</style>
