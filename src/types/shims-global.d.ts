// dependencies
declare module "mockjs";
declare module "element-ui";

// images
declare module "*.jpg";
declare module "*.png";

// styles
declare module "*.scss" {
  const content: any;
  export default content;
}
