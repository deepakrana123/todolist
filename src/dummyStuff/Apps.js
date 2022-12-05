// import React,{useEffect} from 'react'

// const App = () => {
// // compose evaluate form right to left and pipe evaluate form left to right
// // reduceRight reduces function form right to left adn reduceLeft reduces function form left to right:
// //  ;
//   // const compose=(...functions)=>{
//   //   return (...args)=>{
//   //     return functions.reduceRight((args,fn)=> fn(...args),args)
//   //   }
//   // }

//   // const pipe=(...functions)=>{
//   //   return (...args)=>{
//   //     return functions.reduceLeft((args,fn)=> fn(...args),args)
//   //   }
//   // }

//   // implement promise.all

//   function setText(text,timeout) {
//     return new Promise((resolve,reject)=>
//     {
//       setTimeout(()=>{
//             resolve(text)
//       },timeout)
//     });

//   };

//   const myPromiseAll=function(promise){
//     let result=0;
//     return new Promise((resolve,reject)=>{

//       if(promise.length>0){
//         promise.forEach((res)=>{
//           res.then((resul,index)=>{
//             result.push(resul)
//             if(index===promise.length-1){ resolve(result)}
//           }).catch((err)=>{
//              reject(result)
//           });
//         });
  
//       }
//     });
   
//   };

//   const a=Promise.all([setText("hello",1000),Promise.resolve("hee"),Promise.reject("bye")]).then((result)=>{
//     console.log(result)
//   })
//   console.log(a)
//   return (
//     <div className="container">App
//        <ul className="product">
//         <li className="shirt">shirt</li>
//         <li className="window">windowshirt</li>
//         <li className="bshirt">bshirt</li>
//        </ul>
    
//     </div>
//   )
// }

// export default App