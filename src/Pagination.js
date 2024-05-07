
// const Pagination = ({cardPerPage, totalCards, paginate}) =>{
//     const pageNumber = []

//     for (let i=1; i <= Math.ceil(totalCards/ cardPerPage); i++){
//         pageNumber.push(i)
//     }
//     // console.log('cardperpage', cardPerPage)
//     // console.log('total', totalCard)

//     return (
//         <div>
//             <ul className="pagination">
//                 {
//                     pageNumber.map(number=>
//                         <li className="page-item" key={number}>
//                             <a href="!#" className="page-link" onClick={()=> paginate(number)}>
//                                 {number}
//                             </a>
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Pagination;