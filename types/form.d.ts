declare module "form-parts" {
	export type StdButtonFunction<T> = ( arg:T) => void;
	export type StdFormFunction<T> = (e:React.ChangeEvent<HTMLInputElement>, arg?:T) => void;
	export type TextBoxProps<T> = {
        name:string,
        value:string,
        placeholder?:string,
        func: StdFormFunction<T>,
        arg?: T
    };

	export type ButtonProps<T> = {
        name: string,
        arg?:T,
        func:StdButtonFunction<T>
    };
}