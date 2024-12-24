import React from 'react';

import {Box, Text} from '@components';

type Props = {
  followersCount: string;
  followingCount: string;
  publicationCount: string;
};

export function ProfileMetaData({
  followersCount,
  followingCount,
  publicationCount,
}: Props) {
  const items: ItemType[] = [
    {value: publicationCount, label: 'Publicações'},
    {value: followersCount, label: 'Seguidores'},
    {value: followingCount, label: 'Seguindo'},
  ];

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      mt="s24"
      columnGap="s32">
      {items.map(item => (
        <Item key={item.label} {...item} />
      ))}
    </Box>
  );
}

type ItemType = {
  value: string;
  label: string;
};

function Item({value, label}: ItemType) {
  return (
    <Box alignItems="center">
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </Box>
  );
}
