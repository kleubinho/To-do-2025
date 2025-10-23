import React from "react";

interface ITextProps {
    as?: keyof React.JSX.IntrinsicElements; //mapeando os tipos de tags HTML e a keyoff diz que representará qualquer chave do objeto IntrinsicElements
    className?: string;
    children?: React.ReactNode;
}

export default function Text({ as = "span", className, children, ...props }: ITextProps) {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children
  );
}
