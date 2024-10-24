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
  CameraClick,
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
  CameraRotate,
} from '@assets';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  fillColor = 'background',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    color: colors[color],
    fillColor: colors[fillColor],
    size,
  };

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  cameraClick: CameraClick,
  cameraRotate: CameraRotate,
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
