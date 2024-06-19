import React from 'react';
import {Pressable} from 'react-native';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  BellOnIcon,
  BookmarkFillIcon,
  BookmarkIcon,
  CameraIcon,
  ChatIcon,
  ChatOnIcon,
  CheckIcon,
  CheckRoundIcon,
  ChevronRightIcon,
  CommentIcon,
  ErrorRound,
  EyeOffIcon,
  EyeOnIcon,
  FlashOffIcon,
  FlashOnIcon,
  HeartFillIcon,
  HeartIcon,
  HomeFillIcon,
  HomeIcon,
  MessageIcon,
  MessageRoundIcon,
  MoreIcon,
  NewPostIcon,
  ProfileFillIcon,
  ProfileIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  TrashIcon,
} from '@assets';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SvgIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SvgIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SvgIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  checkRound: CheckRoundIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  errorRound: ErrorRound,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  messageRound: MessageRoundIcon,
  more: MoreIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
