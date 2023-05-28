// import { Typography, Box } from '@mui/material';

// export function BoxForArgs({ args }) {
// // typename переделать на тэги (убрать !)

//   return (
//     <Box sx={{ display: 'flex', gap: '10px' }}>
//       {args.map((arg) => {
//         let typeName = arg.type.name;
//         if (arg.type.name === null) {
//           typeName = arg.type.ofType.name !== null ? `${arg.type.ofType.name}!` : ' [ID!]!';
//         }
//         return (
//           <Box sx={{ display: 'flex' }}>
//             <Box sx={{ display: 'flex', gap: '5px' }}>
//               <Typography>{`${arg.name}:`}</Typography>
//               <Typography sx={{ color: 'blue' }}>{typeName}</Typography>
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// }
