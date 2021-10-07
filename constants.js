import Immutable from "immutable"
import request from 'umi-request'

const globalVar = global
// globalVar.ef = Immutable.fromJS({
globalVar.ef = {
  common: 'ef global vars both sides',
  frontend: 'vars from front end',
  func: ()=>{console.log('func')},
  isServer: ()=> typeof window === 'undefined',
  request,
  // useStore,
  // router: ()=>useRouter(),
  store:{
      site:{},
      user:{},
  }
}