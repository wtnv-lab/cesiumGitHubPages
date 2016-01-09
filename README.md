Cesiumを使った日野市オープンデータ可視化のサンプル
======================
首都大学東京「ネットワーク演習B」におけるCesiumを使った日野市オープンデータ可視化のサンプルです。 
 
使い方
------
KMLを入れ替えて、下記のカスタマイズを行うだけで表示できます。
 
カスタマイズ
----------------
  
+   `index.html 106行目` :
    視点配列を作成します。label, lat, lng, heading, pitch, rangeを指定可能です。画面左上のプルダウンメニューに表示されます。260行目のchangeViewPoint関数で処理されます。
 
+   `index.html 130行目` :
    KML配列を作成します。labelとurlを指定可能です。data/kmlに格納したkmlファイルについて指定してください。

+   `Cesium/Widgets/InfoBox/InfoBoxDescription.css` :
    KMLの<description>タグ内のスタイルはこのCSSで指定してください。

+   `その他` :
    <head></head>の間ほか、自由に編集してください。


 
関連情報
--------
### リンク、ネストしたリスト
1. [リンク1](http://www.city.hino.lg.jp/index.cfm/196,129180,353,2132,html "オープンデータページ　日野")
2. [リンク2](http://hiroshima.mapping.jp/ "ヒロシマ・アーカイブ")
 
ライセンス
----------
Licensed under the [Apache License, Version 2.0][Apache]
[Apache]: http://www.apache.org/licenses/LICENSE-2.0
