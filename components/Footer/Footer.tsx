interface LinkProps {
  label: string;
  link: string;
}

function Link(props: LinkProps): JSX.Element {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="font-bold text-black hover:text-orange hover:underline active:text-orange active:underline"
    >
      {props.label}
    </a>
  );
}

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-row justify-center py-5 text-xs text-darkGrayishBlue">
      <p>
        Challenge by{" "}
        <Link
          label="Frontend Mentor"
          link="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
        />
        . Coded by{" "}
        <Link
          label="Phillip Lam"
          link="https://github.com/philliplam8/ecommerce-product-page-app-challenge"
        />
        .
      </p>
    </footer>
  );
}
