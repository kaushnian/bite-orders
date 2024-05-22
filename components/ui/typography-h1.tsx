type TypographyH1Props = {
  children: React.ReactNode;
};

export function TypographyH1({ children }: TypographyH1Props) {
  return <h1 className="text-4xl mb-8 tracking-tight">{children}</h1>;
}
