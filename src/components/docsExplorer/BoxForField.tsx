// import { mainRout } from 'src/store/slices/docsSlice';
// import { Box, Typography } from '@mui/material';
// import { BoxForArgs } from './BoxForArgs';
// import { FieldTypeLink } from './FieldTypeLink';

// export function BoxForField({ field, rout }) {
//   if (rout === mainRout) {
//     return (
//       <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <Typography variant='h6'>{field.name}</Typography>

//         <Box sx={{ display: 'flex', gap: '5px' }}>
//           {field.args && (
//             <>
//               <span>(</span>
//               <BoxForArgs args={field.args} />
//               <span>) :</span>
//             </>
//           )}

//           <FieldTypeLink types={field.type} />
//         </Box>

//         <Typography sx={{ color: 'green' }}>{field.description}</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
//       <Typography variant='h6'>{field.name}</Typography>
//       <span>:</span>
//       <FieldTypeLink types={field.type} />
//     </Box>
//   );
// }
