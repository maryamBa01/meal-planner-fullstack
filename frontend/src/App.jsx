import { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);

  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [category, setCategory] = useState("");

  // GET
  const fetchMeals = () => {
    fetch("http://localhost:5000/api/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  // CREATE
  const addMeal = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        calories,
        category,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchMeals();
        setName("");
        setCalories("");
        setCategory("");
      });
  };

  // ❌ DELETE
  const deleteMeal = (id) => {
    fetch(`http://localhost:5000/api/meals/${id}`, {
      method: "DELETE",
    }).then(() => fetchMeals());
  };

  // ✏️ UPDATE (enkel prompt-version)
  const updateMeal = (meal) => {
    const newName = prompt("Nytt namn:", meal.name);
    const newCalories = prompt("Nya kalorier:", meal.calories);
    const newCategory = prompt("Ny kategori:", meal.category);

    fetch(`http://localhost:5000/api/meals/${meal._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName,
        calories: newCalories,
        category: newCategory,
      }),
    }).then(() => fetchMeals());
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Meal Planner</h1>

      {/* FORM */}
      <form onSubmit={addMeal}>
        <input
          placeholder="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Kalorier"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <input
          placeholder="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Lägg till meal</button>
      </form>

      {/* LISTA */}
      {meals.length === 0 ? (
        <p>Inga meals ännu</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal._id}>
              {meal.name} - {meal.calories} kcal - {meal.category}

              {/* ✏️ UPDATE */}
              <button onClick={() => updateMeal(meal)}>
                Edit
              </button>

              {/* 🗑️ DELETE */}
              <button onClick={() => deleteMeal(meal._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;