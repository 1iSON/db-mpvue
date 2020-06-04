import fly from './http'
/**
 * 登录 - 小程序微信授权
 * @param params
 * @returns {FlyPromise<any> | *}
 */
export const loginMini = params => fly.post('/movie/user/login/loginMini', params);
/**
 * 首页北京地區電影
 * @param params
 * @returns {FlyPromise<any> | *}
 */
export const nowShow = params => fly.get('/v2/movie/in_theaters', params);

/**
 * 首页即將上映電影
 * @param params
 * @returns {FlyPromise<any> | *}
 */
export const upcomingMovie = params => fly.get('/v2/movie/coming_soon', params);

/**
 * 首页新片榜電影
 * @param params
 * @returns {FlyPromise<any> | *}
 */
export const newMovie = params => fly.get('/v2/movie/new_movies', params);

/**
 * 首页TOP250
 * @param params
 * @returns {FlyPromise<any> | *}
 */
export const top250 = params => fly.get('/v2/movie/top250', params);
/**
 * 首页详情
 * @param params
 * @returns {FlyPromise<any> | *}
 */
export const detail = id => fly.get('/v2/movie/subject/' + id);//27003543
/**
 * 电影搜索
 * @param params
 * @returns {FlyPromise<any> | *}
 */
export const search = inputValue => fly.get('/v2/movie/search/?q=' + inputValue);