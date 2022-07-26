import { ReactNode } from 'react';
import { IconProps } from 'phosphor-react-native';
import { VStack, HStack, Text as NativeBaseText, useTheme, Box } from 'native-base';

type Props = {
    title: string;
    description?: string;
    footer?: string;
    icon: React.ElementType<IconProps>;
    children?: ReactNode;
}

export function CardDetails({
    title,
    description,
    footer = null,
    icon: Icon,
    children,
}: Props) {

    const { colors } = useTheme();

  return (
    <VStack bg="gray.600" p={5} mt={5} rounded="sm">
        <HStack alignItems="center" mb={4}>
            <Icon color={colors.primary[700]} />
            <NativeBaseText ml={2} color="gray.300" fontSize="sm" textTransform="uppercase">
                {title}
            </NativeBaseText>
        </HStack>
        {
            !!description &&
            <NativeBaseText color="gray.100" fontSize="md">
                {description}
            </NativeBaseText>
        }

        { children }

        {
            !!footer &&
            <Box borderTopWidth={1} borderTopColor="gray.400" mt={3}>
                <NativeBaseText mt={3} color="gray.300" fontSize="sm">
                    {footer}
                </NativeBaseText>
            </Box>
        }
    </VStack>
  );
}