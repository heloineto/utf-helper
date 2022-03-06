type ReactNode = import('react').ReactNode;
type SVGProps<A> = import('react').SVGProps<A>;
type CSSProperties = import('react').CSSProperties;
type RefObject<A> = import('react').RefObject<A>;
type ComponentProps<A> = import('react').ComponentProps<A>;
type SetStateAction<A> = import('react').SetStateAction<A>;
type Dispatch<A> = import('react').Dispatch<A>;
type SetValue<A> = Dispatch<SetStateAction<A>>;

type NextPage = import('next').NextPage;

type FirebaseRef = import('firebase/firestore').DocumentReference<
  import('firebase/firestore').DocumentData
>;
type FieldValue = import('firebase/firestore').FieldValue;
type Timestamp = import('firebase/firestore').Timestamp;

type IconProps = import('phosphor-react').IconProps;
type PhosphorIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
