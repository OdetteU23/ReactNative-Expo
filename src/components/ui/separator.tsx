import {cn} from '@/lib/utils';
import * as React from 'react';
import {View, type ViewProps} from 'react-native';

const Separator = React.forwardRef<View, ViewProps>(
  ({className, ...props}, ref) => {
    return (
      <View
        ref={ref}
        className={cn('bg-border my-2 h-[1px] w-full', className)}
        {...props}
      />
    );
  },
);

Separator.displayName = 'Separator';

export {Separator};
