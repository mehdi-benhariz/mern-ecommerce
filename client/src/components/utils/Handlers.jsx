export const setForm = (e, field, state, setState) => {
  var aux = state;
  aux[field] = e.target.value;
  setState(aux);
};
