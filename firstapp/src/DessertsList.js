// クラスの関係でいうとAppから渡すデータなのでここに定義するのは変だが、App.jsがごちゃごちゃするのでこっちで定義している
export const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
];

export function DessertsList(props) {
    return (
        <>
            <h2>List of low calorie desserts:</h2>
            <ul>
                {props.data.filter((d) => { return d.calories < 500; })
                    .sort((a, b) => { return a.calories - b.calories; })
                    .map((d) => { return <li>{d.name} - {d.calories} cal.</li> })}
            </ul>
        </>
    );
}
