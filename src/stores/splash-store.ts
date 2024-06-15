import { types } from 'mobx-state-tree';

const SplashStore = types
  .model('SplashStore', {
    isShow: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    updateIsShow(isShow: boolean) {
      self.isShow = isShow;
    },
  }));

export default SplashStore.create({ isShow: false });
