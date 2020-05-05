import axios from 'axios';

const create = opts => {
  return axios.create({
    ...opts,
  });
};

export default { create };
