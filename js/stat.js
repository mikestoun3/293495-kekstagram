'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillRect(100, 30, 420, 270);
  ctx.fillStyle = 'white';

  ctx.fillRect(90, 20, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7))';

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var histogramX = 150;
  var step = histogramHeight / max;
  var columnIndent = 90;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];

    var height = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
    } else {
      ctx.fillStyle = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    ctx.fillRect(histogramX + columnIndent * i, 250, 40, -height);
    ctx.fillStyle = '#000';
    ctx.font = '10px PT Mono';
    ctx.fillText(name + ':' + time.toFixed(0), histogramX + columnIndent * i, 120 + histogramHeight);
  }
};
