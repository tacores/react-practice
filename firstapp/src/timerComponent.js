import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  // カウントの状態
  const [count, setCount] = useState(0);

  // useEffectを使ってカウントを更新する
  useEffect(() => {
    // 1秒ごとにカウントを更新するためのタイマーを設定する
    const timer = setInterval(() => {
      // カウントをインクリメントする
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // コンポーネントがアンマウントされたときにクリーンアップを行う
    // 関数を返すかどうかはオプション。リソースのクリーンアップが必要な場合だけ関数を返す
    return () => {
      clearInterval(timer); // タイマーをクリアする
    };

    // useEffectの第2引数に空の配列を渡すことで、コンポーネントがマウントされたときのみ一度だけ実行される
    // 第2引数自体を渡さなければ、レンダリングのたびに実行される
  }, []);

  // カウントを表示する
  return <div>Count: {count}</div>;
};

export default TimerComponent;
