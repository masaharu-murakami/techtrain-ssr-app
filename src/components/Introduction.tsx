import React from 'react';

// 自己紹介のデータ型を定義
interface IntroductionProps {
  name: string;
  occupation: string;
  hobbies: string[];
  goal: string;
}

// 自己紹介データ
const introductionData: IntroductionProps = {
  name: '村上 雅治',
  occupation: '無職',
  hobbies: ['釣り', 'カメラ', 'プログラミング', '読書', 'ラーメン巡り', 'グルメ', 'トレーニング'],
  goal: '9月19日までにRank4クリアを目指しています'
};

const Introduction: React.FC = () => {
  return (
    <div className="introduction">
      <h1>自己紹介</h1>
      <p>こんにちは！ techtrain で学習しています</p>
      <p>{introductionData.goal}</p>
      <ul>
        <li>名前: {introductionData.name}</li>
        <li>職業: {introductionData.occupation}</li>
        <li>趣味: {introductionData.hobbies.join(', ')}</li>
      </ul>
    </div>
  );
};

export default Introduction;
