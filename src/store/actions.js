export const updateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user,
});

export const fetchTodos = (data) => ({
  type: "FETCH_TODOS",
  payload: data,
});
