# 仕様

XMLの構造は大きく二つに分かれている。

- topicref
- classdef 多分 class definitionの略

topcrefはそれぞれclass オブジェクトのリストとなっておりhref属性を持っています。
つまりこのhrefと各classのnameは対の関係になっておりこれでtopcref自体各プロパティへのリンクと
なる。

classdef以下に各種オブジェクトモデルが格納されている。

### Bridge
Bridgeだけなぜかtopicrefの構造が少し異なる。なのでBridgeの時とそれ以外で分岐させる必要あり。

### Error boundary
各種コンポーネントでエラーが取得できるように細かく配置しないと
どこでエラーが起こっているか分かりづらくなります。
XMLの構造が複雑でアプリケーションによって微妙に異なるのでエラー対策は必須。


## オブジェクトモデル

構造おおよそこんな感じ
- dictionary
    - map
       - topicref
    - classdef
       - elements
  	      - property
  	      - method

ただしelementsがArrayだったりObjectだったりまた各種propertyとmethod内のオブジェクトの構造も
バラバラなので注意。repeatObjectコンポーネントでこの辺りは解決しているつもり。

## 型データ
パースしたJSONからも型データを使っているがそれだけでも十分でない。完全に上手くはいかない。