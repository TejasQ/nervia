import clsx from "clsx";

export const Button = (props) => {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "flex items-center p-2 px-8 font-bold rounded justify-center"
      )}
    />
  );
};
