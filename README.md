Cesiumを使ったKML可視化のサンプル
======================
Cesiumを使った日野市オープンデータを元にしたKMLファイル可視化のサンプルです。なお、日野市オープンデータに限らず、任意のKMLファイルをデジタルアース上に表示可能です。
 
### 使い方
------
視点移動、ジオコーディング、ImageryLayerの切り替え、現在地へ移動などの機能が実装されています。基本機能は「ヒロシマ・アーカイブ」のものに倣っています。


サンプルのKMLファイルと自分の作成したKMLファイルを入れ替えて、下記のカスタマイズを行うだけで表示できます。
 
### カスタマイズ
----------------
  
+   `index.html 106行目` :
    視点配列を作成します。label, lat, lng, heading, pitch, rangeを指定可能です。画面左上のプルダウンメニューに表示されます。260行目のchangeViewPoint関数で処理されます。
 
+   `index.html 130行目` :
    KML配列を作成します。labelとurlを指定可能です。data/kmlに格納したkmlファイルについて指定してください。

+   `Cesium/Widgets/InfoBox/InfoBoxDescription.css` :
    KMLの<description>タグ内のスタイルはこのCSSで指定してください。

+   `その他` :
    自由に編集してください。



### 参考リンク
----------------
1. [Cesium](http://cesiumjs.org/ "Cesium")
2. [KML Reference](https://developers.google.com/kml/documentation/kmlreference "KML Reference")
3. [オープンデータページ　日野](http://www.city.hino.lg.jp/index.cfm/196,129180,353,2132,html "オープンデータページ　日野")
4. [ヒロシマ・アーカイブ](http://hiroshima.mapping.jp/ "ヒロシマ・アーカイブ")
 
ライセンス
----------
Licensed under the [Apache License, Version 2.0][Apache]
[Apache]: http://www.apache.org/licenses/LICENSE-2.0
