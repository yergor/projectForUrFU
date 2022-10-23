import { $authHost, $host } from ".";

export const addGame = async(game) => {
  const {data} = await $authHost.post('api/game/', {
    name: game.name, 
    info: game.info, 
    developerId: game.developerId, 
    yearId: game.yearId, 
    categoryId: game.categoryId, 
    ref: game.ref
  });
  return data;
}

export const getGameList = async() => {
  const {data} = await $host.get('api/game/');
  return data;
}

export const getGame = async(id) => {
  const {data} = await $host.get('api/game/' + id);
  console.log(data);
  return data;
}

export const deleteGame = async(id) => {
  const {data} = await $authHost.delete('api/game/' + id);
  return data;
}

export const getYears = async() => {
  const {data} = await $host.get('api/year');
  return data;
}

export const getCategories = async() => {
  const {data} = await $host.get('api/category');
  return data;
}

export const getDevelopers = async() => {
  const {data} = await $host.get('api/developer');
  return data;
}