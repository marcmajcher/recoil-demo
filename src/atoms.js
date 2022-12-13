import { atom } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const priceState = atom({
  key: 'priceState',
  default: 10,
})
