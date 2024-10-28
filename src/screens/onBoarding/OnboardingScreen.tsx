import React, {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useSettingsService} from '@services';

import {Box} from '@components';
import {OnboardingScreenProps} from '@routes';

import {OnboardingPage} from './components/OnboardingPage';
import {OnboardingPageItem, onboardingPages} from './onboardingData';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const {finishOnboarding} = useSettingsService();
  const [pageIndex, setPageIndex] = useState(0);

  const flatListRef = useRef<FlatList<OnboardingPageItem>>(null);

  function onNextPage() {
    const isNextPage = pageIndex === onboardingPages.length - 1;
    if (isNextPage) {
      finishOnboarding();
    } else {
      const nextIndex = pageIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setPageIndex(nextIndex);
    }
  }

  function renderItem({item}: ListRenderItemInfo<OnboardingPageItem>) {
    return (
      <OnboardingPage
        pageItem={item}
        onPressNext={onNextPage}
        onPressSkip={finishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} backgroundColor="background">
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        horizontal
        data={onboardingPages}
        renderItem={renderItem}
      />
    </Box>
  );
}
