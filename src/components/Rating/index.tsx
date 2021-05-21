import { Stack } from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';
import { RatingProps } from './dtos';

export function Rating({ value }: RatingProps): JSX.Element {
  return (
    <Stack direction="row">
      {[...Array(Math.floor(value)).keys()].map(() => (
        <FiStar fill="#3D3D3D" stroke="#3D3D3D" />
      ))}
      {[...Array(5 - Math.floor(value)).keys()].map(() => (
        <FiStar />
      ))}
    </Stack>
  );
}
