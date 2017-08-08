/**
 * Created by developer on 17-8-7.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    loginUin: 0,
    page: 'other',
    tpl: 'v12',
    needNewCode: 0,
    rnd: Math.random()
  })

  return jsonp(url, data, options)
}
