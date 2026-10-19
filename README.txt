TAKUYA Portfolio — starter template

【開き方】
1. ZIPを展開
2. index.html をブラウザで開く

【編集するところ】
- 名前や自己紹介：index.html
- 作品カード：index.html の WORKS セクション
- 色・余白・レイアウト：style.css
- 動き：script.js
- お問い合わせ先：index.html の your.email@example.com を自分のメールに変更

【作品画像の差し替え】
現在のカードは画像の代わりにCSSの仮ビジュアルを表示しています。
実際の作品画像を用意したら、各カードの <span class="art art1"> などを
<img class="art-img" src="assets/work-01.jpg" alt="作品の説明"> に置き換え、
style.css に .art-img{width:100%;height:clamp(170px,26vw,330px);object-fit:cover;display:block} を追加してください。
画像ファイルを assets フォルダに置き、work-01.jpg などの名前に合わせてください。

【公開】
GitHub Pagesなどで公開できます。公開前にプロフィール、作品情報、メールアドレスを必ず自分の内容に直してください。
外部フォントを読み込むため、ネット接続時はGoogle Fontsが使われます。
