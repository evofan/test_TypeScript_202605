# Reviewing TypeScript

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
>constructorの初期化時に定義すればよくなるので大分スッキリしました  

**【TypeScript】ユニオン型の使い方と活用法**  
[https://qiita.com/kenny-m/items/1a98f79c96a07f600a76](https://qiita.com/kenny-m/items/1a98f79c96a07f600a76)  
>ユニオン型の型注釈は、2つ以上の型を|で繋げて記載します。  

**【TypeScript】 型エイリアス（type）とは？**  
[https://note.com/spark_branding_/n/nc2f877066a7c](https://note.com/spark_branding_/n/nc2f877066a7c)  
>TypeScriptでは、type キーワードを使って「型に名前をつける」ことができます  
>これを 型エイリアス（type alias） と呼びます  
>2. 一番よく使う「オブジェクト型」の例
```
type 型名 = 型の定義;

type User = {
  id: string;
  name: string;
  age: number;
};

const u: User = { id: "u1", name: "Taro", age: 20 };
```

**型アサーション「as」(type assertion)**  
[https://typescriptbook.jp/reference/values-types-variables/type-assertion-as](https://typescriptbook.jp/reference/values-types-variables/type-assertion-as)  
>TypeScriptには、型推論を上書きする機能があります。その機能を型アサーション(type assertion)と言います
>型アサーションはコンパイラに「私を信じて！私のほうが型に詳しいから」と伝えるようなものです
```
型アサーションの書き方は2つあります。1つはas構文です。
const value: string | number = "this is a string";
const strLength: number = (value as string).length;

もう1つはアングルブラケット構文(angle-bracket syntax)です。
const value: string | number = "this is a string";
const strLength: number = (<string>value).length;
```
>型アサーションはキャストではないため、TypeScriptでは型アサーションをキャストとは呼ばないことになっています  

**TypeScript ジェネリクス**  
[https://recursionist.io/learn/languages/typescript/oop/generics](https://recursionist.io/learn/languages/typescript/oop/generics)  
>ジェネリクスは、コードの再利用性と柔軟性を高めるための強力なツールです
>ジェネリクスを使うことで、型安全性を犠牲にすることなく、複数のデータ型を扱うことができるコードを書くことができます
```
ジェネリクスを使用する一例として、恒等関数を見てみます。
function identity(a: number): number {
    return a;
}

それでは、引数が文字列や配列の場合はどうでしょうか？それぞれのデータ型に対して別々の関数を書くこともできますが、
それでは繰り返しになり、効率が悪くなってしまいます。
その代わりに、ジェネリクスを使って恒等関数をより柔軟にすることができます。
function identity<T>(a: T): T {
    return a;
}

関数名と括弧の間に型パラメータTを追加しています。
これはTypeScriptに対して、この関数を汎用的なものにしたい、つまりどんなデータ型でも扱えるようにしたいということを伝えるものです。
```

**TypeScriptのTuple型：初学者向けガイド**  
[https://qiita.com/suyamatatsuya/items/8c256036020f99f983da](https://qiita.com/suyamatatsuya/items/8c256036020f99f983da)  
>Tuple型は配列に似ていますが、より具体的に定義されています
>Tuple型は、特定の数と型の順序で要素を持つ配列です。配列とは異なり、Tupleは各要素の型と順序が決まっています
```
Tuple型は、各要素の型を順番に指定して定義します。
let exampleTuple: [number, string];
exampleTuple = [42, "Hello"]; // OK
exampleTuple = ["Hello", 42]; // エラー: 順序が違います

フォームデータの処理
例えば、フォームから入力されたデータを処理する場合に、Tupleを使って複数の値を返すことができます。
type FormData = [string, number, boolean];
function processFormData(name: string, age: number, isMember: boolean): FormData {
  return [name, age, isMember];
}
let formData = processFormData("John", 25, true);
console.log(formData); // ["John", 25, true]

オプショナル要素
Tupleの一部の要素をオプショナル（省略可能）にすることができます。
let optionalTuple: [number, string?];
optionalTuple = [42];       // OK
optionalTuple = [42, "Hi"]; // OK

可変長Tuple
Tupleの最後に可変長引数（レスト要素）を追加できます。
let restTuple: [number, ...string[]];
restTuple = [42];                   // OK
restTuple = [42, "Hello", "World"]; // OK
```

　　　  
**抽象クラスとその使い方 - TypeScript**  
[https://qiita.com/yuu_7_ns/items/2f76a8b084ba1641d15d](https://qiita.com/yuu_7_ns/items/2f76a8b084ba1641d15d)  
>これによって、他のプログラマに対して「このクラスは親クラスであり、直接インスタンス化せずにサブクラス化して使うべきだ」というシグナルを送ることができます  

**TypeScript で抽象クラスと抽象メンバを使って変更に強いコードを設計する**  
[https://numb86-tech.hatenablog.com/entry/2020/02/24/141849](https://numb86-tech.hatenablog.com/entry/2020/02/24/141849)  
>TypeScript では、abstractキーワードを使うことで、抽象クラスや抽象メンバであることを明示的に宣言できる
>そのため、抽象クラスと具象クラスを使った設計を JavaScript よりも行いやすいという利点がある

**TypeScriptにおけるクラスのimplementsとextends**  
[https://zenn.dev/lyio/articles/fab176ca55d415](https://zenn.dev/lyio/articles/fab176ca55d415)  
>implementsの概要  
>目的: クラスが特定のインターフェースを実装することを示す  
>使用方法: クラスがインターフェースで定義されたプロパティやメソッドを持つことを強制する  
>  
>extendsの概要  
>目的: クラスが他のクラスを継承することを示す  
>使用方法: 基底クラス（親クラス）のプロパティやメソッドを派生クラス（子クラス）に引き継ぐ
>派生クラスは基底クラスを拡張し、新しいプロパティやメソッドを追加できる

※p155以降、サンプルがエラーが出て進まないので停止、nodeのversionを本のv14に合わせても駄目  
<img src="https://evofan.github.io/test_TypeScript_202605/screenshot/1.png" width="50%">  

**Error: error:0308010C:digital envelope routines::unsupported**  
[https://zenn.dev/su3_hokkaido/articles/2024-12-01_digital_envelop_routines_unsupported](https://zenn.dev/su3_hokkaido/articles/2024-12-01_digital_envelop_routines_unsupported)  

**Windowsで「’NODE_ENV’ は、内部コマンドまたは外部コマンド、操作可能なプログラムまたはバッチ ファイルとして認識されていません。」と言われる時**  
[https://www.flying-h.co.jp/media/2023/04/03/node_env-error/](https://www.flying-h.co.jp/media/2023/04/03/node_env-error/)  

※修正したので再開、p155～  
<img src="https://evofan.github.io/test_TypeScript_202605/screenshot/2.png" width="50%">  
