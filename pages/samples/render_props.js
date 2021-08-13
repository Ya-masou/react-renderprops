import { useState } from "react";
// import Image from "next/image";
import styles from "../../styles/Home.module.css";

const users = [
  {
    id: 1,
    name: "Yamada",
  },
  {
    id: 2,
    name: "Tanaka",
  },
  {
    id: 3,
    name: "Sato",
  },
  {
    id: 4,
    name: "Morimoto",
  },
];

const foods = [
  {
    id: 1,
    name: "ramen",
    price: 1200,
  },
  {
    id: 2,
    name: "curry and rice",
    price: 900,
  },
  {
    id: 3,
    name: "bread",
    price: 100,
  },
  {
    id: 4,
    name: "sushi",
    price: 200,
  },
];

function List({ data, keyExtractor, renderItem }) {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <div key={keyExtractor(item)}>{renderItem(item)}</div>
      ))}
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <h2>{user.name}</h2>
      <p>ID: {user.id}</p>
    </div>
  );
}

function FoodCard({ food }) {
  return (
    <div className={styles.card}>
      <h2>{food.name}</h2>
      <p>price: {food.price}</p>
      <p>ID: {food.id}</p>
    </div>
  );
}

export default function RenderProp() {
  return (
    <>
      <h1 className={styles.title}>Sample of Render Props</h1>
      <h3>Users list</h3>
      <List
        data={users}
        renderItem={(user) => <UserCard user={user} />}
        keyExtractor={(user) => user.id}
      />
      <h3>Foods list</h3>
      <List
        data={foods}
        renderItem={(food) => <FoodCard food={food} />}
        keyExtractor={(food) => food.id}
      />
    </>
  );
}
