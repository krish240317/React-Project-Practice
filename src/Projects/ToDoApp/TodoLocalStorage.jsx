const todoKey = "reactTodo";
export const getLocalData = () => {
    const rawTodo = localStorage.getItem(todoKey);
    if (!rawTodo) return [];
    return JSON.parse(rawTodo);
}

export const setLocalData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
}