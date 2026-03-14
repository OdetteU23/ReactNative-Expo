import {cn} from '@/lib/utils';
import * as React from 'react';
import {TextInput, type TextInputProps} from 'react-native';

const Input = React.forwardRef<TextInput, TextInputProps>(
  ({className, ...props}, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          'border-input bg-background text-foreground placeholder:text-muted-foreground h-10 rounded-md border px-3 py-2 text-base',
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export {Input};
