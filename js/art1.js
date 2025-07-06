// p5.js によるカラフルな波アニメーション
let yoff = 0.0; // 波形のオフセット

function setup() {
    // キャンバスを生成し、画面いっぱいに配置
    let canvas = createCanvas(windowWidth, 400);
    canvas.parent(document.body.querySelector('main'));
    noStroke();
}

function draw() {
    background(0);

    fill(0, 150, 255, 50); // 青みがかった色
    beginShape();
    let xoff = 0; // x 方向のオフセット
    for (let x = 0; x <= width; x += 10) {
        // ノイズ関数で波を生成
        let y = map(noise(xoff, yoff), 0, 1, 200, 300);
        vertex(x, y);
        xoff += 0.05;
    }
    yoff += 0.01; // 波をゆっくり動かす
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

function windowResized() {
    // ウィンドウサイズ変更時にキャンバスサイズを更新
    resizeCanvas(windowWidth, 400);
}
