/* React */
type ReactNode = import('react').ReactNode;
type SVGProps<A> = import('react').SVGProps<A>;
type CSSProperties = import('react').CSSProperties;
type RefObject<A> = import('react').RefObject<A>;
type ComponentProps<A> = import('react').ComponentProps<A>;
type SetStateAction<A> = import('react').SetStateAction<A>;
type Dispatch<A> = import('react').Dispatch<A>;
type SetState<A> = Dispatch<SetStateAction<A>>;

/* Nextjs */
type NextPage = import('next').NextPage;

/* Firebase */
type DocumentData = import('firebase/firestore').DocumentData;
type DocumentReference<A = DocumentData> =
  import('firebase/firestore').DocumentReference<A>;
type FieldValue = import('firebase/firestore').FieldValue;
type Timestamp = import('firebase/firestore').Timestamp;

/* PhosphorIcons */
type IconProps = import('phosphor-react').IconProps;
type PhosphorIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

/* Utility Types */
type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
