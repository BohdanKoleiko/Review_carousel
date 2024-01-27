import styles from "./Title.module.scss";

/**
 *
 * @param {object} props getting three parameters, Type, Children and ClassNames.
 * @Type is a first and defines type of heading. It`s h1 tag by default.
 * @Children is a second and defines title text.
 * @ClassNames is a third and defines css class names.
 *
 */
const Title = function (props) {
   const { type = "h1", children, classNames } = props;
   const HeadingType = type;

   return (
      <HeadingType className={`${styles.title} ${classNames ? classNames : ""}`}>
         {children}
      </HeadingType>
   );
};

export default Title;
