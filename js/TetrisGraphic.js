//Raphael paper to act as playground, width and height in number of Blocks
function TetrisGraphic(canvas, xCount, yCount) {
  this.canvas = canvas;
  this.playground = new Playground(canvas, xCount, yCount);
  this.colorMap = {0: "#f00", 1: "#0f0", 2: "#00f", 3: "#ff0", 4: "#f0f", 5: "#0ff", 6: "#000"};

  this.render = function(blocks) {
    var self = this;
    _.each(blocks, function(block) {
      self.playground.getPoint(block.x, block.y).attr({fill: self.colorMap[block.type]});
    });
  }

  var blocks = [
    new Block(2, 5, 7),
    new Block(2, 6, 7),
    new Block(2, 7, 7),
    new Block(2, 8, 7)
  ];
  this.render(blocks);
}

/*
function PlaygroundPoint(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.fill = function(color) {

  }
}
*/

function Playground(canvas, xCount, yCount) {
  this.canvas = canvas;
  this.xCount = xCount;
  this.yCount = yCount;
  this.points = new Array(xCount);

  var pWidth = canvas.width / xCount;
  var pHeight = canvas.height / yCount;
  var self = this;

  _.each(_.range(self.xCount), function(x) {
      self.points[x] = new Array(self.yCount);
      _.each(_.range(self.yCount), function(y) {
        self.points[x][y] = self.canvas.rect(x * pWidth, y * pHeight, pWidth, pHeight);
      });
  });

  this.getPoint = function(x, y) {
    return this.points[x][y];
  }
}