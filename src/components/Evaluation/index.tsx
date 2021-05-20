import { Stack } from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';

export function Evaluation(): JSX.Element {
  return (
    <Stack direction="row">
      <FiStar fill="#3D3D3D" stroke="#3D3D3D" />
      <FiStar fill="#3D3D3D" stroke="#3D3D3D" />
      <FiStar fill="#3D3D3D" stroke="#3D3D3D" />
      <FiStar />
      <FiStar />
    </Stack>
  );
}
