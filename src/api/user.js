import { post } from "@/utils/request";

export default class user {
     /**
       * @description:
       * @param {参数类型} 参数名称
       * @param {参数类型} 参数名称
       * @return 没有返回信息写 void / 有返回信息 {返回类型} 描述信息
       */
     static async getUserInfo (data) {
        return post('/login', data)
     }
}
