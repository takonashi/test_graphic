// p5.js によるカラフルな波アニメーション
let yoff = 0.0; // 波形のオフセット
let canvas;     // 生成したキャンバスを保持

function setup() {
    // ウインドウサイズでキャンバスを生成し body 直下に配置
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(document.body);
    noStroke();

    // 画面上の戻るリンクと全画面ボタンを取得
    const btn = document.getElementById('fullscreen-btn');
    const back = document.getElementById('back-link');

    // フルスクリーン切り替えボタンのイベントを設定
    // 一度フルスクリーンに入ったらボタン類は非表示にする
    btn.addEventListener('click', () => {
        // fullscreen() の戻り値は現在の状態。! を付けて反転させる
        const fs = fullscreen();
        fullscreen(!fs);

        // フルスクリーンに入るときにボタンと戻るリンクを非表示にする
        if (!fs) {
            btn.style.display = 'none';
            back.style.display = 'none';
        }
    });
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
    // ウインドウサイズ変更時にキャンバスを更新
    resizeCanvas(windowWidth, windowHeight);
}
