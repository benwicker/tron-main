export class Arrow {
    constructor(color, ctx, ox, oy) {
        this.color = color;
        this.ctx = ctx;
        this.ox = ox;
        this.oy = oy;
    }
    
    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.ox, this.oy); // (75, 50) 
        this.ctx.lineTo(this.ox + 15, this.oy + 5); // (100, 75)
        this.ctx.lineTo(this.ox + 10, this.oy); // (100, 75)
        this.ctx.lineTo(this.ox + 15, this.oy - 5); // (100, 25)
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}