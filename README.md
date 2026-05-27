# test_TypeScript_202605
test

reference  

**手を動かしながら学ぶ TypeScript**  
[https://www.amazon.co.jp/dp/4863543557](https://www.amazon.co.jp/dp/4863543557)  

**手を動かしながら学ぶ TypeScript sample**  
[https://github.com/awesome-typescript-book/code-snapshot](https://github.com/awesome-typescript-book/code-snapshot)  

**TypeScript + Node.js プロジェクトのはじめかた2020**  
[https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)  
>開発効率をあげるため、 tsc -> node の実行を自動的に行ってくれる ts-node パッケージを追加します。

**VScode の予測変換の主張が強すぎるので切る**  
[https://donbulinux.hatenablog.jp/entry/2025/12/16/192424](https://donbulinux.hatenablog.jp/entry/2025/12/16/192424)  
>Accept Suggestion On Enter 規定が on なので off にする  
>2. インライン候補、からすべてのファイルのチェックを外す   

**名前 'process' が見つかりません。ノードの型定義をインストールする必要があり**  
2. tsconfig.json の設定確認インストール後もエラーが消えない場合は、  
tsconfig.json の compilerOptions 内に "node" を追加してください。
```
json{
  "compilerOptions": {
    "types": ["node"]
  }
}
```
**【JavaScript】配列の includes() の使い方と注意点**  
[https://zenn.dev/fd2025/articles/642192f4827ed6](https://zenn.dev/fd2025/articles/642192f4827ed6)  
>JavaScriptで「配列に特定の値が含まれているか」を調べたいとき、  
>よく使われるのが includes() メソッドです。

**TypeScriptで理解するclass構文(private,public,readonly修飾子 初期化のショートカット)**  
[https://zenn.dev/kimura141899/articles/60bd0bc399296c](https://zenn.dev/kimura141899/articles/60bd0bc399296c)  

**【TypeScript】ユニオン型の使い方と活用法**  
[https://qiita.com/kenny-m/items/1a98f79c96a07f600a76](https://qiita.com/kenny-m/items/1a98f79c96a07f600a76)  


