Cesiumを使ったKML可視化のサンプル
======================
Cesiumを使った日野市オープンデータを元にしたKMLファイル可視化のサンプルです。なお、日野市オープンデータに限らず、任意のKMLファイルをデジタルアース上に表示可能です。


首都大学東京システムデザイン学部インダストリアルコース3年生の授業向けに作成しました。プログラミング初心者でも、オープンデータを使ったデジタルアースコンテンツを作れます。受講者以外のかたもぜひご活用ください。
 
### 使い方

視点移動、ジオコーディング、ImageryLayerの切り替え、現在地へ移動、ストリートビュー起動、ヘルプ起動の各機能がすでに実装されています。これらの機能は「ヒロシマ・アーカイブ」のものに倣っています。

+ 視点移動：左上のメニューボタン
+ ジオコーディング：左上のフォーム
+ ImageryLayer切り替え：右上のパラメータボタン
+ 現在地へ移動：下中央のボタン
+ ストリートビュー起動：ビルボード（アイコン）をダブルクリック
+ ヘルプ起動：右上の「？」ボタン

 
### カスタマイズ

サンプルのKMLファイルと自分の作成したKMLファイルを入れ替えて、下記のカスタマイズを行うだけで表示できます。

+   `index.html 106行目` :
    視点配列を作成します。label, lat, lng, heading, pitch, rangeを指定可能です。画面左上のプルダウンメニューに表示されます。260行目のchangeViewPoint関数で処理されます。
+   `index.html 130行目` :
    KML配列を作成します。labelとurlを指定可能です。data/kmlに格納したkmlファイルについて指定してください。
+   `Cesium/Widgets/InfoBox/InfoBoxDescription.css` :
    KMLの<description>タグ内のスタイルはこのCSSで指定してください。
+   `その他` :
    自由に編集してください。

### 日野市オープンデータのKMLファイルについて

日野市オープンデータをGoogleFusionTablesを使ってKML化したものです。ただし、以下の編集を施しています。

+   `MultiGeometryタグの削除` :
    GFTからKMLを書き出すと自動的にMultiGeometryタグが追加され、PointとLinearRingが格納されています。Cesiumでそのまま表示すると、画面上にLinearRingのポリゴンが描画され、視覚的に煩雑なので、タグのみ削除しています。LinearRingタグは実害がないのでそのままにしてあります。ファイル容量を減らしたい場合はPointタグのみ残すのが良いと思います。

### 参考リンク

1. [GitHub Pagesでの閲覧](http://wtnv-lab.github.io/cesiumGitHubPages/ "日野市オープンデータ可視化")
2. [Cesium](http://cesiumjs.org/ "Cesium")
3. [KML Reference](https://developers.google.com/kml/documentation/kmlreference "KML Reference")
4. [Fusion Tablesを使ってみる](http://pc.nikkeibp.co.jp/article/column/20110829/1036486/ "Fusion Tablesを使ってみる-PC Online")
5. [オープンデータページ　日野](http://www.city.hino.lg.jp/index.cfm/196,129180,353,2132,html "オープンデータページ　日野")
6. [ヒロシマ・アーカイブ](http://hiroshima.mapping.jp/ "ヒロシマ・アーカイブ")
 
### ライセンス

Licensed under the [Apache License, Version 2.0][Apache]
[Apache]: http://www.apache.org/licenses/LICENSE-2.0
