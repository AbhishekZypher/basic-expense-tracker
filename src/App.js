import { useState } from 'react';

import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense';

import './App.css';

let dataObj = [
  {
    id: 1,
    name: "Iphone 14",
    category: "Phone",
    value: 250.75,
    date: new Date(2021, 3, 9),

  },
  {
    id: 2,
    date: new Date(2022, 10, 8),
    name: "Iphone 14 Pro",
    category: "Phone",
    value: 150.50
  },
  {
    id: 3,
    date: new Date(2022, 7, 11),
    name: "Samsung Z fold",
    category: "Phone",
    value: 180.25
  },
  {
    id: 4,
    date: new Date(2022, 5, 25),
    name: "Samsung s22 ultra",
    category: "Phone",
    value: 300.00
  },
  {
    id: 5,
    date: new Date(2023, 5, 1),
    name: "Samsung s22",
    category: "Phone",
    value: 200.80
  },
  {
    id: 6,
    date: new Date(2022, 5, 1),
    name: "Xiaomi Note 10 Pro",
    category: "Phone",
    value: 120.00
  },
  {
    id: 7,
    date: new Date(2022, 5, 1),
    name: "Apple Macbook pro",
    category: "Laptop",
    value: 80.50
  },
  {
    id: 8,
    date: new Date(2021, 5, 1),
    name: "Apple Macbook",
    category: "Laptop",
    value: 50.25
  },
  {
    id: 9,
    date: new Date(2023, 5, 1),
    name: "Acer laptop",
    category: "Laptop",
    value: 90.00
  },
  {
    id: 10,
    date: new Date(2020, 5, 1),
    name: "Lenevo laptop",
    category: "Laptop",
    value: 270.30
  },
  {
    id: 11,
    date: new Date(2020, 5, 15),
    name: "Hp Laptop",
    category: "Laptop",
    value: 150.00
  },
  {
    id: 12,
    date: new Date(2021, 5, 12),
    name: "Playstation 5",
    category: "Console",
    value: 320.75
  },
  {
    id: 13,
    date: new Date(2020, 5, 10),
    name: "Xbox series-X",
    category: "Console",
    value: 280.50
  },
  {
    id: 14,
    date: new Date(2023, 5, 11),
    name: "Nintendo",
    category: "Console",
    value: 190.25
  },
  {
    id: 15,
    date: new Date(2022, 25, 1),
    name: "Nothing phone",
    category: "Phone",
    value: 220.00
  },
  {
    id: 16,
    date: new Date(2020, 15, 1),
    name: "Alienware laptop",
    category: "Laptop",
    value: 170.80
  },
  {
    id: 17,
    date: new Date(2023, 5, 1),
    name: "Microsoft surface pro",
    category: "Laptop",
    value: 140.00
  },
  {
    id: 18,
    date: new Date(2021, 5, 1),
    name: "Sony Bravia QOLED",
    category: "Tv",
    value: 110.25
  },
  {
    id: 19,
    date: new Date(2023, 5, 11),
    name: "Samsung Frame TV",
    category: "Tv",
    value: 60.00
  },
  {
    id: 20,
    date: new Date(2023, 5, 1),
    name: "Sony Wh-1000xm5 headphones",
    category: "Headphones",
    value: 180.30
  },
  {
    id: 21,
    date: new Date(2023, 5, 1),
    name: "iPhone charging cable",
    category: "Accessories",
    value: 30.99
  },
  {
    id: 22,
    date: new Date(2022, 5, 1),
    name: "iPhone charger",
    category: "Accessories",
    value: 80.99
  }
];

function App() {
  const [selectedVal, setSelectedVal] = useState(dataObj);

  const newExpenseData = (newExpenseObj) => {
    setSelectedVal((prevState) => {
      return [newExpenseObj, ...prevState]
    });
  };

  return (
    <div className="App">
      <NewExpense newExpenseData={newExpenseData} />
      <Expenses list={selectedVal} />
    </div>
  );
}

export default App;
