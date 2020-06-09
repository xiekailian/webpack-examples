import vendor2 from 'vendor2';
import utility2 from './utility2';
import utility3 from './utility3';

export default ()=>{
    //懒加载
    import(/* webpackChunkName: "async1" */ './async1');
    import(/* webpackChunkName: "async2" */ './async2');
    console.log('pageB');
}