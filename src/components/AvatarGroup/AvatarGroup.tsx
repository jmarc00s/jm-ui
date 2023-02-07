import React, { ReactElement } from 'react';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { CounterAvatar } from './components/CounterAvatar';

type AvatarGroupSizeType = 'xs' | 'sm' | 'md' | 'lg';

export type AvatarGroupProps = {
  avatars: AvatarProps[];
  size?: AvatarGroupSizeType;
  counter?: number;
};

export const AvatarGroup = ({
  avatars,
  size = 'sm',
  counter,
}: AvatarGroupProps): ReactElement => (
  <div className="avatar-group -space-x-6">
    {avatars.map((avatar, index) => (
      <Avatar size={size} key={`${avatar.title}-${index}`} {...avatar} />
    ))}
    {!!counter && <CounterAvatar counter={counter} size={size} />}
  </div>
);
