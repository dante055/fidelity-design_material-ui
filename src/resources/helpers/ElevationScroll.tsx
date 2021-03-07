import React from 'react';
import { useScrollTrigger } from '@material-ui/core';

interface ElevationProps {
  children: React.ReactElement;
}

export const ElevationScroll = (props: ElevationProps) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
