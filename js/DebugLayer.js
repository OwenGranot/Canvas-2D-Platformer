export default class DebugLayer {
  constructor() {}

  draw(ctx, nEntities, drawTime, sx, sy) {
    const x = sx + 10;
    const drawList = [
      `Entities: ${nEntities}`,
      `Draw Time: ${drawTime} ms`,
      `Close Debug: F9`,
    ];
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    drawList.forEach((item, i) => {
      ctx.fillText(item, x, sy + 30 * i);
    });
  }
}
