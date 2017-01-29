'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillRect(100, 70, 420, 210);
  ctx.fillStyle = 'white';

  ctx.fillRect(90, 60, 420, 210);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7))';

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 110, 90);
  ctx.fillText('Список результатов:', 110, 110);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var histogramX = 140;
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
    ctx.fillRect(histogramX + columnIndent * i, 220, 40, -height);
    ctx.fillStyle = '#000';
    ctx.font = '10px PT Mono';
    ctx.fillText(name + ':' + time.toFixed(0), histogramX + columnIndent * i, 100 + histogramHeight);
  }
};
