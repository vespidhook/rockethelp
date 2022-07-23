import { Text as NativeBaseText, Button as NativeBaseButton, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
    title: string;
    isActive?: boolean;
    type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
    const { colors } = useTheme();

    const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];
  return (
    <NativeBaseButton
        variant="outline"
        borderWidth={isActive ? 1 : 0}
        borderColor={colorType}
        bgColor="gray.600"
        flex={1}
        size="sm"
        {...rest}
    >
        <NativeBaseText color={isActive ? colorType : "gray.300"} fontSize="xs">
          {title}
        </NativeBaseText>
    </NativeBaseButton>
  );
}