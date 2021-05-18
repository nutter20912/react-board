/**
 * 假 API
 * @param {int} ms 毫秒
 * @param {object} res 結果
 * @returns {Promise}
 */
export const fakeApi = (ms = 1000, res) => (
  new Promise((resolve) => setTimeout(() => resolve(res), ms))
);