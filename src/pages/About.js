import React from "react";

function About() {
  return (
    <div className="about" style={{ minHeight: "100vh" }}>
      <h1>About this site</h1>
      <p>
        本サイトではPexels
        APIを利用して、画像検索機能を提供しています。ホームページでは、最初に15枚の厳選された写真が表示され、[more]ボタンを押すことで新しい画像が自動的に追加されます。特定の画像を検索する際は、検索バーにキーワードを入力して[search]ボタンを押してください。同様に、[more]ボタンを押すことで新しい画像が自動的に追加されます。
      </p>
    </div>
  );
}

export default About;
