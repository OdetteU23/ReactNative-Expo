import {cn} from '@/lib/utils';
import * as React from 'react';
import {TextInput, type TextInputProps} from 'react-native';

const Textarea = React.forwardRef<TextInput, TextInputProps>(
  ({className, ...props}, ref) => {
    return (
      <TextInput
        ref={ref}
        multiline
        textAlignVertical="top"
        className={cn(
          'border-input bg-background text-foreground placeholder:text-muted-foreground min-h-[80px] rounded-md border px-3 py-2 text-base',
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export {Textarea};
