export class Grid {
    
    constructor (canvas, ctx, size) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = size;

        // setup grid blocks
        this.xStep = this.canvas.width / size;
        this.yStep = this.canvas.height / size;
    }

    createGrid() {
        // init
        let g = new Path2D();

        // draw vertical lines
        for (let x = 0; x < this.canvas.width; x += this.xStep) {
            g.moveTo(x, 0);
            g.lineTo(x, canvas.height);
        }

        // // draw horizontal lines
        // for (let y = 0; y < this.canvas.height; y += this.yStep) {
        //     g.moveTo(0, y);
        //     g.lineTo(canvas.width, y);
        // }

    }

}