import { Text, Pressable, PressableProps } from "react-native"
import { clsx } from "clsx"

type CategoryProps = PressableProps & {
    title: string
    isSelectec?:boolean
}

export function CategoryButton({title, isSelectec, ...rest}: CategoryProps) {
    return (
        <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10", isSelectec && "border-2 border-orange-300")} {...rest}>
            <Text className="text-slate-100 font- subtitle text-sm">{title}</Text>
        </Pressable>
    )
}