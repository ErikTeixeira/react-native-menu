// PressableProps  -- igual o TouchableOpacity, mas não tem o efeito de opacidade

import { Pressable, PressableProps, Text } from 'react-native';

//  USADO PARA SIMPLICAR O CODIGO DO HOVER
// clsx("bg-slate-800 px-4 justify-center rounded-md h-10", isSelected && "border-2 border-lime-300" )   -- se estiver selecionado vai ter aqueles estilos
import { clsx } from 'clsx';

// O type CategoryProps é igual a todas as propriedades do PressableProps, fazendo com que funcione o onPress e outros
type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

// ...rest  -- ao inves de pegar propriedade por propriedade do PressableProps coloca isso
export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10', isSelected && "border-2 border-lime-300")}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}