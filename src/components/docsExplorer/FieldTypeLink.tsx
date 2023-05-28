// import { useAppDispatch } from 'src/hooks/reduxHooks';
// import { addRout } from 'src/store/slices/docsSlice';
// import { Box } from '@mui/material';
// import { FakeLink } from '../FakeLink/FakeLink';

// export function FieldTypeLink({ types, name }) {
//   const dispatch = useAppDispatch();
//   const clickHandler = (typeName: string) => dispatch(addRout(typeName));

//   let fieldTypeName = types.name;
//   if (!fieldTypeName) {
//     const nextName = types.ofType;
//     fieldTypeName = nextName.name ? nextName.name : nextName.ofType.name;
//     return (
//       <Box sx={{ display: 'flex' }}>
//         <span>[</span>
//         <FakeLink
//           onClick={() => {
//             if (name === 'ids') {
//               return clickHandler('ID');
//             }
//             return clickHandler(fieldTypeName);
//           }}
//         >
//           {name === 'ids' ? 'ID' : fieldTypeName}
//         </FakeLink>
//         <span> !]</span>
//       </Box>
//     );
//   }

//   return <FakeLink onClick={() => clickHandler(fieldTypeName)}>{fieldTypeName}</FakeLink>;
// }
