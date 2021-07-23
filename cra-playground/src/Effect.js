import React, { useEffect, useState } from "react";

const Effect = () => {
  const [data, setData] = useState(null);
  const [text, setText] = useState(false);

  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    setData(json);
    console.log(json);
  };

  useEffect(() => {
    console.log("이펙트 실행");
    getData();
  }, []);

  const handleButton = () => {
    setText(!text);
    console.log(text);
  };

  if (!data) {
    return <div>데이터 없음</div>;
  }

  return (
    <div>
      <p>제목 : {data.title}</p>
      <button onClick={handleButton}>내용</button>
    </div>
  );
};

export default Effect;
