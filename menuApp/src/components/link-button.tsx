import { Link, LinkProps } from "expo-router";

// LinkProps  -- tipagem do link no expo-router
// <string> tipagem do link, que vai ser usado como string
type LinkButtonProps = LinkProps<string> & {
    title: string;
}

export function LinkButton( {title, ...rest}: LinkButtonProps ) {
    return(
        <Link className="text-slate-300 text-center text-base font-body" {...rest} >
            {title}
        </Link>
    )
}