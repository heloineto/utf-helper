type ReactNode = import('react').ReactNode;
type SetStateAction<A> = import('react').SetStateAction<A>;
type Dispatch<A> = import('react').Dispatch<A>;
type SVGProps<A> = import('react').SVGProps<A>;
type CSSProperties = import('react').CSSProperties;
type RefObject<A> = import('react').RefObject<a>;
type ComponentProps<A> = import('react').ComponentProps<a>;
//! Check for where to import the proper definition of this type
type SetValue<A> = Dispatch<SetStateAction<A>>;

type NextPage = import('next').NextPage;
